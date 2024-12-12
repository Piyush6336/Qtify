import React from 'react';
import LeftArrow from '../../assests/leftIcon.svg'

const LeftNavButton = ({ onClick }) => (
  <button  onClick={onClick}>
    <img src={LeftArrow} alt="Left" />
  </button>
);

export default LeftNavButton;
