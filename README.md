### SASS

Sass, or "Syntactically Awesome StyleSheets", is a language extension of CSS. It adds features that aren't available in basic CSS, which make it easier for you to simplify and maintain the style sheets for your projects.

In this Sass course, you'll learn how to store data in variables, nest CSS, create reusable styles with mixins, add logic and loops to your styles, and more.

[Link](https://www.freecodecamp.org/learn/front-end-development-libraries/?messages=success%5B0%5D%3Dflash.signin-success)

```sass

sass --watch style.scss style.css

```

Create three files:

1. **\_variables.scss:** to add the variables
2. **\_mixins.scss:** to add the functions that we will reuse
3. **\_card.scss:** to add the styles of our cards

_variables you created in the style.scss file and put them in the \_variables.scss file:_

```sass

$fonts: 'Poppins', Helvetica, sans-serif;
    $primary-color: #ab99ca;
    $spacing: 2rem;
    $dark-grey: #999;
```

For the \_mixins.scss file, this is where we'll create the reusable functions with mixins.

Mixins allow you to create reusable functions. To declare a function you must enter @mixin name_fonction { content } or if your function has a parameter, you must enter @mixin name_fonction($name_variable) { content }.

**Add this code to the \_mixins.scss file:**

```
@mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* $radius is the parameter of the function */

@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    border-radius: $radius;
}
```

For the \_card.scss file, add this code to it:

```.card {
    background-color: white;
    width: 20rem;
    overflow: hidden;
    margin: 2rem;
    box-shadow: 5px 5px 5px 5px #000;
    @include border-radius(0.5rem); /* using the mixins function */

    img {
        height: 15rem;
        background-size: cover;
        background-position: center center;
    }

    .card_content {
        padding: $spacing;
    }

    .card_title {
        margin: 0;
        color: black;
    }

    .card_description {
        margin: 0;
        color: $dark-grey;
    }

    &_dark {

        background-color: black;

        .card_title {
            color: white;
        }
    }

}

```

1. Store Data with Sass Variables
2. Nest CSS with Sass
3. Create Reusable CSS with Mixins
4. Use @if and @else to Add Logic To Your Styles
5. Use @for to Create a Sass Loop
6. Use @each to Map Over Items in a List
7. Apply a Style Until a Condition is Met with @while
8. Split Your Styles into Smaller Chunks with Partials
9. Extend One Set of CSS Styles to Another Element
