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
          wikiElem.append(`<a href="${data[3][i]}" target="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h3 class="mb-1">${data[1][i]}</h3>
        </div>
        <p class="mb-1">${data[2][i]}</p>
      </a>`);
        }
      });
      return false;
    });
      
    });
    
    
    
    
    