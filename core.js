
function getinfo(query){
    var requesturl= "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+query+"&callback=?";
    $(document).ready(function(){

    $.ajax({
        type: "GET",
        url: requesturl,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
        
        var markup = data.parse.text["*"];
        var i = $('<div></div>').html(markup);
        
        i.find('a').each(function() { $(this).replaceWith($(this).html()); });
        
        i.find('sup').remove();
        
        i.find('.mw-ext-cite-error').remove();
        
        $('#article').html($(i).find('p'));
            
        
        },
        error: function (errorMessage) {
            alert("Yikes! We encountered an Error!")
        }
    });    
    
    });
    document.getElementsByTagName("paper-card")[0].setAttribute("heading", query);
    }
    function search(){
        var info = prompt("What would you like to research?");
        if(info.value === null)
        {

        }
        else{
            getinfo(info)
        }
        
    }
   