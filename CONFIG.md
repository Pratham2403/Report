
# Project Configuration

## Cloning the Repository

To clone the repository, run the following command:

```
git clone https://github.com/your_username/your_repository.git
```

Replace `your_username/your_repository` with your actual GitHub username and repository name.

## Frontend

- **Running on Server:** 3000
- **Google Login Client ID:** [CLIENT_ID_HERE] *(This must be replaced with your actual Google Login Client ID)*

### Installing Packages

To install packages for the frontend, navigate to the `client` directory and run:

```
npm install
```

## Backend

- **Running on Server:** 8000
- **Environment Variables:**
    - `PORT`: Port number for the backend server.
    - `MONGODB_URI`: URI for connecting to MongoDB.

### Setting up Environment Variables

1. Create a new file named `.env` in the `server` directory.
2. Add the following environment variables to the `.env` file:

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/your_database_name
```

Replace `your_database_name` with the actual name of your MongoDB database.

### Installing Packages

To install packages for the backend, navigate to the `server` directory and run:

```
npm install
```

Make sure to replace `[CLIENT_ID_HERE]` with your actual Google Login Client ID and `your_database_name` with your actual MongoDB database name before committing this file to your repository.
