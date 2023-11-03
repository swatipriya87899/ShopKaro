import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledRating } from './RatingStyles';



const Rating = ({ value }) => {
  const renderStars = (value) => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={stars.length} />);
    }

    return stars;
  };

  return <StyledRating>{renderStars(value)}</StyledRating>;
};

export default Rating;
