# JavaScript and DOM Manipulation

In this repository I wrote code that created a dynamic table based upon a provided dataset. I also needed to allow users to filter the table data for specific values. I used JavaScript, HTML, and CSS, and D3.js on the web pages. 

### Part 1: Automatic Table and Date Search

* For starters I created a basic HTML web page.

* Using the UFO dataset provided in the form of an array of JavaScript objects, I wrote code that appended a table to my web page and then added new rows of data for each UFO sighting.  Making sure to have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* I then used a date form in my HTML document and wrote JavaScript code that listened for events and searched through the `date/time` column to find rows that match user input.

### Part 2: Multiple Search Categories 

* Using multiple `input` tags/select dropdowns, I wrote JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
