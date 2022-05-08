import './css/App.css';
import iconF from './assets/images/icon-facebook.svg';
import iconI from './assets/images/icon-instagram.svg';
import iconT from './assets/images/icon-twitter.svg';
import iconY from './assets/images/icon-twitter.svg';
import iconUp from './assets/images/icon-up.svg';
import iconDown from './assets/images/icon-down.svg';
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

        <Card 
          classname = "card twitter"
          icon = {iconT}
          name = "@nathanf"
          followers = "1044"
          cardContent = "FOLLOWERS"
          todayIcon = {iconUp}
          today = "99 Today"
          todayclassname = "todayNum up"
        />


        <Card 
          classname = "card insta"
          icon = {iconI}
          name = "@realnathanf"
          followers = "11k"
          cardContent = "FOLLOWERS"
          todayIcon = {iconUp}
          today = "1099 Today"
          todayclassname = "todayNum up"
        />
      
      
        <Card 
          classname = "card yt"
          icon = {iconY}
          name = "Nathan F."
          followers = "8239"
          cardContent = "SUSCRIBERS"
          todayIcon = {iconDown}
          today = "144 Today"
          todayclassname = "todayNum down"
        />
      
      </main>
    </div>
  );
}

export default App;
