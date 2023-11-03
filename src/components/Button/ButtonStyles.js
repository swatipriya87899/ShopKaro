import styled from 'styled-components';

export const CustomButton = styled.button`
  font-size: 2rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid var(--dark-black);
  border-radius: 1rem;
  background-color: white;
  color: var(--dark-black);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--dark-black);
    color: var(--light);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
