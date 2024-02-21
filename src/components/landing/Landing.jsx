import React from "react";
import "./landing.css";
import { ReactComponent as BackgroundM } from "../../assets/lemonM.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
const Landing = () => {
	return (
		<div>
            <div className="logo">
                <Logo />
            </div>
			<div className="header-text">
				<div className="header-text-content">
					We craft dynamic <span className="header-text-content-font">softwares & solutions</span> for businesses,
					agencies, and organizations
				</div>
				<div className="background-img">
					<BackgroundM />
				</div>
			</div>
		</div>
	);
};

export default Landing;
