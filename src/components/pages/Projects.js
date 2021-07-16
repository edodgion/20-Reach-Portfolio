import React from 'react';

export default function Projects() {
	return (
		<div className="container">
		<div className="row justify-content-center">

		<div className="project bg-dark border-primary" style={{ width: '24rem' }}>
			<h3 className="projectTitle text-center">Artist Master</h3>
				<img src="./img/artist.jpg" className="card-img-top projectImg" alt="artist master" />
				<div className="project-body">
		
					{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
					<div className="container">
					</div>
				</div>
			</div>

		
			<div className="project bg-dark border-primary" style={{ width: 'rem' }}>
			<h3 className="projectTitle text-center">Stick it to Em</h3>
				<img src="./img/artist.jpg" className="card-img-top projectImg" alt="stick it to em" />
				<div className="project-body">
					
					{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
					<div className="container">
					</div>
				</div>
			</div>

			<div className="project bg-dark border-primary" style={{ width: '24rem' }}>
			<h5 className="projectTitle text-center">Budget Tracker</h5>
				<img src="./img/budget.png" className="project-img-top projectImg" alt="budget tracker" />
				<div className="project-body">
					{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
					<div className="container">
					</div>
				</div>
			</div>

		</div>
		<div className="row justify-content-center">

			<div className="project bg-dark border-primary" style={{ width: '24rem' }}>
			<h5 className="projectTitle text-center">Fitness Tracker</h5>
				<img src="./img/workout.png" className="project-img-top projectImg" alt="fitness tracker" />
				<div className="project-body">
					{/* <p className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
					<div className="container">
					</div>
				</div>
			</div>

		</div>
	</div>
);
}