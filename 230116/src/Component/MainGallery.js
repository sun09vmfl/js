import './mainGallery.scss';

function MainGallery({ gallery }) {
  return (
    <article className="mainGallery">
      {gallery.map(item => (
        <div key={item.id} className={`galleryBg bg${item.id}`}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </article>
  );
}

export default MainGallery;
