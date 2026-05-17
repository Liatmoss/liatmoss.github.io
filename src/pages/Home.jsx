import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Liat Moss</h1>
          <p className={styles.subtitle}>Backend Engineer | C# .NET &amp; Azure | Exploring AI</p>
          <Link to="/about-me" className={styles.button}>About Liat</Link>
        </div>
      </section>
    </main>
  )
}

export default Home
