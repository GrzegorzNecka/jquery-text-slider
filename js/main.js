$(function () {

    var rssBackgroundExist =  $('.rss-background')
    var rssExist = $('.rss-sidebar')
    
    if(rssExist.length){
        function rssList() {
        var firstLi = $('.rss-sidebar ul li').first();
        firstLi.appendTo('.rss-sidebar ul');
        }   
   
        function tick() {
        window.setTimeout(rssList, 2000); 
        setTimeout(tick, 2000);  
        }
        tick()
        
    } else {
           
        rssBackgroundExist.css("display", "none");
   }

});
