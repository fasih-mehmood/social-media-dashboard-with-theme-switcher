# Frontend Mentor - Project tracking intro component solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

### Desktop View
![Desktop View](./screenshots/desktop.png?raw=true "Desktop View")
### Mobile View
![Mobile View](./screenshots/mobile.png?raw=true "Mobile View")
![Mobile Menu View](./screenshots/mobile-menu.png?raw=true "Mobile Menu View")

### Links

- Solution URL: [Github](https://github.com/fasih-mehmood/social-media-dashboard-with-theme-switcher)
- Live Site URL: [Github](https://fasih-mehmood.github.io/social-media-dashboard-with-theme-switcher)

## My process

I coded the skeleton of the page in HTML.
Then I set the layout of the page followed by styling all the components in CSS.
The CSS was written using a mobile-first approach.
After that I wrote javascript to make the hamburger functional and added a fade transition.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first approach
- JavaScript

### What I learned

I learned the use of :root selector which can be used to specify variables that can be used later on.

```css
:root {
  --bs-primary: hsl(0, 100%, 68%);
}
.text-primary {
  color: var(--bs-primary);
}
```

## Author

- Frontend Mentor - [@fasih-mehmood](https://www.frontendmentor.io/profile/fasih-mehmood)
