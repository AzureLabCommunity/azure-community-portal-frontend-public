import React from 'react';
import Link from 'next/link';

const CommunityNews: React.FC = () => {
  return (
    <section>
      <h2>Community News</h2>
      <p>Latest news...</p>
      <Link href="/news">Read more</Link>
    </section>
  );
}

export default CommunityNews;