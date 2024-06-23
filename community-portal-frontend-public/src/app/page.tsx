import React from 'react';
import MissionAndVision from './components/MissionAndVision';
import CommunityNews from './components/CommunityNews';
import EventsCalendar from './components/EventsCalendar';
import Creators from './components/Creators';
import Sponsors from './components/Sponsors';
import "./styles/globals.css";
import MissionPage from "./mission/page";

const Home: React.FC = () => {
  return (
    <div className="container">
      <MissionAndVision />
      <CommunityNews />
      <EventsCalendar />
      <Creators />
      <Sponsors />
    </div>
  );
}

export default Home;