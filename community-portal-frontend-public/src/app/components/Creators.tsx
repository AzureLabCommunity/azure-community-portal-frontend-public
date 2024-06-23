import React from 'react';
import Link from 'next/link';

const Creators: React.FC = () => {
  return (
    <section>
      <h2>Creators</h2>
      <p>Information about creators...</p>
      <Link href="/creators">Learn more</Link>
    </section>
  );
}

export default Creators;