import React from "react";
import { useLocation } from "react-router-dom";
import "./footer.css";
import Icon from "../../bgp.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
	const { pathname } = useLocation();
	if (
		pathname !== "/" &&
		pathname !== "/upcoming-events" &&
		pathname !== "/thank-you"
	) {
		return null;
	}

	return (
		<footer id='footer'>
			<div className='footer__icon'>
				<a href='/'>
					<div className='logo__container'>
						<img src={Icon} alt='bgp.logo' />
					</div>
				</a>
				<h1>Rccg Beautiful Gate Parish</h1>
			</div>
			<p>The Lit Church</p>

			<div className='footer__socials'>
				<a href='https://www.facebook.com/patrick.s.hernadez'>
					<BsFacebook />
				</a>
				<a href='https://twitter.com/Naenae_pat'>
					<BsTwitter />
				</a>
				<a href='https://www.instagram.com/naenae_patrick/'>
					<BsInstagram />
				</a>
				<a href='https://www.linkedin.com/in/aniefiok-bocco-143767173/'>
					<FaLinkedin />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>
					&copy; Copyright RCCG BGP 2023. All Right Reserved
				</small>
			</div>
		</footer>
	);
};

export default Footer;
