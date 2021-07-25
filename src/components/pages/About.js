import React from "react";
import portoflioPic from "../../images/portfoliopic.jpg";

export default function About() {
  return (
    <div className="container">
      <div className="aboutMe text">
        <h1 className="text-right">About Eric Dodgion</h1>
        <img src={portoflioPic} className="profilePic" alt="Eric Dodgion" />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
            Hello my name is Eric Dodgion, currently residing in Colorado Springs, 
          Colorado. I am a Full Stack Developer that studied through the University of Denver
          Boot Camp Spot program.  My goals are to find opportunities to work
          as a full stack developer for a company that I can personally get
          behind and support in all aspects. As a passionate musician and lover
          of LOUD music, the possibility of eventually collaborating with sound and software 
          engineers to develop unique amp simulators is a major goal in the future.
        </p>
        
        <br />
        <br />
        <br />
        <br />
        <p className="bottomAbout text-center">
          Dog Lover. Touring Musician. Wrestling Fanatic. Amp, Record, Comic
          Collector. Magic The Gathering Nerd.
        </p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
