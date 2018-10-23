/* global $ */

$(document).on('ready', function() {
    // Get all "navbar-burger" elements

    $("navbar-burger").on('click', function (e) {
        $(this).toggleClass('is-active');
        $("#" + $(this).data('target')).toggleClass('is-active');
    })

    // bindLinks()
    // console.log("bound")
})

// $(window).on("popstate", function(e) {
//     // When the browser goes back replace the content and title
//     loadPage(e.state.url);
// })

// function loadPage(url) {
//     var title;
    
//     $.get(url, function(data) {
//         // Get the title of the new page
//         var regex = /<title>(.*)<\/title>/g
//         title = regex.exec(data)[1]

//         // Set the title to the new title
//         $('title').html(title)

//         // Replace the content
//         $('#content').html($(data).filter('#content').html())

//         // Re Bind to all the links on the page
//         bindLinks()
//     })
    
//     return title;
// }

// function bindLinks() {
//     $("a[href^='/']").on('click', function(e) {
//         // Stop link from activating
//         e.preventDefault()

//         // Get the URL to load
//         var url = $(this).attr('href')

//         // Send a Get request to the URL
//         var newTitle = loadPage(url);
        
//         history.pushState({url: url}, newTitle, url);
//     })
// }
