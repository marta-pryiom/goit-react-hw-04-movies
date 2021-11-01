import s from './ButtonTop.module.css';

export default function ButtonTop() {
  // const [visible, setVisible] = useState(true);
  const onClickScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    // setVisible(false);
  };
  // useEffect(() => {
  //   if (movies.length < 20) {
  //     return;
  //   }
  //   setVisible(true);
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  //   setVisible(false);
  // }, [movies.length]);

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
