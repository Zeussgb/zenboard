# Rutas de ZenBoard

## Estructura de rutas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | HomePage | Página de inicio con acceso a notas y tareas |
| `/notes` | NotesPage | Gestión de notas |
| `/tasks` | TasksPage | Gestión de tareas |
| `*` | NotFoundPage | Página 404 para rutas inexistentes |

## Configuración
Las rutas se configuran en `App.tsx` usando React Router v6.
El componente `BrowserRouter` envuelve toda la app para habilitar
la navegación. `Routes` y `Route` definen cada ruta.

## Navbar
El componente `Navbar` usa `useLocation` para detectar la ruta
activa y resaltar el enlace correspondiente visualmente.

## Página 404
Cualquier ruta que no coincida con las definidas redirige
automáticamente a `NotFoundPage` gracias al path `*`.