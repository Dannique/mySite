import './portfolio.scss';
import Card from "./Card";
import cards from "../../cardData";
import Arrow from '../arrowup/Arrow';

function createCard(card) {
  return (
    <Card
      key={card.id}
      normalCard={card.normalCard}
      classexpandedCard={card.classexpandedCard}
      classExpandedImg={card.classExpandedImg}
      info={card.info}
      expandedImg={card.expandedImg}
      imagesm={card.imagesm}
      titleh1={card.titleh1}
      expandedP={card.expandedP}
      expandedH2={card.expandedH2}
      anchor={card.anchor}
      anchorText={card.anchorText}
    />
  );
}


export default function Portfolio() {
    return (
      <div className="portfolio" id="portfolio">
      <div className="card-container">

      {cards.map(createCard)}

      </div>
      <Arrow/>
    </div>
    )
}
