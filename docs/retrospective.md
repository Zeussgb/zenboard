# Retrospectiva — ZenBoard

## Qué aprendí durante el proyecto

### Frontend
Aprendí a conectar React con TypeScript de forma real en un proyecto
completo. Entendí cómo funciona Context API para compartir estado
entre componentes sin pasar props manualmente, y cómo los custom
hooks como useSearch y useApi permiten reutilizar lógica entre páginas.

### Backend
Afiancé la arquitectura por capas (routes, controllers, services)
que ya había visto en la Fase 3. Esta vez la apliqué en un proyecto
propio y entendí mejor por qué es útil separar las responsabilidades.

### Integración frontend-API
El mayor aprendizaje fue conectar el frontend con el backend. Entendí
que el frontend no puede conectarse directamente a una base de datos,
necesita pasar por una API que controle el acceso a los datos.
También aprendí que las variables de entorno son clave para que
la app funcione tanto en local como en producción.

### TypeScript
Usar TypeScript en un proyecto real me ayudó a entender su utilidad.
Los tipos me avisaron de errores antes de ejecutar el código, como
cuando olvidé el async/await en los controladores.

## Principales problemas encontrados

### Compatibilidad de librerías con Vercel
El mayor problema fue encontrar una base de datos compatible con
Vercel. Probé con SQLite (better-sqlite3) y MySQL pero ninguno
funcionaba en entornos serverless. La solución fue usar PostgreSQL
con Neon que se integra nativamente con Vercel.

### Variables de entorno
Tuve problemas con las variables de entorno en el backend. El error
de acceso denegado a MySQL se solucionó añadiendo require('dotenv').config()
como primera línea del servidor.

### Async/Await
Al migrar de arrays en memoria a base de datos, olvidé añadir
async/await en los controladores. Las funciones devolvían promesas
en vez de datos, lo que causaba respuestas vacías.

## Cómo utilicé la IA

Usé Claude como asistente durante todo el desarrollo. Me ayudó a:
- Generar la estructura inicial de componentes y tipos
- Depurar errores de TypeScript y de conexión a la base de datos
- Entender conceptos como genéricos, Context API y arquitectura por capas
- Encontrar soluciones cuando algo no funcionaba

La IA fue útil pero no reemplazó el aprendizaje. Tuve que entender
cada paso para poder seguir adelante y corregir los errores que iban
apareciendo.

## Reflexión final

ZenBoard ha sido el proyecto más completo que he hecho hasta ahora.
Conectar un frontend con un backend real y desplegarlo en producción
me ha dado una visión completa de cómo funciona una aplicación web.
Aunque hubo muchos problemas por el camino, cada uno fue un
aprendizaje. Estoy satisfecho con el resultado final.