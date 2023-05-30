import * as S from "./style";

const goods = [
  {
    title: "Ракетка для большого тенниса Triumph Pro ST",
    price: "2 200 ₽",
    place: "Санкт Петербург",
    date: "Сегодня в 10:45",
    img: "",
    id: "1",
  },
  {
    title: "Ракетка для большого тенниса Triumph Pro ST",
    price: "2 200 ₽",
    place: "Санкт Петербург",
    date: "Сегодня в 10:45",
    img: "",
    id: "2",
  },
];

function Card(props) {
  console.log("card props", props);
  return (
    <S.CardItem>
      <S.Card>
        <S.CardImg>
          <a href="#" target="_blank">
            <img src="#" alt="picture" />
          </a>
        </S.CardImg>
        <div>
          <a href="" target="_blank">
            <S.CardTitle>{props.title}</S.CardTitle>
          </a>
          <S.CardPrice>{props.price}</S.CardPrice>
          <S.CardPlace>{props.place}</S.CardPlace>
          <S.CardDate>{props.date}</S.CardDate>
        </div>
      </S.Card>
    </S.CardItem>
  );
}

export default function Goods(props) {
  return (
      <S.MainContent>
        <S.ContentCards>
          {goods.map((g) => {
            return (
              <Card
                key={g.id}
                title={g.title}
                price={g.price}
                place={g.place}
                date={g.date}
              ></Card>
            );
          })}
        </S.ContentCards>
      </S.MainContent>
  );
}
