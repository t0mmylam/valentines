# Valentine's Day Interactive Proposal

A cute and interactive Valentine's Day proposal web application built with React and Tailwind CSS, made with love for my girlfriend Eleanor. Check it out live at [eleanor-is-dumb.netlify.app](https://eleanor-is-dumb.netlify.app/)!

## About

I created this interactive Valentine's Day proposal to ask my girlfriend to be my Valentine in a fun and memorable way. The app features a simple question with animated responses, designed to bring a smile to her face (and hopefully get a "yes"! 😊).

## Features

- Interactive proposal with "Yes" and "No" options
- Responsive design that works on both mobile and desktop devices
- Cute animations using GIFs
- Different responses based on user interaction
- Custom styling with Tailwind CSS
- Pink-themed color scheme

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Netlify (hosting)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:t0mmylam/valentines.git
```

2. Navigate to the project directory:
```bash
cd valentines
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

- `App.tsx`: Main application component containing the Valentine's proposal logic
- `App.css`: Additional custom styles
- Public assets: GIFs and other media

## Package Information

```json
{
  "name": "valentines",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^4.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.18.2",
    "vite": "^6.0.5"
  }
}
```

## Customization

### Modifying GIFs
You can customize the GIFs by updating the URLs in the `sadGifs` and `happyGifs` arrays in `App.tsx`:

```typescript
const sadGifs = [
  // Add your sad reaction GIF URLs here
];

const happyGifs = [
  // Add your happy reaction GIF URLs here
];
```

### Styling
The project uses Tailwind CSS for styling. You can modify the appearance by:
- Updating the color scheme in the `backgroundColor` style property
- Modifying the Tailwind classes in the component
- Adjusting the font sizes and spacing in the responsive design classes

## Contributing

Feel free to fork this project and customize it for your own Valentine's Day proposal! If you have any improvements or suggestions, pull requests are welcome.

## License

This project is open source and available under the [MIT License](LICENSE).

## Deployment

This project is deployed on Netlify. You can visit it at [eleanor-is-dumb.netlify.app](https://eleanor-is-dumb.netlify.app/).

## Acknowledgments

- GIFs sourced from [GIPHY](https://giphy.com)
- Inspired by my girlfriend Eleanor and our love story
- Built with 💝 for that special someone

---

Happy Valentine's Day! 💘