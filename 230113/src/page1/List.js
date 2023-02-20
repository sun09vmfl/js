import dataList from "./dataList";
import { useParams } from "react-router-dom";

function List() {
  const { name } = useParams();

  return (
    <div>
      <h2>List</h2>
      <h3 style={{ color: "red" }}>{name} 값 받기</h3>
      {dataList
        .filter((item) => item.title !== name)
        .map((item) => (
          <section key={item.id}>
            <h4>{item.info}</h4>
          </section>
        ))}
    </div>
  );
}

export default List;
