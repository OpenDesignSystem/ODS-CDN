/**********************************               CDN.JS - CDN name space Resolver  & Loader                        ***************************** */

$(document).ready(function() { 

/* code here */
//alert("hello");


//$(body).attr("data-id")
 


$('.ods-p').each(function() {
   var nodeId =  $(this).attr("id"); 
   var entitiesArr = $(this).attr("class").split(" ")
   var patternNameSpace = entitiesArr[1];
   var patternName = entitiesArr[2];
   var patternValueStr = ($(this).attr("data-value"));
   var patternValueObj = (function(){if(patternValueStr){return JSON.parse(patternValueStr);}else{return {};}}());
  // alert(patternValueObj.__label);
   var patternMarkupPath = "http://localhost/ods/cdn/"+patternNameSpace+"/patterns/"+patternName+"/"+patternName+".html?";
   var patternCSSPath = "http://localhost/ods/cdn/"+patternNameSpace+"/patterns/"+patternName+"/"+patternName+".css?";
   //$(this).load(patternMarkupPath);
   $.get(""+patternMarkupPath+", #"+nodeId+"", function (data) {
		   for ( key in patternValueObj){
		   
			   if(patternValueObj.hasOwnProperty(key)){
			    
					data = data.replace(key,  patternValueObj[key] );
			   }
		   }
   
   $("#"+nodeId+"").replaceWith(data);
    
   }); 
   
   $('head').append('<link rel="stylesheet" type="text/css" href="'+patternCSSPath+'">');
   
   
   
   
   
   
   
});




 });