# 🎯 Quick Customization Guide - NEXUS PARK

## 🎨 Change Park Name
Edit in 3 places:

1. **HTML (index.html)**
   - Line 6: `<title>NEXUS PARK - Next Level Fun</title>`
   - Line 24: `.logo` text - `NEXUS PARK`

2. **CSS (styles.css)** - Keep as is or update in HTML

3. **JavaScript (script.js)** - Keep as is or update in HTML

## 🖼️ Replace Images

All images currently use Unsplash (free stock photos). Replace with your actual park images:

### Ride Images (6 rides)
```html
<!-- Line 250-255 -->
<img src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop" 
     alt="The Titan">
```
Replace with your ride photos

### Video Thumbnails (3 videos)
```html
<!-- Line 490-510 -->
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" 
     alt="Video 1">
```
Replace with your video thumbnails

## 🎢 Update Rides Section

Find the rides grid (around line 250) and update:

```html
<div class="ride-card">
    <!-- 1. Change image -->
    <img src="YOUR_IMAGE_URL" alt="Your Ride Name">
    
    <!-- 2. Change difficulty badge -->
    <span class="difficulty extreme">EXTREME</span>
    <!-- Options: extreme, hard, medium, easy -->
    
    <!-- 3. Update ride details -->
    <h3>Your Ride Name</h3>
    <p class="description">Your ride description here</p>
    
    <!-- 4. Update statistics -->
    <span><i class="fas fa-ruler"></i> Your Height</span>
    <span><i class="fas fa-tachometer-alt"></i> Your Speed</span>
</div>
```

## 🎮 Update Activities

Find activities section (around line 300) and modify:

```html
<div class="activity-card">
    <div class="activity-icon">
        <i class="fas fa-YOUR-ICON"></i>
    </div>
    <h3>Your Activity Name</h3>
    <p>Your activity description 🎯</p>
</div>
```

**Icon library**: Font Awesome - Find icons at [fontawesome.com/icons](https://fontawesome.com/icons)

Common icons:
- `fa-fire` - Hot/Popular
- `fa-music` - Music/Entertainment
- `fa-pizza-slice` - Food
- `fa-person-hiking` - Adventure
- `fa-water` - Water activities
- `fa-camera` - Photos
- `fa-gamepad` - Gaming

## 📅 Update Events

Find events section (around line 360) and update:

```html
<div class="event-card">
    <div class="event-date">
        <span class="day">15</span>
        <span class="month">MAY</span>
    </div>
    <div class="event-details">
        <h3>Your Event Name</h3>
        <p>Your event description</p>
    </div>
</div>
```

## 💬 Update Testimonials

Find testimonials section (around line 510) and change:

```html
<div class="testimonial-card active">
    <div class="testimonial-header">
        <img src="https://i.pravatar.cc/150?img=1" alt="User">
        <div>
            <h4>Person Name</h4>
            <p>Their Title/Description</p>
        </div>
    </div>
    <p class="review-text">"Their review text here..."</p>
</div>
```

For real user avatars, upload images to your server or use:
- [Gravatar](https://gravatar.com)
- [UI Avatars](https://ui-avatars.com)

## 💰 Update Pricing

Find pricing section (around line 560) and modify:

```html
<div class="pricing-card featured">
    <h3>Package Name</h3>
    <div class="price">$99</div>
    <p class="price-desc">Per Person</p>
    <ul class="features">
        <li><i class="fas fa-check"></i> Feature 1</li>
        <li><i class="fas fa-check"></i> Feature 2</li>
        <li><i class="fas fa-check"></i> Feature 3</li>
        <li><i class="fas fa-times"></i> Not included</li>
    </ul>
</div>
```

## 📍 Update Contact Information

Find footer (around line 650):

```html
<div class="footer-section">
    <h4>Visit Us</h4>
    <p>📍 Your Park Address Here</p>
    <p>📞 +1 (555) Your-Phone-Number</p>
    <p>📧 your-email@yourpark.com</p>
</div>
```

## 🎨 Change Color Scheme

Edit the top of `styles.css` (lines 9-17):

```css
:root {
    --primary-color: #ff006e;      /* Change this pink */
    --secondary-color: #8338ec;    /* Change this purple */
    --accent-color: #fb5607;       /* Change this orange */
}
```

**Gen-Z Color Ideas**:
- Pink + Purple + Orange (current)
- Cyan + Purple + Pink
- Green + Yellow + Blue
- Red + Purple + Orange

Use [coolors.co](https://coolors.co) to create palettes!

## 🔗 Add Social Media Links

Find footer social links section and update:

```html
<div class="social-links">
    <a href="https://instagram.com/yourprofile"><i class="fab fa-instagram"></i></a>
    <a href="https://tiktok.com/@yourprofile"><i class="fab fa-tiktok"></i></a>
    <a href="https://youtube.com/yourprofile"><i class="fab fa-youtube"></i></a>
    <a href="https://twitter.com/yourprofile"><i class="fab fa-twitter"></i></a>
</div>
```

## 📝 Common CSS Updates

### Change Font
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

Suggestions:
- 'Poppins'
- 'Inter'
- 'Montserrat'
- 'Space Mono'

### Adjust Spacing
```css
.rides {
    padding: 6rem 2rem;  /* Change 6rem to make bigger/smaller */
}
```

### Change Border Radius
```css
.ride-card {
    border-radius: 20px;  /* Change to 10px for angular, 30px for rounder */
}
```

## 🎥 Add Videos

Replace the video thumbnail sections with actual video embeds:

```html
<div class="video-card">
    <iframe width="100%" height="250" 
            src="https://www.youtube.com/embed/VIDEO_ID" 
            title="Video title" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
    <h3>Your Video Title</h3>
</div>
```

## 🔍 Add Analytics

Add Google Analytics code before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Get your GA_ID from [Google Analytics](https://analytics.google.com)

## 📧 Connect Newsletter Form

Currently, the newsletter form just shows a thank you message. To make it functional:

### Option 1: Mailchimp
```javascript
// Update form action in HTML:
<form action="https://mailchimp.com/subscribe/endpoint" method="POST">
    <input type="email" name="email" required>
    <button type="submit">Subscribe</button>
</form>
```

### Option 2: FormSubmit (Free)
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
    <input type="email" name="email" required>
    <button type="submit">Subscribe</button>
</form>
```

## 🎟️ Connect Booking

Link booking buttons to your ticketing system:

```html
<button class="book-btn" onclick="window.location.href='https://your-booking-system.com'">
    Book Now
</button>
```

Or integrate with:
- [Eventbrite](https://eventbrite.com)
- [Ticketmaster](https://ticketmaster.com)
- Custom backend

## 📱 Test on Mobile

Quick checklist:
- ✓ Open in phone browser
- ✓ Test all buttons work
- ✓ Check if text is readable
- ✓ Test navigation menu
- ✓ Try slides/carousels
- ✓ Test form submission

## 🚀 Ready to Deploy?

1. Replace all placeholder content
2. Test all links and buttons
3. Optimize images
4. Check mobile responsiveness
5. Deploy to hosting service

---

## 💡 Pro Tips

1. **Use consistent language** - Keep the Gen-Z vibe throughout
2. **Keep descriptions short** - People don't read long text
3. **Add emojis** - Makes it feel modern and fun
4. **Use real photos** - Stock photos are okay, but real images are better
5. **Test everything** - Click all buttons, try all links
6. **Mobile first** - Test on phone first before desktop

## 🎉 You're All Set!

Your amusement park website is ready to go. Have fun customizing it! 🎢✨
