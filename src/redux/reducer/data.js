const initialState = {
  data: [
    {
      name: "Пр тр",
      online: false,
      collapsed: "Группа. Источников 1",
      group: [
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 12,
          sessions: 45,
          ctr: "-",
          priceClick: 78,
          expenses: 789,
          value1: 6.54,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
      ],
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
      id: 1,
    },
    {
      name: "Яндекс Директ",
      online: true,
      collapsed: "Платная реклама",
      group: null,
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
      id: 2,
    },
    {
      name: "Органический поиск",
      online: false,
      collapsed: "Группа. Источников 7",
      group: [
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 546,
          sessions: 789,
          ctr: "-",
          priceClick: 6456,
          expenses: 5,
          value1: 6.4564564,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 45.54,
          cpa: 0,
          revenue: 56,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 12,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.54,
          cpa: 0,
          revenue: 546,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 23,
          value1: 6.54,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.54,
          cpa: 0,
          revenue: 778,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.213,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.54,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
      ],
      logo: "https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png",
      impressions: "-",
      clicks: 1370,
      sessions: 1370,
      ctr: "-",
      priceClick: 0,
      expenses: 0,
      value1: 332.41,
      cpa: 0,
      revenue: 688,
      value2: 14,
      cpf: 0,
      cr: 1,
      id: 3,
    },
    {
      name: "Google Ads",
      online: true,
      collapsed: "Платная реклама",
      group: null,
      logo: "https://www.google.com/images/branding/product/1x/ads_24dp.png",
      impressions: 45,
      clicks: 252,
      sessions: 449,
      ctr: 4.78,
      priceClick: 58.8,
      expenses: 89,
      value1: 107.13,
      cpa: 13,
      revenue: 7,
      value2: 10,
      cpf: 1,
      cr: 3,
      id: 4,
    },
    {
      name: "Переходы с сайтов",
      online: false,
      collapsed: "Группа. Источников 6",
      group: [
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 377,
          ctr: "-",
          priceClick: 88,
          expenses: 5,
          value1: 6.4,
          cpa: 0,
          revenue: 75,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.54,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.54,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.54,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.54,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "name",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 1,
          sessions: 3,
          ctr: "-",
          priceClick: 4,
          expenses: 5,
          value1: 6.54,
          cpa: 0,
          revenue: 7,
          value2: 8,
          cpf: 9,
          cr: 1,
        },
      ],
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
      id: 5,
    },
    {
      name: "Email-рассылки",
      online: false,
      collapsed: "Группа. Источников 5",
      group: [
        {
          collapsed: "Группа. Источников 1",
          name: "e-mail / e-mail",
          logo: "https://testing1.alytics.ru/icons/e-mail.ico",
          impressions: "-",
          clicks: 81,
          sessions: 81,
          ctr: "-",
          priceClick: 39.51,
          expenses: 3200,
          value1: 15.21,
          cpa: 21,
          revenue: 28614.4,
          value2: 2,
          cpf: 1,
          cr: 2,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "videocourse / email",
          logo: "https://testing1.alytics.ru/icons/usersgroup.png",
          impressions: "-",
          clicks: 2,
          sessions: 2,
          ctr: "-",
          priceClick: 0,
          expenses: 0,
          value1: 0.19,
          cpa: 0,
          revenue: 407.05,
          value2: 0,
          cpf: 0,
          cr: 0,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "getresponse / email",
          logo: "https://testing1.alytics.ru/icons/getresponse.ico",
          impressions: "-",
          clicks: 1,
          sessions: 1,
          ctr: "-",
          priceClick: 0,
          expenses: 0,
          value1: 0,
          cpa: 0,
          revenue: 0,
          value2: 0,
          cpf: 0,
          cr: 0,
        },
        {
          collapsed: "Группа. Источников 1",
          name: "cm / email",
          logo: "https://testing1.alytics.ru/icons/cm.ico",
          impressions: "-",
          clicks: 0,
          sessions: 0,
          ctr: "-",
          priceClick: 0,
          expenses: 0,
          value1: 0,
          cpa: 0,
          revenue: 0,
          value2: 0,
          cpf: 0,
          cr: 0,
        },
        {
          collapsed: "",
          name: "e-mail / course",
          logo: "https://testing1.alytics.ru/icons/e-mail.ico",
          impressions: "-",
          clicks: 0,
          sessions: 0,
          ctr: "-",
          priceClick: 0,
          expenses: 0,
          value1: 3100,
          cpa: 0,
          revenue: 0,
          value2: 0,
          cpf: 0,
          cr: 0,
        },
      ],
      logo: "https://testing1.alytics.ru/icons/usersgroup.png",
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
      id: 6,
    },
  ],
};

export function data(state = initialState, action) {
  switch (action) {
    default:
      return state;
  }
}
