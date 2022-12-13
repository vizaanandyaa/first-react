import Intro from "./components/intro";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>TESTING</nav>
      </header>
      <section>
        <h1>ADIOS</h1>
      </section>
      <h2>CAST</h2>
      <Intro name= "Evan Peters" role="Tate Langdon"/>
      <Intro name= "Taisa Farmiga" role="Violet Harmon"/>
    </div>
  );
}
console.log("halo")

export default App;
