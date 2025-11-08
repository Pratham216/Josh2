# Figma Land - Website Project

A modern, responsive website built based on Figma designs with interactive features including video controls, testimonial slider, contact form modal, and Google Maps integration.

## Features

### ✅ Required Functionalities

1. **Video Section**
   - Video play/pause on click
   - Play icon overlay when video is paused
   - Uses a sample video from Google's test videos

2. **Testimonial Slider**
   - Auto-slides every 5 seconds
   - Manual navigation via dots
   - Blue dot = inactive, White dot = active
   - Smooth transitions between testimonials

3. **Contact Form**
   - Modal popup with success message
   - Close button on modal
   - Basic HTML5 validation (required fields, email format)
   - Body scroll prevention when modal is open

4. **Google Maps**
   - Interactive Google Maps embed
   - Located in the contact section

5. **Responsive Design**
   - Mobile-friendly layout
   - Responsive breakpoints for tablets and mobile devices
   - Optimized for various viewport sizes

## Project Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All CSS styling
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Sections

1. **Hero Section** - Dark background with navigation, logo, and CTA button
2. **Features Section** - Three feature cards with icons and descriptions
3. **Video Section** - Interactive video player with play/pause functionality
4. **Organize Section** - Two-column layout with laptop mockup
5. **Newsletter Section** - Subscription form with illustration
6. **Partners Section** - Client logos grid
7. **Testimonials Section** - Slider/carousel with auto-rotation
8. **Pricing Section** - Three pricing cards with highlighted standard plan
9. **Contact Section** - Contact form and Google Maps
10. **Footer** - Navigation links and contact information

## Usage

1. Open `index.html` in a web browser
2. All functionality is included and works without any build process
3. The video uses a sample video from Google's test video bucket
4. Google Maps is embedded and interactive
5. Form validation works with HTML5 validation

## Customization

- **Video**: Replace the video source in `index.html` (line ~67) with your own video URL
- **Google Maps**: Update the iframe embed URL in `index.html` (line ~348) with your desired location
- **Colors**: Modify the color scheme in `styles.css` (primary color: #3699FF)
- **Content**: Update text, images, and descriptions in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The project uses vanilla JavaScript (no external dependencies required)
- All icons are created using SVG
- The design is responsive and works on mobile, tablet, and desktop
- No API integration is required for the contact form (as per requirements)

