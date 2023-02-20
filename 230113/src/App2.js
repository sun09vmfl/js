import { Routes, Route } from "react-router-dom";
import Main from "./page2/Main";
import Member from "./page2/Member";
import MemberDetail from "./page2/MemberDetail";

function App2() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="member">
          {/* index
            경로를 설정하지 않는 대신 기본 하위 경로로 자동설정
            모든 레벨에서 사용 가능
            부모에 여러 개의 자식 라우트가 있는 경우 부모 경로에서 + '/'인 경우 설정
          */}
          <Route index element={<Member />} />
          <Route path=":memberId" element={<MemberDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App2;
