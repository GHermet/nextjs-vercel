import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>About Page</h1>
        <Link href='/'>
          <a className={styles.card}>Home</a>
        </Link>
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
