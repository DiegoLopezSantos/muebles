import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: '100%', maxHeight: 450, margin: '0 auto' }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/cocina-madera-estudio-nualart-65d883cc0c775.jpg?crop=1xw:1xh;center,top&resize=980:*"
            alt="Image 1"
            style={{ width: '100%', objectFit: 'cover', maxHeight: 400 }}
          />
        </div>
        <div>
          <img
            src="https://mubak.com/modules/gcmsbuilder/views/img/thumb/f25d74b0553a4701d57268b636cb54b0959b69fb.jpg"
            alt="Image 2"
            style={{ width: '100%', objectFit: 'cover', maxHeight: 400 }}
          />
        </div>
        <div>
          <img
            src="https://mubak.com/modules/gcmsbuilder/views/img/thumb/f25d74b0553a4701d57268b636cb54b0959b69fb.jpg"
            alt="Image 3"
            style={{ width: '100%', objectFit: 'cover', maxHeight: 400 }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
