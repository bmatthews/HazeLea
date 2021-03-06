/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ContentSection from '../../components/ContentSection/';
import s from './Home.css';
import serviceUrl from './service.jpg';
import aboutUrl from './about.jpg';
import carousel1Url from './carousel1.jpg';
import carousel2Url from './carousel2.jpg';
import carousel3Url from './carousel3.jpg';
import carousel4Url from './carousel4.jpg';
import carousel5Url from './carousel5.jpg';
import carousel6Url from './carousel6.jpg';
import Slider from 'react-slick';

class Home extends React.Component {
  static propTypes = {};

  render() {
    const contentLeft = { float: 'left', height: 'auto', maxWidth: '100%' };
    const contentRight = { float: 'right', height: 'auto', maxWidth: '100%' };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false
    };
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title} />
          <Slider {...settings}>
            <div className={s.images}>
              <img className={s.image} src={carousel1Url} />
            </div>
            <div className={s.images}>
              <img className={s.image} src={carousel2Url} />
            </div>
            <div className={s.images}>
              <img className={s.image} src={carousel3Url} />
            </div>
            <div className={s.images}>
              <img className={s.image} src={carousel6Url} />
            </div>
            <div className={s.images}>
              <img className={s.image} src={carousel4Url} />
            </div>
            <div className={s.images}>
              <img className={s.image} src={carousel5Url} />
            </div>
          </Slider>
          <div className={s.contentWrapper}>
            <ContentSection
              title="About"
              imgSrc={aboutUrl}
              imagePostion="right"
            >
              <p>
                Haze Lea is a floral design business run by myself, Katherine,
                based in the Cotswolds. I specialise in creating bespoke floral
                designs with an elegant take on natural beauty for your wedding
                or event.
              </p>
              <p>
                I broke away from my background in events management and
                hospitality for a period of travelling and getting lost
                somewhere between the ocean and mountains. I returned to the UK
                with a passion for all things mother nature and after training
                at McQueen’s in London, I decided that the time was right to
                follow my heart.
              </p>
              <p>
                Haze Lea was created out of a newly found need to unite my
                passions for design, nature, and the beauty behind people’s
                expressions and moments.
              </p>
              <p>
                I love: textural berries, trailing vines, twisted hazel and all
                things perfectly imperfect. Life is about balance…. the tamed
                and the untamed and I find happiness in finding this balance in
                nature and my work.
              </p>
            </ContentSection>
            <ContentSection title="Service" imgSrc={serviceUrl}>
              <p>
                I offer a fully bespoke floral design service for your wedding
                or event. We’ll start with a creative consultation where I get
                to understand you, your taste and inspirations. I will work
                closely with you or your event planner to translate your unique
                vision into living works of art with a cohesive style. Your
                flowers will help to bring every key visual aspect of your day
                together for a beautiful experience for you and your guests on
                the day.
              </p>
              <p>
                Need to brighten up your business? I also offer my fully bespoke
                floral contract design service to any business who wishes to
                offer the beauty of flowers to their customers on a regular
                basis. I will work closely with each client to understand your
                individual floral needs.
              </p>
            </ContentSection>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
