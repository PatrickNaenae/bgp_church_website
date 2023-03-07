import React, { useRef } from "react";
// import { render } from "react-dom";
import Nav from "../Nav/Nav";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "../../styles.css";
import IMG1 from "../../images/backdrop.jpeg";
import IMG2 from "../../images/img2.jpg";
import IMG3 from "../../images/img3.jpg";
import IMG4 from "../../images/img4.jpg";
import IMG5 from "../../images/img5.jpg";
import IMG6 from "../../images/img6.jpg";

const content = [
	{
		title: "Welcome to Beautiful Gate Parish",
		description:
			"A church that inspires you to faith, hope, and charity. To love the Lord with all your might and to walk in his ways in the morning light.",
		image: IMG1,
	},
	{
		title: "A church where dreams come true",
		description:
			"Talents we never knew we possessed, talents that God has given us. We are blessed. Whatever our talent may be, We use it to serve God willingly",
		image: IMG2,
	},
	{
		title: " A church where prayers are answered",
		description:
			"So let us pray with hearts sincere, And let our voices ring out clear, To the One who hears our every cry, Our God, our Savior, who is nigh",
		image: IMG3,
	},
	{
		title: "Come and join us worship our maker",
		description:
			"We sing of His mercy and grace. Of how he has saved us from our disgrace. We sing of His love so deep and wide that reaches every nation and tribe.",
		image: IMG4,
	},
	{
		title: "In our dance, We feel alive",
		description:
			"With every step and every move, we offer our praises in a dance of love, we lift our hands and praise His name, and we let His joy fill us like a flame..",
		image: IMG5,
	},
	{
		title: "Sharing God's truth and love with grace",
		description:
			"In teaching or preaching, we may discover, a gift for words that we never uncovered, sharing the truth and the love of God with grace, guiding others in their spiritual race unto a life of perfection",
		image: IMG6,
	},
];

const Slideshow = () => {
	const slideShowRef = useRef(null);
	// const [ height, setHeight ] = useState(0)
	// let navHeight = 70

	// useEffect(() => {
	// 	let newHeight = slideShowRef.current.offsetHeight - navHeight;
	// 	setHeight(newHeight)
	// }, [height]);

	return (
		<div>
			<Nav />
			<Slider autoplay={3500} className='slider-wrapper'>
				{content.map((item, index) => (
					<div
						key={index}
						ref={slideShowRef}
						className='slider-content'
						style={{
							background: `url('${item.image}') center center no-repeat`,
							// backgroundSize: 'cover'
						}}>
						<div className='inner'>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							{/* <button>{item.button}</button> */}
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Slideshow;
