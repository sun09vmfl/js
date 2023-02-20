import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getItemId, addWishlist } from '../assets/';

function ProductPage() {
  const path = process.env.PUBLIC_URL;
  const { itemId } = useParams();
  // 클릭한 제품의 번호의 데이터만 불러오는 함수
  const item = getItemId(itemId);
  const navigate = useNavigate();

  console.log(item);

  if (!item) {
    return <Navigate to="/products" />;
  }
  const handleAddWishList = () => {
    // alert(`저장이 되었습니당!`);
    addWishlist(item.id);
    navigate('/wishlist');
  };

  return (
    <section>
      <h1>{item.title}</h1>
      <img src={`${path}/images/${item.imgUrl}.jpg`} alt="{item.title}" />
      <button onClick={handleAddWishList}>위시리스트 저장</button>
    </section>
  );
}

export default ProductPage;
