# Public Profile Theme Project

## Overview

This project involves creating a customizable profile page with different themes using Astro. The profile page includes a profile picture, name, bio, social icons, and a set of links. The project supports three distinct themes: Bubblegum, Retro, and Minimal, each with its unique style and design.

## Features

- **Three Themes**: Bubblegum, Retro, and Minimal.
- **Customizable Profile**: Includes profile picture, name, bio, and social icons.
- **Dynamic Links**: Each theme supports a set of custom links.
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens.

## Installation

1. Clone the repository and navigate to the project directory.
2. Install the required packages.
3. Run the development server to view the project in your browser.

## Project Structure

- **`/src`**: Contains the source files, including components, layouts, pages, and styles.
- **`/public`**: Static assets like images and icons.
- **`astro.config.mjs`**: Astro configuration file.

## Adding New Themes

To add a new theme:

1. Create a new CSS file for the theme.
2. Update the `index.astro` page and `getStaticPaths` to include the new theme.
3. Modify the `profileData` object to include information for the new theme.
4. Update or create components to match the new theme’s styling.

## Customization

- **Profile Data**: Adjust the profile information in theme-specific pages.
- **Links**: Modify the links displayed in each theme by updating the `links` array.

## Responsive Design

The CSS is designed to be responsive, ensuring that the layout adjusts for mobile, tablet, and desktop screens.

## Contributing

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your changes.
3. Make and test your changes.
4. Submit a pull request with a description of your updates.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, please reach out to your-email@example.com.
