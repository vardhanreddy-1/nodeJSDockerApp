import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1> Intro To GitHub Actions- A guide to Work Flows</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
