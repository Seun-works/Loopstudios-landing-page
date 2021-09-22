# Loopstudios-landing-page

![Design preview for the Loopstudios landing page coding challenge](./design/desktop-preview.jpg)



## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)




## Overview

This project is a landing page for a fictional company created to be responisve at various sizes. The aim of this project is for users to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Live Site URL: [Loopstudios Landing page ]

## My process
I've done this project twice and I must say that it was a blessing in disguise. My first attempt at it was done from a desktop version first, which led to so many complications in building the mobile version and making the site responsive. I addressed this flaw in my design process by redoing this project, but with the mindset of starting from the mobile version and work my way up to the more complicated destop version.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Javascript
- CSS Grid
- Flexbox
- Mobile-first workflow
- Frontend-mentor.io (stock images and styling inspiration)


### What I learned

I fully embraced the need to understand and utilize custom css and scss to learn how to build a responsive site across all screens. This project also allowed me to

make use of my javascript knowledge in manipulating the document objects in the HTML files, by showing a full navbar selection at smaller and medium screen sizes (1200px and below).

Below is a snippnet of how i was able to manipulate the DOM in my javascript file.


```js
const heading = document.getElementById('head');
const menubtn = document.querySelector('.menu-button');
const body = document.body;

let menuOpen = false;

function changeMenu() {
    if(!menuOpen) {
        heading.classList.add ('is-open');
        menubtn.setAttribute("src", "images/icon-close.svg");
        body.style.overflow = "hidden";
        menuOpen = true;
    } else {
        heading.classList.remove ('is-open');
        menubtn.setAttribute("src", "images/icon-hamburger.svg");
        body.style.overflow = "auto";
        menuOpen = false;
    }
}
```

The styling for the is-open class was how i was able to display the mobile navbar when the sandwich button was clicked.This styling only applied to screens below 1200px as you would see with the inclusion of a mixin. The snippet of my code is down below.

```scss
@mixin mobile-down  {
    @media (max-width: 1200px) {
        @content;
    }
}

@include mobile-down {
    .is-open {
        
        background-image: url('../images/mobile/black.jpeg');
        .mobile-navbar {
            display: block;
            padding-top: 3rem;
    
        li {
            list-style: none;
            text-decoration: none;
            margin-bottom: 2rem;
            
    
            a {
                text-decoration: none;
                color: white;
                font-family: 'Alata', 'sans-serif';
                text-transform: uppercase;
                
            }
        }
        }
    
        .title {
            display: none;
        }
    }
}
```

### Continued development

My goal as a developer is to work on how well i use my tools and to get better at writing clean code in the nearest future.


## Author

- Frontend Mentor - [@Seun-works](https://www.frontendmentor.io/profile/Seun-works)
- LinkedIn - [@SeunOgundipe](https://www.linkedin.com/in/seun-ogundipe)




