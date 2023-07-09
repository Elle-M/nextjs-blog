import Image from 'next/image'; 
import gif from '../public/images/not-found.gif';
import Layout from '../components/layout';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  const goBack = (e) => {
    e.preventDefault();
    router.back();
  }
  return(
    <Layout>
      <div className="container">
        <Image 
          src={gif} 
          alt="404 - Page Not Found"   
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <h1>Oopsie!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Don't worry! I've got you. <a href="/">Home</a> or <a href="#" onClick={goBack}>Back</a>?</p>
        <style jsx>
          {`
            .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            h1 {
              font-size: 3rem;
              color: #333;
              text-align: center;
            }
            p {
              font-size: 1.5rem;
              color: #333;
              text-align: center;
            }
        `}
        </style>
      </div>
    </Layout>
  )
}


