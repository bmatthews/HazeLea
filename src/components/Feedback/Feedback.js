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
                <a href="mailto:hello@hazelea.co.uk">hello@hazelea.co.uk</a>
              </dd>
              <dt>t.</dt>
              <dd>
                <a href="tel:+447598 835 544">07598 835 544</a>
              </dd>
            </dl>
            <hr />
            <h4 className={s.contactMe}>Lets be friends</h4>
            <i className="fa fa-instagram" aria-hidden="true" />
            <i
              className="fa fa-facebook-square fa-inverse"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
