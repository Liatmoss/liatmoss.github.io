# liatmoss.github.io

Personal website built with React 19 + Vite 8.

## Node.js

System node is v14 (too old for Vite 8). Use nvm's Node 20 by prefixing commands:

```
PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
```

Sourcing nvm directly (`source ~/.nvm/nvm.sh`) fails due to a `prefix` setting in `~/.npmrc`.

## Commands

```bash
# Dev server
PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH" npm run dev

# Production build
PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH" npm run build

# Install dependencies
PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH" npm install
```
