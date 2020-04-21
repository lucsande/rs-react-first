import React from 'react';
import { StyledCardContainer, Card } from './styles';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

interface CardProps {
  mainText: string | number | null;
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
          <h1 data-testid={`balance-${card.type}`}>R$ {card.mainText}</h1>
        </Card>
      ))}
    </StyledCardContainer>
  );
};

export default CardContainer;
