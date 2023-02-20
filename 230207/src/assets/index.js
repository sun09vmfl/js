import data from './DB/initialData.json';
const { LushItems } = data;

export function setLushItem() {
  return LushItems;
}

// 클릭한 제품의 번호와 러쉬 아이템 데이터 문서의 id와 일치하면 반환
export function getItemId(itemId) {
  return LushItems.find(lushItem => lushItem.id === itemId);
}

const WISHLIST_KEY = '러쉬_위시리스트';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}');

export function addWishlist(itemId) {
  wishlist[itemId] = LushItems[itemId].title;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}
export function delWishlist(itemId) {
  delete wishlist[itemId];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return LushItems.filter(item => wishlist[item.id]);
}
