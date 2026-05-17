import { Link } from 'react-router-dom'
import styles from './Blogs.module.css'

import imgMemory from '../assets/blog/post-6-memory-context.png'
import imgJunior from '../assets/blog/post-5-junior-engineers.png'
import imgDrivers from '../assets/blog/post-4-drivers-seat.png'
import imgAiGuide from '../assets/blog/post-3-ai-tools-guide.png'
import imgAgent from '../assets/blog/post-2-custom-agent.png'
import imgCopilot from '../assets/blog/post-1-copilot.png'

const posts = [
  {
    title: 'Memory and Context Windows: Best Practices for AI Tools',
    excerpt: 'A practical breakdown of how AI tools use memory and context windows, and how to work with them to get consistently better results.',
    image: imgMemory,
    url: 'https://dev.to/liatmoss/memory-and-context-windows-best-practices-for-ai-tools-18ng',
  },
  {
    title: 'Why Your Junior Engineers Are Not Going Anywhere',
    excerpt: "AI tools are powerful, but they don't replace the curiosity, growth mindset, and fresh perspective that junior engineers bring to a team.",
    image: imgJunior,
    url: 'https://dev.to/liatmoss/why-your-junior-engineers-are-not-going-anywhere-34fp',
  },
  {
    title: "Keeping You in the Driver's Seat and AI as the Copilot",
    excerpt: "How to stay in control when using AI coding tools — keeping AI as a collaborator that amplifies your decisions, not one that makes them for you.",
    image: imgDrivers,
    url: 'https://dev.to/liatmoss/keeping-you-in-the-drivers-seat-and-ai-as-the-copilot-1oc8',
  },
  {
    title: 'A Practical Guide to Getting Comfortable with AI Coding Tools',
    excerpt: 'Getting started with AI coding tools can feel overwhelming. A step-by-step guide to building confidence without the hype.',
    image: imgAiGuide,
    url: 'https://dev.to/liatmoss/a-practical-guide-to-getting-comfortable-with-ai-coding-tools-1noo',
  },
  {
    title: 'Custom Agent or Built-In AI? A Practical Checklist for Making the Right Choice',
    excerpt: "Not sure whether to build a custom AI agent or use what's already built in? A no-nonsense checklist to help you make the right call.",
    image: imgAgent,
    url: 'https://dev.to/liatmoss/custom-agent-or-built-in-ai-a-practical-checklist-for-making-the-right-choice-563f',
  },
  {
    title: 'From Unknown to Understood: Navigating Codebases with GitHub Copilot',
    excerpt: "Walking into an unfamiliar codebase is daunting. Here's how GitHub Copilot can help you orient yourself and start making sense of code you've never seen before.",
    image: imgCopilot,
    url: 'https://dev.to/liatmoss/from-unknown-to-understood-navigating-codebases-with-github-copilot-21dc',
  },
]

function Blogs() {
  return (
    <main>
      <header className={styles.nav}>
        <Link to="/" className={styles.backButton}>← Home</Link>
        <h1 className={styles.pageTitle}>Blog Posts</h1>
        <span />
      </header>

      <section className={styles.content}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src={post.image} alt={post.title} className={styles.cardImage} />
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read more →</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Blogs
