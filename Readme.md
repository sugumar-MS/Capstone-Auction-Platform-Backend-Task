# Auction Platform Backend

This is the backend for the Auction Platform, a RESTful API built using Node.js and MongoDB. The API provides endpoints for user authentication, product management, and bidding functionality.

## Features

- User registration and login with JWT authentication
- Token-based role management (e.g., buyers, sellers)
- Product creation, retrieval, and management
- Bidding system with notifications for outbids
- Secure password handling with bcrypt
- Email notifications (optional)

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user and product data
- **Mongoose**: ODM for MongoDB to manage data models
- **JWT (jsonwebtoken)**: For authentication and authorization
- **bcryptjs**: For hashing passwords
- **Nodemailer**: For sending email notifications

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud-based MongoDB)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sugumar-MS/Capstone-Auction-Platform-Backend-Task.git
   cd auction-platform-backend
