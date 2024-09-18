import './examples.scss';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Examples() {
  return (
    <Layout
      title={`Browse Apps and Features Examples`}
      description={'Browse a rich collection of examples of apps and features built with Perseid, the Product-oriented JavaScript Framework.'}
    >
      <div id="__docusaurus_skipToContent_fallback" class="main-wrapper mainWrapper_node_modules-@docusaurus-theme-classic-lib-theme-Layout-styles-module">
        <main class="container container--fluid margin-vert--lg">
          <div class="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
            <div class="col col--8">
              <article className='grid vgap-4'>
                <h1>Explore the Possibilities of Perseid</h1>
                <p>Dive into a large collection of real-world applications examples <strong>built with Perseid</strong>. See dynamic forms like <strong>profile updates</strong>, <strong>chatbots</strong>, <strong>booking systems</strong>, and <strong>feedback forms</strong>. Discover advanced <strong>state management</strong> features, including <strong>front-end routing</strong>, app state sharing, and <strong>real-time updates</strong>. Learn how Perseid enhances <strong>styling and layouts</strong>, from <strong>responsive grids and galleries</strong> to <strong>complete web apps designs</strong>. Perfect for developers looking to <strong>build efficient, scalable web applications</strong>, these examples showcase how Perseid streamlines development while delivering <strong>high-performance, user-friendly solutions</strong>.</p>
                <p>All these examples are also available on <a href="https://github.com/openizr/perseid/tree/main/examples" alt="GitHub" target="_blank">GitHub</a>.</p>
                <div className='grid vgap-3'>
                  {[{
                    title: 'React Feedback Form',
                    description: 'This example demonstrates how to create a simple user feedback form using React and Perseid.'
                  }].map((example) => (
                    <div className='example'>
                      <Link to="/examples/react-feedback-form">
                        <h2>{example.title}</h2>
                        <p>{example.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>

      {/* <div className='grid vgap-6'>
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
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20 H80 V80 H20 V20" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className="loader__path" vectorEffect="non-scaling-stroke" />
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
      </div> */}
    </Layout>
  );
}


