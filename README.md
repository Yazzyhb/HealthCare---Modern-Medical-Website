# HealthCare - Modern Medical Website

A responsive healthcare website built with React, TypeScript, and Tailwind CSS. This project provides a comprehensive platform for a medical clinic or healthcare provider to showcase their services, allow patients to book appointments, and access important healthcare resources.

![HealthCare Website](https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Interactive Navigation**: Smooth scrolling to different sections of the website
- **Appointment Booking**: Form for patients to schedule appointments with validation
- **Service Showcase**: Display of medical services with expandable sections
- **Patient Resources**: Downloadable forms, insurance information, and health education materials
- **Blog/News Section**: Health articles with expandable content
- **Contact Form**: Form for patients to send inquiries with validation
- **Testimonials**: Patient reviews and feedback
- **Emergency Information**: Dedicated section for emergency care details

## Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static type-checking for JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend tooling
- **Lucide React**: Icon library for modern UI elements

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/healthcare-website.git
   cd healthcare-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
healthcare-website/
├── src/                  # Source files
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite type definitions
├── public/               # Static files
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Key Components

- **Navigation**: Responsive navbar with mobile menu
- **Hero Section**: Main landing section with call-to-action buttons
- **About Us**: Information about the clinic's mission, vision, and values
- **Services**: Medical services offered with expandable sections
- **Appointments**: Form for scheduling appointments
- **Resources**: Patient forms, insurance information, and health education materials
- **Testimonials**: Patient reviews
- **Emergency Information**: Emergency contact details and guidelines
- **Blog/News**: Health articles and updates
- **Contact**: Contact form and information
- **Footer**: Site navigation and additional information

## Customization

### Modifying Services

Edit the `basicServices` and `additionalServices` arrays in `App.tsx` to update the services offered by the clinic.

### Updating Content

Most of the website content is stored in arrays and objects within the `App.tsx` file:

- `patientForms`: Downloadable patient forms
- `insuranceProviders`: Accepted insurance providers
- `healthResources`: Health education materials
- `blogPosts`: Health articles and news

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file to change the theme
2. Adding custom styles in `index.css`
3. Updating the class names in the components

## Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Browser Support

The website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Font families from Google Fonts

## Contact

For any questions or suggestions, please reach out to:

- Email: info@healthcare-example.com
- Website: [healthcare-example.com](https://healthcare-example.com)