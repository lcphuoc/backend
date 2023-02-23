$("document").ready(function () {

    $('#shortDescription').richText();
    $('#fullDescription').richText();
    dropDownBrand = $('#brand');
    dropDownCategory = $('#category')
    dropDownBrand.change(function () {
        dropDownCategory.empty();
        getCategories();
    });
    getCategories();
});

function getCategories() {
    $.get(`${moduleURL}/${dropDownBrand.val()}/categories`, function (response) {
        $.each(response, function (index, category) {
            dropDownCategory.append($('<option>', { value: category.id, text: category.name }));
        });
    });
}
