function append(title, content) {
    // build/select our elements
    var grid = $('#columns')[0];
    var item = document.createElement('div');
    // build the html
    var h = '<div class="panel panel-primary">';
    h += '<div class="panel-heading">';
    h += title;
    h += '</div>';
    h += '<div class="panel-body">';
    h += content;
    h += '</div>';
    h += '</div>';
    salvattore['append_elements'](grid, [item])
    item.outerHTML = h;
}
$.getJSON("https://www.googleapis.com/books/v1/volumes?q=inauthor:Ernest+Hemingway&callback=?", function (data) {
    $(data.items).each(function (i, book) {
        append(book.volumeInfo.title, book.volumeInfo.description);
    });
});