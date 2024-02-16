# Serverless GraphQL API on AWS

Built with SAM, AppSync and TypeScript.

## Installation

In the project root directory, run:

```
npm install
```

## Scripts

- Rebuild types defined in GraphQL schema (useful during development)

  ```
  npm run build-schema
  ```

- Build schema and resolvers for deployment

  ```
  npm run build
  ```

## Deployment

1. Build resolvers and SAM template

   ```
   npm run build && sam build
   ```

2. Deploy
   ```
   sam deploy --guided
   ```

## Cleanup

Simply run:

```
sam destroy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
