#!/usr/bin/env bash
# download-thumbnail.sh
#
# Downloads the experience thumbnail to /tmp/experience-thumbnail.png for use
# by the Copilot coding agent.
#
# Preference order:
#   1. Use the committed local asset (assets/experience-thumbnail.png) — always
#      available even when the runner firewall blocks GitHub S3 user-asset hosts
#      (github-production-user-asset-*.s3.amazonaws.com).
#   2. If an ASSET_URL is supplied and the local file is absent, attempt to
#      download it with curl (3 retries, exponential backoff).
#   3. If the download fails or produces an empty file, fall back to the
#      committed placeholder (assets/placeholder-experience-thumbnail.png).
#
# NOTE: This script intentionally does NOT run under set -e.  Network failures
# are handled by explicit conditionals so the Copilot agent job continues even
# when S3 downloads are blocked by enterprise firewalls.
#
# Usage:
#   ASSET_URL="https://..." ./scripts/download-thumbnail.sh
#   # or without ASSET_URL to just copy the committed asset
#   ./scripts/download-thumbnail.sh

DEST="/tmp/experience-thumbnail.png"

# Resolve script location so paths work regardless of working directory.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

LOCAL_ASSET="${REPO_ROOT}/assets/experience-thumbnail.png"
PLACEHOLDER="${REPO_ROOT}/assets/placeholder-experience-thumbnail.png"

# ── 1. Prefer committed local asset ──────────────────────────────────────────
if [ -f "${LOCAL_ASSET}" ] && [ -s "${LOCAL_ASSET}" ]; then
    cp "${LOCAL_ASSET}" "${DEST}"
    echo "[download-thumbnail] Using committed local asset: ${LOCAL_ASSET}"
    exit 0
fi

# ── 2. Attempt download when ASSET_URL is provided ───────────────────────────
if [ -n "${ASSET_URL:-}" ]; then
    echo "[download-thumbnail] Local asset not found; attempting download from: ${ASSET_URL}"
    max_attempts=3
    attempt=1
    download_ok=0
    while [ "${attempt}" -le "${max_attempts}" ]; do
        echo "[download-thumbnail] Download attempt ${attempt}/${max_attempts}..."
        if curl -L --fail --silent --show-error \
                --max-time 30 \
                --retry 0 \
                "${ASSET_URL}" \
                -o "${DEST}" 2>&1; then
            if [ -s "${DEST}" ]; then
                echo "[download-thumbnail] Downloaded successfully."
                download_ok=1
                break
            else
                echo "[download-thumbnail] Downloaded file is empty on attempt ${attempt}."
            fi
        else
            echo "[download-thumbnail] curl failed on attempt ${attempt}."
        fi
        attempt=$((attempt + 1))
        sleep $((2 ** attempt))
    done

    if [ "${download_ok}" -eq 1 ]; then
        exit 0
    fi
    echo "[download-thumbnail] All download attempts failed."
else
    echo "[download-thumbnail] No ASSET_URL provided and no local asset found."
fi

# ── 3. Fall back to placeholder ───────────────────────────────────────────────
if [ -f "${PLACEHOLDER}" ] && [ -s "${PLACEHOLDER}" ]; then
    cp "${PLACEHOLDER}" "${DEST}"
    echo "[download-thumbnail] Using placeholder fallback: ${PLACEHOLDER}"
    exit 0
fi

# Last resort: create a minimal valid 1×1 PNG so downstream steps never see an
# empty file, avoiding JSON-parse or image-processing errors.
echo "[download-thumbnail] Placeholder not found; writing built-in 1x1 PNG."
printf '\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x02\x00\x00\x00\x90wS\xde\x00\x00\x00\x0cIDATx\x9cc\xf8\xcf\xc0\x00\x00\x00\x02\x00\x01\xe2!\xbc3\x00\x00\x00\x00IEND\xaeB`\x82' > "${DEST}"
echo "[download-thumbnail] Minimal PNG written to ${DEST}."
exit 0
