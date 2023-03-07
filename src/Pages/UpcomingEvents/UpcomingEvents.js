import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./upcoming-events.css"
import { events } from "./events.js"

const localizer = momentLocalizer(moment);

const UpcomingEvents = () => {
	return (
		<div className="events">
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccessor='end'
			/>
		</div>
	);
};

export default UpcomingEvents;
