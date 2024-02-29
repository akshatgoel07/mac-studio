import React from "react";
import "./Footer.css";
import { ReactComponent as M } from "../../assets/m.svg";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="sections">
				<div className="left-section">
					<div className="email-text">Drop your email</div>
					<div className="email-text_detail">
						Leave us with your email to get updates from the studio
					</div>
				</div>
				<div className="right-section">
					<div className="visit-us">
						Visit Us
						<div className="visit-us_subtext">
							Orange city California
						</div>
					</div>
					<div className="contact-us">
						Contact Us
						<div className="visit-us_subtext">
							vfx.akshat@gmail.com
						</div>
					</div>
				</div>
			</div>

			<div className="pvt-ltd">© Mac Limited. Privacy Policy</div>
			<div className="background">
				<M />
			</div>
		</footer>
	);
};

export default Footer;
