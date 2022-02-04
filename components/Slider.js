import Image from 'next/image';
import image1 from '../public/1.png';
import styles from '../styles/Slider.module.css';

import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      // pauseOnHover: true,
    };
    return (
      <div className={styles.slider}>
        <section>
          <Slider {...settings}>
            <div>
              <Image src={image1} />
            </div>
            <div>
              <Image src={image1} />
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}
