# Micro Frontend Last.FM App

This project showcases how micro frontends can be applied in a modern music application built with Vite, React, and TypeScript, leveraging Module Federation. It brings together independently developed modules to deliver key features like top tracks and top artists listings, detailed artist views, and home page with ability to search artists.

## Project Structure

- **host**: Host application with header and footer. Displays menu and theme switcher.
- **home**: Allow to search artists and see detailed information.
- **top-tracks**: Displays a list of top tracks using the Last.fm API.
- **top-artists**: Displays a list of top artists using the Last.fm API.
- **artist-details**: Displays detailed information about a selected artist.

## Features

- Micro Frontend architecture with Module Federation, TypeScript and React
- Integration with Last.fm API for artist data
- TailwindCSS and NextUI for UI components
- RTK-Query for state management and axios for data fetching

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Mirror-Image/lastfm-micro-frontends.git
   ```

2. Install dependencies, build and run the individual apps:
- Host (host application)
  ```bash
  cd host
  npm run build
  npm run preview
  ```
- Home (remote application)
  ```bash
  cd home
  npm run build
  npm run preview
  ```
- Top Tracks (remote application)
   ```bash
   cd top-tracks
   npm run build
   npm run preview
   ```
- Top Artists (remote application)
   ```bash
   cd top-artists
   npm run build
   npm run preview
   ```
- Artist Details (remote application)
   ```bash
   cd artist-details
   npm run build
   npm run preview
   ```
3. Visit http://localhost:3000 to see the host application in action.
