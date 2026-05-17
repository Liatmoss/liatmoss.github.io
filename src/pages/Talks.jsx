import { Link } from 'react-router-dom'
import styles from './Talks.module.css'

import imgMemory from '../assets/talks-memory-context.png'

const talks = [
  {
    title: 'Memory and Context Windows When Using AI Tools',
    type: 'Slides',
    event: null,
    thumbnail: imgMemory,
    url: 'https://liatmoss.github.io/memory-presentation/',
    external: true,
  },
  {
    title: 'Learning to Code with STEAM Education Tools',
    type: 'Recorded',
    event: 'TECH(K)NOW DAY 2022',
    thumbnail: 'https://img.youtube.com/vi/_LbhC2kEMZM/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=_LbhC2kEMZM',
    external: true,
  },
  {
    title: 'From Educator to Engineer',
    type: 'Recorded',
    event: 'TECH(K)NOW DAY 2021',
    thumbnail: 'https://img.youtube.com/vi/pkOZYDUYmXg/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=pkOZYDUYmXg',
    external: true,
  },
]

function Talks() {
  return (
    <main>
      <header className={styles.nav}>
        <Link to="/" className={styles.backButton}>← Home</Link>
        <h1 className={styles.pageTitle}>Talks and Workshops</h1>
        <span />
      </header>

      <section className={styles.content}>
        <div className={styles.grid}>
          {talks.map((talk) => (
            <a
              key={talk.url}
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={talk.thumbnail} alt={talk.title} className={styles.cardImage} />
                <span className={`${styles.badge} ${styles[`badge${talk.type}`]}`}>
                  {talk.type}
                </span>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{talk.title}</h2>
                {talk.event && <p className={styles.cardEvent}>{talk.event}</p>}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Talks
