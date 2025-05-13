# Job Searching App

## Overview
A mobile application built with **React Native** to help users discover job opportunities by searching for listings in real-time. The app fetches job data from the **JSearch API** (via RapidAPI) and presents it in an intuitive interface, making job hunting efficient and user-friendly.

## Frontend
- **React Native**: Cross-platform framework for building the mobile UI, compatible with iOS and Android.
- **Axios**: Handles HTTP GET requests to the JSearch API, simplifying data fetching and response parsing.
- **React Hooks**:
  - `useState`: Manages job data, loading states, and error messages.
  - `useEffect`: Triggers API calls on component mount for automatic data retrieval.
- **Custom Hook**: `useFetch` encapsulates API fetching logic, providing reusable functionality for job data, loading status, error handling, and refetching.

## APIs
- **JSearch API (RapidAPI)**:
  - Source: Hosted on RapidAPI (`https://jsearch.p.rapidapi.com`).
  - Functionality: Retrieves job listings based on user-defined query parameters (e.g., job title, location).
  - Authentication: Uses a RapidAPI key and host header for secure access.

## Key Features
- Search and display job listings with details fetched from the JSearch API.
- Handle loading states to improve user experience during data retrieval.
- Display error alerts for failed API requests, ensuring robust error handling.
- Support manual data refresh through a `refetch` function.

## Notes
- Future improvements could include advanced search filters, offline caching, or integration with additional job APIs.
