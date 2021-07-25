import React from 'react';
import { VscFilePdf } from "react-icons/vsc";
import resume from "../../resume/Resume.pdf";

export default function Resume() {
	return (
		<div className= "container">
		<div className="col-sm justify-content-center">
		<h1>Resume</h1>
		<br />
		<br />
		<h3>Download my full resume here:
			<a className="resumeLink" href={resume}>
				< VscFilePdf size={40} />
			</a>
		</h3>

		<br />
		<br />
		<h3>Education</h3>
<b>February 2021 - July 2021 University of Denver / Full Stack Web Development:</b>
<br />
<br />

A 24-week bootcamp program focused on gaining technical programming skills for full stack development.
Laying a strong foundation in coding and boosting performance with hands-on training in real-world
applications.
		
		<br />
		<br />
		<h3>Skills</h3>
		
		<b>Languages, Frameworks and Tech</b>
<br />
<br />

HTML5 - CSS3 - JavaScript - jQuery - Node.js - PHP - Laravel - Express - MVC - React -
Database Theory - MongoDB - MySQL - Command Line - Git Bash

 </div>
 
 </div>
		
	);
}
