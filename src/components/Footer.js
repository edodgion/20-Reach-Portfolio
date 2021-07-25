import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa' ;

export default function Footer() {
	return (
		<footer className="footer pt-1">
			<div className="container text-center">
				<div>
				<a className="iconLink" href='https://www.instagram.com/thebandoryx/'>
						<FaInstagram size={38} />
					</a>
					<a className="iconLink" href='https://github.com/edodgion'>
						<FaGithubSquare size={35} />
					</a>
					<a className="iconLink" href='https://www.linkedin.com/in/eric-dodgion-9a7003205/'>
						<AiFillLinkedin size={40} />
					</a>
					<div className="footerName" >© Eric Dodgion 🎸</div>
				</div>
			</div>
		</footer>
	);
}
