import HeadTitle from '../components/HeadTitle';
import ProductItem from '../components/ProductItem';

// import data from "../assets/DB/initialData.json";
// const { LushItems } = data;

import { setLushItem } from '../assets';

function ProductList() {
  const LushItems = setLushItem();

  return (
    <div>
      <HeadTitle title="제품리스트" description="러쉬의 대표적인 상품을 소개합니다.">
        <div>
          {LushItems.map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </HeadTitle>
    </div>
  );
}

export default ProductList;
