import Reac, { useState } from 'react';

function Ex3Com({ companion, getCom }) {
  return (
    <div>
      <label>동물: </label>
      <input type="text" value={companion} onChange={getCom} />
    </div>
  );
}

export default Ex3Com;
