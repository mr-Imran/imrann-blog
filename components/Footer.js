import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
        <h1>Mohammad Nizam Uddin Imran</h1>
      </footer>
    </>
  )
}
