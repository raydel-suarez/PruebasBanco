# Automation Testing con Playwright

Proyecto de automatización de tests E2E para validar funcionalidades de una aplicación web de gestión de libros.

## Descripción

Este proyecto implementa pruebas automatizadas siguiendo el patrón Page Object Model para garantizar la calidad de la aplicación. Los tests cubren:

- Autenticación (Login)
- Búsqueda de libros
- Validación de errores

## Stack Tecnológico

- Node.js - Runtime de JavaScript
- Playwright - Framework de automatización
- TypeScript - Lenguaje tipado

## Instalación

Requisitos: Node.js >= 18.x

```bash
cd pruebatecnica
npm install
npx playwright install
```

## Ejecutar Tests

Ejecutar todos los tests:
```bash
npx playwright test
```

Ejecutar un archivo específico:
```bash
npx playwright test tests/loging.spec.ts
```

Ejecutar en modo interactivo (UI):
```bash
npx playwright test --ui
```

Ejecutar en modo debug:
```bash
npx playwright test --debug
```

## Ver Resultados

Después de ejecutar los tests, se genera un reporte HTML:

```bash
npx playwright show-report
```

## Estructura del Proyecto

```
pruebatecnica/
├── pages/                 # Page Object Model
│   ├── loginPage.ts      # Página de login
│   └── booksPage.ts      # Página de libros
├── tests/                # Archivos de prueba
│   ├── loging.spec.ts    # Tests de autenticación
│   └── search.spec.ts    # Tests de búsqueda
├── playwright.config.ts  # Configuración
├── tsconfig.json        # Configuración TypeScript
└── package.json         # Dependencias
```

## Patrón Page Object Model

Los tests usan POM para:
- Centralizar selectores
- Reutilizar métodos comunes
- Facilitar mantenimiento

## Configuración

El archivo `playwright.config.ts` incluye:
- Navegador: Chromium
- Reporter: HTML
- Paralelo: Habilitado por defecto
- Reintentos: 2 en CI, 0 en local

## Notas

- Los tests se ejecutan contra https://demoqa.com/login
- Las credenciales de prueba son: testuser / Test@1234
- Los reportes se generan automáticamente en `playwright-report/`
