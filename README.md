# SASS

Sass, or "Syntactically Awesome StyleSheets", is a language extension of CSS. It adds features that aren't available in basic CSS, which make it easier for you to simplify and maintain the style sheets for your projects.

![Alt text](screenshot.webp)

In this Sass course, you'll learn how to store data in variables, nest CSS, create reusable styles with mixins, add logic and loops to your styles, and more.

## 1. [Store Data with Sass Variables](https://github.com/pradipchaudhary/SASS/tree/master/01%20Store%20Data%20with%20Sass%20Variables)

One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.

Here are a couple examples:

```sass
$fonts: "Roboto", Helvetica, sans-serif;
$primary-color: #ab99ca;

```

And to use the variables:

```sass
body {
    font-family: $fonts; /* variable usage */
    background-color: $primary-color;
    min-height: 100vh;
}
```

One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

## 2. [Nest CSS with Sass](https://github.com/pradipchaudhary/SASS/tree/master/02%20Nest%20CSS%20with%20Sass)

Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:

```sass
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```

For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:

```sass
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

```

## 3. [Create Reusable CSS with Mixins](https://github.com/pradipchaudhary/SASS/tree/master/03%20Create%20Reusable%20CSS%20with%20Mixins)

In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.

Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider box-shadow:

```sass
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

It's a lot of typing to re-write this rule for all the elements that have a box-shadow, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:

```sass
@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

The definition starts with @mixin followed by a custom name. The parameters (the $x, $y, $blur, and $c in the example above) are optional. Now any time a box-shadow rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the @include directive:

```sass
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

## 4. [Use @if and @else to Add Logic To Your Styles](https://github.com/pradipchaudhary/SASS/tree/master/04%20Use%20%40if%20and%20%40else%20to%20Add%20Logic%20To%20Your%20Styles)

## 5. [Use @for to Create a Sass Loop](https://github.com/pradipchaudhary/SASS/tree/master/05%20Use%20%40for%20to%20Create%20a%20Sass%20Loop)

## 6. [Use @each to Map Over Items in a List](https://github.com/pradipchaudhary/SASS/tree/master/05%20Use%20%40for%20to%20Create%20a%20Sass%20Loop) ## 7. [Apply a Style Until a Condition is Met with @while](https://github.com/pradipchaudhary/SASS/tree/master/07%20Apply%20a%20Style%20Until%20a%20Condition%20is%20Met%20with%20%40while)

## 8. [Split Your Styles into Smaller Chunks with Partials](https://github.com/pradipchaudhary/SASS/tree/master/08%20Split%20Your%20Styles%20into%20Smaller%20Chunks%20with%20Partials)

## 9. [Extend One Set of CSS Styles to Another Element](https://github.com/pradipchaudhary/SASS/tree/master/09%20Extend%20One%20Set%20of%20CSS%20Styles%20to%20Another%20Element)
