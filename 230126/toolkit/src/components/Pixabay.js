import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fectchPixabay } from '../store/pixabaySlice';

function Pixabay() {
  const dispatch = useDispatch();
  const pics = useSelector(store => store.pixabay.data);

  useEffect(() => {
    dispatch(fectchPixabay());
  }, []);

  return (
    <ul>
      {pics.map(item => (
        <li key={item.id}>
          <img src={item.previewURL} alt={item.tags} />
        </li>
      ))}
    </ul>
  );
}

export default Pixabay;
