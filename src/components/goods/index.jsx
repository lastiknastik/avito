import * as S from "./style";
import { SKYVITO_API_BASE_URL } from "../../constants";

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

function Card(props) {
  return (
    <S.CardItem>
      <S.Card>
        <S.CardImg>
          <a href="#" target="_blank">
            <img src={props.imgSrc} alt="goods" />
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

export default function Goods({ goods = [] }) {
  return (
    <S.MainContent>
      <S.ContentCards>
        {goods.map((g) => {
          let date = "";
          const createdOn = new Date(g.created_on);
          const today = new Date();

          //display as dd MMMM hh:mm for current year, Yesterday, Today otherwise dd.mm.yyyy hh:mm
          if (createdOn.getFullYear() === today.getFullYear()) {
            if (createdOn.getMonth() === today.getMonth()) {
              if (createdOn.getDate() === today.getDate()) {
                date = "Сегодня";
              } else if (createdOn.getDate() - today.getDate() === 1) {
                date = "Вчера";
              } else {
                date = `${createdOn.getDate()} ${
                  monthNames[createdOn.getMonth()]
                }`;
              }
            } else {
              date = `${createdOn.getDate()} ${
                monthNames[createdOn.getMonth()]
              }`;
            }
          } else {
            date = createdOn.toLocaleDateString("ru-RU");
          }

          date += ` ${createdOn
            .getHours()
            .toString()
            .padStart(2, "0")}:${createdOn
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;

          return (
            <Card
              key={g.id}
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
            ></Card>
          );
        })}
      </S.ContentCards>
    </S.MainContent>
  );
}
