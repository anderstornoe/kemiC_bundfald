var playing = false;
var video = document.getElementById("video");
var mousedown = false;
console.log(video.width);

console.log(video.duration);

$(".videoplayer").click(function() {
    if (playing === false) {
        video.play();
        playing = true;
    } else {
        video.pause();
        playing = false;
    }
    console.log("hjejsa");
});



var divPos = {};
var offset = $("#video").offset();

$(document).mousedown(function() {
    mousedown = true;
    video.pause();
});


$(document).mouseup(function() {
    mousedown = false;
    video.play();
});


$(".videoplayer").mousemove(function(e) {
    if (mousedown == true) {
        video.pause();
        divPos = {
            left: e.pageX - offset.left
        };
        var playpos = video.duration * (divPos.left / video.width);
        video.currentTime = playpos;
    }
});
