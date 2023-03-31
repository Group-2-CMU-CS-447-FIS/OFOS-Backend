# Online Food Ordering System

This is a simple online food ordering system. It is a web application

## Features

-   [ ] User can register and login
-   [ ] User can view menu
-   [ ] User can add items to cart

## Documentation

Run the command

```yaml
npm install
```

to install all the dependencies.

Run the command

```yaml
npm start
```

to start the server.

-   Create route in folder [routes](routes)
-   Create controller in folder [controllers](controllers)

### List of Routes

#### User Route

| Route                | HTTP   | Description         |
| -------------------- | ------ | ------------------- |
| /api/users           | POST   | Register a new user |
| /api/users/login     | POST   | Login to the system |
| /api/users/:id       | GET    | Get user profile    |
| /api/users/:id       | PATCH  | Update user         |
| /api/users/admin     | GET    | Get all users       |
| /api/users/admin/:id | PATCH  | Update [ADMIN]      |
| /api/users/admin/:id | DELETE | DELETE [ADMIN]      |

#### Category

| Route                  | HTTP   | Description          |
| ---------------------- | ------ | -------------------- |
| /api/category          | GET    | Get all category     |
| /api/category:id       | GET    | Get food by category |
| /api/category/admin    | POST   | Create [ADMIN]       |
| /api/category/admin:id | PATCH  | Update cate [ADMIN]  |
| /api/category/admin:id | DELETE | Delete cate [ADMIN]  |

#### Food

| Route              | HTTP   | Description    |
| ------------------ | ------ | -------------- |
| /api/food          | GET    | Get all food   |
| /api/food:id       | GET    | Get food by ID |
| /api/food/admin:id | PATCH  | Update food    |
| /api/food/admin:id | DELETE | Delete food    |
| /api/food/admin    | POST   | Create food    |

#### Order

| Route                 | HTTP  | Description                 |
| --------------------- | ----- | --------------------------- |
| /api/orders           | POST  | Create new orders           |
| /api/orders:id        | GET   | Get order by ID             |
| /api/orders/user:id   | GET   | Get all orders by user      |
| /api/orders:id        | PATCH | Update order                |
| /api/orders/status:id | PATCH | Update order status [ADMIN] |
| /api/orders/paid:id   | PATCH | Update order status \*      |
| /api/orders/admin/:id | PATCH | Update order [ADMIN]        |
| /api/orders/admin     | GET   | Get all orders [ADMIN]      |

> **Note:**
> (\*) Update order khi user thanh toan' online

#### Upload

| Route        | HTTP | Description                       |
| ------------ | ---- | --------------------------------- |
| /api/uploads | POST | Upload food's image to the server |

#### Payment

| Route        | HTTP | Description                  |
| ------------ | ---- | ---------------------------- |
| /api/payment | GET  | Get Stripe public api key    |
| /api/payment | POST | Proceed to pay for the order |

### Import Data

```
npm run data:import
```

### Destroy Data

```
npm run data:destroy
```
