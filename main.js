$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(data) {
        var tableData = '';
        $.each(data, function(key, value) {
            tableData += '<tr>';
            tableData += '<td>' + value.name + '</td>';
            tableData += '<td>' + value.description + '</td>';
            tableData += '<td>' + '<a href="www.google.com/maps?q=' + value.location + '" class="button">Link</a>' + '</td>';
            tableData += '</tr>';
        });
        $('#table').append(tableData);
    });
});