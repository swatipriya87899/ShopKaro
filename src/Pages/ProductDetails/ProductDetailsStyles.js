import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  border-radius: 0.8rem;
  padding: 20px; 
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  height: auto;
  max-width: 100%; /* make the image responsive */
  max-height:60vh;
  border-radius: 0.8rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin: 20px 0;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  color: #555;
  margin-bottom: 20px;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const RatingValue = styled.span`
  font-size: 1.8rem;
  margin-right: 10px;
`;

export const StarContainer = styled.span`
  color: #FFD700;
  font-size: 1.8rem;
`;
