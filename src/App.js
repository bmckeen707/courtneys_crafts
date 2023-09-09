import './App.css';

import crochetPhoto from './resources/crochet3.jpg';
import courtneyPhoto from './resources/courtney1.jpg';
import paperPhoto from './resources/paper1.jpg';
import candlePhoto from './resources/candle1.jpg';

function Header() {
  return (
    <div className="header">
      <h1 className="title">Courtney's Crafts</h1>
    </div>
  )
    
}

function Body() {
  return (
    <div className="body">
      <div className="courtney">
        <img className="photo" src={courtneyPhoto} alt=""/>
        <p>Hi my name is Courtney and I love to crochet blankets as well as make 
            homade paper and candles! 
        </p>
      </div>
      <div className="crochet box" onClick={() => {alert('I farted')}}>
        <h2>Crochet</h2>
        <img className="photo" src={crochetPhoto} alt="" />
      </div>
      <div className="paper box">
        <h2>Paper</h2>
        <img className="photo" src={paperPhoto} alt="" />
      </div>
      <div className="candle box">
        <h2>Candles</h2>
        <img className="photo" src={candlePhoto} alt="" />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
