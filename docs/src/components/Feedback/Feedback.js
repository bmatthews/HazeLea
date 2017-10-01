/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

const facebook = require('react-icons/lib/fa/facebook');
const instagram = require('react-icons/lib/fa/instagram');

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h4 className={s.contactMe}>Contact me:</h4>
          <div className={s.contactDetailsWrapper}>
            <dl className={s.contactDetails}>
              <dt>e.</dt>
              <dd>
                <a className={s.link} href="mailto:hello@hazelea.co.uk">
                  hello@hazelea.co.uk
                </a>
              </dd>
              <dt>t.</dt>
              <dd>
                <a className={s.link} href="tel:+447598 835 544">
                  07598 835 544
                </a>
              </dd>
            </dl>
            <hr />
            <h4 className={s.contactMe}>Lets be friends</h4>
            <a href="https://www.facebook.com/hazeleafloraldesign/">
              {React.createElement(facebook, null)}
            </a>
            <a href="https://www.instagram.com/hazelea_designs/">
              {React.createElement(instagram, null)}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
