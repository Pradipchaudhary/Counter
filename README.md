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

The @if directive in Sass is useful to test for a specific case - it works just like the if statement in JavaScript.

```sass
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

And just like in JavaScript, the @else if and @else directives test for more conditions:

```sass
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

Create a mixin called border-stroke that takes a parameter $val. The mixin should check for the following conditions using @if, @else if, and @else directives:

```sass
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

If the $val parameter value is not light, medium, or heavy, then the border property should be set to none.

## 5. [Use @for to Create a Sass Loop](https://github.com/pradipchaudhary/SASS/tree/master/05%20Use%20%40for%20to%20Create%20a%20Sass%20Loop)

The @for directive adds styles in a loop, very similar to a for loop in JavaScript.

@for is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.

Here's a start through end example:

```sass@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

The #{$i} part is the syntax to combine a variable (i) with text to make a string. When the Sass file is converted to CSS, it looks like this:

```sass
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.

## 6. [Use @each to Map Over Items in a List](https://github.com/pradipchaudhary/SASS/tree/master/05%20Use%20%40for%20to%20Create%20a%20Sass%20Loop)

The last challenge showed how the @for directive uses a starting and ending value to loop a certain number of times. Sass also offers the @each directive which loops over each item in a list or map. On each iteration, the variable gets assigned to the current value from the list or map.

```sass
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
A map has slightly different syntax. Here's an example:

$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}

```

Note that the $key variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have color1, color2... in it. Both of the above code examples are converted into the following CSS:

```sass
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

## 7. [Apply a Style Until a Condition is Met with @while](https://github.com/pradipchaudhary/SASS/tree/master/07%20Apply%20a%20Style%20Until%20a%20Condition%20is%20Met%20with%20%40while)

The @while directive is an option with similar functionality to the JavaScript while loop. It creates CSS rules until a condition is met.

The @for challenge gave an example to create a simple grid system. This can also work with @while.

```sass
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

First, define a variable $x and set it to 1. Next, use the @while directive to create the grid system while $x is less than 13. After setting the CSS rule for width, $x is incremented by 1 to avoid an infinite loop.

## 8. [Split Your Styles into Smaller Chunks with Partials](https://github.com/pradipchaudhary/SASS/tree/master/08%20Split%20Your%20Styles%20into%20Smaller%20Chunks%20with%20Partials)

Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.

Names for partials start with the underscore (\_) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the .scss file extension. To bring the code in the partial into another Sass file, use the @import directive.

For example, if all your mixins are saved in a partial named "\_mixins.scss", and they are needed in the "main.scss" file, this is how to use them in the main file:

```sass
@import 'mixins'
```

Note that the underscore and file extension are not needed in the import statement - Sass understands it is a partial. Once a partial is imported into a file, all variables, mixins, and other code are available to use.

## 9. [Extend One Set of CSS Styles to Another Element](https://github.com/pradipchaudhary/SASS/tree/master/09%20Extend%20One%20Set%20of%20CSS%20Styles%20to%20Another%20Element)

Sass has a feature called extend that makes it easy to borrow the CSS rules from one element and build upon them in another.

For example, the below block of CSS rules style a .panel class. It has a background-color, height and border.

```sass
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Now you want another panel called .big-panel. It has the same base properties as .panel, but also needs a width and font-size. It's possible to copy and paste the initial CSS rules from .panel, but the code becomes repetitive as you add more types of panels. The extend directive is a simple way to reuse the rules written for one element, then add more for another:

```sass
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

The .big-panel will have the same properties as .panel in addition to the new styles.

```

```
