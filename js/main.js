var myDiv = $("#square");


function addVideo(url){


    var videoCode = url.substring(31,42);

    var embedString =  "<iframe width='500' height='400' src='http://www.youtube.com/embed/" +
        videoCode +
        "' frameborder='0' allowfullscreen></iframe>";

    $(embedString).appendTo('body');

}


$.getJSON('http://gdata.youtube.com/feeds/api/users/vsauce/uploads?orderby=updated&alt=json', function(data) {
    var items = [];

    $.each(data.feed.entry, function(key, val) {

        addVideo(val.link[0].href);
    });

});