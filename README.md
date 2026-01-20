# Zero1 - Modern Business Portfolio Website

<div align="center">
  
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  
  A modern, responsive single-page business portfolio website with smooth animations and interactive features.
  
  [View Demo](#) · [Report Bug](#) · [Request Feature](#)
  
</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Sections Overview](#sections-overview)
- [JavaScript Functionality](#javascript-functionality)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

**Zero1** is a fully responsive, modern business portfolio website designed to showcase services, team members, skills, and testimonials. Built with pure HTML5, CSS3, and vanilla JavaScript, this project demonstrates clean code practices and modern web development techniques without relying on frameworks.

### Key Highlights:
- 🎨 Modern and clean UI/UX design
- 📱 Fully responsive across all devices
- ⚡ Smooth scroll animations
- 🎭 Interactive animations on scroll
- 🕐 Real-time countdown timer
- 📊 Animated progress bars and counters
- 🎯 Mega menu navigation
- 🖼️ Interactive image gallery

---

## ✨ Features

### Core Features
- **Responsive Navigation**: Fixed header with mega menu dropdown for additional pages
- **Hero Section**: Eye-catching landing page with call-to-action
- **Article Cards**: Grid layout showcasing 8 different articles with hover effects
- **Image Gallery**: Interactive gallery with 6 images and hover animations
- **Feature Showcase**: Three main features (Quality, Time, Passion) with visual presentation
- **Testimonials**: Customer reviews from 6 team members with star ratings
- **Team Members**: Detailed cards for 8 team members with social media links
- **Services Section**: 6 service offerings with icons and descriptions
- **Skills Display**: Animated progress bars showing proficiency levels (HTML, CSS, JavaScript, Python)
- **Work Process**: 3-step workflow visualization
- **Event Countdown**: Real-time countdown timer for upcoming events (auto-resets)
- **Pricing Plans**: Three-tier pricing structure (Basic, Advanced, Professional)
- **Video Section**: Curated list of top videos with preview
- **Statistics Counter**: Animated counters showing business metrics on scroll
- **Discount Form**: Email subscription and contact form
- **Footer**: Comprehensive footer with social links and contact information

### Interactive Features
- Scroll-triggered animations
- Smooth scrolling to sections
- Animated skill progress bars
- Auto-incrementing statistics
- Countdown timer with automatic monthly reset
- Hover effects on cards and buttons
- Responsive mobile menu

---

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with:
  - Flexbox & Grid layouts
  - CSS animations and transitions
  - Custom properties (CSS variables)
  - Media queries for responsive design
- **JavaScript (ES6+)** - Vanilla JavaScript for:
  - DOM manipulation
  - Scroll event listeners
  - Progress bar animations
  - Counter animations
  - Countdown timer functionality
- **Font Awesome** - Icon library (v5.15+)
- **Google Fonts** - Cairo & Open Sans typefaces
- **Normalize.css** - CSS reset for cross-browser consistency

---

## 🚀 Getting Started

### Prerequisites

No special prerequisites needed! This is a static website that runs in any modern web browser.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/my-3rd-project.git
   ```

2. Navigate to the project directory
   ```bash
   cd my-3rd-project
   ```

3. Open `index.html` in your browser
   ```bash
   # Using default browser (Windows)
   start index.html
   
   # Or simply double-click index.html
   ```

### Alternative: Live Server

For a better development experience with auto-reload:

1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📁 Project Structure

```
my-3rd-project/
│
├── index.html              # Main HTML file
├── main.js                 # JavaScript functionality
├── README.md               # Project documentation
│
├── css/
│   ├── index.css           # Main stylesheet
│   ├── normalize.css       # CSS reset
│   └── all.min.css         # Font Awesome icons
│
├── imges/                  # Image assets
│   ├── landing-image.png
│   ├── avatar-01.png to avatar-06.png
│   ├── cat-01.jpg to cat-08.jpg
│   ├── team-01.jpg to team-08.jpg
│   ├── gallery-*.png/jpg
│   ├── features-*.jpg
│   ├── hosting-*.png
│   └── ... (47 total images)
│
└── webfonts/               # Font Awesome webfonts
```

---

## 📑 Sections Overview

| Section | ID | Description |
|---------|-------|-------------|
| **Header** | `#header` | Fixed navigation with logo and mega menu |
| **Landing** | - | Hero section with welcome message |
| **Articles** | `#articles` | 8 article cards in responsive grid |
| **Gallery** | `#gallery` | 6-image interactive gallery |
| **Features** | `#features` | Quality, Time, and Passion highlights |
| **Testimonials** | `#testimonials` | 6 customer reviews |
| **Team** | `#team` | 8 team member profiles |
| **Services** | `#services` | 6 service offerings |
| **Our Skills** | `#our-skills` | Animated skill progress bars |
| **Work Steps** | `#work-steps` | 3-step process visualization |
| **Events** | `#events` | Countdown timer for upcoming event |
| **Pricing** | `#pricing` | 3 pricing tiers |
| **Videos** | `#videos` | Top video playlist |
| **Stats** | `#stats` | Animated business statistics |
| **Discount** | `#discount` | Subscription and contact form |
| **Footer** | - | Social links and site information |

---

## ⚙️ JavaScript Functionality

### 1. Animated Progress Bars (`main.js` Lines 1-24)
```javascript
// Animates skill progress bars when scrolled into view
// Triggers at: skills section offsetTop (responsive)
```
- Detects scroll position
- Animates progress bars to target values
- Responsive threshold (250px offset on desktop, 0px on mobile)

### 2. Statistics Counter (`main.js` Lines 25-42)
```javascript
// Increments stats numbers from 0 to target value
// Triggers at: stats section offsetTop (responsive)
```
- Smooth counting animation
- Reads target values from `data-value` attributes
- Auto-stops at target numbers

### 3. Countdown Timer (`main.js` Lines 44-75)
```javascript
// Real-time countdown to event date
// Event Date: March 6, 2025 + 31 days
// Auto-resets monthly
```
- Calculates days, hours, minutes, seconds
- Updates every second
- Automatically adds 31 days when countdown reaches zero
- Zero-padded display (e.g., "09" instead of "9")

---

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- **Desktop**: 1200px+
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

### Responsive Features:
- Flexible grid layouts (articles, gallery, team, services)
- Mobile-optimized navigation
- Responsive images with `decoding="async"`
- Adjusted scroll triggers for smaller screens
- Touch-friendly interactive elements

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

**Mohamed Halima** - Creator & Developer

Project Link: [https://github.com/yourusername/my-3rd-project](https://github.com/yourusername/my-3rd-project)

---

## 🙏 Acknowledgments

- **Design Inspiration**: Elzero Web School
- **Icons**: [Font Awesome](https://fontawesome.com)
- **Fonts**: [Google Fonts](https://fonts.google.com) - Cairo & Open Sans
- **CSS Reset**: [Normalize.css](https://necolas.github.io/normalize.css/)
- **Images**: Various sources (replace with your own or properly licensed images)

---

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](./screenshots/desktop-view.png)

### Mobile View
![Mobile Screenshot](./screenshots/mobile-view.png)

### Features
![Features Section](./screenshots/features.png)

---

## 🔮 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement backend for contact forms
- [ ] Add blog functionality
- [ ] Integrate CMS for easy content updates
- [ ] Add loading animations
- [ ] Implement lazy loading for images
- [ ] Add multilingual support (i18n)
- [ ] SEO optimization
- [ ] Add unit tests
- [ ] Performance optimization with Lighthouse

---

<div align="center">
  
  **⭐ Star this repo if you find it useful! ⭐**
  
  Made with ❤️ by Mohamed Halima
  
</div>
