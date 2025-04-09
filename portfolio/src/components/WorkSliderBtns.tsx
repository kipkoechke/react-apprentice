import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

function WorkSliderBtns({
  containerStyles,
  btnStyles,
  iconStyles,
}: WorkSliderBtnsProps) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}

export default WorkSliderBtns;
