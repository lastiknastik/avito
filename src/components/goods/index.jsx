import * as S from "./style";
import { SKYVITO_API_BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import { prettifyDate, prettifyPrice } from "../../libs/utils";
import noImgPng from "../../static/img/no-image.png";

function  Card(props) {
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
                price={prettifyPrice(g.price)}
                place={g.user?.city}
                date={date}
                imgSrc={
                  g.images.length > 0
                    ? SKYVITO_API_BASE_URL + g.images[0].url
                    : noImgPng
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
