import Image from "next/image";
import EventCard from "./event-card";
export default function EventsCalendar() {
  return (
    <div className="container grid gap-36 grid-cols-3 grid-rows-3 justify-center content-center">
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>
  );
}
