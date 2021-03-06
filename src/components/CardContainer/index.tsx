import React from 'react';
import { StyledCardContainer, Card } from './styles';

interface CardProps {
  mainText: number | string | null;
  title: string;
  type: string;
  bgColor?: string;
  textColor?: string;
}

interface CardContainerProps {
  cards: CardProps[];
}

const CardContainer: React.FC<CardContainerProps> = ({
  cards,
}: CardContainerProps) => {
  return (
    <StyledCardContainer>
      {cards.map((card) => (
        <Card
          bgColor={card.bgColor}
          textColor={card.textColor}
          key={card.type}
        >
          <header>
            <p>{card.title}</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/${card.type}.svg`}
              alt={card.type}
            />
          </header>
          <h1 data-testid={`balance-${card.type}`}>{card.mainText}</h1>
        </Card>
      ))}
    </StyledCardContainer>
  );
};

export default CardContainer;
