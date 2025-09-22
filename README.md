# Micro Frontend Last.FM App

This project showcases how micro frontends can be applied in a modern music application built with Vite, React, and TypeScript, leveraging Module Federation. It brings together independently developed modules to deliver key features like top tracks and top artists listings, detailed artist views, and home page with ability to search artists. [Link to the presentation](https://docs.google.com/presentation/d/1fHFqcti43R0wpRZ0DLmhQCS3frB2Mghv/edit?usp=sharing&ouid=118293489508414654005&rtpof=true&sd=true)

## Project Structure

- **host**: host application with header and footer. Displays menu and theme switcher.
- **home**: allows to search artists and see detailed information.
- **top-tracks**: displays a list of top tracks.
- **top-artists**: displays a list of top artists.
- **artist-details**: displays detailed information about a selected artist.

## Features

- Micro Frontend architecture with Module Federation, TypeScript and React
- Integration with Last.fm API for artist and tracks data
- TailwindCSS and HeroUI (Previously NextUI) for UI components
- RTK-Query for state management and axios for data fetching

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Mirror-Image/lastfm-micro-frontends.git
   ```
   
2. Get a Last.fm API key by creating an account on [Last.fm](https://www.last.fm/api/account/create) and replace `VITE_LASTFM_API_KEY` in the `.env` files of each remote application with your actual API key.

3. Install dependencies, build and run the individual apps:
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
4. Visit http://localhost:3000 to see the host application in action.
