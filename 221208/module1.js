/* 
css:
@import();
*/
// 외부 js 문서 가져오기
import { fn1 } from "./module2.js";
import { fn2 } from "./module2.js";
// default로 내보낸 경우 이름 변경 가능
import basic1 from "./module2.js";
import basic2 from "./module3.js";

fn1();
fn2();
basic1();
basic2();
