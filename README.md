# Jordan Reeve Portfolio — Setup Notes

## Folder structure
```
portfolio/
├── index.html
├── videography.html
├── photography.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── images/     ← put your photos here
└── videos/     ← put your video files here (or use Vimeo/YouTube embeds instead)
```

## Adding your content

**Photos:** drop files into `images/`, then find the matching `<div class="placeholder-fill">...</div>`
in the HTML and replace it with:
```html
<img src="images/your-file.jpg" alt="Description of the photo">
```

**Hero video (homepage):** in `index.html`, replace `<div class="hero-fallback"></div>` with:
```html
<video autoplay muted loop playsinline poster="images/hero-poster.jpg">
  <source src="videos/reel.mp4" type="video/mp4">
</video>
```

**Videography clips:** recommended to embed from Vimeo/YouTube rather than hosting large
video files yourself (see the comment in `videography.html`). Replace the placeholder div with:
```html
<iframe src="https://player.vimeo.com/video/YOUR_ID" style="width:100%;height:100%;border:0;" allowfullscreen></iframe>
```

## Placeholder text
Search each HTML file for text like "Placeholder" or bracketed notes — swap in your real
name, bio, contact details, and captions before publishing.

## Deploying
Drag this whole `portfolio` folder into Netlify, or push it to a GitHub repo and connect
that repo to Netlify for auto-deploys on every change.

## Contact form
The form on `contact.html` doesn't submit anywhere yet. Once the site is live on Netlify,
ask Claude to wire it up using Netlify Forms (just a couple of small attribute changes).
