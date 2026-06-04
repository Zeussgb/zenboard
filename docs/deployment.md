# Despliegue de ZenBoard

## URLs en producción
- **Frontend:** https://zenboard-one.vercel.app
- **Backend:** https://zenboard-api.vercel.app

## Plataforma
Tanto el frontend como el backend están desplegados en **Vercel**.

## Frontend
El frontend se despliega desde la raíz del repositorio.
Vercel detecta automáticamente que es un proyecto Vite y lo compila.

Variable de entorno necesaria:
- `VITE_API_URL=https://zenboard-api.vercel.app`

## Backend
El backend se despliega desde la carpeta `server/` del repositorio.
Usa el archivo `vercel.json` para configurar las rutas.

Variables de entorno configuradas automáticamente por Neon:
- `POSTGRES_URL` — URL de conexión a la base de datos
- `POSTGRES_USER` — Usuario de la base de datos
- `POSTGRES_PASSWORD` — Contraseña de la base de datos
- `POSTGRES_HOST` — Host de la base de datos
- `POSTGRES_DATABASE` — Nombre de la base de datos

## Base de datos
La base de datos es **PostgreSQL** hospedada en **Neon**.
Se conecta automáticamente al backend mediante las variables de entorno
que Vercel inyecta en el proyecto.

## Proceso de despliegue
Cada vez que se hace un push a la rama `main` de GitHub, Vercel
redespliegue automáticamente tanto el frontend como el backend.