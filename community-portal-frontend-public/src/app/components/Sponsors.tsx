import React from 'react';
import Link from 'next/link';

const Sponsors: React.FC = () => {
  return (
    <section>
      <h2>Sponsors</h2>
      <p>Information about sponsors...</p>
      <Link href="/sponsors">Our sponsors</Link>
    </section>
  );
}

export default Sponsors;