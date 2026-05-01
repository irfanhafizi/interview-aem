# AEM Enersol Dashboard — Web Application

Angular 14 web dashboard application for AEM Enersol.

---

## Tech Stack

| Technology | Version |
|---|---|
| Angular | 14 |
| Bootstrap | 5 |
| Bootstrap Icons | 1.13 |
| Plotly.js | 3 |
| TypeScript | 4.7 |

---

## Prerequisites

Make sure you have the following installed before running the project:

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) v8 or higher
- [Angular CLI](https://angular.io/cli) v14

Install Angular CLI globally if you haven't:

```bash
npm install -g @angular/cli@14
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/interview-aem.git
cd interview-aem
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

The app will be available at:

```
http://localhost:4200
```

---

## Project Structure

```
src/
└── app/
    ├── core/                        # Singleton services, guards, interceptors
    │   ├── guards/
    │   │   └── auth.guard.ts        # Route protection
    │   ├── interceptors/
    │   │   └── token.interceptor.ts # Attaches JWT to every request, handles 401
    │   ├── models/
    │   │   └── dashboard.model.ts   # TypeScript interfaces
    │   └── services/
    │       ├── auth.service.ts      # Login, token management
    │       └── api.service.ts       # Dashboard API call
    ├── shared/                      # Reusable components
    │   └── components/
    │       └── navbar/              # Top navigation bar
    ├── auth/                        # Authentication module (lazy loaded)
    │   └── login/                   # Login page
    └── dashboard/                   # Dashboard module (lazy loaded, guarded)
        ├── dashboard/               # Main dashboard layout
        └── components/
            ├── chart-donut/         # Donut chart (Plotly.js)
            ├── chart-bar/           # Bar chart (Plotly.js)
            └── user-table/          # Users data table
```