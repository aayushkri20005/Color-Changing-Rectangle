var rect= document.querySelector("#center");

rect.addEventListener("mousemove",function(d){
    var rectlocation =rect.getBoundingClientRect();
    var insiderec= d.clientX-rectlocation.left;
    if(insiderec<rectlocation.width/2){
        var redcolour=gsap.utils.mapRange(0,
            rectlocation.width/2,
            255,
            0,
            insiderec);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolour},0,0)`,
            // borderColor:`rgb(${redcolour},0,0)`
        })
    }
    else{
        var bluecolour=gsap.utils.mapRange(rectlocation.width/2,
            rectlocation.width,
            0,
            255,
            insiderec);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolour})`,
            // borderColor:`rgb(0,0,${bluecolour})`
        })

    }
});
rect.addEventListener("mouseleave", function() {
            gsap.to(rect, {
                backgroundColor: "rgba(220, 210, 210, 1)",
                ease: "power1.out"
            });
        });