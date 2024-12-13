import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
