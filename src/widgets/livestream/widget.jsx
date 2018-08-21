import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseWidget from '../base';

import './styles.scss';

export default class LivestreamWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.state = { value: '---' };
  }

  render() {
    const classList = classNames(...this.classList, 'livestream__webcam');

    return (
      <div className={classList}>
        <div className="widget_flex">
          <iframe height="350px" width="550px" alt="livestream" className="widget__img" align="middle" id="camera"
               src={this.props.src}/>
        </div>
      </div>
    );
  }
}

LivestreamWidget.propTypes = {
  title: PropTypes.string.isRequired,
};