<div align="center">
  <h1>Laundry Frontend</h1>
  <p>🛒 Simple Laundry Management Website for Administrator built with NextJS and Typescript</p>
</div>

## Features

- 🔑 Role Based Authentication
- 🛒 Transactions Management
- 📦 Customers Management
- 🧾 Log Activites tracking
- 📂 Invoice Share and Download

See the backend repository [here](https://github.com/junaediakbar/laundry-api)

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/junaediakbar/laundry-fe.git
   ```

2. Copy .env.example to .env

3. Install dependencies

   ```bash
   npm install
   yarn
   ```

4. Run it on your machine

   ```bash
   npm run dev
   yarn dev
   ```

## Built With

- NextJS 14
- Typescript
- headless/ui
- radix/ui
- react hook form
- State management with [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Manage table with [Tanstack](https://tanstack.com/table/v7/)
- jspdf
- Jest
- Commit management with husky
- Deploy with Vercel
- Components UI mostly used [Aether Design System](https://github.com/theodorusclarence/aether-design-system)

## Settings Services

Set your services in [services.ts](https://github.com/junaediakbar/laundry-fe/blob/main/src/constant/services.ts) with format object like this

```bash
const services = [
   {
      name: 'cuci-lipat',
      value: 'Cuci Lipat',
      price: 6000,
   },
   ...
];
```

## Details Features

#### Authentication

![Login](https://ik.imagekit.io/ctrnlvyl1p/Laundry-ss/ss-login.jpg?updatedAt=1713540562327)

#### Statistic Management

Downloadable receipt and readable statistic Data based on date

![Home](https://ik.imagekit.io/ctrnlvyl1p/Laundry-ss/ss-home.jpg?updatedAt=1713540178032)

#### Transactions Management

![Transactions](https://ik.imagekit.io/ctrnlvyl1p/Laundry-ss/ss-transaction.jpg?updatedAt=1713540178217)

#### Add Transaction

Searcable customers data, autocomplete selected customer data

![Add Transaction](https://ik.imagekit.io/ctrnlvyl1p/Laundry-ss/ss-add-transaction.png?updatedAt=1713540271175)

#### Edit Transaction

Shareable and downlaodable Nota as PDF

![Edit Transaction](https://ik.imagekit.io/ctrnlvyl1p/Laundry-ss/ss-edit-transaction?updatedAt=1713541229418)

#### Log Activities

![Log Activities](https://ik.imagekit.io/ctrnlvyl1p/Laundry-ss/ss-activities?updatedAt=1713541331244)

## Employed Secret Password

Because the website only for internal (not public). I made this user-password actions. So whenever the user do an action, it will watch in Activities tab. Set them in [users.ts](https://github.com/junaediakbar/laundry-fe/blob/main/src/constant/users.ts)

```bash
const cashierData = [
   {
      name: 'admin',
      password: 'admin123',
   },
...
]
```

## Development Demo

User available:
| Email | Password |
|-----------------|----------|
| admin@gmail.com | admin123 |

[Vercel Demo](https://trees-clean-laundry-fe-git-dev-junaediakbars-projects.vercel.app/?_vercel_share=zxBVAHqXmoiddR9qJv6AoS5eHm4HHwk5)
