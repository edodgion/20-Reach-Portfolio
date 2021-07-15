import React from 'react';

export default function About() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <h1>About</h1>
        <img
          src="./images/portfolio_pic.jpg"
          class="profile_pic"
          width="160px"
          height="200px"
        />
      </div>
      <div className="right">
        <p>
          How have you utilized your time in a world wide pandemic? Are the
          projects you've been juggling still up in the air? With the current
          state of the world I have left those projects up in the air and
          created a new path. I have been fortunate enough to have seized the
          opportunity to be accepted into the coding bootcamp program through
          the University of Denver. Hello my name is Eric Dodgion, currently
          residing in Colorado Springs, Colorado. I am a developer strengthening
          my skills in full stack web development. Throughout these next
          few months I'm very excited to learn various skill sets so that I may
          hone them into something that will help me evolve into a flourishing
          developer in the industry. My goals are to find opportunities to work
          as a front end developer for a company that I can personally get
          behind and support in all aspects. As a passionate musician and lover
          of LOUD music, the possibility of eventually collaborating with sound
          engineers to develop unique amp simulators is a main goal.
        </p>
      </div>
    <div className = "container text-center">
      <img class="aboutmepics" src="./images/IMG_3931.jpg" width="400px"
          height="400px" />
      <img class="aboutmepics" src="./images/LGC_7731.JPG"width="400px"
          height="400px" />
      <img class="aboutmepics" src="./images/IMG_9433.JPG"width="400px"
          height="400px" />
      <img class="aboutmepics" src="./images/LGC_7769.JPG"width="400px"
          height="400px" />

      <p>
        Dog Lover. Touring Musician. Wrestling Fanatic. Amp, Record, Comic
        Collector. Magic The Gathering Nerd.
      </p>
      </div>
    </div>
  );
}