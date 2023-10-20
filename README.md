# Html
Html projects

HTML (25%)
    1/5:
    Basic HTML structure is present.

        Can be found in any html file. Have a look at the index.html for example


    2/5:
    HTML structure with clear content differentiation (headings, paragraphs, lists).

        This can also be found in any html file. Refer to the index.html again.

    3/5:
    Use of forms, links, and media.
    
        Form can be found in the quiz.html
        Links can be seen in the footer of the portfolio.html
        Media you can find on gallery.html

    4/5:
    Tables are effectively used.
    
        You can find tables in portfolio.html. Refer to the skills section.


    5/5:
    Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.
    
        There are <section> elements used in portfolio.html 
        The <main> element is used in every html file beginning right after the <header> and closing right before the <footer>.
        You can also find <header> and <footer> elements in every html file.
        The <nav> elements you can find in the <header>

CSS (25%)

    All the styling can be found in the styles.css file.

    1/5:
    Basic CSS styling (colors, fonts).
    
        The header and footer have both color and font styling. Both have a black background-color property. Footer has different font as well as fallback fonts.
        Font color has been changed in footer and header and I have assigned a different background-color to the body-element.

    2/5:
    Use of classes and IDs to style specific elements.

        Classes can be found in any html file. IDs can be found all over the place but look at the portfolio.html and find the "About" section starting from line 26 and there is an ID right there (also a few classes too).


    3/5:
    Implementation of responsive design elements.
    
        Have a look at the gallery.html and portfolio.html. At the bottom of the styles.css you can see the how the flex-direction changes depending on the screen width. You can see it using the developer tools for example. In the portfolio the "About me" paragraph changes place depending on the screen width. On a monitor it shows next to the profile picture and on mobile it shows below the picture.

        In the gallery page you can see how the images change size too if the screen size becomes smaller.

    4/5:
    Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)

        portfolio.html has the Grid layout. Refer to the styles.css on the line 210.
        The <body> tag on line 3 of the styles.css has been made a flex-container. Float property has been used in the gallery.html for the buttons for example. Refer to styles.css starting on lines 106.

    5/5:
    Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.

        There is a lot of styling. If you want to look at something specific, look at the portfolio.html. The styling for the stuff inside can be found in the styles.css on the lines 184-286. 

JavaScript Basics (25%)

    1/5:
    Simple interactions (like alerts on button click).
    
        An alert has been placed at the bottom of the index.html. It checks if you have visited before and if you haven't it will give you a welcome message in a pop-up window for the first time you visit the page. In gallery.html you are able to click on the arrow keys. The functionality can be seen in script.js on the lines 1-51.

    2/5:
    Multiple event listeners and basic DOM manipulations.
    
        In the script.js you can find quite a few event listeners and basic DOM manipulation. For example in the portfolio page I first hide all the pictures on my projects and then show them one by one after a few seconds of delay.

    3/5:
    Use of arrays, objects, and functions.

        In the gallery.html and portfolio.html there are lots of pictures and paragraphs, that I have put into an array in the script.js.

        In the about.html page you can find a table containing information about my cat. In the script.js you will see that I've made an object of my cat on the line 151 and in the about.html I call the right value using a specific id.

        Also in the gallery.html I have functions that check which picture and paragraph will be shown. Refer to the script.js on the lines 10-21 for the example.

    4/5:
    Advanced logic, looping through data, and dynamic DOM updates.
    
        You've already seen looping through data in the gallery.html. In the script we use ForEach method to loop through the data. On the lines 217-241 I loop through another set of pictures using a timer.

    
    5/5:
    Consistent use of Object-Oriented JavaScript principles.
    
        At this point in time I couldn't think of how to include this in my project.

Asynchronous Operations (25%)

    1/5:
    Use of timers.
    
        Timer is being used in the quiz.html. It starts when the page is loaded and runs down to 0. You can push the restart button to reset the both quiz and the timer. There is also a timer on the portfolio.html on the project section. You can see the code for it in script.js line 235.

    2/5:
    Successful implementation of an AJAX call or Fetch.
    
        A fetch is being done in the about.html page. The code can be seen in script.js starting from the line 157. There we fetch a specific picture from the gallery.html.

    3/5:
    Data from the asynchronous call is displayed on the webpage.
    
        The same as the above. I make an asynchronous call to gallery.html to fetch the content, process the said content and update the current (about.html) page accordingly. Note that this is not a good way to handle it but it's for the practice.
    
    4/5:
    Error handling is implemented (for failed API calls, etc.).
    
        script.js lines 181-183. Here I used the .catch()-method to handle the errors that may occur during the execution of the fetch process.

    5/5:

    Effective use of asynchronous data to enhance user experience (like filtering, sorting).

        There is not much to say here. I use the asynchronous data fetching by fetching an image from the gallery and displaying it on the about.html page. It enchances the user experience by allowing dynamic content to be loaded without requiring a full page reload.