# DesignLab Website

Static business website for DesignLab web design services.

## About

DesignLab is a web design business run by Julia Wright and Michael Pynn. This site
is built as a plain HTML/CSS/JavaScript static site — no frameworks, no build tools,
no dependencies.

## Pages

| File             | Page       |
|------------------|------------|
| index.html       | Home       |
| services.html    | Services   |
| portfolio.html   | Portfolio  |
| about.html       | About      |
| contact.html     | Contact    |

## File Structure

```
designlab-website/
├── index.html
├── services.html
├── portfolio.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    (place image assets here)
```

## How to Run Locally

Open `index.html` in any browser, or use the **Live Server** extension in VS Code
for hot reload during editing (right-click `index.html` → "Open with Live Server").

## Before Going Live

1. **Contact form** — connect the form in `contact.html` to a backend service.
   Options include:
   - [Formspree](https://formspree.io) — add `action="https://formspree.io/f/YOUR_ID"` to the form
   - [Netlify Forms](https://www.netlify.com/products/forms) — add `netlify` attribute to the form
   - [EmailJS](https://www.emailjs.com) — call their SDK from `main.js`

2. **Email address** — replace `hello@designlab.com` throughout with your real address.

3. **Testimonials** — replace the placeholder testimonials in `index.html` with real ones.

4. **Portfolio** — replace the placeholder cards in `portfolio.html` with real project screenshots.

5. **Team photos** — replace the initials avatars in `about.html` with real photos.

## How to Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to the repository **Settings**.
3. Click **Pages** in the left sidebar.
4. Under **Source**, select **Deploy from a branch**.
5. Choose the **main** branch and set the folder to **/ (root)**.
6. Click **Save**.

Your site will be live at `https://yourusername.github.io/repository-name` within
a few minutes. Every time you push changes to the `main` branch the site will
automatically update.
