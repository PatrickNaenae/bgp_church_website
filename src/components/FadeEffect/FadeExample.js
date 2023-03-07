// You can live edit this code below the import statements
import React, { useEffect } from "react";
// import { AttentionSeeker } from "react-awesome-reveal";
import DiggingDeep from "../../images/digging-deep.jpeg";
import FaithClinic from "../../images/faith-clinic.jpeg";
import "./fadeEffect.css";

function FadeExample() {
	const handleScroll = () => {
		let imageContainer = document.querySelector(".image__container");
		let faithClinicImageContainer = document.querySelector(
			".faith-clinic__image__container"
		);
		let diggingDeepText = document.querySelector(".digging-deep__text");
		let faithClinicText = document.querySelector(".faith-clinic__text");
		let imageTop = imageContainer.getBoundingClientRect().top;
		let faithClinicImageTop =
			faithClinicImageContainer.getBoundingClientRect().top;
		let diggingDeepTop = diggingDeepText.getBoundingClientRect().top;
		let faithClinicTop = faithClinicText.getBoundingClientRect().top;
		let windowTop = window.innerHeight;

		if (imageTop < windowTop) {
			imageContainer.classList.add("active");
			setTimeout(function () {
				imageContainer.classList.add("animate-slide-out");
			}, 300);
		}
		if (faithClinicImageTop < windowTop) {
			setTimeout(function () {
				faithClinicImageContainer.classList.add("active");
			}, 700);
			faithClinicImageContainer.classList.add("animate-slide-out");
		}
		if (diggingDeepTop < windowTop) {
			setTimeout(function () {
				diggingDeepText.classList.add("active");
			}, 400);
			diggingDeepText.classList.add("animate-slide-out");
		}
		if (faithClinicTop < windowTop) {
			setTimeout(function () {
				faithClinicText.classList.add("active");
			}, 1000);
			faithClinicText.classList.add("animate-slide-out");
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("keydown", handleScroll);
		};
	}, []);

	return (
		<div className='fade__container'>
			{/* <div className='overlay'></div> */}
			<div className='text'>
				<div className='wrapper'>
					<div id='O' className='letter'>
						O
					</div>
					<div className='shadow'>O</div>
				</div>
				<div className='wrapper'>
					<div id='U' className='letter'>
						U
					</div>
					<div className='shadow'>U</div>
				</div>
				<div className='wrapper'>
					<div id='R' className='letter'>
						R
					</div>
					<div className='shadow'>R</div>
				</div>
				<div className='wrapper'>
					<div id='S' className='letter'>
						S
					</div>
					<div className='shadow'>S</div>
				</div>
				<div className='wrapper'>
					<div id='E' className='letter'>
						E
					</div>
					<div className='shadow'>E</div>
				</div>
				<div className='wrapper'>
					<div id='R' className='letter'>
						R
					</div>
					<div className='shadow'>R</div>
				</div>
				<div className='wrapper'>
					<div id='V' className='letter'>
						V
					</div>
					<div className='shadow'>V</div>
				</div>
				<div className='wrapper'>
					<div id='I' className='letter'>
						I
					</div>
					<div className='shadow'>I</div>
				</div>
				<div className='wrapper'>
					<div id='C' className='letter'>
						C
					</div>
					<div className='shadow'>C</div>
				</div>
				<div className='wrapper'>
					<div id='E' className='letter'>
						E
					</div>
					<div className='shadow'>E</div>
				</div>
				<div className='wrapper'>
					<div id='S' className='letter'>
						S
					</div>
					<div className='shadow'>S</div>
				</div>
			</div>
			<div className='services'>
				<div className='digging-deep'>
					<div className='image__container'>
						<img src={DiggingDeep} alt='digging-deep' />
					</div>
					<ul className='digging-deep__text'>
						<h2>Digging Deep</h2>
						<h3>Tuesdays 6pm</h3>
						<p>
							Digging deep is a time to study the word.
							<br />
							It is a time to know the heart of God.
							<br />
							To grasp His love and never be flawed.
							<br />
							The word of God holds the wisdom of the ages.
							<br />
							It is a guidebook for the faithful through all
							stages.
							<br />
							It offers peace, comfort, and strength, and shows us
							the way to eternal life.
							<br />
							Hebrews chapter 4 verse 12:
							<br />
							"For the word of God is living and active, sharper
							than any two-edged sword, piercing to the division
							of soul and of spirit, of joints and of marrow, and
							discerning the thoughts and intentions of the
							heart." (ESV)
						</p>
					</ul>
				</div>
				<div className='faith-clinic'>
					<ul className='faith-clinic__text'>
						<h2>Faith Clinic</h2>
						<h3>Thursdays 6pm</h3>
						<p>
							Faith Clinic is the time where we meet to pray.
							<br />
							Do you have a problem that is very hard to bear?
							<br />
							Bring it to the lord in Prayer <br />
							Prayer is a holy connection, a quiet time at God's
							feet. <br />
							Prayer is the means of sustaining a faith that at
							times can grow weak <br />
							When all other avenues falter, and man's ingenuity
							fails, God, in His infinite wisdom, is the source
							who always prevails.
							<br />
							Nothing can bring such contentment as spending an
							hour in prayer, God is a most willing listener and
							He is eternally here
							<br /> Psalm Chapter 120 verse 1 <br />
							"In my distress I cried to the LORD, and he heard
							me"
						</p>
					</ul>
					<div className='faith-clinic__image__container'>
						<img src={FaithClinic} alt='faith-clinic' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FadeExample;
