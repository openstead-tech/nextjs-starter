export const dynamic = "force-dynamic";

export default function RequestPage() {
  return <div className="shell"><main><p className="eyebrow">Server rendering</p><h1>A fresh response.</h1><p className="intro">Rendered at {new Date().toISOString()}</p><div className="actions"><a className="button" href="/">Back to the starter</a></div></main></div>;
}
