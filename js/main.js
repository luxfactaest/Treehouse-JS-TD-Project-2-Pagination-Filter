let perPageStudents = 10;
let $totalStudents = $(".student-list li").length;

// Initially hide all students from the page
$(".student-list").children().hide();

// Show only the first perPageStudents students from the list
$(".student-list").children().slice(0, perPageStudents).show();

//Append the pagination container to the page
$(".page").append("<div class='pagination'><ul></ul></div>");

// For each group of students, show a numbered page link to the bottom of the page
for (var i = 1; i <= $totalStudents / perPageStudents + 1; i++) {
    $(".pagination ul").append("<li><a href='#'>" + i + "</a></li>");
}

// Initialize the page with page 1 active
$(".pagination ul li a:first").addClass("active");

// When a user clicks a pagination link, the previous link becomes inactive and the clicked link becomes active
$(".pagination ul li a").on('click', function () {
    $(".pagination ul li a").removeClass();
    $(this).addClass("active");
});

// When a user clicks a pagination link, the page displays the corresponding page of students
$(".pagination ul li").on('click', function() {
    $(".student-list").children().hide();
    $(".student-list").children().slice($(this).index() * perPageStudents, $(this).index() * perPageStudents + perPageStudents).show();
});