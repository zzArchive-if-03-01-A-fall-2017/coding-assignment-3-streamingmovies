### IF.03.xx Basic Web Techniques -- Winter 2017
# Assignment x: Reading Assignment - Bootstrap

## Objective
This week's reading assignment is to learn how to install the Bootstrap library and get a basic understanding of the Bootstrap library.
Bootstrap is an open source toolkit for developing with HTML, CSS and JavaScript (JS), where you can quickly build apps with prepared components.

## Materials
- Review the handouts of the last lecture. (what is basically a summary of the presentation shown)
- Work through the tutorial below, starting from chapter Required Tasks
- Check the [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) documentation for further assistance.

## Required Tasks
1. Work through the chapters presented below.
  - Install Bootstrap
  - Containers
  - Typography
  - Buttons
  - Tables
  - List Groups
  - Cards
  - Grids - Page Layout
  - Images & Figures
  - Further Steps

2. You will create a Bootstrap cheatsheet as you go along the material. Add the cheatsheet to your assignment repository
3. Make a pull request.

### Install Bootstrap

1. Copy the content of the HTL_Bootstrap folder to a folder on your computer. Rename the folder e.g. "bootstrap_cheatsheet". The folder contains the following files.
  - bootstrap-3.3.7-dist.zip
  - basic_template.html
2. Rename the file basic_template.html to bootstrap_cheatsheet.html.
  --> Guess what? This is your Bootstrap cheatsheet
3. Open your cheatsheet in an editor and change the title to "HTL Leonding Bootstrap Cheat Sheet"
4. For your information (fyi) - at the line ```<link href="css/bootstrap.min.css" rel="stylesheet">```we are pointing to the Bootstrap CSS file. In our case we are using a minified CSS, which doesn't contain unneccesary characters like comments, white spaces, etc. You could also use bootstrap.css which contains all the comments etc.
5. Delete the comments in line 7 and from line 13 to 18 and all the other unneccessary empty lines. We don't need them.
6. In the line containing ```<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>``` we are referencing to the jQuery library using the google CDN - leave that line as it is. We are going to discuss that issue in the summer term --> jQuery is required for all JavaScript widgets
7. ```<script src="js/bootstrap.min.js"></script>```Here we are pointing to another JavaScript library necessary for Bootstrap - we will discuss that further in the summer term as well.
8. Save the cheatsheet and open it in a web browser, you will realize the page looks like any other html page. In fact if you open the DevTools in Chrome (Windows: F12, Ctrl + Shift + I; Mac: Cmd + Opt + I) and look for errors it will tell you that any files for bootstrap aren't found.
9. So we have to make sure that our cheatsheet will find the necessary  Bootstrap files. Unpack the files of bootstrap-3.3.7-dist.zip and copy the folders css, fonts and js to your cheatsheet folder. Alternatively you can download the file here (look for the current compiled and minified version): [Download Bootstrap](https://getbootstrap.com/docs/3.3/getting-started/#template)
10. Now we will clean up a little bit.
  - Delete all files in the folder css except for bootstrap.min.css.
  - Delete the files bootstrap.js and npm.js in the folder js.
11. Now reload your cheatsheet (F5) in your browser. All the error messages should be gone by now and the font and the padding of the content has changed. Now you know that bootstrap has been included.
12. Hooray! and Congratulations - you've just finished your first Bootstrap installation.  

13. Take a look at the Bootstrap webpage and figure out how Bootstrap is structured.
https://getbootstrap.com/docs/3.3/getting-started/

### [Containers](https://getbootstrap.com/docs/4.0/layout/overview/#containers)
Usually you want to push your content to the middle and not have it up against the side. You could handle that with CSS (e.g. with margins).
In Bootsotrap you have a class container which handles that for us.
Containers are the most basic layout element in Bootstrap and are required when using our default grid system.
Bootstrap requires elements which wrap the content of the webpage.
Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).
- Try the following code in your cheatsheet. If you look at it in your Browser you can see the content is pushed over to the middle. Furthermore it is responsive it adapts the content to the size of the browser window.
```
<div class="container">
    <h2>Containers</h2>
</div>
```

### Typography
Add the following exampes to your cheatsheet.
Put all of the content of this chapter in one container.

#### Headings
For the heading you can use a class called ```page-header```.
Add the class to the h1 tag and check for the changes in your browser.
```
<h1 class="page-header">Hello World</h1>
```
It gives it some extra padding and a boarder and it actually makes it look pretty nice and clean.
This works with all the other headings as well (h1 to h6)

#### Highlight some text
To hightlight some text you can use the ```lead``` class. It makes a paragraph standing out.
Add the following code to your cheatsheet.
```
<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
</p>
```
Other tags which you can use to mark your text are ```mark```(highlights the text), ```del``` (crosses out text) or ```u```(underlines text).
Add the following code to your index.html.
```
<p><mark>Lorem ipsum dolor sit amet</mark>, consectetur adipisicing elit, sed do eiusmod
tempor <del>incididunt ut labore</del> et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation <u>ullamco laboris nisi</u> ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```
#### Alignment & Transformation
To align respectively transform text you can use the following classes. Try out the following
code in your index.html.
```
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
```
There are also some transformation classes which you can add. ```text-lowercase``` gets rid of all the capitals in a word. ```text-uppercase``` capitalizes all the letters in a word. ```text-capitalize``` capitalizes the first letter in a word.
Try it yourself
```
<p class="text-left text-lowercase">Left aligend lowercase text.</p>
<p class="text-center text-uppercase">Centerd upperacse text.</p>
<p class="text-right text-capitalize">Right aligned capitalized text.</p>
```
#### Floating
The class ```pull-right"``` makes the element floating to the right. The class ```pull-left```makes the elemnet floating to the left. The class ```clearfix``` stops the floating
<br>Try this code with and without the clearfix class and see the difference.
```
<div class="pull-right">Div floated to right</div>
<div class="pull-left">Div floated to left</div>
<div class="clearfix"></div>
<p>text after the div text </p>
```

#### Blockquotes

If you want to add a quote you can use the blockquote HTML tag. To make it looks nice you can use the classes ```blockquote``` or ```blockquote-reverse```. Try both options in your cheatsheet.

```
<blockquote class="blockquote-reverse">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
   <footer>Quote by <cite title="John Doe">John Doe</cite></footer>
</blockquote>
```

#### Lists
To get rid of the padding and the bullets of a HTML list just use the class ```list-unstytled```.
Try it with and without the class to see the difference.
```
<ul class="list-unstyled">
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
  <li>Item Four</li>
</ul>
```
If you want to have an inline list (e.g. for a menu) use the class ```list-inline```.
Try it with and without the class to see the difference.
```
<ul class="list-inline">
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
  <li>Item Four</li>
</ul>
```

#### Contextual Colors
There are different classes to color your text or backgrounds.
<br>Here are the classes for the text.   
- ```text-primary``` gives the content a blue color.
- ```text-success``` gives the content a green color.
- ```text-info``` gives the content another green color.
- ```text-warning``` gives the content a brown color.
- ```text-danger``` gives the content a red color.
- ```text-muted``` gives the content a gray color.

Try the following code in you index.html.
```
<p class="text-primary">Hello World</p>
<p class="text-success">Hello World</p>
<p class="text-info">Hello World</p>
<p class="text-warning">Hello World</p>
<p class="text-danger">Hello World</p>
<p class="text-muted">Hello World</p>
```
There are also classes for the backgrounds. Just use "bg" instead of "text".
Try the following code in you index.html.
```
<p class="bg-primary">Hello World</p>
<p class="bg-success">Hello World</p>
<p class="bg-info">Hello World</p>
<p class="bg-warning">Hello World</p>
<p class="bg-danger">Hello World</p>
<p class="bg-muted">Hello World</p>

```

### Buttons
Put all the content of the chapter Buttons in a new container to separate the content.

#### Basic Buttons

To create a button use the class ```btn btn-default```. You can format a link as a button, use it for a normal button tag or for an "input type button" which you can use in a form.
So let's take a look at them.
The code below shows an button on your webpage. Try it in your cheatsheet.
```
<button class="btn btn-default">Button</button>
```
To use a button as a link try the follwing code.
```
<a href="#" class="btn btn-default" role="button">Link</a>
<!-- href="#" links to the top of the page. You can use any link here, e.g. href="http://www.orf.at"-->

```
For a button used in a form try the subsequent code.
```
<input type="submit" class="btn btn-default" value="Submit">
```

#### Contextual Buttons
Like for the colors of a text there a contextual designs for buttons.
Try out the following code to see the different contextual styles.
```
<button class="btn btn-default">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-warning">Warnig</button>
<button class="btn btn-danger">Delete</button>
<button class="btn btn-link">Link</button>
```

#### Button Sizes
Also the size of the buttons can be changed, check out the following code to see the
differences. With the boolean attribute disabled, you can - what else - disable a button.
```
<button class="btn btn-default btn-lg">large</button>
<button class="btn btn-default">default</button>
<button class="btn btn-primary btn-sm">small</button>
<button class="btn btn-default btn-xs" disabled>extra small and disabled</button>
```


### Tables
Put all the content of the chapter Tables in a new container to separate the content.
There are several classes in Bootstrap to work with tables. You can combine them by adding the
classes subsequently to a normal HTML table.
Take the following HTML code of a simple table and consecutively add the following classes to the table tag of the code below: ```table ```, ```table-striped ```,```table-bordered ```,```table-hover ```,```table-condensed```.
After adding a class reload the webpage to see the changes.
```
<table>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>24</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>34</td>
    </tr>
    <tr>
      <td>Stephanie</td>
      <td>Landon</td>
      <td>47</td>
    </tr>
    <tr>
      <td>Mike</td>
      <td>Johnson</td>
      <td>19</td>
    </tr>
</table>
```

### [List Groups](https://getbootstrap.com/docs/4.0/components/list-group/)
Put the content of the chapter List Groups in one container.

List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
Check out the following example.
```
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
```

#### Active items
Add active to a list-group item to indicate the current active selection.
e.g.
```
<li class="list-group-item active">Dapibus ac facilisis in</li>
```
#### Disabled items
Add .disabled to a list-group-item to make it appear disabled.
e.g.
```
<li class="list-group-item disabled">Cras justo odio</li>
```
#### Links and Buttons
Use links &  buttons to create actionable list group items with hover, disabled, and active states by adding .list-group-item-action.
Try it out in your cheatsheet.
```
<div class="list-group">
  <a href="#" class="list-group-item active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
```
With buttons, you can also make use of the disabled attribute instead of the .disabled class. Sadly, links don’t support the disabled attribute.
Try it out in your cheatsheet.
```
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Cras justo odio
  </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action disabled">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</div>
```
And again the usage of contextual classes is possible. Try it out in your cheatsheet.
```
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">This is a secondary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
</div>
```
### [Cards](https://getbootstrap.com/docs/4.0/components/card/)
**from Bootstrap version 4 cards replaces panels, wells & thumbnails**<br>

Put all the content of the chapter in a new container to separate the content.

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.

e.g.
```
<div class="card" style="width: 20rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

### Grids - Page Layout
Put all the content of the chapter in a new container to separate the content.

Basically a grid is broken up into 12 blocks, which you can combine in the way you need it.
It scales it to the size of the device where the page is loaded.
- Use rows to create horizontal groups of column
- Rows mus be placed within a ```.container``` or ```.conatiner-fluid``` for proper alignment and padding.
- Content should be placed within columns, and only columns may be immediate children of rows.
- Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three ```.col-xs-4```.
- If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
- Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g. applying any ```.col-md-\*``` class to an element will not only affect its styling on medium devices but also on large devices if a ```.col-lg-\*``` class is not present.

#### Basic Structure of a Bootstrap Grid

So, to create the layout you want, create a container (```<div class="container">```). Next, create a row (```<div class="row">```). Then, add the desired number of columns (tags with appropriate ```.col-*-```  classes). Note that numbers in ```.col-*-*``` should always add up to 12 for each row.
```
<div class="container">
  <div class="row">
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    ...
  </div>
</div>

```

#### Grid Classes

The Bootstrap grid system has four classes:
- xs (for phones)
- sm (for tablets)
- md (for desktops)
- lg (for larger desktops)

The classes above can be combined to create more dynamic and flexible layouts.
Tip: Each class scales up, so if you wish to set the same widths for xs and sm, you only need to specify xs.

Try the following code in your cheatsheet and create a grid with 2 columns (1 column has a width of 8 and the other column has a width of 4).
Create a second row with 3 columns with the same width.

```
<div class="container">
  <div class="row">
    <div class="col-md-8 col-sm-8 col-xs-8">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
   	<div class="col-md-4 col-sm-4 col-xs-4">
	   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
	  </div>
  </div>
</div>
```

### Images & Figures
Put all the content of the chapter in your cheatsheet in a new container to separate the content.

#### Responsive Images

Images in Bootstrap are made responsive with the class ```.img-responsive```. From Bootstrap v4 the class ```.img-fluid"``` is used.

Try it out yourself with the following code. Include a picture of your choice. Put the picture in an own folder (name the folder e.g. images or img). Resize the browser window too see how the images adjusts automatically to the size of the window.
```
<img src="picture of your choice" class="img-responisve" alt="Responsive image">
```

#### Rounded Corners

The .img-rounded class adds rounded corners to an image (IE8 does not support rounded corners):
Try it out in your cheatsheet.
```
 <img src="picture of your choice" class="img-rounded" alt="pic with rounded corners">
```

#### Circle

The .img-circle class shapes the image to a circle (IE8 does not support rounded corners):
Try it yourself.
```
 <img src="picture of your choice" class="img-circle" alt="pic with rounded corners" width="304" height="236">
```


### Further Assignements
Visit the [Bootstrap webpage](https://getbootstrap.com/) and study yourself the following topics and complete your cheatsheet.
- [Jumbotron](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Alerts](https://getbootstrap.com/docs/4.0/components/alerts/)
- [Badges](https://getbootstrap.com/docs/4.[0/compone]nts/badge/)
- [Dropdowns](https://getbootstrap.com/docs/4.0/components/dropdowns/)
- [Pagination](https://getbootstrap.com/docs/4.0/components/pagination/)
- [Forms](https://getbootstrap.com/docs/4.0/components/forms/)

We will do a quiz during one of the next lessons where you can prove that you worked carefully on your assignment.
