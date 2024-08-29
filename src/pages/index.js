import './index.scss';
import * as React from 'react';
import kivImage from './kiv.png';
import selfImage from './self.png';
import winkImage from './wink.png';
import Layout from '@theme/Layout';
import heroImage from './code.png';
import Link from '@docusaurus/Link';
import inbentaImage from './inb.png';
import openizrImage from './openizr.png';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Benefit({ title, icon, description, cta }) {
  return (
    <div className='benefit'>
      <div className='inner'>
        {icon !== undefined && <i className={`ui-icon ui-icon--${icon}`}></i>}
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
          {(cta !== undefined) && (<Link
            // className="button button--primary button--lg"
            to="/docs/api/dev-kit/config">
            {cta}
          </Link>)}
        </div>
      </div>
      <div className="blob"></div>
      <div className="fakeblob"></div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  React.useEffect(() => {
    const all = document.querySelectorAll(".benefit");
    const handleMouseMove = (ev) => {
      all.forEach((e) => {
        const blob = e.querySelector(".blob");
        const fblob = e.querySelector(".fakeblob");
        const rec = fblob.getBoundingClientRect();
        blob.style.opacity = "1";

        blob.animate(
          [
            {
              transform: `translate(${(ev.clientX - rec.left) - (rec.width / 2)
                }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
            }
          ],
          {
            duration: 300,
            fill: "forwards"
          }
        );
      });
    };

    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const element = document.querySelector('.navbar');

        if (window.scrollY > 0) {
          element.style.backgroundColor = 'var(--ifm-color-gray-900)';
        } else {
          element.style.backgroundColor = '';
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <Layout
      title={`The Product-oriented Framework`}
      description={siteConfig.tagline}
    >
      <div className='grid vgap-6'>
        <header className='hero'>
          <div className='flex flex-col flex-auto vgap-3'>
            <h1>The Product-oriented Framework</h1>
            <h2>Prototype and build full-stack, production-ready web apps in minutes.</h2>
            <div className='grid s:flex flex hgap-3 justify-center'>
              <Link
                className="hero__button"
                to="/docs/learn/intro">
                Start building
              </Link>
              <Link
                className="hero__button"
                to="/docs/api/dev-kit/config">
                Documentation
              </Link>
            </div>
          </div>
          {/* <img src={heroImage} /> */}
        </header>
        <section className='references'>
          <h3>Trusted by top innovative teams</h3>
          <div className='w-full flex flex-wrap items-end justify-center hgap-5 vgap-4'>
            <img src={kivImage} />
            <img src={inbentaImage} />
            <img src={selfImage} />
            <img src={winkImage} />
            <img src={openizrImage} />
          </div>
        </section>
        <main className='benefits'>
          <Benefit
            title="Modular"
            icon="galaxy"
            description="Independent modules with an easy learning curve, allowing for progressive adoption and integration as per your project needs."
          />
          <Benefit
            title="TypeScript support"
            icon="earth"
            description="Out-of-box types definitions and documentation, to maximize your productivity."
          />
          <Benefit
            title="Framework-agnostic"
            icon="saturn"
            description="Pick your favorite frontend or backend framework, choose your database, and let Perseid handle the rest."
          />
          <Benefit
            title="Scalable"
            icon="rocket"
            description="Designed to promote best practices and consistency, so that your codebase keeps clean and maintainable as you grow."
          />
          <Benefit
            title="100% customizable"
            icon="satellite"
            description="No hacky stuff - override any component, service or method to match your exact specifications through inheritance."
          />
          <Benefit
            title="Discover all the features"
            description="Deep dive into the framework."
            cta="Read more"
          />
        </main>
      </div>
    </Layout>
  );
}
