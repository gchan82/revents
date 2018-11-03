import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../../EventList/EventList';
import { deleteEvent } from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
//16 columns in sementic ui

const mapState = (state) => ({
  events: state.events,
  loading: state.async.loading
})

const actions = {
  deleteEvent
}

class EventDashboard extends Component {

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  }

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />
    return (
      <div className='ui segments'>
        <div className='ui segment'>
          <Grid>
            <Grid.Column width={10}>
              <EventList
                deleteEvent={this.handleDeleteEvent}
                events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);