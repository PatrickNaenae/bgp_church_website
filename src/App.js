import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import Nav from "./components/Nav/Nav";
import Homepage from "./Pages/Homepage/Homepage";
import MemberListPage from "./Pages/MemberListPage/MemberListPage";
import ThankYouPage from "./Pages/ThankYouPage/ThankYouPage";
import Footer from "./components/Footer/Footer";
import UpcomingEvents from "./Pages/UpcomingEvents/UpcomingEvents";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route
						path='/'
						exact
						element={<Homepage />}
						component={Homepage}
					/>

					<Route
						path='/thank-you'
						element={<ThankYouPage />}
						component={ThankYouPage}
					/>
					<Route
						path='/members'
						element={<MemberListPage />}
						component={MemberListPage}
					/>
					<Route
						path='/upcoming-events'
						element={<UpcomingEvents />}
						component={UpcomingEvents}
					/>
					<Route
						path='*'
						element={<NotFound />}
						component={NotFound}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
