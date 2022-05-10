import React, { useState, useEffect } from 'react';
import './css/App.css';
import iconF from './assets/images/icon-facebook.svg';
import iconI from './assets/images/icon-instagram.svg';
import iconT from './assets/images/icon-twitter.svg';
import iconY from './assets/images/icon-youtube.svg';
import iconUp from './assets/images/icon-up.svg';
import iconDown from './assets/images/icon-down.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Overview from './components/Overview';
import './css/Button.css';

function App() {

  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  useEffect( () => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));

      const elements = document.querySelectorAll("#crd");
      const elementsArr = Array.from(elements);

      elementsArr.forEach(el => {
        el.setAttribute("data-theme", localStorage.getItem("theme"));
      })

      document.querySelector("#bl").setAttribute("data-theme", localStorage.getItem("theme"));
})
    
  const themeChanger = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  }

  return (
    <div className="App">
      <header>
        <Navbar />
        <section className="dark__mode--container">
        <span className="dm">Dark Mode</span>
        <label for="checkbox" className="toggler"> 
            <input type="checkbox" defaultChecked={checked} onChange={() => themeChanger()} id="checkbox" />
            <span className="ball" id="bl"></span>
        </label>
        </section>
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
        <Overview />
    </div>
  );
}

export default App;
