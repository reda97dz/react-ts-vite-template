# React TypeScript Dashboard with Vite and Mantine

This is a [React](https://reactjs.org) + [TypeScript](https://www.typescriptlang.org/) + [Mantine](https://mantine.dev/) dashboard boilerplate built with [Vite](https://vitejs.dev).

## What's inside?

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org)
- [Mantine](https://mantine.dev/)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Cypress](https://www.cypress.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Polyfills](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme)

## Getting started

1. Create the project.

   ```bash
   npx degit fabien-ml/react-ts-vite-template my-app
   ```

2. Access the project directory.

   ```bash
   cd my-app
   ```

3. Initialize a git repository.

   ```bash
   git init
   ```

4. Install dependencies.

   ```bash
   npm install
   ```

5. Start dev server with hot reload at http://localhost:3000.
   ```bash
   npm run dev
   ```

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Other commands

### Docker commands

- Run in a docker container in development mode (port: 3000)

```bash
docker-compose -f docker-compose.yml up -d
```

- Run in a docker container in production mode with nginx (port: 8080)

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Lint commands

```bash
npm run lint
```

### Build commands

```bash
npm run build
```

### Run the app in production mode at http://localhost:3000.

```bash
npm run serve
```

### Test commands

- Run unit tests and watch
  ```bash
  npm run test:unit
  ```
- Run unit tests with coverage
  ```bash
  npm run test:unit:coverage
  ```
- Run e2e tests
  ```bash
  npm run test:e2e
  ```

## License

This project is licensed under the MIT License.
