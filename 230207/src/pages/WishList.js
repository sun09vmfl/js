import { useEffect, useState } from 'react';
import { getWishlist, delWishlist } from '../assets';
import ProductItem from '../components/ProductItem';

function WishList() {
  const [product, setProduct] = useState([]);
  const handleDelete = delitem => {
    delWishlist(delitem);
    // const nextProduct = getWishlist();
    setProduct([]);
  };

  useEffect(() => {
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  }, []);

  return (
    <div>
      <h2>Wish List</h2>
      {product.length === 0 ? (
        <h3>위시리스트가 비었습니다.</h3>
      ) : (
        <ul>
          {product.map(item => (
            <li key={item.id}>
              <ProductItem item={item} />
              <button onClick={() => handleDelete()}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WishList;
