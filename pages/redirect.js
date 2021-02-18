import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redirect Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Redirected Page</h1>
        <div className={styles.grid}>
          <a href='/' className={styles.card}>
            Back to homepage
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
