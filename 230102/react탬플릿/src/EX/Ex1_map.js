function Ex1Map() {
  // const colors = ['tomato','orange','salmon','lightskyblue'];
  const colors = [
    { no: 1, bg: 'tomato' },
    { no: 2, bg: 'orange' },
    { no: 3, bg: 'salmon' },
    { no: 4, bg: 'lightskyblue' },
  ];
  return (
    <>
      <h1>.map() 연습</h1>
      <ul style={{ fontWeight: 'bold', fontSize: 40, lineHeight: 1.6 }}>
        {/* {colors.map((color,idx) => <li key={idx}>{color}</li>)} */}
        {colors.map(color => {
          console.log(color);
          // return <li key={color.no}>{color.bg}</li>

          const { no, bg } = color;
          return (
            <li key={no} style={{ backgroundColor: bg }}>
              {bg}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ex1Map;
