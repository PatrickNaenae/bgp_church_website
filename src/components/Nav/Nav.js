import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Icon from "../../bgp.png";
// import ICON from "../../images/bgp_logo.jpeg";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
	// let formSubmitted = localStorage.getItem("formSubmitted");
	const [navBgColor, setNavBgColor] = useState({
		red: 0,
		green: 0,
		blue: 0,
		alpha: 0,
	});
	const [isMounted, setIsMounted] = useState(false);
	const [clicked, setClicked] = useState(false);
	const navbarRef = useRef(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleClick = (e) => {
		e.preventDefault();
		localStorage.removeItem("formSubmitted");
		window.location.href = "/";
	};

	const handleIconClick = () => {
		setClicked(!clicked);
	};

	const handleClickMember = (e) => {
		e.preventDefault();
		localStorage.removeItem("formSubmitted");
		window.location.href = "/members";
	};

	const handleUpcomingMember = (e) => {
		e.preventDefault();
		localStorage.removeItem("formSubmitted");
		window.location.href = "/upcoming-events";
	};

	const handleScroll = useCallback(() => {
		const navPosition = navbarRef.current;
		if (navbarRef.current && isMounted) {
			const scrollPosition = window.pageYOffset || window.scrollY;
			const rect = navPosition.getBoundingClientRect();
			const top = rect.top + scrollPosition;
			if (top > 100) {
				setNavBgColor({
					red: 0,
					green: 0,
					blue: 0,
					alpha: 0.9,
				});
			} else {
				setNavBgColor({
					red: 0,
					green: 0,
					blue: 0,
					alpha: 0,
				});
			}
		}
	}, [isMounted]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<nav
			ref={navbarRef}
			style={{
				backgroundColor: `rgba(${navBgColor.red}, ${navBgColor.green}, ${navBgColor.blue}, ${navBgColor.alpha})`,
			}}>
			<a href='/'>
				<div className='logo__container'>
					<img src={Icon} alt='bgp.logo' />
				</div>
			</a>
			<ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
				<Link className='nav__link' onClick={handleClick} to='/'>
					Home
				</Link>
				<Link
					className='nav__link'
					onClick={handleClickMember}
					to='/members'>
					Members
				</Link>
				<Link
					className='nav__link'
					onClick={handleUpcomingMember}
					to='/upcoming-events'>
					Upcoming Events
				</Link>
			</ul>
			<div id='mobile' onClick={handleIconClick}>
				{clicked ? <FaTimes /> : <FaBars />}
			</div>
		</nav>
	);
};

export default Nav;
