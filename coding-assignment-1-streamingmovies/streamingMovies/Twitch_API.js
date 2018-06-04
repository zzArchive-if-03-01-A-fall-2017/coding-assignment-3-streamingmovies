
let channelName;
let channelID;
let channelLink;
let channelLogo;
let streamContent;

$(document).ready(function(){
  let searchButton = document.getElementById("searchButton");
  searchButton.onclick = function() {
    channelName = document.getElementById("search").value;
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channelName + "?callback=?", function (st) {

      if (st.stream == null) {

        $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + channelName + "?callback=?", function (ch) {

          channelID = ch.display_name;
          channelLogo = ch.logo;
          channelLink = ch.url;
          streamContent = ch.status;

          if (ch.status == '404') {

            $('#results').append('<div id="twitch-result" class="row text-left">channel does not exist</div><br>');
          }
          else {
            $('#results').append('<div id="twitch-result" class="row text-left"><img class="image" src=' + channelLogo + '><a href=' + channelLink + ' target="_blank">' + channelID + '</a>         <strong>OFFLINE</strong><br>');
          }

        });
      }
      else $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + channelName + "?callback=?", function (ch) {

        channelID = ch.display_name;
        channelLogo = ch.logo;
        channelLink = ch.url;
        streamContent = ch.status;

        $('#results').append('<div id="twitch-result" class="row text-left"><img class="image" src=' + channelLogo + '><a href=' + channelLink + ' target="_blank">' + channelID + '</a>         <strong>ONLINE</strong>       Streaming:       ' + streamContent + '</div><br>');
      });
    });
  };
});
