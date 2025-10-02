import React from "react";
import "./Help.css";
import Ischool from "./Ischool.png"
import Data from "./events.json";
export default class CardsOrganizations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  async componentDidMount() {
    try {
      this.setState({ events: Data });
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  }

  async saveToFile(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "events.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  render() {
    let filtered = this.state.events.filter(events => {
      return events.eventName !== "";
     }
      )
    return (
      <div role="main" className="organizations-container">
        <div className="organizations-grid">
          {this.state.events.length > 0 ? (
            filtered.map((event, index) => (
              <EventCard key={index} event={event} />
            ))
          ) : (
            <p>No events to display</p>
          )}
        </div>
      </div>
    );
  }
}

function EventCard({ event }) {
  return (
    <div className="organization-card">
      <img
        src={Ischool} // Replace with dynamic src if needed
        alt="Organization Logo"
        className="organization-image"
      />
      <h3>{event.eventName}</h3>
      <p>
        Date: {event.eventDate}<br />
        Time: {event.eventTime}<br />
        Location: {event.eventLocation}
      </p>
    </div>
  );
}