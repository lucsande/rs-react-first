import styled from 'styled-components';

interface CardProps {
  bgColor?: string;
  textColor?: string;
}

export const StyledCardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ bgColor }: CardProps): string => (bgColor || '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ bgColor, textColor }: CardProps): string => (bgColor ? textColor || '#fff' : '#363F5F')};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;
