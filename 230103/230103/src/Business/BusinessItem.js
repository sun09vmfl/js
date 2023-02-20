function BusinessItem({ item }) {
  const { imgUrl, title, subTitle, des } = item;
  const path = process.env.PUBLIC_URL;

  return (
    <li className="businessList">
      <a href="#">
        <div className="businessimg">
          <img src={path + imgUrl} alt={title} />
        </div>
        <h3>
          <strong>{title}</strong>
          {subTitle}
        </h3>
        <p>{des}</p>
      </a>
    </li>
  );
}

export default BusinessItem;
