import React from 'react';
import artistMaster  from '../images/artist_master.png';
import blog1  from '../images/blog1.jpg';
import index  from '../images/index.jpg';
import stickItToEm  from '../images/stick_it_to_em.jpg';


export default function Projects() {
	return (
		<div className="container">
		<div className="row justify-content-center">
		<br />
		<br />

		<div className="project bg-dark border-primary" style={{ width: '25rem' }}>
			<h3 className="projectTitle text-center">Artist Master</h3>
			<a href="https://edodgion.github.io/Project-1-Global-Music/" target="_blank">
				<img src={artistMaster} className="card-img-top projectImg" alt="artist master" />
			</a>
		</div>


			<div className="project bg-dark border-primary" style={{ width: '25rem' }}>
			<h3 className="projectTitle text-center">Stick it to Em</h3>
			<a href="https://boiling-garden-97737.herokuapp.com/" target="_blank">
				<img src= {stickItToEm} className="card-img-top projectImg" alt="stick it to em" />
			</a>
			</div>

			<div className="project bg-dark border-primary" style={{ width: '25rem' }}>
			<h5 className="projectTitle text-center">Tech Blog</h5>
			<a href="https://pacific-eyrie-63209.herokuapp.com" target="_blank">
				<img src= {blog1} className="project-img-top projectImg" alt="tech blog" />
			</a>
			</div>

			<div className="project bg-dark border-primary" style={{ width: '25rem' }}>
			<h5 className="projectTitle text-center">Fitness Tracker</h5>
			<a href="https://dry-hollows-94548.herokuapp.com/?id=60ef48ff750327001580d3d0" target="_blank">
				<img src= {index} className="project-img-top projectImg" alt="fitness tracker" />
			</a>
			</div>
		</div>
		</div>
);
}