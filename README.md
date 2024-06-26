# Hydrogen-nestjs wishlist functionality

## What is this?

This repositorie contains a REALLY BASIC example on how to implement a wishlist in a hydrogen storefront while handling wishlisted items in an external nestjs microservice.

### includes:

- hydrogen storefront
- wishlist route action
- wishlist route component
- nestjs prisma and swaggerui
- documentation for API
- Testing for: Hydrogen Rendering, Wishlist Routes, Microservice REST API, Microservice GraphQL API
- Show.tsx component to avoid conditional rendering
- uuid for `user_id` in session util for the hydrogen storefront

### TODO:
- Upgrade wishlist functionality to use variants instead of products
- clean wishlist route to be included in page route
- implement loader and action function testing
- expand documentation and testing
- Clean console errors for the hydrogen project server and browser

## How to use it?

The current repositorie includes 2 both frontend and backend. To fully run this project in your local machine you must use 2 consoles.

### FRONTEND

The frontend hydrogen storefront is the demostore template provided by shopify with an extra library for generating UUIDs. see template [here.](https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/)

command runned to create hydrogen project:

```bash
npm init @shopify/hydrogen -- --template demo-store
```

#### Run frontend

once cloned:

```bash
cd hydrogen-storefront
npm i
npm run dev
```

Now your front end server should be up and running.

PD: Don't worry about env variables they are barely used in the purpose of this project, but you can use `.env.example` example to add them if you want to expand the functionality.

#### Test frontend

Test are located inside the `/test` folder in the root directory of the frontend. to run test you must kill all processes in `PORT 3000` and run inside the frontend root folder:

```bash
npm run e2e
```

### BACKEND

The Backend microservice is a nestjs REST and GraphQL API using prisma. I added swagger ui for getting an REST API documentation.

#### Run backend

once cloned go to your repo root directory:

```bash
cd nestjs-prisma
npm i
npm start
```

migrations and sqlite db should be included in the repo, if you have any issues you can just delete the `migrations` folder inside `prisma` of your root directory and the `dev.db` file in that same `prisma` folder, and run the following commands instead:

```bash
npx prisma generate
npx prisma migrate dev --name init
npm start
```

the only env variable needed is your `DATABASE_URL` which is your local, add this to your .env file:

```bash
DATABASE_URL="file:./dev.db"
```

#### Test backend

To run tests in your backend microservice you can run the following command inside your `nestjs-prisma` folder:

```bash
npm run test
```

## Video demo

[See video here](https://www.loom.com/share/9dbdff60ec00424ab6f412fdc1166781?sid=d995b483-a605-4271-82fc-fe27c1f94e33)


