import { Link } from 'react-router-dom'
import styles from './AboutMe.module.css'

function AboutMe() {
  return (
    <main>
      <header className={styles.hero}>
        <Link to="/" className={styles.backButton}>
          ← Home
        </Link>
      </header>

      <section className={styles.content}>
        <div className={styles.textBox}>
          <h1 className={styles.title}>Liat Moss</h1>
          <p className={styles.subtitle}>
            Backend Engineer @ Prospa | C# and .NET coder | Develops with AI | Fuelled by coffee
          </p>
          <div className={styles.divider} />
          <div className={styles.bio}>
            <p>Liat Moss is a backend developer who writes code with C#/.NET and Azure, building APIs and systems designed to scale and last. She likes using AI tooling to learn new things and shares that knowledge with the engineering community.</p>
            <p>She moved into software engineering in 2020 from a background in education and still enjoys using the skills from teaching to help educate others on what she's working on.</p>
            <p>Outside of work, she enjoys getting hands on with technology which includes experimenting with microcontrollers and building LED wearables that respond to the environment.</p>
            <p>
              <a href="mailto:liatmoss@hotmail.com" className={styles.contact}>
                Contact me at liatmoss@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutMe
