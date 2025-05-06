
export const pricingFeatures = [
  {
    title: "Список матчей без вероятностей",
    basic: true,
    standard: true,
    premium: true
  },
  {
    title: "Прогнозы с вероятностями",
    basic: false,
    standard: true,
    premium: true
  },
  {
    title: "Базовая статистика",
    basic: true,
    standard: true,
    premium: true
  },
  {
    title: "Базовая аналитика",
    basic: false,
    standard: true,
    premium: true
  },
  {
    title: "Калькулятор прибыли",
    basic: true,
    standard: true,
    premium: true
  },
  {
    title: "Углубленная аналитика",
    basic: false,
    standard: false,
    premium: true
  },
  {
    title: "Персональные рекомендации",
    basic: false,
    standard: false,
    premium: true
  },
  {
    title: "VIP-прогнозы",
    basic: false,
    standard: false,
    premium: true
  },
  {
    title: "Приоритетная поддержка",
    basic: false,
    standard: false,
    premium: true
  }
];

// Добавляем цены тарифов для использования в разных частях приложения
export const pricingPlans = {
  basic: {
    price: "990 ₽",
    description: "Идеальное решение для начинающих игроков",
    popular: false
  },
  standard: {
    price: "2 490 ₽",
    description: "Полный доступ к AI-прогнозам и инструментам",
    popular: true
  },
  premium: {
    price: "4 990 ₽",
    description: "Максимальные возможности для профессионалов",
    popular: false
  }
};
