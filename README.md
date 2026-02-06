# Sokolinaya Ohota

Фронтенд сайта «Соколиная охота» на Next.js (App Router).

## Стек

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript**
- **styled-components**, **Sass**
- **Formik**, **Yup** — формы и валидация
- **Swiper** — слайдеры
- **Storybook** 8 — разработка и документация компонентов

## Требования

- Node.js
- Yarn 4 (указан в `packageManager`)

## Установка

```bash
yarn
```

## Скрипты

| Команда | Описание |
|--------|----------|
| `yarn dev` | Режим разработки — [http://localhost:3000](http://localhost:3000) |
| `yarn build` | Линт + сборка проекта |
| `yarn start` | Запуск production-сборки локально |
| `yarn lint` | Проверка кода (ESLint) |
| `yarn lint:fix` | Автоисправление по правилам ESLint |
| `yarn pretty` | Форматирование кода (Prettier) |
| `yarn icofont` | Сборка шрифта иконок (Fantasticon) |
| `yarn storybook` | Запуск Storybook — [http://localhost:4006](http://localhost:4006) |
| `yarn build-storybook` | Сборка Storybook для деплоя |

## Структура проекта

- `app/` — страницы и API routes (Next.js App Router)
- `components/` — переиспользуемые компоненты и UI
- `theme/` — тема, глобальные стили, анимации
- `services/`, `store/`, `lib/` — утилиты и общая логика
- `mock/` — мок-данные для разработки
- `fantasticon/` — исходники иконок для шрифта Icofont
- `public/assets/` — статика (шрифты, изображения, SVG)
