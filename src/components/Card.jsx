import '@/components/Card.scss';

const Card = ({ children, title, description }) => {
  return(
    <>
      <div className="card">
        <div className="card__header">
          <div className="card__title">{ title }</div>
          <div className="card__description">{ description }</div>
        </div>
        <div className="card__content">
          { children }
        </div>
      </div>
    </>
  );
}

export default Card;