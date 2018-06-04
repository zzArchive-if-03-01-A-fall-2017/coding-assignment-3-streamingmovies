function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}


$(function(){
  $("form").on("submit", function(e) {
    e.preventDefault();
    var criterium = document.getElementById("criteriums").value;
    var request =  gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      maxResults: 5,
      order: criterium,
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+")
    });
    request.execute(function(response){
      var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId, "description":item.snippet.description}]));
            });
          });
          resetVideoHeight();
    });
  });
  $(window).on("resize", resetVideoHeight());
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init(){
  gapi.client.setApiKey("AIzaSyA-Qdv-GwjNhnN6MFZKneTOk7ymrSR5I6I");
  gapi.client.load("youtube", "v3", function(){

  });
}
