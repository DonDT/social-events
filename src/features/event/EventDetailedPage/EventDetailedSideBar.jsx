import React from "react";
import { Segment, Item, Label, List, Image } from "semantic-ui-react";

const EventDetailedSideBar = ({ attendees }) => {
  const isHost = false;
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length}
        {attendees && attendees.length === 1 ? " Person" : " People"} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            attendees.map(attendee => (
              <Item key={attendee.id} style={{ position: "relative" }}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Image size="tiny" src={attendee.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">{attendee.name}</Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </div>
  );
};

export default EventDetailedSideBar;
