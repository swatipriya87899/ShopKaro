import styled from 'styled-components';

export const StyledCard = styled.div`
  width:27rem;
  min-height:40rem;
  padding: 1rem;
  position:relative;
  margin:1rem 0px;
  border: 1px solid var(--gray)
`;

export const CardImage = styled.img`
width: 100%;
height: 70%;
object-fit: fill;
`;

export const Title = styled.h1`
  color: #000;
  font-family: Poppins;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
`;

export const Subtitle = styled.span`
  color: var(--dark-black);
  font-family: Poppins;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CardDetails = styled.div`
  div{
    display:flex;
    justify-content:space-between;
    align-items:center
  }
`;

export const Button = styled.button`
  border-radius: 6px;
  background: var(--dark-black);
  color:var(--light);
  border: none;
  padding: 10px 15px;
  height: max-content;
  font-size:1.4rem;
  font-weight:bold;
  display:block;
  margin:10px auto;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;
