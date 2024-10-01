import './examples.scss';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Examples() {
  return (
    <Layout
      title={`Browse Apps and Features Examples`}
      description={'Browse a rich collection of examples of apps and features built with Perseid, the Product-oriented JavaScript Framework.'}
    >
      <div id="__docusaurus_skipToContent_fallback" className="main-wrapper mainWrapper_node_modules-@docusaurus-theme-classic-lib-theme-Layout-styles-module">
        <main className="container container--fluid margin-vert--lg">
          <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
            <div className="col col--8">
              <article className='grid vgap-4'>
                <h1>Explore the Possibilities of Perseid</h1>
                <p>Dive into a large collection of real-world applications examples <strong>built with Perseid</strong>. See dynamic forms like <strong>profile updates</strong>, <strong>chatbots</strong>, <strong>booking systems</strong>, and <strong>feedback forms</strong>. Discover advanced <strong>state management</strong> features, including <strong>front-end routing</strong>, app state sharing, and <strong>real-time updates</strong>. Learn how Perseid enhances <strong>styling and layouts</strong>, from <strong>responsive grids and galleries</strong> to <strong>complete web apps designs</strong>. Perfect for developers looking to <strong>build efficient, scalable web applications</strong>, these examples showcase how Perseid streamlines development while delivering <strong>high-performance, user-friendly solutions</strong>.</p>
                <p>All these examples are also available on <a href="https://github.com/openizr/perseid/tree/main/examples" alt="GitHub" target="_blank">GitHub</a>.</p>
                <div className='grid vgap-3'>
                  {[
                    {
                      title: 'React Feedback Form',
                      url: '/examples/react-feedback-form',
                      description: 'This example demonstrates how to create a simple user feedback form using React and Perseid.'
                    },
                    {
                      title: 'Svelte Feedback Form',
                      url: '/examples/svelte-feedback-form',
                      description: 'This example demonstrates how to create a simple user feedback form using Svelte and Perseid.'
                    },
                  ].map((example, index) => (
                    <div className='example' key={index}>
                      <Link to={example.url}>
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
    </Layout>
  );
}


