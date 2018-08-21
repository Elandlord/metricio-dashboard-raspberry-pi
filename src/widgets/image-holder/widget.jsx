import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseWidget from '../base';

import './styles.scss';

export default class ImageHolderWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.state = { value: '---' };
  }

  render() {
    const classList = classNames(...this.classList, 'image-holder__webcam');

    return (
      <div className={classList}>
        <div className="widget_flex">
          <img height="350px" width="550px" alt="image-holder" className="widget__img" align="middle" id="camera"
               src={this.props.src}/>
        </div>
      </div>
    );
  }
}

ImageHolderWidget.propTypes = {
  title: PropTypes.string.isRequired,
};