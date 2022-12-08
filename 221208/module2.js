// 1. 함수 직접 내보내기
export function fn1() {
  console.log("fn1함수");
}

// 2.
function fn2() {
  console.log("fn2함수");
}
export { fn2 };

// 3. default
export default function fn3() {
  console.log("fn3함수");
}
