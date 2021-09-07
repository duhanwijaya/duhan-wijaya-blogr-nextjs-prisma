export const LocalNews = () => {
  return (
    <div className="darkgrey-bg text-center flex items-center justify-center">
      <span>Berita Olahraga Nasional</span>
      <a>Lihat Semua</a>
      <div className='flex flex-col'>
        <div>
          <img src="./images/minsoc-1.jpeg" />
          <span>Judul Berita 1</span>
        </div>
        <div>
          <img src="./images/minsoc-2.jpeg" />
          <span>Judul Berita 2</span>
        </div>
      </div>
    </div>
  );
};
