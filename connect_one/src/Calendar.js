import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class ASBASCalendar extends  React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      this.setState((prevState) => ({
        events: [...prevState.events, { start, end, title }],
      }));
    }
  };

  handleEditEvent = (event) => {
    const title = window.prompt('Edit Event name', event.title);
    if (title) {
      const updatedEvent = { ...event, title };
      const updatedEvents = this.state.events.map((e) => (e.id === event.id ? updatedEvent : e));
      this.setState({
        events: updatedEvents,
      });
    }
  };

  handleDeleteEvent = (event) => {
    console.log(event);
    const updatedEvents = this.state.events.filter((e) => e.id !== event.id);
    this.setState({
      events: updatedEvents,
    });
  };

  render() {
    return (
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100vh', width: '100%' }}
          selectable
          onSelectSlot={this.handleSelect}
          onSelectEvent={(event) => this.handleEditEvent(event)}
          eventPropGetter={(event, start, end, isSelected) => {
            const backgroundColor = isSelected ? 'red' : event.color;
            return { style: { backgroundColor } };
          }}
          components={{
            event: ({ event }) => (
              <div>
                <strong>{event.title}</strong>
                <button  className="button-10" role="button" onClick={() => this.handleEditEvent(event)}>Edit</button>
                <button className="button-10"  onClick={() => this.handleDeleteEvent(event)}>Delete</button>
              </div>
            ),
          }}
        />
      </div>
    );
  }
}

export default ASBASCalendar;