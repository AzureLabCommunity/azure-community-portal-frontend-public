import React from 'react';
import Link from 'next/link';

const MissionAndVision: React.FC = () => {
  return (
    <section>
      <h2>Our Mission and Vision</h2>
      <p>Information about mission and vision...</p>
      <Link href="/mission">Read more</Link>
    </section>
  );
}

export default MissionAndVision;