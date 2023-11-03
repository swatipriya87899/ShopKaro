import React from 'react';
import { CustomButton } from './ButtonStyles';

const Button = ({label,onClickHandler}) => {
  return (
    <div>
      <CustomButton onClick={()=>onClickHandler()}>{label}</CustomButton>
    </div>
  );
};

export default Button;
