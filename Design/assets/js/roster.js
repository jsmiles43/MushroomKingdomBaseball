/* Creating a table
 *
 * This script shall create a table from a tab-separated value text document.
 */

/* Store the data in an array. Starts off empty.
 * This is usually NOT global, but making global here for demonstration purposes.
 */
var data = [];

/* Select the DIV in the document with the ID of "roster".
 * Append a <table class="table"></table> to the selected DIV.
 * The "table" class is a beautification measure via Bootstrap's CSS.
 * The resulting table element is stored in the variable "table."
 */
var table = d3.select('#roster')
    .append('table')
    .classed('table', true);

/* Append <thead><tr></tr></thead> to the above table.
 * The inner tr element is stored in the "thead" variable.
 */
var thead = table.append('thead').append('tr');

/* Append <tbody></tbody> to the table and store it in the "tbody" variable. */
var tbody = table.append('tbody');

/* Hash Map to declare global variables */
var positions = {
    G: "Golakeeper"
    , D: "Defender"
    , M: "Midfielder"
    , F: "Forward"
};

/* Function to reload the data from the data file.
 * Call the redraw() function after the data is loaded to drive the drawing of the data.
 * We'll be filling this in during the lesson.
 */
var reload = function () {
    d3.tsv('afcw-roster.tsv', function (rows) {
        data = rows;
        data.forEach(function (d) {
            d.Pos = positions[d.Pos];
        });
        console.log("reload() called.");
        redraw();
    });
};

/* Function to redraw the table.
 * It's good practice to keep the data input and drawing funcitons separate.
 * We'll be filling this in during the lesson.
 */
var redraw = function () {
    /* Table Headers */
    thead.selectAll("th")
        .data(d3.map(data[0]).keys().slice(2)) /* Eliminates first 2 columns */
        .enter()
        .append("th")
        .text(function (d) {
            return d;
        });

    /* Table Body */
    var rows = tbody.selectAll("tr")
        .data(data);
    rows.enter().append("tr");
    rows.exit().remove();
    var cells = rows.selectAll("td")
        .data(function (row) {
            return d3.map(row).values().slice(2);
        });
    cells.enter().append("td");
    cells.text(function (d) {
        return d;
    });

    console.log("redraw() called.");
};

/* Call reload() once the page and script have loaded to get the controller script started. */
reload();