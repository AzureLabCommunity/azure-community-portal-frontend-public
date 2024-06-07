import Image from "next/image";
import EventCard from "./event-card";
export default function EventsCalendar() {
  return (
    <div className="bg-event-bg-gray/40 backdrop-blur-md">
      <div className="w-1152 flex flex-col mx-auto">
        <h2 className="mx-auto text-white text-40 mt-30">Events</h2>
        <div className="grid gap-36 grid-cols-[360px_360px_360px] justify-center content-center mx-auto mt-36 mb-36">
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
         <a className="text-white underline mb-54 justify-self-start" href="#">View previous events...</a>
      </div>
    </div>
  );
}