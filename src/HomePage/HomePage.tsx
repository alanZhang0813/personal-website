import React from 'react';
import './HomePage.css';
import Nav from "../Navigate/Nav";
import '../styles.css';

function HomePage() {
  return (
      <div className={"page"} style={{backgroundColor: "transparent"}}>
          <video autoPlay={true} loop={true} muted={true} className={"Homepage-video"}>
              <source src={"/background.mp4"} type={'video/mp4'}/>
          </video>
          <Nav/>
          <div className={"Homepage"}>
              <div className={"title"}>
                  Hey there! I'm Alan Zhang:<br/> aspiring software developer
              </div>
          </div>
      </div>
  );
}

export default HomePage;
