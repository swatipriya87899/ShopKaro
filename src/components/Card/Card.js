import React from 'react';
import { StyledCard, CardImage, Title, Subtitle, CardDetails, Button } from './CardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';

const Card = ({ title, image, price, rating,productId }) => {
    return (
        <StyledCard>

            {/* Card Image */}
            <CardImage src={image} alt="Product" />

            {/* Card Details- Title,Subtitle,price,rating */}
            <CardDetails>
                <Title>{title}</Title>
                <div>
                    <Rating value={rating.rate} />
                    <Subtitle>$ {price}</Subtitle>
                </div>
            </CardDetails>

            {/* Visit Product Details Page */}
            <Link to={`/details/${productId}`}><Button>View Product</Button></Link>
        </StyledCard>
    )
}

export default Card
