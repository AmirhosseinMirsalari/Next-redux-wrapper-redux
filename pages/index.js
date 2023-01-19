export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <div className="grid">
          <a href="/add_user" className="card">
            <h2>Use Redux in Client Side &rarr;</h2>
          </a>

          <a href="/get_user" className="card">
            <h2>Use Redux in Server side and Static Generation side &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
