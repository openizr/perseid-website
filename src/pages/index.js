import './index.scss';
import * as React from 'react';
import kivImage from './kiv.webp';
import selfImage from './self.webp';
import winkImage from './wink.webp';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import inbentaImage from './inb.webp';
import openizrImage from './openizr.webp';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Benefit({ title, icon, description, cta }) {
  return (
    <section className='benefit'>
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
    </section>
  );
}


function What() {
  const ref = React.useRef();
  React.useEffect(() => {
    let initialSectionsScroll = [null, null, null];
    const sectionHeight = document.querySelector('.what__section:nth-child(6)').getBoundingClientRect().height;
    const domElements = [
      document.querySelector('.what__section:nth-child(4)'),
      document.querySelector('.what__section:nth-child(6)'),
      document.querySelector('.what__section:nth-child(7)')
    ]
    const handleScroll = () => {
      let domElement = ref.current;
      const currentPercentage = Math.max(0, Math.min(1, (window.scrollY - ref.current.offsetTop + 200) / ref.current.offsetHeight)) * 100;
      if (currentPercentage > 0) {
        initialSectionsScroll[0] ??= window.scrollY + 200;
        document.querySelector('.what__section:nth-child(4)').classList.add('what__section--visible');
      } else {
        initialSectionsScroll[0] = null;
        document.querySelector('.what__section:nth-child(4)').classList.remove('what__section--visible');
      }
      if (currentPercentage > 10) {
        document.querySelector('.what__section--label').classList.add('what__section--visible');
      } else {
        document.querySelector('.what__section--label').classList.remove('what__section--visible');
      }
      if (currentPercentage > 17.75) {
        initialSectionsScroll[1] ??= window.scrollY + 300;
        document.querySelector('.what__section:nth-child(6)').classList.add('what__section--visible');
      } else {
        initialSectionsScroll[1] = null;
        document.querySelector('.what__section:nth-child(6)').classList.remove('what__section--visible');
      }
      if (currentPercentage > 43.4) {
        initialSectionsScroll[2] ??= window.scrollY + 300;
        document.querySelector('.what__section:nth-child(7)').classList.add('what__section--visible');
      } else {
        initialSectionsScroll[2] = null;
        document.querySelector('.what__section:nth-child(7)').classList.remove('what__section--visible');
      }
      if (currentPercentage > 71.3) {
        document.querySelector('.what__section:nth-child(8)').classList.add('what__section--visible');
      } else {
        document.querySelector('.what__section:nth-child(8)').classList.remove('what__section--visible');
      }
      window.requestAnimationFrame(() => {
        const currentSectionsPercentage = [
          Math.max(0, Math.min(1, (window.scrollY - (initialSectionsScroll[0] ?? window.scrollY)) / sectionHeight / 5)) * 100,
          Math.max(0, Math.min(1, (window.scrollY - (initialSectionsScroll[1] ?? window.scrollY)) / sectionHeight) / 2) * 100,
          Math.max(0, Math.min(1, (window.scrollY - (initialSectionsScroll[2] ?? window.scrollY)) / sectionHeight / 3)) * 100,
        ];
        domElements.forEach((domElement, index) => {
          domElement.setAttribute('style', `--percentage:${currentSectionsPercentage[index]};`);
        });
      })
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className='what' ref={ref}>
      <div />

      <div>
        <p className='subtitle'>What is Perseid?</p>
        <h3>Perseid JavaScript framework is a new way to build web applications, with a focus on features deliverability, scalability, and best practices. Far from being just another tech stack, it allows developers to ship faster than ever before, while keeping technical debt under control.</h3>
      </div>

      <svg className="svg-def" style={{ display: 'none' }}>
        <defs>
          <filter id="strokeGlow">
            <feOffset in="StrokePaint" result="centeredOffset"></feOffset>
            <feGaussianBlur in="centeredOffset" stdDeviation="2" result="blur1"></feGaussianBlur>
            <feGaussianBlur in="centeredOffset" stdDeviation="5" result="blur2"></feGaussianBlur>
            <feGaussianBlur in="centeredOffset" stdDeviation="7" result="blur3"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur1"></feMergeNode>
              <feMergeNode in="blur2"></feMergeNode>
              <feMergeNode in="blur3"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className='what__section'>
        <div className='what__section__sticky'>
          <div className='grid vgap-4'>
            <p className='what__label'>From any <strong>data model</strong></p>
            <div className='what__section__block what__section__block--data-model'>
              <code className='block text-left'>
                planet {'{'}<br />
                <span>name<br /></span>
                <span>size<br /></span>
                <span>composition<br /></span>
                {'}'}
              </code>
            </div>
          </div>
          <div className='what__section__path'>
            <svg viewBox="0 0 270 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M220 0 V200 H160 V400" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className='path' vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>


      <p className='what__section what__section--label' style={{}}>Perseid <strong>generates</strong></p>


      <div className='what__section'>
        <div className='what__section__sticky'>
          <div className='what__section__block'>
            <div className='flex flex-wrap items-center justify-center hgap-2 vgap-2'>
              <p className='justify-center w-full'>Database structure</p>
              <svg width="98" height="105" viewBox="0 0 98 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_3_40)">
                  <path d="M82.75 26.1667C82.75 32.3338 67.7515 37.3333 49.25 37.3333C30.7485 37.3333 15.75 32.3338 15.75 26.1667M82.75 26.1667C82.75 19.9995 67.7515 15 49.25 15C30.7485 15 15.75 19.9995 15.75 26.1667M82.75 26.1667V78.2778C82.75 84.4567 67.8611 89.4445 49.25 89.4445C30.6389 89.4445 15.75 84.4567 15.75 78.2778V26.1667M82.75 52.2222C82.75 58.4011 67.8611 63.3889 49.25 63.3889C30.6389 63.3889 15.75 58.4011 15.75 52.2222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges" />
                </g>
                <defs>
                  <filter id="filter0_d_3_40" x="0.75" y="0" width="97" height="104.444" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.886275 0 0 0 0 0.0705882 0 0 0 0 0.654902 0 0 0 0.33 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_40" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_40" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className='what__section__path'>
            <svg viewBox="0 0 270 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0 V200 H140 V120 H250 V400" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className='path' vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>


      <div className='what__section'>
        <div className='what__section__sticky'>
          <div className='what__section__block what__section__block--api'>
            <div className='flex flex-row-rev flex-wrap items-center justify-center hgap-2 vgap-3'>
              <p className='justify-center w-full'>REST API</p>
              <div className='text-left'>
                <code>
                  GET /planets<br />
                  GET /planets/:id<br />
                  POST /planets
                </code>
              </div>
            </div>
          </div>
          <div className='what__section__path'>
            <svg viewBox="0 0 270 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0 V50 H20 V120 H200 V400" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className='path' vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>

      <div className='what__section'>
        <div className='what__section__sticky'>
          <div className='what__section__block'>
            <div className='flex flex-wrap items-center justify-center hgap-2 vgap-2'>
              <p className='justify-center w-full'>Complete UI</p>
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.7036 24.006H27.8147M41.7036 35.1171H27.8147M41.7036 12.8949H27.8147M18.0924 1.78381L18.0924 51.7838M14.7591 1.78381H38.0924C42.7596 1.78381 45.0931 1.78381 46.8757 2.69209C48.4437 3.49104 49.7186 4.76588 50.5175 6.33389C51.4258 8.11649 51.4258 10.45 51.4258 15.1171V38.4505C51.4258 43.1176 51.4258 45.4511 50.5175 47.2337C49.7186 48.8018 48.4437 50.0766 46.8757 50.8755C45.0931 51.7838 42.7596 51.7838 38.0924 51.7838H14.7591C10.092 51.7838 7.75846 51.7838 5.97586 50.8755C4.40784 50.0766 3.133 48.8018 2.33406 47.2337C1.42578 45.4511 1.42578 43.1176 1.42578 38.4505V15.1171C1.42578 10.45 1.42578 8.11649 2.33406 6.33389C3.133 4.76588 4.40784 3.49104 5.97586 2.69209C7.75846 1.78381 10.092 1.78381 14.7591 1.78381Z" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function What2() {
  const ref = React.useRef();
  React.useEffect(() => {
    const element = document.querySelector('.what2');
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        element.classList.add('what2--visible');
      }
    }, { threshold: [.75] });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className='what2' ref={ref}>
      <div>
        <p className='subtitle'>What is Perseid?</p>
        <h3>Perseid JavaScript framework is a new way to build web applications, with a focus on features deliverability, scalability, and best practices. Far from being just another tech stack, it allows developers to ship faster than ever before, while keeping technical debt under control.</h3>
      </div>

      <svg className="svg-def" style={{ display: 'none' }}>
        <defs>
          <filter id="strokeGlow">
            <feOffset in="StrokePaint" result="centeredOffset"></feOffset>
            <feGaussianBlur in="centeredOffset" stdDeviation="2" result="blur1"></feGaussianBlur>
            <feGaussianBlur in="centeredOffset" stdDeviation="5" result="blur2"></feGaussianBlur>
            <feGaussianBlur in="centeredOffset" stdDeviation="7" result="blur3"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur1"></feMergeNode>
              <feMergeNode in="blur2"></feMergeNode>
              <feMergeNode in="blur3"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
      </svg>


      <div className='grid'>
        <div className='grid cols-2'>
          <p className='what2__label'>From any <strong>data model</strong></p>
          <p className='what2__label' style={{}}>Perseid <strong>generates</strong></p>
        </div>
        <div className='flex items-center'>
          <div className='what2__section what2__section--data-model' style={{ width: 'fit-content' }}>
            <div className='what2__section__block what2__section__block--data-model'>
              <code className='block text-left'>
                planet {'{'}<br />
                <span>name<br /></span>
                <span>size<br /></span>
                <span>composition<br /></span>
                {'}'}
              </code>
            </div>
          </div>
          <div className='grid flex-auto vgap-3'>
            <div className='what2__section'>
              <div className='what2__section__path'>
                <svg viewBox="0 0 250 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 180 H125 V100 H250" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className='path' vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className='what2__section__block'>
                <div className='grid items-center justify-center hgap-2 vgap-2'>
                  <p className='justify-center'>Database structure</p>
                  <svg width="98" height="105" viewBox="0 0 98 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3_40)">
                      <path d="M82.75 26.1667C82.75 32.3338 67.7515 37.3333 49.25 37.3333C30.7485 37.3333 15.75 32.3338 15.75 26.1667M82.75 26.1667C82.75 19.9995 67.7515 15 49.25 15C30.7485 15 15.75 19.9995 15.75 26.1667M82.75 26.1667V78.2778C82.75 84.4567 67.8611 89.4445 49.25 89.4445C30.6389 89.4445 15.75 84.4567 15.75 78.2778V26.1667M82.75 52.2222C82.75 58.4011 67.8611 63.3889 49.25 63.3889C30.6389 63.3889 15.75 58.4011 15.75 52.2222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges" />
                    </g>
                    <defs>
                      <filter id="filter0_d_3_40" x="0.75" y="0" width="97" height="104.444" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="7" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.886275 0 0 0 0 0.0705882 0 0 0 0 0.654902 0 0 0 0.33 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_40" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_40" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className='what2__section'>
              <div className='what2__section__path'>
                <svg viewBox="0 0 250 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 100 H250 V110 V90" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className='path' vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className='what2__section__block what2__section__block--api'>
                <div className='flex flex-row-rev flex-wrap items-center justify-center hgap-2 vgap-3'>
                  <p className='justify-center w-full'>REST API</p>
                  <div className='text-left'>
                    <code>
                      GET /planets<br />
                      GET /planets/:id<br />
                      POST /planets
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className='what2__section'>
              <div className='what2__section__path'>
                <svg viewBox="0 0 250 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20 H125 V80 H250" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className='path' vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className='what2__section__block'>
                <div className='flex flex-wrap items-center justify-center hgap-2 vgap-3'>
                  <p className='justify-center w-full'>Complete UI</p>
                  <svg width="80" height="80" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.7036 24.006H27.8147M41.7036 35.1171H27.8147M41.7036 12.8949H27.8147M18.0924 1.78381L18.0924 51.7838M14.7591 1.78381H38.0924C42.7596 1.78381 45.0931 1.78381 46.8757 2.69209C48.4437 3.49104 49.7186 4.76588 50.5175 6.33389C51.4258 8.11649 51.4258 10.45 51.4258 15.1171V38.4505C51.4258 43.1176 51.4258 45.4511 50.5175 47.2337C49.7186 48.8018 48.4437 50.0766 46.8757 50.8755C45.0931 51.7838 42.7596 51.7838 38.0924 51.7838H14.7591C10.092 51.7838 7.75846 51.7838 5.97586 50.8755C4.40784 50.0766 3.133 48.8018 2.33406 47.2337C1.42578 45.4511 1.42578 43.1176 1.42578 38.4505V15.1171C1.42578 10.45 1.42578 8.11649 2.33406 6.33389C3.133 4.76588 4.40784 3.49104 5.97586 2.69209C7.75846 1.78381 10.092 1.78381 14.7591 1.78381Z" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
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
      <svg className="svg-def" style={{ display: 'none' }}>
        <defs>
          <filter id="strokeGlow">
            <feOffset in="StrokePaint" result="centeredOffset"></feOffset>
            <feGaussianBlur in="centeredOffset" stdDeviation="2" result="blur1"></feGaussianBlur>
            <feGaussianBlur in="centeredOffset" stdDeviation="5" result="blur2"></feGaussianBlur>
            <feGaussianBlur in="centeredOffset" stdDeviation="7" result="blur3"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur1"></feMergeNode>
              <feMergeNode in="blur2"></feMergeNode>
              <feMergeNode in="blur3"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className='grid vgap-6'>
        <header className='hero'>
          <div className='flex hgap-4 w-full flex-wrap vgap-5 l:flex-nowrap'>
            <div className='flex flex-col flex-auto vgap-3 text-center l:text-left'>
              <h1>The Product-oriented Framework</h1>
              <h2>Prototype and build full-stack, production-ready web apps in minutes.</h2>
              <div className='grid s:flex flex hgap-3 justify-center l:justify-start'>
                <Link
                  className="hero__button"
                  to="/docs/learn/intro">
                  Getting started
                </Link>
                <Link
                  className="hero__button"
                  to="/blog/introducing-perseid-the-product-oriented-javascript-framework">
                  Why Perseid?
                </Link>
              </div>
            </div>
            <div className='hero__form flex-auto'>
              <div className="loader">
                <svg className="svg-def" style={{ display: 'none' }}>
                  <defs>
                    <filter id="strokeGlow">
                      <feOffset in="StrokePaint" result="centeredOffset" />
                      <feGaussianBlur in="centeredOffset" stdDeviation="2" result="blur1" />
                      <feGaussianBlur in="centeredOffset" stdDeviation="5" result="blur2" />
                      <feGaussianBlur in="centeredOffset" stdDeviation="7" result="blur3" />
                      <feMerge>
                        <feMergeNode in="blur1" />
                        <feMergeNode in="blur2" />
                        <feMergeNode in="blur3" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20 H80 V80 H20 V20" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className="loader_path" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </div>
          </div>
        </header>
        <section className='references'>
          <h3>Trusted by top innovative teams</h3>
          <div className='w-full flex flex-wrap items-end justify-center hgap-5 vgap-4'>
            <img width="192" height="40" alt="Kiv Broker" src={kivImage} />
            <img width="192" height="40" alt="Inbenta" src={inbentaImage} />
            <img width="192" height="40" alt="Selfcity" src={selfImage} />
            <img width="192" height="40" alt="Wink" src={winkImage} />
            <img width="192" height="40" alt="Openizr" src={openizrImage} />
          </div>
        </section>
        <What />
        <What2 />
        <main className='benefits'>
          <div>
            <p className='subtitle'>Elegant & Powerful</p>
            <h3>Built leveraging 10 years of development of complex, large-scale web applications, Perseid integrates the fundamental bricks for creating great products with developer experience in mind. Whether you need to develop a backend or a user interface, Perseid turns you and your team into 100x developers.</h3>
          </div>
          <div className='flex flex-wrap hgap-4 vgap-4 m:grid m:cols-2'>
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
              cta="Documentation"
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
