# Gestión del proyecto — ZenBoard

## Organización del trabajo

El proyecto se gestiona mediante un tablero en Trello con
5 columnas: Backlog, Todo, In Progress, Review y Done.

Cada funcionalidad del proyecto tiene su propia tarjeta en el
tablero. Cuando empiezo a trabajar en una funcionalidad la muevo
a "In Progress" y cuando termino la muevo a "Done".

## Estructura del repositorio

El proyecto está organizado en una sola carpeta con dos partes:

- **Raíz del proyecto** — Frontend con React + TypeScript + Tailwind
- **server/** — Backend con Node.js + Express

## Estructura de carpetas del frontend

src/
├── api/          ← Cliente de la API
├── components/   ← Componentes reutilizables
├── context/      ← Estado global con Context API
├── hooks/        ← Custom hooks
├── pages/        ← Páginas de la aplicación
├── types/        ← Interfaces y tipos TypeScript
└── utils/        ← Funciones auxiliares

## Estructura de carpetas del backend

server/src/
├── config/       ← Variables de entorno
├── controllers/  ← Lógica de las peticiones
├── routes/       ← Definición de endpoints
└── services/     ← Lógica de negocio

## Tablero Kanban
https://trello.com/invite/b/6a02f6deb86220190e877e78/ATTI80386b3d74ee441dfcea8fb64ba5bf28404157D8/zenboard