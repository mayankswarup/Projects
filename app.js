$(document).ready(function(){
   $.ajax({
    type: "GET",
    url: "KPI.xml",
    dataType: "xml",
    success: function (xml) {
      tags = xml.getElementsByTagName('ChildKPI');
       for(var i=0; i<tags.length; i++){
            $("#KPI").append('<span class="baw" id="style'+i+'">'+tags[i].getAttribute("id")+ "</span><br />");
       }
      console.log(tags);
      $(xml).find("KPI").each(function(k){      
          $("#demo").append('<div id="'+k+'"class="search">'+$(this).attr("id"));
          
          /* if( $(this).find('ChildKPI')){
               console.log( $(this).find('ChildKPI').length)
               $(this).find("ChildKPI").each(function(x){     
              $("#KPI").append('<span class="baw" id="style'+x+'">'+$(this).attr("id") + "</span><br />");
               });
           }*/

            $(".search").on("click", function(){
                $(".search").removeClass("colorDec");
                $(this).addClass("colorDec");
                $(".baw").removeClass("colorDec");
            var getParentNodeId = $(this).attr("id");
            //$("#KPI").html("");
            for(var i=0; i<tags.length; i++){
                if(getParentNodeId==tags[i].getAttribute("getter")){
                     //$(".baw").removeClass("colorDec");
                     $("#style"+i).addClass("colorDec");
                     //$("#KPI").append('<span class="baw">'+tags[i].getAttribute("id") + "</span><br/>").addClass("colorDec");
                     //$("#"+x).addClass("colorDec");
                   
                    /*  $(this).removeClass("colorDec");
                */}
            }
        });

          
   })
},
    error: function() {
        alert("The XML File could not be processed correctly.");
    }
   });
});
/* if( $(this).find('ChildKPI')){
alert( $(this).find('ChildKPI').length)
    $(this).find("ChildKPI").each(function(){
$("#KPI").append('<span>'+$(this).attr("id") + "</span>===========<br />").hide();

});
}*/

