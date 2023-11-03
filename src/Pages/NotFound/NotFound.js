import React from 'react';
import {
  NotFoundContainer,
  NotFoundText,
  NotFoundImage,
  NotFoundDescription,
} from './NotFoundStyles';
// import NotFoundImg from './not-found-image.png'; // Replace with your image path

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>404 Not Found</NotFoundText>
      <NotFoundImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQny-yCDZwpwAtrWIxA0cziujz-dTd3kYcoLTNEu5AOdhInS-ivt2-OXQvadJaScT2H0Zs&usqp=CAU' alt="Not Found" />
      <NotFoundDescription>The page you are looking for does not exist.</NotFoundDescription>
    </NotFoundContainer>
  );
};

export default NotFound;
