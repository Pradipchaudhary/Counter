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
