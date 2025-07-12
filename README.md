# Google-like Website

A plain HTML, CSS, and JavaScript implementation of a Google-like website with a search interface and news articles.

## Features

- **Google-like Design**: Clean, minimalist design that mimics Google's homepage
- **Responsive Navigation**: Top navbar with Gmail, Images links and user icons
- **Interactive Search Bar**: Search input with icons and buttons (demo functionality)
- **News Articles**: Fetches and displays articles from the DummyJSON API
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Google-like loading animations and hover effects

## Files Structure

```
plainJs/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality and API calls
└── README.md       # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Search functionality**: Type in the search bar and press Enter or click the search buttons
3. **News articles**: Scroll down to see the latest news articles fetched from the API
4. **Responsive design**: Resize your browser window to see the responsive layout

## API Integration

The website fetches news articles from the [DummyJSON Posts API](https://dummyjson.com/posts) and displays them in a grid layout. Each article shows:

- Title
- Truncated body text
- Automatically extracted tags
- Article ID

## Browser Compatibility

This website works in all modern browsers that support:

- ES6+ JavaScript features
- CSS Grid and Flexbox
- Fetch API
- CSS transitions and animations

## Customization

You can easily customize the website by:

- Modifying colors in `styles.css`
- Changing the API endpoint in `script.js`
- Adding more interactive features
- Customizing the layout and styling

## Notes

- The search functionality is for demonstration purposes only
- Links in the navigation and footer are non-functional
- The microphone icon shows an alert message
- News articles are limited to 12 for optimal layout

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks or libraries required
- **Font Awesome**: Icons
- **Google Fonts**: Roboto font family
