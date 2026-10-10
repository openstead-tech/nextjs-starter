export const dynamic = "force-dynamic";

export default function RequestPage() {
  return <main><h1>Server rendering is ready</h1><p>Rendered at {new Date().toISOString()}</p></main>;
}
