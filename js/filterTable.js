// noinspection ES6ConvertVarToLetConst,JSUnusedGlobalSymbols

/**
 * This file contains the js/sortTable.js file for project RWS-0001-A
 *
 * File Information:
 * Project Name: WS-0003
 * Section Name: JS
 * File Name: sortTable.js
 * Author: Troy L. Marker
 * Language: JavaScript
 *
 * File Copyright: 06/15/2024
 */
function filterTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}