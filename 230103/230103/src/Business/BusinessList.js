import React from 'react';
import BusinessItem from './BusinessItem';

function BusinessList({ data }) {
  return (
    <ul className="business">
      {/* item = business data */}
      {data.map(item => (
        <BusinessItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default BusinessList;
