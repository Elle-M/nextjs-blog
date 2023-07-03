import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>Software Engineer | Web Developer</p>
        <p>As a software developer with a unique background, I bring a diverse set of skills to the table. With a foundation in art and creative education, I am able to visualize end products and reverse engineer solutions. My experience as a serial entrepreneur has honed my ability to think outside the box, and my public-speaking background has developed my communication skills to clearly convey complex ideas to diverse audiences.</p>
        <p>My journey to software development began with a successful career as a founder, which included two exits and industry experience in various roles. I then went on to develop a software-based business model, COSALON. To further my expertise, I enrolled in the Turing School of Software and Design for Back-End Development, where I gained hands-on experience in programming.</p>
        <p>Beyond work, I prioritize spending time with my family and volunteering, as well as advocating for under served communities. I also enjoy reading and spending time in nature.</p>
      </section>
    </Layout>
  );
}