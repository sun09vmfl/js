import Member from "./Member";
import { useAxios } from "./useAxios";

function Main() {
  const { data } = useAxios("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h2>Main</h2>
      <h3>회원수 : {data.length}</h3>
      {data.map((item) => (
        <Member key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Main;
