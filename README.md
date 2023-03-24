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

| Route            | HTTP   | Description         |
| ---------------- | ------ | ------------------- |
| /api/users       | POST   | Register a new user |
| /api/users/login | POST   | Login to the system |
| /api/users/:id   | GET    | Get user profile    |
| /api/users/:id   | PATCH  | Update user         |
| /api/users       | GET    | Get all users       |
| /api/users/:id   | PATCH  | Update [ADMIN]      |
| /api/users/:id   | DELETE | DELETE [ADMIN]      |

#### Category

| Route            | HTTP   | Description          |
| ---------------- | ------ | -------------------- |
| /api/category    | GET    | Get all category     |
| /api/category:id | GET    | Get food by category |
| /api/category    | POST   | Create [ADMIN]       |
| /api/category    | PATCH  | Update [ADMIN]       |
| /api/category    | DELETE | Delete [ADMIN]       |

#### Food

| Route        | HTTP   | Description    |
| ------------ | ------ | -------------- |
| /api/food    | GET    | Get all food   |
| /api/food:id | GET    | Get food by ID |
| /api/food:id | PATCH  | Update food    |
| /api/food:id | DELETE | Delete food    |

#### Order

| Route                 | HTTP  | Description                 |
| --------------------- | ----- | --------------------------- |
| /api/orders           | GET   | Get all orders              |
| /api/orders:id        | GET   | Get order by ID             |
| /api/orders/user:id   | GET   | Get all orders by user      |
| /api/orders:id        | PATCH | Update order                |
| /api/orders/status:id | PATCH | Update order status [ADMIN] |
| /api/orders/paid:id   | PATCH | Update order status \*      |

> **Note:**
> Middle kiểm tra danh tính em vẫn chưa viết (TODO)
> (\*) Update order khi user thanh toan' online

### Import Data

```
npm run data:import
```

### Destroy Data

```
npm run data:destroy
```
