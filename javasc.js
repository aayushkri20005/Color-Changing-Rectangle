var rect= document.querySelector("#center");

rect.addEventListener("mousemove",function(d){
    var rectlocation =rect.getBoundingClientRect();
    var insiderec= d.clientX-rectlocation.left;
    if(insiderec<rectlocation.width/2){

    }
    else{
        
    }
});