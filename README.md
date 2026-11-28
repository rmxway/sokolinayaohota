# 🦅 Sokolinaya Ohota

## 🛠 Стек

- **React** 19
- **React Router (framework mode)** 8
- **TypeScript**
- **styled-components**, **Sass** — стилизация
- **Formik**, **Yup** — формы и валидация
- **Swiper** — слайдеры
- **Framer Motion** — анимации
- **Storybook** 10 — разработка и документация компонентов
- **Vitest**, **Testing Library** — тестирование
- **ESLint**, **Prettier** — линтинг и форматирование

## 📋 Требования

- Node.js 23+
- Yarn 4 (указан в `packageManager`)

## 🚀 Установка

```bash
yarn
```

## 📜 Скрипты

| Команда                | Описание                                 |
| ---------------------- | ---------------------------------------- |
| `yarn dev`             | 🛠 Режим разработки                      |
| `yarn build`           | 🔨 ESLint + Typecheck + сборка проекта   |
| `yarn start`           | 🚀 Запуск production сборки локально     |
| `yarn lint`            | 🔍 Проверка (ESLint)                     |
| `yarn lint:fix`        | 🔧 Автоисправление по правилам ESLint    |
| `yarn typecheck`       | 🔍 Проверка (TypeScript)                 |
| `yarn pretty`          | ✨ Форматирование (Prettier)             |
| `yarn icofont`         | 🎨 Сборка шрифта иконок (Fantasticon)    |
| `yarn storybook`       | 📚 Запуск Storybook локально             |
| `yarn build-storybook` | 📦 Сборка Storybook для деплоя           |
| `yarn test`            | 🧪 Запуск тестов (Jest)                  |
| `yarn test:watch`      | 👀 Запуск тестов в watch режиме          |

## 🧪 Тестирование

Проект использует **Vitest** и **React Testing Library** для тестирования компонентов и утилит.

- Тесты находятся рядом с исходными файлами: `*.test.ts`, `*.test.tsx`
- Утилиты для тестов: `services/test-utils.tsx`
- Конфигурация: `vite.config.ts (в разделе test)`, `vitest.setup.ts`

### Примеры использования

```bash
# Запуск всех тестов
yarn test

# Запуск тестов в watch-режиме
yarn test:watch
```

## 📚 Storybook

- **Локально:** `yarn storybook` — доступен по [http://localhost:4006](http://localhost:4006).
- **Деплой:** Сборка доступна по адресу: [https://rmxway.github.io/sokolinayaohota/](https://rmxway.github.io/sokolinayaohota/)

## 📁 Структура проекта

- `app/` — страницы и API routes (Next.js App Router)
- `components/` — переиспользуемые компоненты и UI (в т.ч. stories для Storybook)
- `theme/` — тема, глобальные стили, анимации
- `services/`, `store/`, `lib/` — утилиты и общая логика
- `mock/` — мок-данные для разработки
- `fantasticon/` — исходники иконок для шрифта Icofont
- `public/assets/` — статика (изображения)
- `src/assets/` — для импортов в компоненты(svg, fonts)
- `.storybook/` — конфигурация Storybook
