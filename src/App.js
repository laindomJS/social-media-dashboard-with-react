import './css/App.css';
import iconF from './assets/images/icon-facebook.svg';
// import iconI from './assets/images/icon-instagram.svg';
// import iconT from './assets/images/icon-twitter.svg';
// import iconY from './assets/images/icon-twitter.svg';
import iconUp from './assets/images/icon-up.svg';
// import iconDown from './assets/images/icon-down.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        
        <Card 
          classname = "card facebook"
          icon = {iconF}
          name = "@nathanf"
          followers = "1987"
          cardContent = "FOLLOWERS"
          todayIcon = {iconUp}
          today = "12 Today"
          todayclassname = "todayNum up"
        />

      </main>
    </div>
  );
}

export default App;
