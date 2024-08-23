# Theme Profile Website

## Overview

This project is a theme-based profile website built with Astro. It allows users to view profiles in different themes and provides a link to navigate back to the home page. The profiles are dynamically loaded based on the selected theme, and each theme has its own unique styling.

## Live Demo

You can view the live version of the website [here](https://publicprofilethemes.netlify.app/).

## Project Structure

### Components

- **Footer**: A footer component with a link to navigate back to the home page.
- **Links**: A component to display a list of links based on the theme.
- **Profile**: A component to display profile information, including the profile picture, name, bio, social icons, and additional links.

### Layouts

- **BaseLayout**: The base layout component that includes global styles and meta tags for each page.

### Pages

- **Index**: The home page where users can choose their theme.
- **Themes**: Dynamic pages for each theme (`bubblegum`, `retro`, `minimal`) that display the corresponding profile and theme-specific styling.

### Scripts

- **Stars**: A script to create a starry effect in the background.
- **Themes**: A script to provide theme data including profile information and links.

### Styles

- **Global Styles**: Contains global CSS rules applied across the entire site.
- **Theme Styles**: Separate CSS files for each theme (`bubblegum`, `retro`, `minimal`) to handle theme-specific styling.

## Setup

1. **Clone the Repository**
    ``` bash
   git clone git@github.com:morwen44/public-profile.git
   ```

2. **Navigate to the Project Directory**
    ``` bash
    cd public-profile
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```
3. **Start the Development Server**
    ``` bash
    npm run dev
    ```

   This will start a local development server. 

## Features

- **Dynamic Theming**: Supports multiple themes with distinct styles.
- **Responsive Design**: Adaptable to different screen sizes.
- **Profile Management**: Display profile information including picture, name, bio, and social links.

## Components and Pages

- **Footer**: Provides a link to navigate back to the home page.
- **Profile**: Displays profile details including social media icons and theme-specific links.
- **Themes**: Each theme page (`bubblegum`, `retro`, `minimal`) dynamically loads and displays the corresponding profile data and styles.
