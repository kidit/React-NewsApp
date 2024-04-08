# News Viewer App

This project outlines the setup for a React-based news application that leverages NewsAPI to fetch and display news articles based on different criteria such as keyword, publication, and category. Follow the steps below to get started with your own News Viewer app.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Yarn package manager

### Installing

1. **Create Project**
    ```bash
    yarn create react-app news-viewer
    ```
    
2. **Navigate to Project Directory**
    ```bash
    cd news-viewer
    ```
    
3. **Add Axios**
    Axios is used for making HTTP requests to fetch or save data. You can add it to your project with:
    ```bash
    yarn add axios
    ```

## Configuration

1. **Prettier Configuration** (`prettierrc`)
    - Ensure consistent code style by setting up Prettier. Create a `.prettierrc` file for auto-aligning your code style.

2. **JSConfig for Absolute Imports** (`jsconfig.json`)
    - Create a `jsconfig.json` file in the top directory to enable absolute imports and integrate with `.prettierrc`.

3. **Fetching News Data**
    - Sign up at [NewsAPI](https://newsapi.org/register) and get your API key to fetch news data.
    - Utilize the provided links with your API key to fetch different sets of news data as per your requirement.

4. **Styling Components**
    - Use Styled Components for styling:
    ```bash
    yarn add styled-components
    ```
    
5. **Routing**
    - Incorporate React Router for navigation within your app:
    ```bash
    yarn add react-router-dom
    ```

## API Usage

- Example API calls with `axios` to fetch news data:

    1. Articles mentioning Apple from yesterday, sorted by popular publishers first.
    2. Articles about Tesla from the last month, sorted by recent first.
    3. Top business headlines in your country right now.
    4. Top headlines from TechCrunch right now.
    5. All articles published by the Wall Street Journal in the last 6 months, sorted by recent first.

Refer to NewsAPI documentation for detailed API parameters and adjust the links as per your needs with your API key.

---

Enjoy building your News Viewer App!