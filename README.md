# React Native Carpooling App

<a href="https://ibb.co/PCPKHp9"><img src="https://i.ibb.co/PCPKHp9/carpoolingsplash.jpg" alt="carpoolingsplash" border="0"></a>

[![React Native](https://img.shields.io/badge/React_Native-^0.74.5-blue?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~51.0.28-black?style=for-the-badge&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.3.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-API-5865F2?style=for-the-badge&logo=stripe)](https://stripe.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.5-316192?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Neon](https://img.shields.io/badge/NeonDB-Cloud-orange?style=for-the-badge)](https://neon.tech/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-F33?style=for-the-badge&logo=clerk)](https://clerk.dev/)
[![Geoapify](https://img.shields.io/badge/Geoapify-Maps-orange?style=for-the-badge)](https://www.geoapify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 🤖 Introduction

Welcome to the **Carpooling App**! 🚗✨

This cutting-edge application is built with **React Native**, offering a smooth and intuitive user experience. It leverages **Google Maps** for dynamic route visualization and real-time geolocation, ensuring users can easily find their way. 

### Key Features:
- **Secure Payments**: All transactions are seamlessly handled through **Stripe**, guaranteeing a secure and hassle-free payment process.
- **Efficient Data Management**: A serverless **PostgreSQL** database keeps everything organized and accessible.
- **Stylish Design**: With **TailwindCSS**, the app boasts a modern, responsive design that looks great on any device.

The primary goal of the **Carpooling App** is to demonstrate the power of full-stack mobile application development, showcasing the developer's skills while providing a practical solution to transportation challenges. Join us on this journey to revolutionize the way we travel together! 🌍💼


## 🔋 Features

### 🚀 User Experience
- **Onboarding Flow**: Seamless user registration and setup process.
- **Email Password Authentication with Verification**: Secure login with email verification.
- **oAuth Using Google**: Easy login using Google credentials.

### 🔒 Security
- **Authorization**: Secure access control for different user roles.

### 🗺️ Navigation & Location
- **Home Screen with Live Location & Google Map**: Real-time location tracking with markers on a map.
- **Google Places Autocomplete**: Search any place on Earth with autocomplete suggestions.
- **Select Rides from Map**: Choose available cars near your location from the map.

### 🚗 Ride Management
- **Recent Rides**: View a list of recent rides at a glance.
- **Find Rides**: Search for rides by entering 'From' and 'To' locations.
- **Confirm Ride with Detailed Information**: View complete ride details, including time and fare price.

### 💳 Payment Processing
- **Pay for Ride Using Stripe**: Make payments using multiple methods like cards and others.
- **Create Rides After Successful Payment**: Book a ride after confirming payment.

### 👤 User Profile
- **Profile Management**: Manage account details in the profile screen.
- **Ride History**: Review all rides booked so far.

### 📱 Responsive Design
- **Responsive on Android and iOS**: Optimized for both Android and iOS devices.

### 🔧 Code Quality
- **Code Architecture & Reusability**: Well-structured codebase for maintainability and reusability.


## 🚀 Future Features (To-Do Inshallah 🤲🏻)

We have some exciting features planned for future updates! Here’s what you can look forward to:

### 🗨️ In-App Chat
- Enable real-time messaging between riders and drivers for seamless communication.

### 🚗 Ride Sharing Options
- Introduce carpooling features for users to share rides and split costs.

### ⭐ Ratings and Reviews
- Allow users to rate drivers and provide feedback after each ride to enhance service quality.

### 🔍 Advanced Search Filters
- Implement filters for rides based on price, vehicle type, and user ratings for better search results.

### 📅 Ride Scheduling
- Allow users to schedule rides in advance for added convenience.

### 🔔 Push Notifications
- Send timely notifications for ride confirmations, promotions, and important updates.

### 🌐 Multi-Language Support
- Provide options for users to choose their preferred language for a personalized experience.

### 📊 Admin Dashboard
- Create an admin interface for managing users, rides, and payments efficiently.

### 🤝 Integration with Other Services
- Explore partnerships with local services to enhance user experience.

---

Stay tuned for these exciting updates!


## 🚀 Quick Start

### Prerequisites

- Node.js v20.x or later
- Expo CLI installed globally
- PostgreSQL database or **Neon DB** account
- Stripe account for payment processing
- Geoapify API Key for maps and geolocation services
- Clerk account for user authentication

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/salaheddinearbani/react-native-carpooling.git
    cd react-native-carpooling
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add your PostgreSQL, Stripe, Clerk, and Geoapify credentials:
   This file contains all the necessary environment variables for the project. Ensure to fill in the values for each variable.

| Variable Name                         | Description                                     |
|---------------------------------------|-------------------------------------------------|
| `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY`  | Your Clerk publishable key for authentication.   |
| `DATABASE_URL`                       | Connection string for your database.            |
| `EXPO_PUBLIC_SERVER_URL`             | The URL for your backend server.                 |
| `EXPO_PUBLIC_GEOAPIFY_KEY`          | Your Geoapify API key for map services.         |
| `EXPO_PUBLIC_GOOGLE_API_KEY`        | Your Google API key for Google services.         |
| `EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY`| Your Stripe publishable key for payments.      |
| `STRIPE_SECRET_KEY`                  | Your Stripe secret key for server-side operations.|
### Note:
Make sure to replace the placeholder values with your actual keys before deploying the application. Keep this file private and do not expose it in public repositories.
4. Run the app:
    ```bash
    expo start
    ```

5. Open the app on your mobile device with Expo Go.

## 🏗️ Project Structure

```bash
react-native-carpooling-app/
.
├── .vscode                         # VSCode settings and configurations
│   └── settings.json               # Personal preferences for the VSCode editor
├── app                             # Main application folder containing all app-related files
│   ├── api                         # API endpoints for server communication
│   │   ├── (stripe)               # Stripe integration for payment processing
│   │   │   ├── create+api.ts       # Endpoint for creating payment intents
│   │   │   └── pay+api.ts          # Endpoint for handling payment actions
│   │   ├── ride                    # Endpoints related to ride management
│   │   │   ├── [id]+api.ts         # Endpoint for fetching ride details by ID
│   │   │   └── create+api.ts       # Endpoint for creating new rides
│   │   ├── driver+api.ts           # Endpoints for driver-related actions
│   │   └── user+api.ts             # Endpoints for user-related actions
│   ├── auth                        # Authentication-related files
│   │   ├── _layout.tsx             # Layout for authentication pages
│   │   ├── sign-in.tsx             # Sign-in page component
│   │   ├── sign-up.tsx             # Sign-up page component
│   │   └── welcome.tsx             # Welcome page component after sign-in or sign-up
│   ├── root                        # Root layout and components for the app
│   │   └── (tabs)                  # Tab navigation structure
│   │       ├── _layout.tsx         # Layout for tab navigation
│   │       ├── chat.tsx            # Chat screen component
│   │       ├── home.tsx            # Home screen component
│   │       ├── profile.tsx         # User profile screen component
│   │       └── rides.tsx           # Rides management screen component
│   ├── _layout.tsx                 # Global layout component for the app
│   ├── book-ride.tsx               # Component for booking rides
│   ├── confirm-ride.tsx            # Component for confirming ride details
│   └── find-ride.tsx               # Component for finding available rides
├── +html.tsx                       # Custom HTML file for specific rendering needs
├── +not-found.tsx                  # 404 Not Found page component
├── _layout.tsx                     # Main layout for the application
├── index.tsx                       # Landing page component
├── assets                           # Folder for static assets
│   ├── fonts                        # Custom fonts used in the application
│   ├── icons                        # Icons used in the application
│   └── images                       # Images used in the application
├── components                       # Reusable UI components
│   ├── CustomButton.tsx             # Custom button component
│   ├── DriverCard.tsx               # Component for displaying driver information
│   ├── GoogleTextInput.tsx          # Custom input field for Google authentication
│   ├── InputField.tsx               # Generic input field component
│   ├── Map.tsx                      # Map component for displaying locations
│   ├── OAuth.tsx                    # OAuth integration component
│   ├── Payment.tsx                  # Payment processing component
│   ├── RideCard.tsx                 # Component for displaying ride information
│   └── RideLayout.tsx               # Layout component for ride-related screens
├── constants                        # Constant values and configurations
│   └── index.ts                     # Export of constant values for easy access
├── lib                              # Utility functions and libraries
│   ├── auth.ts                      # Authentication-related utilities
│   ├── fetch.ts                     # Fetching data utilities
│   ├── map.ts                       # Map-related utilities
│   └── utils.ts                     # General utility functions
├── scripts                          # Scripts for various automation tasks
│   └── reset-project.js             # Script to reset the project setup
├── store                            # State management folder
│   └── index.ts                     # Configuration for state management (e.g., Redux)
├── types                            # Type definitions for TypeScript
│   ├── image.d.ts                   # Image type definitions
│   └── type.d.ts                    # General type definitions used in the app
├── .env.example                     # Example environment variables file
├── .eslintrc.js                     # ESLint configuration for linting the code
├── .gitignore                       # Files and folders to ignore in version control
├── README.md                        # Project documentation and overview
├── app.json                         # App configuration file for React Native
├── babel.config.js                  # Babel configuration for transpiling code
├── nativewind-env.d.ts              # Type definitions for NativeWind
├── package-lock.json                # Exact versions of installed npm packages
├── package.json                     # Project metadata and dependencies
├── tailwind.config.js               # Tailwind CSS configuration file
└── tsconfig.json                    # TypeScript configuration file
```
## 📚 API Documentation

### Authentication

- **POST** `/api/auth/signup`: Create a new user account.
- **POST** `/api/auth/signin`: Sign in to an existing account.
- **GET** `/api/auth/signout`: Sign out the current user.

### Rides

- **GET** `/api/rides`: Retrieve all rides for the authenticated user.
- **POST** `/api/rides`: Create a new ride.
- **PUT** `/api/rides/:id`: Update an existing ride.
- **DELETE** `/api/rides/:id`: Delete a ride.

### Payment

- **POST** `/api/stripe/pay`: Process a payment using Stripe.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. **Fork the repository**: Click on the "Fork" button at the top-right corner of the repository page to create your own copy.
2. **Create your feature branch**:
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3. **Commit your changes**:
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
4. **Push to the branch**:
    ```bash
    git push origin feature/AmazingFeature
    ```
5. **Open a Pull Request**: Go to the repository on GitHub and click on "Compare & pull request" to open a new pull request.

Thank you for contributing!

## 📄 License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for more details.

---

## 👤 Author

**Salah Eddine Arbani**  
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/salaharb12)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/salah-arbani/)  
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/SalahArb09)  
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/salaharbani)  
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/salahsalah)  
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@salaharbani2582)  
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/user/Zealousideal-Band684/)  
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:salah.arb09@gmail.com)  


---

## 🙏 Acknowledgments

A heartfelt thanks to the following resources that made this project possible:

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Geoapify Documentation](https://www.geoapify.com/docs/)

---

## 🎉 Made with ❤️ by Salah Eddine Arbani

A special thank you to the open-source community for the incredible tools and libraries that made this project possible.

Feel free to reach out if you have any questions or just want to say hi!

---

## ⭐ Give a Star!

If you find this project helpful or inspiring, please consider giving it a star on GitHub! ⭐

Your support encourages me to keep improving and adding new features. 

Thank you for being part of this journey! If you have any feedback or suggestions, feel free to reach out!

---

### How to Star

1. Navigate to the [GitHub repository](https://github.com/salaharb12/react-native-carpooling-app.git).
2. Click on the **Star** button at the top right of the page.
3. Enjoy the project!

Your support means a lot! 🙌


## Conclusion

Thank you for exploring this project! With a robust feature set and user-friendly design, this application aims to redefine the ridesharing experience. Your feedback and contributions are invaluable as we continue to enhance and expand its capabilities. Together, let’s build something amazing!

Happy coding! 🚀
