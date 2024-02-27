import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="sections">
				<div className="left-section">
					<div className="email-text">Drop your email</div>
					{/* <input type="email" placeholder="Your email address" /> */}
				</div>
				<div className="right-section">
					<div className="contact-us">Contact Us</div>
					{/* <div className="visit-us">Visit Us</div> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
