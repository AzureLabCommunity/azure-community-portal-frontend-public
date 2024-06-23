import React from 'react';
import Link from 'next/link';

const EventsCalendar: React.FC = () => {
  return (
    <section>
      <h2>Events Calendar</h2>
      <p>Upcoming events...</p>
      <Link href="/events">See all events</Link>
    </section>
  );
}

export default EventsCalendar;