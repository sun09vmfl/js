function Page2({ data, changeInput, onNext, onPrev }) {
  const { job, email, inter, gender } = data;

  return (
    <>
      <p>
        <label>직업: </label>
        <input type="text" value={job} name="job" onChange={changeInput} />
      </p>
      <p>
        <label>이메일: </label>
        <input type="text" value={email} name="email" onChange={changeInput} />
      </p>
      <p>
        <label>관심분야: </label>
        <input type="text" value={inter} name="inter" onChange={changeInput} />
      </p>
      <p>
        <label>성별: </label>
        <input type="text" value={gender} name="gender" onChange={changeInput} />
      </p>
      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
}

export default Page2;
