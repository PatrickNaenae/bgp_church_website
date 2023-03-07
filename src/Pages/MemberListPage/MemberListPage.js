import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import Card from "../../components/Card/Card";
import "../MemberListPage/memberListPage.css";

const MemberListPage = () => {
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const [loading, setLoading] = useState(false);
	// const [page, setPage] = useState(1);
	// const [hasMore, setHasMore] = useState(true);

	// const memberData = async () => {
	// 	const response = await axios.get("http://127.0.0.1:8000");
	// 	const parsedData =
	// 		typeof response.data === "string"
	// 			? JSON.parse(response.data)
	// 			: response.data;
	// 	setItems(parsedData);
	// };

	useEffect(() => {
		fetchMoreData();
		// setLoading(true);
	}, []);

	const fetchMoreData = async () => {
		// if (!loading) return;
		const response = await axios.get(`https://rccgbgp.org.ng/api/`);
		const newItem = response.data;
		setItems(newItem);

		// setItems((prevItems) => [...prevItems, ...newItem]);
		// setPage((page) => page + 1);
		setLoading(false);
	};

	const handleScroll = useCallback(() => {
		const scrollTop =
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
		const scrollHeight =
			(document.documentElement &&
				document.documentElement.scrollHeight) ||
			document.body.scrollHeight;
		const clientHeight =
			document.documentElement.clientHeight || window.innerHeight;
		const scrolledToBottom =
			Math.ceil(scrollTop + clientHeight) >= scrollHeight;

		if (scrolledToBottom && !loading) {
			fetchMoreData();
		}
	}, [loading]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	const filterData = useCallback(
		(query) => {
			return items.filter((item) =>
				Object.values(item).some((value) =>
					value.toString().toLowerCase().includes(query.toLowerCase())
				)
			);
		},
		[items]
	);

	useEffect(() => {
		setFilteredData(filterData(query));
	}, [filterData, query, items]);

	const handleInputChange = (event) => {
		const newQuery = event.target.value;
		setQuery(newQuery);
	};

	

	function hideYear(date) {
		const [month, day, _] = date.split(" ");
		return `${month} ${day}`;
	}

	return (
		<>
			<div className='container__fluid'>
				<div className='search-box'>
					<button className='btn-search'>
						<FcSearch />
					</button>
					<input
						type='text'
						className='input-search'
						value={query}
						onChange={handleInputChange}
						placeholder='Type to Search...'
					/>
				</div>
				<main className='main'>
					<section className='card-area'>
						<section className='card-section'>
							{filteredData.map((item) => (
								<Card
									key={item.id}
									first_name={item.first_name}
									last_name={item.last_name}
									email={item.email}
									phone={item.phone}
									dob={hideYear(item.dob)}
									address={item.address}
									department={item.department}
									membership={item.membership}
									occupation={item.occupation}
									gender={item.gender}
									profile_img={`https://rccgbgp.org.ng/api${item.profile_img}`}
								/>
							))}
							{loading && <div>Loading...</div>}
						</section>
					</section>
				</main>
				{/* <Footer /> */}
			</div>
		</>
	);
};

export default MemberListPage;
