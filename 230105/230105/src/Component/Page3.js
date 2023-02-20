function Page3({ userName, age, addr, tel, job, email, inter, gender, onNext, onPrev }) {
  return (
    <>
      <ul>
        <li>
          <strong>이름: </strong>
          <em>{userName}</em>
        </li>
        <li>
          <strong>나이: </strong>
          <em>{age}</em>
        </li>
        <li>
          <strong>주소: </strong>
          <em>{addr}</em>
        </li>
        <li>
          <strong>연락처: </strong>
          <em>{tel}</em>
        </li>
        <li>
          <strong>직업: </strong>
          <em>{job}</em>
        </li>
        <li>
          <strong>이메일: </strong>
          <em>{email}</em>
        </li>
        <li>
          <strong>성별: </strong>
          <em>{gender}</em>
        </li>
        <li>
          <strong>관심분야: </strong>
          <em>{inter}</em>
        </li>
      </ul>
      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
}

export default Page3;
