import Ex3Name from './Ex3Name';
import Ex3Like from './Ex3Like';
import Ex3Com from './Ex3Com';
import { useState } from 'react';

function Ex3props() {
  const [name, setName] = useState('');
  const [companion, setCompanion] = useState('');

  function getName(e) {
    const { value } = e.target;
    setName(value);
  }
  function getCom(e) {
    const { value } = e.target;
    setCompanion(value);
  }

  return (
    <div>
      <Ex3Name name={name} getName={getName} />
      <br />
      <Ex3Com companion={companion} getCom={getCom} />
      <hr />
      <Ex3Like name={name} companion={companion} />
    </div>
  );
}

export default Ex3props;
