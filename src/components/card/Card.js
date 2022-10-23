import "./Card.css";
import { useState } from "react";

function Card(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  console.log(props);

  /**
   *[
   * <li className="card__tag-list-item">strongman</li>,
   * <li className="card__tag-list-item">gains</li>,
   * <li className="card__tag-list-item">Powerlifting</li>
   * ]
   *
   * [strongmag, gains , powerlifting].map((tag)=>{})
   */
  const myTags = props.tag.map((value) => {
    return <li className="card__tag-list-item">{value}</li>;
  });

  const toggleState = () => {
    if (showAnswer === true) {
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
  };

  // function getMyTags() {
  //   const results = props.tag.map((value) => {
  //     return <li className="card__tag-list-item">{value}</li>;
  //   });

  //   return results;
  // }

  return (
    <section className="card">
      <h2>{props.question}</h2>
      <button
        className="card__button-answer"
        type="button"
        onClick={toggleState}
      >
        {showAnswer ? "hide answer" : "show answer"}
      </button>
      <p className={`card__answer ${showAnswer ? "card__answer--active" : ""}`}>
        {props.answer}
      </p>
      <ul className="card__tag-list">{myTags}</ul>
      <div className="card__button-bookmark">
        <button
          className={`card__bookmark ${
            props.isBookmarked ? "card__bookmark--active" : ""
          }`}
          aria-label="bookmark"
          type="button"
        >
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Card;
