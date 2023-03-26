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
          { googleCalendarId: '8970c777ae0b4fde0126e28b5189b90777acbadd256c05b3f2635b04f3d1ee70@group.calendar.google.com' }
        }
      />
    )
  }
}
