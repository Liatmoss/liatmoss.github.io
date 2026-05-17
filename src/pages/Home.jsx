import { Link } from 'react-router-dom'
import blogThumbnail from '../assets/blog-thumbnail.png'
import talksThumbnail from '../assets/talks-thumbnail.png'
import styles from './Home.module.css'

function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Liat Moss</h1>
          <p className={styles.subtitle}>Software engineer focused on practical AI tooling for engineering teams</p>
          <Link to="/about-me" className={styles.button}>About Liat</Link>
        </div>
      </section>

      <section className={styles.cards}>
        <Link to="/blogs" className={styles.card}>
          <img src={blogThumbnail} alt="Blog Posts" className={styles.cardImage} />
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>Blog Posts</h2>
          </div>
        </Link>
        <Link to="/talks" className={styles.card}>
          <img src={talksThumbnail} alt="Talks and Workshops" className={styles.cardImage} />
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>Talks and Workshops</h2>
          </div>
        </Link>
      </section>
    </main>
  )
}

export default Home
