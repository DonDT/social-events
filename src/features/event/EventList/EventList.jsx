import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <React.Fragment>
        {events &&
          events.map(event => (
            <EventListItem
              event={event}
              key={event.id}
              //selectEvent={this.props.selectEvent}
              deleteEvent={deleteEvent}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default EventList;
