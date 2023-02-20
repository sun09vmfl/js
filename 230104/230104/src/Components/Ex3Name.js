import Reac, { useState } from 'react';

function Ex3Name({ name, getName }) {
  return (
    <div>
      <label>이름: </label>
      <input type="text" value={name} onChange={getName} />
      <strong>{name}</strong>
    </div>
  );
}

export default Ex3Name;
