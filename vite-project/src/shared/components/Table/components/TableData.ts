export const tableDataTasks: ITableData[] = [
  {
    type: 1,
    name: "Выезд на точку для стимулирования выдач",
    priority: "Высокий",
    time: "4 часа",
    firstCondition:
      "Дата выдачи последней карты более 7 дней назад, при этом есть одобренные заявки",
    secondCondition: "Дата выдачи последней карты более 14 дней назад",
    employeeLevels: ["Сеньёр"],
  },
  {
    type: 2,
    name: "Обучение агента",
    priority: "Средний",
    time: "2 часа",
    firstCondition:
      "Отношение кол-ва выданных карт к одобренным заявкам менее 50%, если выдано больше 0 карт",
    secondCondition: "-",
    employeeLevels: ["Сеньёр", "Мидл"],
  },
  {
    type: 3,
    name: "Доставка карт и материалов",
    priority: "Низкий",
    time: "1.5 часа",
    firstCondition: "Точка подключена вчера",
    secondCondition: "Карты и материалы не доставлялись",
    employeeLevels: ["Джун"],
  },
];

export interface ITableData {
  type: number;
  name: string;
  priority: string;
  time: string;
  firstCondition: string;
  secondCondition: string;
  employeeLevels: string[];
}

export const tableDataAddresses = [
  {
    number: 43,
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    date: "Давно",
    isDelivered: "Да",
    amountDays: 0,
    amountApproved: 3,
    amountCards: 4,
  },
  {
    number: 13,
    address: "ул. Уральская, д. 162",
    date: "Вчера",
    isDelivered: "Нет",
    amountDays: 15,
    amountApproved: 22,
    amountCards: 16,
  },
  {
    number: 43,
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    date: "Давно",
    isDelivered: "Да",
    amountDays: 0,
    amountApproved: 3,
    amountCards: 4,
  },
  {
    number: 43,
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    date: "Давно",
    isDelivered: "Да",
    amountDays: 0,
    amountApproved: 3,
    amountCards: 4,
  },
];
