import '@/components/Card.scss';

const Card = ({ children, title, description }) => {

  let showCardHeader = (title || description);
  let cardTitle = null;
  let cardDescription = null;

  if (showCardHeader && title) {
    cardTitle = <div className="card__title">{title}</div>;
  }

  if (showCardHeader && description) {
    cardDescription = <div className="card__description">{description}</div>;
  }

  return (
      <div className="card">
        {(showCardHeader) && (
          <div className="card__header">
            {cardTitle}
            {cardDescription}
          </div>
        )}
        <div className="card__content">
          {children}
        </div>
      </div>
  );
}

export default Card;