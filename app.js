$(document).ready(function(){
  
    var textInput = $("#inputText");
    var search = '';
    var button = $("#searchButton");
    var wikiElem = $('#wikiDiv');
      
    button.click(function(){
      search = textInput.val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&callback=?";
      $.getJSON(url, function(data){
        console.log(url);
        wikiElem.empty();
        for(i=0; i < data[1].length; i++){
          wikiElem.append(`
  <div class="ui items">
  <div class="item">
    <div class="content">
      <a href="${data[3][i]}" target="#" class="ui header">${data[1][i]}</a>
      <div class="description">
        <p>${data[2][i]}</p>
      </div>
    </div>
  </div>
</div>
<div class="ui hidden divider"></div>
`);
        }
      });
      return false;
    });
      
    });
    
    
    
    
    