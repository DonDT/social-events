import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";

const mapState = state => ({
  events: state.events
});

// mapDispatchActionToProps
const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class Eventdashboard extends Component {
  // state = {
  //   isOpen: false,
  //   selectedEvent: null
  // };

  // handleIsOpenToggle = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // };

  // handleIsOpenToggle = () => {
  //   this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  // };

  // handleCreateFormOpen = () => {
  //   this.setState({
  //     isOpen: true,
  //     selectEvent: null
  //   });
  // };

  // handleFormCancel = () => {
  //   this.setState({
  //     isOpen: false
  //   });
  // };

  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };
  // handleUpdateEvent = updatedEvent => {
  //   this.props.updateEvent(updatedEvent);
  //   // this.setState(({ events }) => ({
  //   // events: events.map(event => {
  //   //   if (event.id === updatedEvent.id) {
  //   //     return { ...updatedEvent };
  //   //   } else {
  //   //     return event;
  //   //   }

  //   isOpen: false,
  //   selectedEvent: null
  // }));};

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  // handleDeleteEvent = id => {
  //   this.setState(({ events }) => ({
  //     events: events.filter(event => event.id !== id)
  //   }));
  // };

  // handleDeleteEvent = id => {
  //   this.setState({
  //     events: this.state.events.filter(event => event.id !== id)
  //   });
  // };

  // handleCreateEvent = newEvent => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL = "/assets/user.png";
  //   this.props.createEvent(newEvent);
  //   // this.setState({
  //   //   //events: [...this.state.events, newEvent],
  //   //   isOpen: false
  //   // });
  //   // this.setState(({events}) =>({
  //   //   events: [...events, newEvent],
  //   //   isOpen: false
  //   // });
  // };

  render() {
    //const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            // selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {/* <Button
            positive
            content="Create Event"
            onClick={this.handleCreateFormOpen}
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updatedEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              cancelFormOpen={this.handleFormCancel}
              createEvent={this.handleCreateEvent}
            />
          )} */}
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(Eventdashboard);
