import { useRef, useState } from 'react';
import BounceBall from './BounceBall';
import Main from './Main';

const RightColumn = ({scroll, setScroll}) => {
  const divRef = useRef(null);
  const [shown, setShown] = useState(false)
  return (
    <>
      <Main divRef={divRef} shown={shown} setShown={setShown} scroll={scroll} setScroll={setScroll} />
      {scroll > 500 && <BounceBall divRef={divRef} />}
    </>
  );
};

export default RightColumn;
