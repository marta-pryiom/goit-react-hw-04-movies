import s from './ButtonTop.module.css';

export default function ButtonTop() {
  const onClickScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={s.Button}>
        <button>
          <img
            onClick={onClickScrollTop}
            src="https://img.icons8.com/officel/80/000000/double-up.png"
            alt="arrow up"
            className={s.Image}
          />
        </button>
      </div>
    </>
  );
}
