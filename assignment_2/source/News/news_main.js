var outputJSON;
var topicFlag = 0;
var sourceFlag = 0;
var i = 0;
var url;



$('#submit1').click(function () {

    $('#contentPanel').empty();
    //get topic
    var topic = $('#topic').val();

    if (topic.length > 0 && topic != null && topic != '' && topic != 'Select Topic') {
        topicFlag = 1;
    }

    //get source
    var source = $('#source').val();
    if (source.length > 0 && source != null && source != '' && source != 'Select Source') {
        sourceFlag = 1;
    }

    //give appropriate API depending on input
    if(topicFlag == 1 && sourceFlag == 1){
         url = 'https://newsapi.org/v2/everything?q=' + topic+ '&sources=' + source +
            '&apiKey=84990cedae0140418edf5601baa90016';
    }

    else if (topicFlag == 0 && sourceFlag == 1) {
         url = 'https://newsapi.org/v2/everything?sources=' + source +
            '&apiKey=84990cedae0140418edf5601baa90016';
    }

    else if (topicFlag == 1 && sourceFlag == 0) {
         url = 'https://newsapi.org/v2/everything?q=' + topic +
            '&apiKey=84990cedae0140418edf5601baa90016';
    }

    else {
         url = 'https://newsapi.org/v2/top-headlines?country=us' +
            '&apiKey=84990cedae0140418edf5601baa90016';
    }


    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, false);
    xhttp.send();
    response = xhttp;
    outputJSON = JSON.parse(response.responseText);
    console.log(outputJSON);
    for (var i = 1; i <= outputJSON.totalResults; i++) {
        if (outputJSON.articles[i - 1].urlToImage !=null) {
            var myCol = $('<div class="col-md-4" style="padding: 10px;height: 400px;"></div>');
            var myPanel = $('<div class="card-deck" id="Card' + i + '">' +'<div class="card-block">' +

                '<a href="' + outputJSON.articles[i - 1].url + '" target="_blank">' +
                '<img class="card-img-top" style="height:200px; width: 100%" src="' + outputJSON.articles[i - 1].urlToImage +
                '"></a>' +
                '<h4 class="card-title">' + outputJSON.articles[i - 1].title + '</h4>' +
                '<p class="card-text">' + outputJSON.articles[i - 1].description +
                '<span class="pull-right"><br/>' + outputJSON.articles[i - 1].publishedAt + '</span>' +
                '</p>' +
                '</div></div>');
            myPanel.appendTo(myCol);
            myCol.appendTo('#contentPanel');
        }
    }
});

