import { variables } from '../data/variables';

const { EN, RU, UA } = variables;

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
  const daysUa = [
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
    case UA:
      return daysUa[n];
  
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
  const monthsUa = [
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
    case UA:
      return monthsUa[n];
  
    default:
      return monthsEn[n];
  }
};

export const checkFieldValidity = (field: string, regExp: RegExp) => {
  if (field.match(regExp)) {
    return true;
  }

  return false;
};