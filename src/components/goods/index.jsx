import * as S from "./style";
import { SKYVITO_API_BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import { prettifyDate } from "../../libs/utils";

/*
const monthNames = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
*/

function Card(props) {
  const navigate = useNavigate();

  const openCardPageById = (cardId) => {
    return () => {
      navigate(`/adv/${cardId}`);
    };
  };

  return (
    <S.CardItem>
      <S.Card>
        <S.CardImg>
          <img
            src={props.imgSrc}
            alt="goods"
            onClick={openCardPageById(props.id)}
          />
        </S.CardImg>
        <div>
          <S.CardTitle onClick={openCardPageById(props.id)}>
            {props.title}
          </S.CardTitle>
          <S.CardPrice>{props.price}</S.CardPrice>
          <S.CardPlace>{props.place}</S.CardPlace>
          <S.CardDate>{props.date}</S.CardDate>
        </div>
      </S.Card>
    </S.CardItem>
  );
}

/*
//display as dd MMMM hh:mm for current year, Yesterday, Today otherwise dd.mm.yyyy hh:mm
const prettifyDate = (created_on) => {
  let date = "";
  const createdOn = new Date(created_on);
  const today = new Date();

  if (createdOn.getFullYear() === today.getFullYear()) {
    if (createdOn.getMonth() === today.getMonth()) {
      if (createdOn.getDate() === today.getDate()) {
        date = "Сегодня в";
      } else if (createdOn.getDate() - today.getDate() === 1) {
        date = "Вчера в";
      } else {
        date = `${createdOn.getDate()} ${monthNames[createdOn.getMonth()]}`;
      }
    } else {
      date = `${createdOn.getDate()} ${monthNames[createdOn.getMonth()]}`;
    }
  } else {
    date = createdOn.toLocaleDateString("ru-RU");
  }

  date += ` ${createdOn.getHours().toString().padStart(2, "0")}:${createdOn
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return date;
};
*/

export default function Goods({ goods = [] }) {
  return (
    <S.MainContent>
      {goods.length > 0 ? (
        <S.ContentCards>
          {goods.map((g) => {
            const date = prettifyDate(g.created_on);

            return (
              <Card
                key={g.id}
                id={g.id}
                title={g.title}
                price={g.price.toLocaleString("ru-RU", {
                  minimumFractionDigits: 0,
                  style: "currency",
                  currency: "RUB",
                })}
                place={g.user?.city}
                date={date}
                imgSrc={
                  g.images.length > 0
                    ? SKYVITO_API_BASE_URL + g.images[0].url
                    : "../no-image.png"
                }
              />
            );
          })}
        </S.ContentCards>
      ) : (
        <p>No ads to display{/* TODO: implement empty results section */}</p>
      )}
    </S.MainContent>
  );
}
