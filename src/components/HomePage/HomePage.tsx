import React from 'react';
import './HomePage.css';
import '../../styles.css'
import Nav from "../Navigate/Nav";

function HomePage() {
  return (
      <div className={"page"} style={{backgroundColor: "transparent"}}>
          <Nav/>
          <div className={"Homepage"}>
              <div className={"title-header"}>
                Hey there! My name is Alan Zhang
              </div>
              <div className={"title-sub"}>
                Aspiring software developer who is sometimes good at chess
              </div>
          </div>
      </div>
  );
}

export default HomePage;
