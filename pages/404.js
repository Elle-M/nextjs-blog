import Image from 'next/image'; 
import gif from '../public/images/not-found.gif';
import Layout from '../components/layout'

export default function Custom404() {
  return(
    <Layout>
      <Image src={gif} alt="404 - Page Not Found" />
      <h1>404 - Page Not Found</h1>
      <style jsx>{`
        h1 {
          visibility: hidden;
        }
      `}</style>
    </Layout>
  );
}
