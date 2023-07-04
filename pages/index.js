import Head from 'next/head';
import Layout, { siteHeader, siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <h2>Software Engineer (she/her) </h2>
        <p>Hi, I'm <strong>Elle Majors.</strong></p>
        <p>I am a software engineer with a passion for creating solutions that make a difference. I am currently seeking a full-time role where I can leverage my skills to build products that improve people’s lives. You can contact me on <a href="https://www.linkedin.com/in/ellemajors/">LinkedIn.</a></p>
      </section>
      <section>
      <h1 className="title">
        Read <Link href="/posts/about-me">about my story.</Link>
      </h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}