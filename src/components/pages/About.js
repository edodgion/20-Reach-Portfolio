import React from "react";


export default function About() {
  return (
    <div className="container">
      <div className="mx-2 mt-5 p-2 aboutMe">
        <h1 className="text-right">About Eric Dodgion</h1>
        <img className="profilePic" src="./img/portfolio" alt="Eric Dodgion" />

        <br />
        <br />
        <p>
          Hello my name is Eric Dodgion, currently residing in Colorado Springs, 
          Colorado.  My goals are to find opportunities to work
          as a full stack developer for a company that I can personally get
          behind and support in all aspects. As a passionate musician and lover
          of LOUD music, the possibility of eventually collaborating with sound and software 
          engineers to develop unique amp simulators is a major goal in the future.
        </p>
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
