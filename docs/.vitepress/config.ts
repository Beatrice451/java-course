import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Разработка программных модулей',
  description: 'Курс лекций по Java',
  lang: 'ru-RU',


  themeConfig: {
    outline: [2, 4],
    outlineTitle: 'Содержание',

    nav: [
      { text: 'Базовая Java', link: '/basics/' },
      { text: 'ООП',          link: '/oop/' },
      { text: 'Spring',       link: '/spring/' },
      { text: 'JavaFX',       link: '/javafx/' }
    ],

    sidebar: {
      '/basics/': [
        {
          text: 'Базовая Java',
          items: [
            { text: '0.5. Установка всякого', link: '/basics/install' },
            { text: '1. Введение', link: '/basics/intro' },
            { text: '2. Ветвления. Циклы', link: '/basics/if-else-loops'},
            { text: '3. Массивы', link: '/basics/arrays'},
            { text: '3.5. Приведение типов', link: '/basics/casts'},
            { text: '4. Методы', link: '/basics/methods'},
            {text: '4.5. Подробнее о строках', link: '/basics/strings'},
            {text: '5. Collections Framework', link: '/basics/collections'}
          ]
        }
      ],
      '/oop/': [
        {
          text: 'ООП',
          items: [
            { text: '1. Введение', link: '/oop/basics' }
          ]
        }
      ],
      '/spring/': [
        {
          text: 'Spring',
          items: [
            { text: 'Обзор раздела', link: '/spring/' }
          ]
        }
      ],
      '/javafx/': [
        {
          text: 'JavaFX',
          items: [
            { text: 'Обзор раздела', link: '/javafx/' }
          ]
        }
      ]
    },

    docFooter: {
      prev: 'Предыдущая лекция',
      next: 'Следующая лекция'
    },
  }
})