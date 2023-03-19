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

| Route        | HTTP | Description    |
| ------------ | ---- | -------------- |
| /api/food    | GET  | Get all food   |
| /api/food:id | GET  | Get food by ID |

> **Note:**
> Mấy cái của admin em chưa viết middleware nên để tạm, sau viết nốt sau

### Import Data

```
npm run data:import
```

### Destroy Data

```
npm run data:destroy
```
