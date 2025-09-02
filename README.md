# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with Flask, featuring a futuristic design with smooth animations and interactive elements.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0a0a/00d4ff?text=Portfolio+Preview)

## ✨ Features

### 🎨 **Modern Design**
- **Futuristic UI**: Dark theme with cyan/blue accent colors
- **Glass Morphism**: Modern glass-like effects with backdrop blur
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: CSS animations and JavaScript interactions

### 🛠️ **Interactive Elements**
- **Magnetic Buttons**: Buttons that respond to mouse movement
- **Scroll Animations**: Elements animate in as you scroll
- **Particle System**: Dynamic background particles
- **Typing Effect**: Animated text typing on hero section
- **Mouse Follower**: Interactive cursor effects

### 📱 **Multi-Page Layout**
- **Home**: Hero section with call-to-action
- **About**: Skills, experience, and personal information
- **Projects**: Showcase of development projects
- **Contact**: Contact form and social links

### 🎯 **Professional Sections**
- **Skills Grid**: Visual representation of technical skills
- **Project Cards**: Detailed project showcases with tech badges
- **Experience Timeline**: Professional experience and education
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

### **Backend**
- **Flask** - Python web framework
- **Jinja2** - Template engine

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Interactive functionality
- **Bootstrap** - Responsive framework

### **Design & Animation**
- **Google Fonts** - Inter & JetBrains Mono typography
- **Font Awesome** - Icons and symbols
- **CSS Grid & Flexbox** - Modern layout techniques

## 🚀 Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open in browser**
   ```
   http://localhost:5000
   ```

## 📁 Project Structure

```
portfolio-website/
│
├── app.py                    # Flask application
├── requirements.txt          # Python dependencies
├── README.md                # Project documentation
│
├── templates/               # HTML templates
│   ├── base.html           # Base template
│   ├── home.html           # Home page
│   ├── about.html          # About page
│   ├── projects.html       # Projects page
│   └── contact.html        # Contact page
│
├── static/                  # Static files
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   └── js/
│       └── scripts.js      # JavaScript functionality
│
└── TODO.md                 # Development tasks
```

## 🎨 Customization

### **Color Scheme**
The portfolio uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #00d4ff;    /* Cyan */
    --secondary-color: #0099cc;  /* Blue */
    --accent-color: #00ff88;     /* Green */
    --dark-bg: #0a0a0a;          /* Dark background */
    --text-color: #ffffff;       /* White text */
}
```

### **Content Updates**
1. **Personal Information**: Update `templates/about.html`
2. **Projects**: Modify `templates/projects.html`
3. **Contact Details**: Edit `templates/contact.html`
4. **Styling**: Customize `static/css/style.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🌟 Key Features Explained

### **Animation System**
- **Scroll-triggered animations** using Intersection Observer
- **Smooth scrolling** with custom easing functions
- **Particle animations** in the background
- **Magnetic button effects** for interactive elements

### **Performance Optimizations**
- **Hardware acceleration** for smooth animations
- **Lazy loading** for images and content
- **Optimized CSS** with minimal repaints
- **Throttled scroll events** for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Your Name**
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)
- **Portfolio**: [Your Website](https://yourwebsite.com)

## 🙏 Acknowledgments

- **Flask** for the excellent web framework
- **Bootstrap** for responsive components
- **Font Awesome** for beautiful icons
- **Google Fonts** for typography
- **Unsplash/Pexels** for stock images (if used)

## 🔄 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add project filtering system
- [ ] Integrate with headless CMS
- [ ] Add contact form backend
- [ ] Implement PWA features

---

⭐ **Star this repo if you found it helpful!**

Made with ❤️ and lots of ☕
