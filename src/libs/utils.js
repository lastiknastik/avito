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

//display as dd MMMM hh:mm for current year, Yesterday, Today otherwise dd.mm.yyyy hh:mm
export const prettifyDate = (created_on) => {
  let date = "";
  const createdOn = new Date(created_on);
  const today = new Date();

  if (createdOn.getFullYear() === today.getFullYear()) {
    if (createdOn.getMonth() === today.getMonth()) {
      if (createdOn.getDate() === today.getDate()) {
        date = "Сегодня";
      } else if (createdOn.getDate() - today.getDate() === 1) {
        date = "Вчера";
      } else {
        date = `${createdOn.getDate()} ${monthNames[createdOn.getMonth()]}`;
      }
    } else {
      date = `${createdOn.getDate()} ${monthNames[createdOn.getMonth()]}`;
    }
  } else {
    date = createdOn.toLocaleDateString("ru-RU");
  }

  date += ` в ${createdOn.getHours().toString().padStart(2, "0")}:${createdOn
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return date;
};
