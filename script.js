var Select_page_form = document.getElementById("Select_page_form");

Select_page_form.querySelector('input[name="allPages"]').addEventListener('change', function (e) {
    var checkboxes = Select_page_form.getElementsByClassName('pageCheckbox');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = e.target.checked;
    }
});

var pageCheckboxes = Select_page_form.getElementsByClassName('pageCheckbox');
for (var i = 0; i < pageCheckboxes.length; i++) {
    pageCheckboxes[i].addEventListener('change', function (e) {
        var allPages = Select_page_form.querySelector('input[name="allPages"]');
        var allChecked = Array.from(pageCheckboxes).every(function (checkbox) {
            return checkbox.checked;
        });
        allPages.checked = allChecked;
    });
}


$(document).ready(function () {
    $('.page_hover').hover(
        function () {
            $(this).find('.allPagesCheckbox, .pageCheckbox').addClass('custom-border light-check');
        },
        function () {
            $(this).find('.allPagesCheckbox, .pageCheckbox').removeClass('custom-border light-check');
        }
    );
});