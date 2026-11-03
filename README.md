# React Native Maps App

Aplicación de práctica creada con Expo SDK 58, React Native y Expo Router para aprender a gestionar permisos de ubicación y controlar mapas: solicitar permisos, consultar su estado, responder a cambios en la aplicación y, más adelante, mostrar y manipular coordenadas desde el mapa.

> El proyecto está en desarrollo. La primera parte se enfoca en permisos de ubicación; las funcionalidades interactivas del mapa forman parte de una sección posterior.

## Objetivo

Aprender a manejar capacidades nativas desde una aplicación React Native, organizar la lógica por responsabilidades y compartir estado entre pantallas. El objetivo final es controlar las coordenadas del usuario y la presentación del mapa.

## Contenido del curso

### Permisos de ubicación

Esta sección se enfoca en solicitar, consultar y representar el permiso de ubicación. Los conceptos que se trabajan incluyen:

- Expo Location y permisos de primer plano.
- Estado del permiso: comprobando, concedido, denegado y no determinado.
- Acciones para solicitar y consultar permisos.
- Zustand para compartir el estado del permiso.
- Providers para observar el estado y dirigir la navegación.
- AppState para volver a comprobar el permiso cuando la app regresa al primer plano.
- Alertas y acceso a los ajustes de la aplicación cuando el permiso fue denegado.
- Una estructura que puede extenderse más adelante a permisos de cámara, contactos y otras capacidades.

### Mapas y coordenadas

La siguiente sección ampliará la aplicación para trabajar con el mapa y la ubicación del usuario. Los temas previstos son:

- Mostrar y controlar mapas.
- Marcadores y polylines.
- Seguimiento de coordenadas.
- Obtener la ubicación del usuario.
- Controlar el mapa y mover la cámara.
- Reutilizar componentes personalizados.
- Usar Zustand para compartir estado relacionado con el mapa.

## Tecnologías

- React Native y Expo SDK 58.
- TypeScript.
- Expo Router para rutas basadas en archivos.
- `expo-location` para permisos y servicios de ubicación.
- Zustand para el estado compartido.

## Estructura del proyecto

```text
core/
  actions/               Lógica para solicitar y consultar permisos
infrastructure/
  interfaces/            Tipos y estados de permisos
presentation/
  providers/             Comprobación global de permisos
  store/                 Estado compartido con Zustand
  components/            Componentes reutilizables de interfaz
  hooks/                 Hooks de presentacion
src/
  app/                   Rutas y pantallas de Expo Router
```

## Ejecutar la aplicación

Instala las dependencias con pnpm:

```bash
pnpm install
pnpm start
```

También puedes iniciar directamente en una plataforma:

```bash
pnpm android
pnpm ios
pnpm web
```

Para probar permisos de ubicación, ejecuta la aplicación en un simulador o dispositivo compatible y responde al diálogo del sistema. Si el acceso fue denegado previamente, habilítalo desde los ajustes de la aplicación.

## Progreso

- [x] Estructura inicial con Expo Router.
- [x] Tipos para representar estados de permisos.
- [x] Acciones para solicitar y consultar el permiso de ubicación.
- [x] Estado global de permisos con Zustand.
- [x] Provider para dirigir al usuario según el permiso y volver a comprobarlo al regresar a la app.
- [x] Pantalla para solicitar acceso a la ubicación.
- [ ] Implementar el mapa y sus controles.
- [ ] Agregar marcadores, polylines y seguimiento de coordenadas.

Los elementos marcados como pendientes representan trabajo de la siguiente sección del curso y no funcionalidades terminadas.
