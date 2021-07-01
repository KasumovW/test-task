const initialState = {
  data: [
    {
      name: "Пр тр",
      group: {
        sum: 'Группа. Источников 1',
        name: "name",
        logo: "https://testing1.alytics.ru/icons/usersgroup.png",
        impressions: "-",
        clicks: 1716,
        sessions: 1716,
        ctr: "-",
        priceClick: 0,
        expenses: 0,
        value1: 1047.93,
        cpa: 72,
        revenue: 11509,
        value2: 89,
        cpf: 85,
        cr: 1,
      },
      logo: "https://testing1.alytics.ru/icons/usersgroup.png",
      impressions: "-",
      clicks: 1716,
      sessions: 1716,
      ctr: "-",
      priceClick: 0,
      expenses: 0,
      value1: 1047.93,
      cpa: 72,
      revenue: 11509,
      value2: 89,
      cpf: 85,
      cr: 1,
      id: 1
    },
    {
      name: "Яндекс Директ",
      group: {
        sum: 'Группа. Источников 1',
        name: "name",
        logo: "https://testing1.alytics.ru/icons/usersgroup.png",
        impressions: "-",
        clicks: 1716,
        sessions: 1716,
        ctr: "-",
        priceClick: 0,
        expenses: 0,
        value1: 1047.93,
        cpa: 72,
        revenue: 11509,
        value2: 89,
        cpf: 85,
        cr: 1,
      },
      logo: "https://direct.yandex.ru/favicon.ico",
      impressions: "299571",
      clicks: 843,
      sessions: 1388,
      ctr: 0.28,
      priceClick: 35.9,
      expenses: 30266,
      value1: 184.64,
      cpa: 16,
      revenue: 423713,
      value2: 28,
      cpf: 1,
      cr: 3,
      id: 2
    },
    {
      name: "Органический поиск",
      group: {
        sum: 'Группа. Источников 1',
        name: "name",
        logo: "https://testing1.alytics.ru/icons/usersgroup.png",
        impressions: "-",
        clicks: 1716,
        sessions: 1716,
        ctr: "-",
        priceClick: 0,
        expenses: 0,
        value1: 1047.93,
        cpa: 72,
        revenue: 11509,
        value2: 89,
        cpf: 85,
        cr: 1,
      },
      logo: "https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png",
      impressions: "-",
      clicks: 1370,
      sessions: 1370,
      ctr: "-",
      priceClick: 0,
      expenses: 0,
      value1: 332.41,
      cpa: 0,
      revenue: 648828,
      value2: 14,
      cpf: 0,
      cr: 1,
      id: 3
    },
    {
      name: "Google Ads",
      group: {
        sum: 'Группа. Источников 1',
        name: "name",
        logo: "https://testing1.alytics.ru/icons/usersgroup.png",
        impressions: "-",
        clicks: 1716,
        sessions: 1716,
        ctr: "-",
        priceClick: 0,
        expenses: 0,
        value1: 1047.93,
        cpa: 72,
        revenue: 11509,
        value2: 89,
        cpf: 85,
        cr: 1,
      },
      logo: "https://www.google.com/images/branding/product/1x/ads_24dp.png",
      impressions: 5272,
      clicks: 252,
      sessions: 449,
      ctr: 4.78,
      priceClick: 58.77,
      expenses: 14809,
      value1: 107.13,
      cpa: 13,
      revenue: 242913,
      value2: 10,
      cpf: 1,
      cr: 3,
      id: 4
    },
    {
      name: "Переходы с сайтов",
      group: {
        sum: 'Группа. Источников 1',
        name: "name",
        logo: "https://testing1.alytics.ru/icons/usersgroup.png",
        impressions: "-",
        clicks: 1716,
        sessions: 1716,
        ctr: "-",
        priceClick: 0,
        expenses: 0,
        value1: 1047.93,
        cpa: 72,
        revenue: 11509,
        value2: 89,
        cpf: 85,
        cr: 1,
      },
      logo: "https://testing1.alytics.ru/icons/groups/927a0bd0-bc5a-4722-beb7-c1d520c7ec72.png",
      impressions: "-",
      clicks: 220,
      sessions: 220,
      ctr: "-",
      priceClick: 0,
      expenses: 0,
      value1: 55.11,
      cpa: 0,
      revenue: 109487,
      value2: 4,
      cpf: 0,
      cr: 1,
      id: 5
    },
    {
      name: "Email-рассылки",
      group: {
        sum: 'Группа. Источников 1',
        name: "name",
        logo: "https://testing1.alytics.ru/icons/usersgroup.png",
        impressions: "-",
        clicks: 1716,
        sessions: 1716,
        ctr: "-",
        priceClick: 0,
        expenses: 0,
        value1: 1047.93,
        cpa: 72,
        revenue: 11509,
        value2: 89,
        cpf: 85,
        cr: 1,
      },
      logo: "-",
      impressions: "-",
      clicks: 84,
      sessions: 84,
      ctr: "-",
      priceClick: 75,
      expenses: 6300,
      value1: 15.4,
      cpa: 40,
      revenue: 29021.45,
      value2: 2,
      cpf: 3,
      cr: 2,
      id: 6
    }
  ]
}

export function data(state = initialState, action) {
  switch (action) {

    default:
      return state;
  }
}