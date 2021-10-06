import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BuildItem from './components/BuildItem/BuildItem';
import TextField from './components/TextField/TextField';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <BuildItem />
        <TextField id="t" label="Text Field" placeholder="test" required />
      </div>
      <Footer />
    </div>
  );
}

export default App;
