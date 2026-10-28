export default function Page() {
  return (
<div className="shell">
    <header><a className="brand" href="/" aria-label="Next.js starter home">Next<span>.js</span></a><div className="host">Hosted on <strong>Openstead</strong></div></header>
    <main>
      <p className="eyebrow">Next.js starter</p>
      <h1>Your next idea<br />starts here.</h1>
      <p className="intro">A fresh canvas for your next web application. Build with React, server rendering and the Next.js App Router.</p>
      <div className="actions"><a className="button primary" href="https://nextjs.org/docs">Read the documentation &rarr;</a><a className="button" href="/health">Check service health</a></div>
      <section className="steps" aria-label="Get started">
        <article className="card"><span className="number">01 / MAKE IT YOURS</span><h2>Edit your first page</h2><p>Open <code>app/page.js</code> and replace this page with your own.</p></article>
        <article className="card"><span className="number">02 / BUILD SOMETHING</span><h2>Add your next route</h2><p>Create pages in <code>app/</code> or try the example <a href="/api/time">API route &rarr;</a>.</p></article>
        <article className="card"><span className="number">03 / SHIP YOUR WORK</span><h2>Deploy your changes</h2><p>Push to your connected repository, or upload your updated source archive in Openstead.</p></article>
      </section>
    </main>
    <footer><span>Built with Next.js. Ready for your ideas.</span><nav aria-label="Resources"><a href="https://nextjs.org/docs">Next.js docs</a><a href="https://docs.openstead.tech">Deployment guide ↗</a></nav></footer>
  </div>
  );
}
