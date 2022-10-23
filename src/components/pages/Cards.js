import Card from "../card/Card";

export default function Cards(props) {
  const onlyBookmarked = props.showOnlyBookmarked;

  return (
    <div className="cards">
      {props.data.map((card) => {
        if (!card.isBookmarked && onlyBookmarked) {
          return <></>;
        }

        return (
          <Card
            isBookmarked={card.isBookmarked}
            question={card.question}
            answer={card.answer}
            tag={card.tag}
          />
        );
      })}
    </div>
  );
}
