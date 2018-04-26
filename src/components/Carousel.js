import React from 'react';
import { Carousel } from 'antd';


function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div><img src="https://i.imgur.com/hZ3AlAn.jpg" alt="dog" /></div>
      <div><img src="https://i.imgur.com/XsaLqi1.jpg" alt="dog2" /></div>
      <div><img src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg" alt="dog3" /></div>
      <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/American_Eskimo_Dog.jpg/1527px-American_Eskimo_Dog.jpg" alt="dog4" /></div>
    </Carousel>
  );
  // }
};

export default CarouselComp;
