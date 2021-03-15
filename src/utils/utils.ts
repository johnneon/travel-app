import { variables } from '../data/variables';

const { EN, RU, UK } = variables;

// Adding 0 for less 10 num
export const addZero = (n: any) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

// Check day
export const dayName = (n: number, lang: string) => {
  const daysEn = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysRu = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const daysUk = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];

  switch (lang) {
    case EN:
      return daysEn[n];
    case RU:
      return daysRu[n];
    case UK:
      return daysUk[n];
  
    default:
      return daysEn[n];
  }
};

// Check month
export const monthName = (n: number, lang: string) => {
  const monthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthsRu = [
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
  const monthsUk = [
    "Січня",
    "Лютий",
    "Марта",
    "Квітня",
    "Мая",
    "Червня",
    "Липня",
    "Августа",
    "Вересня",
    "Жовтня",
    "Листопада",
    "Грудень",
  ];

  switch (lang) {
    case EN:
      return monthsEn[n];
    case RU:
      return monthsRu[n];
    case UK:
      return monthsUk[n];
  
    default:
      return monthsEn[n];
  }
};