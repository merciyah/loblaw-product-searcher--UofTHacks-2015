    google.load("feeds", "1");
    console.log("Feed.js is being called");


    $("#submit").click(function(){
        //navigate to the loblaws site.
        var baseUrl = "http://www.loblaws.ca/en_CA/search-page.query@";
        var append = $("#query").val();
        var finishedUrl = baseUrl+append;
        console.log(baseUrl +"\n"+append+"\n"+finishedUrl);
        chrome.tab.create( { url: finishedUrl })
        window.location.href = finishedUrl;
      });
      

