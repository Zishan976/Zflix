# MovieFlix - React Router Application

A modern movie browsing web application built with React and React Router, featuring dynamic routing, movie details, and a responsive design.

## 🎬 Features

- **Dynamic Movie Browsing**: Browse popular movies with detailed information
- **React Router Integration**: Seamless navigation between pages
- **Movie Details**: Individual movie pages with comprehensive information
- **Responsive Design**: Optimized for desktop and mobile devices
- **Loading States**: Smooth user experience with loading indicators
- **Error Handling**: Custom error pages for better user experience

## 🚀 Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: CSS3 with responsive design
- **API**: Movie database integration
- **Build Tool**: Vite for fast development and building

## 📁 Project Structure

```
react_router/
├── public/
│   └── vite.svg
├── src/
│   ├── Api/
│   │   ├── GetApiData.jsx
│   │   └── GetMovieDetails.jsx
│   ├── Components/
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Loading.jsx
│   │   └── UI/
│   │       ├── Card.jsx
│   │       └── MovieDetails.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movie.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── ErrorPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react_router
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Available Routes

- `/` - Home page with movie listings
- `/movie/:id` - Individual movie details
- `/about` - About page
- `/contact` - Contact page
- `*` - Custom 404 error page

## 🎨 Components

### Layout Components

- **AppLayout**: Main application layout wrapper
- **Header**: Navigation header with branding
- **Footer**: Footer with links and information
- **Loading**: Loading spinner component

### UI Components

- **Card**: Movie card component for listings
- **MovieDetails**: Detailed movie information display

### Pages

- **Home**: Landing page with movie grid
- **Movie**: Individual movie detail page
- **About**: Information about the application
- **Contact**: Contact information and form
- **ErrorPage**: 404 error handling

## 🔧 API Integration

The application integrates with a movie database API to fetch:

- Popular movies list
- Detailed movie information
- Movie posters and backdrops

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🧪 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For support, email support@movieflix.com or join our Slack channel.
