import Image from 'next/image'; 
import gif from '../public/images/not-found.gif';
import Layout from '../components/layout'

export default function Custom404() {
  return(
    <Layout>
      <div className="container">
        <Image src={gif} alt="404 - Page Not Found" />
        <h1>Oopsie!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Don't worry! I've got you. <a href="/">Home again</a>.</p>
        <style jsx>
          {`
            .container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
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


