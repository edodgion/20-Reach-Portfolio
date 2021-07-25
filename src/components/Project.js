import React from "react";
import artistMaster from "../images/artist_master.png";
import blog1 from "../images/blog1.jpg";
import index from "../images/index.jpg";
import stickItToEm from "../images/stick_it_to_em.jpg";
import budget from "../images/budget.jpg";
import noteTaker from "../images/notetaker.jpg";

export default function Projects() {
  return (
    <div className="container">
      <br />
      <br />
      <div class="row">
        <div class="col">
          <div
            className="project bg-dark border-primary"
            style={{ width: "20rem" }}
          >
            <a
              href="https://edodgion.github.io/Project-1-Global-Music/">
              <img
                src={artistMaster}
                className="card-img-top projectImg"
                alt="artist master"
              />
            </a>
            <a href="https://github.com/edodgion/Project-1-Global-Music">
              <h3 className="projectTitle text-center">
                Artist Master Repository
              </h3>
            </a>
          </div>
        </div>
        <div class="col">
          <div
            className="project bg-dark border-primary"
            style={{ width: "20rem" }}
          >
            <a href="https://pacific-eyrie-63209.herokuapp.com">
              <img
                src={blog1}
                className="project-img-top projectImg"
                alt="tech blog"
              />
            </a>
            <a href="https://github.com/edodgion/14-Model-View-Controller-MVC-Tech-Blog">
              <h5 className="projectTitle text-center">Tech Blog Repository</h5>
            </a>
          </div>
        </div>
		<div class="col">
          <div
            className="project bg-dark border-primary"
            style={{ width: "20rem" }}
          >
            <a
              href="https://greve-baguette-43046.herokuapp.com/">
              <img
                src={budget}
                className="project-img-top projectImg"
                alt="offline budget"
              />
            </a>
            <a href="https://github.com/edodgion/19-PWA-Offline-Budget-Trackers">
              <h5 className="projectTitle text-center">
                Offline Buget App Repository
              </h5>
            </a>
          </div>
        </div>
        <div class="col">
          <div
            className="project bg-dark border-primary"
            style={{ width: "20rem" }}
          >
            <a
              href="https://boiling-garden-97737.herokuapp.com/">
              <img
                src={stickItToEm}
                className="card-img-top projectImg"
                alt="stick it to em"
              />
            </a>
            <a href="https://github.com/CWhirl/Project-2">
              <h3 className="projectTitle text-center">
                Stick it to Em Repository
              </h3>
            </a>
          </div>
        </div>
        <div class="col">
          <div
            className="project bg-dark border-primary"
            style={{ width: "20rem" }}
          >
            <a
              href="https://glacial-woodland-41490.herokuapp.com/">
              <img
                src={noteTaker}
                className="project-img-top projectImg"
                alt="note taker"
              />
            </a>
            <a href="https://github.com/edodgion/11-Express-js-Note-Taker">
              <h5 className="projectTitle text-center">
                Note Taker Repository
              </h5>
            </a>
          </div>
        </div>
        <div class="col">
          <div
            className="project bg-dark border-primary"
            style={{ width: "20rem" }}
          >
            <a
              href="https://dry-hollows-94548.herokuapp.com/?id=60ef48ff750327001580d3d0">
              <img
                src={index}
                className="project-img-top projectImg"
                alt="fitness tracker"
              />
            </a>
            <a href="https://github.com/edodgion/18-Nosql-Workout-Tracker">
              <h5 className="projectTitle text-center">
                Fitness Tracker Repository
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
