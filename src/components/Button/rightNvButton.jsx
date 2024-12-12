import React from 'react';
import RightArrow from '../../assests/rightIcon.svg'
const RightNavButton = ({ onClick }) => (
  <button  onClick={onClick}>
    <img src={RightArrow} alt="Right" />
  </button>
);

export default RightNavButton;
