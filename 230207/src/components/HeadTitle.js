function HeadTitle({ title = '무제', description = '', children }) {
  return (
    <>
      <header>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <main>{children}</main>
    </>
  );
}

export default HeadTitle;
