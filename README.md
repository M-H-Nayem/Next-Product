# Hunt Pro

## 📖 Project Overview

Hunt Pro is a full-stack e-commerce solution built with the Next.js App Router. It is designed to demonstrate a robust and scalable application featuring user authentication, protected routes, and a complete product management system with a MongoDB backend.

-----

## ✨ Features

  * **User Authentication**: Secure login and registration using NextAuth.js.
  * **Credential Provider**: Allows users to sign up and log in with their email and password.
  * **Google OAuth**: Enables quick and easy sign-in using a Google account.
  * **Protected Dashboard**: Restricts access to authenticated users only.
  * **User Profile**: A dedicated page to view user-specific information.
  * **Product Management**: An admin dashboard to add and manage products.
  * **Product Catalog**: Displays all available products fetched from the database.
  * **MongoDB Backend**: Persistent data storage for users and products.

-----

## 💻 Technologies Used

  * **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
  * **Authentication**: [NextAuth.js](https://next-auth.js.org/)
  * **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  * **UI Components**: [DaisyUI](https://daisyui.com/)
  * **Database**: [MongoDB](https://www.mongodb.com/)
  * **Database ORM**: [Mongoose](https://mongoosejs.com/)

-----

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone [your-repo-link]
    cd hunt-pro
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following variables.

```bash
# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key

# Google OAuth (if enabled)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB
MONGODB_URI=your_mongodb_atlas_connection_string

# Base URL for API calls
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

  * You can generate a `NEXTAUTH_SECRET` using a command like `openssl rand -base64 32`.
  * Get your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Running the Project

```bash
npm run dev
```

The application will be running on `http://localhost:3000`.

-----

## 📂 Project Structure

  * `app/`: The main directory for all pages and layouts using the App Router.
      * `api/`: Contains all API routes (`route.js`).
      * `dashboard/`: The protected dashboard pages.
  * `components/`: Reusable React components (e.g., `Navbar`, `Provider`).
  * `lib/`: Utility files (e.g., `dbConnect.js`).
  * `models/`: Mongoose schemas and models (e.g., `Product.js`, `User.js`).

-----

## 🔐 Authentication

This project uses **NextAuth.js** to handle authentication.

  * The main configuration is in `src/app/api/auth/[...nextauth]/route.js`.
  * The `SessionProvider` wrapper in `src/app/layout.jsx` makes session data available to all client components using the `useSession` hook.

-----

## 📊 Data Management

  * **Frontend**: All data fetching is done using the built-in `fetch` API.
  * **Backend**: The API routes in `src/app/api` connect to a MongoDB database using Mongoose.
  * **Data Models**: The `src/models` directory defines the structure for how data is stored in the database.

-----

## 🌐 Deployment

This project can be easily deployed to [Vercel](https://vercel.com/), the creators of Next.js. Simply connect your GitHub repository to your Vercel account, and Vercel will handle the rest. Ensure your environment variables are configured in the Vercel dashboard.
