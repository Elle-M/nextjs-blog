import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import profilePic from '../public/images/profile.jpg';

const name = 'Elle Majors';
export const siteTitle = 'Elle Majors';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Elle Majors' personal website"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src= {profilePic}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="Elle Majors' profile picture"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src= {profilePic}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="Elle Majors' profile picture"
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}