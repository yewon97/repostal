'use client';
import Slider from 'react-slick';
import Image from 'next/image';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundImage: "url('/images/banner_arrow_next.png')",
        position: 'absolute',
        width: '75px',
        height: '75px',
        transform: 'translate(25%, -50%)',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundImage: "url('/images/banner_arrow_prev.png')",
        position: 'absolute',
        width: '75px',
        height: '75px',
        zIndex: 10,
        transform: 'translate(-25%, -50%)',
      }}
      onClick={onClick}
    />
  );
}

export default function MainBanner() {
  const settings = {
    className: 'relative w-[1200px] bx-wrapper',
    dots: true,
    infinite: true,
    speed: 100,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      <div className="relative w-[1200px] h-[440px]">
        <Image
          src="/images/banner_01.png"
          alt=""
          quality={100}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="relative w-[1200px] h-[440px]">
        <Image
          src="/images/banner_02.png"
          alt=""
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="relative w-[1200px] h-[440px]">
        <Image
          src="/images/banner_03.png"
          alt=""
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="relative w-[1200px] h-[440px]">
        <Image
          src="/images/banner_04.png"
          alt=""
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </Slider>
  );
}
