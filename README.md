# JobPostApp

JobPostApp is a React Native application that allows users to post job listings and preview them. This app is built using React Native CLI, TypeScript, and several other libraries for smooth UI and navigation.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)

## Requirements

- Node.js v20.14.0
- npm v10.7.0
- React Native CLI v2.0.1
- React Native 0.74.2 (Recommended)
- Android Studio (for Android development)
- Xcode (for iOS development)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/ferozamir/job-post-app.git
    cd JobPostApp
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Link native dependencies:**

    ```sh
    npx react-native link (if required)
    ```

## Running the App

### Android

1. **Start the Android emulator:**

    Open Android Studio and start an emulator or connect a physical device.

2. **Run the app:**

    ```sh
    npm run android
    ```

### iOS

1. **Install pods:**

    ```sh
    1. cd ios
    2. pod install
    2. cd ..
    ```

2. **Run the app:**

    ```sh
    npm run ios
    ```

## Project Structure

The project's structure is as follows:

JobPostApp/
├── android/ # Native Android code
├── ios/ # Native iOS code
├── src/ # Source files
│ ├── components/ # Reusable components
│ ├── screens/ # Screen components
│ ├── navigation/ # Navigation setup
│ ├── assets/ # Assets (images, fonts, etc.)
├ ├── App.tsx # Entry point of the app
├ ├── colors.ts # Global Colors for app
├── package.json # Project dependencies
├── tsconfig.json # TypeScript configuration
├── react-native.config.js # Link Fonts to App
└── README.md # Project documentation