# Express REST API with Typescript, Prisma and PostgresQL

## A fully functional EXAMPLE project written in Typescript showing how to create a REST API, with an authentification service and Unit-test

Every part of this project is sample code which shows how to do the following:

- Create a custom with server with Typescript using Express
- Create a single REST API that preform CRUD operations on the differents models.
- Integrate a token-based authentification with JWT for the user model
- Use EXPRESS-VALIDATOR middleware for validate users input
- Create integration test for each routes

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. Checkout the .env.sample

`DATABASE_URL=""`

`JWT_SECRET=""`

For the database you will need a postgresql database. You can install it by locally or by using a cloud provider like render.
Find how to setup a render postgres database with this videos.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Freedisch/api-boilerplateV1.git
```

Go to the project directory

```bash
  cd api-boilerplateV1
```

Install dependencies

```bash
  npm install
```

Run migrations

```bash
  npx prisma migrate dev
```

Build the project

```bash
  npm run build
```

Run the sever

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Notice

Feel free to ask questions about this API / report bugs via GitHub Issues, etc! Documentation changes for pull requests are accepted as well.
Thanks ✅🧘
