/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContentSection.css';
import Link from '../Link';

class ContentSection extends Component {
  render() {
    const { imagePostion } = this.props;
    return (
      <div className={s.root}>
        <h3>
          {this.props.title}
        </h3>
        <div
          className={
            imagePostion && imagePostion == 'right'
              ? s.imageWrapperRight
              : s.imageWrapperLeft
          }
        >
          <img src={this.props.imgSrc} className={s.image} />
        </div>
        <div className={s.contentWrapper}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ContentSection);
