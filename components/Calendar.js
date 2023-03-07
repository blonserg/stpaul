import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default class GoogleCalendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey='AIzaSyBP7bvd-lBWnGxTUBggBjAYLb6GJy6T9iU'
        events={
          { googleCalendarId: 'sergforweb@gmail.com' }
        }
      />
    )
  }
}
