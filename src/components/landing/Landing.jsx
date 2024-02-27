import React from "react";
import "./landing.css";
import { ReactComponent as BackgroundM } from "../../assets/lemonM.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import AnimatedSvg from './AnimatedSVG'
const Landing = () => {
	return (
		<div>
            <div className="logo">
                {/* <Logo /> */}
            </div>
			<div className="one">
			<div className="header-text">
				<div className="header-text-content">
					We craft dynamic <span className="header-text-content-font">softwares & solutions</span> for businesses,
					agencies, and organizations
				</div>
				{/* <div className="background-img"> */}
					<BackgroundM />
                    {/* <AnimatedSvg /> */} 
				{/* </div> */}
				
				</div>
			</div>
			<div className="text">

				<div className="digital-visions">
					<div className="digital-visions-heading">
					From design to deployment we thrive on bringing digital visions to life.
				</div>
					<div className="digital-visions-text">
					Software development as a craft is transformative and influential. It resonates with users on a profound level and ignites innovation. A well-crafted software solution can reshape perspectives, drive change, and revolutionize industries.
				</div>
			</div>
			</div>
		</div>
	);
};

export default Landing;