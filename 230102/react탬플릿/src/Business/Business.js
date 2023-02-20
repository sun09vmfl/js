import './Business.css';
import BusinessList from './BusinessList';
import './Business2';

function Business() {
  return (
    <article className="kyungdong">
      <h1>business</h1>
      <p class="txt">고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
      <div>
        {BusinessList.map(item => (
          <ul key={item.id}>
            <li>
              <img src={item.img} />
              <h4>{item.title}</h4>
              <h4>{item.Engtitle}</h4>
              <hr />
              <p>{item.info}</p>
            </li>
          </ul>
        ))}
      </div>
      <div className="btn">View More</div>
    </article>
  );
}

//최상위 컴포넌트
export default Business;
