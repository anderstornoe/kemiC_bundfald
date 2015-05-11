var playing = false;
var mousedown = false;

var video_Array = ["media/1.mp4", "media/2.mp4", "media/6.mp4"];
var pic_Array = ["Agplus.jpg", "Cu2plus.jpg", "Kplus.jpg", "Nh4plus.jpg", "Ba2plus.jpg", "Fe2plus.jpg", "Mg2plus.jpg", "Pb2plus.jpg", "Ca2plus.jpg", "Fe3plus.jpg", "Naplus.jpg", "Zn2plus.jpg"];

var negative_ioner = ["NO3-", "Cl-", "Br-", "I-", "SO4-", "CO32-", "OH-", "S2-", "PO43-"];
var positive_ioner = ["NH4+", "Na+", "K+", "Mg2+", "Zn2+", "CU2+", "Fe2+", "Fe3+", "Ca2+", "Ba2+", "Pb2+", "Ag+"];

var myLoader = html5Preloader();

// PRELOAD VIDEOS USING html5Preloader.js
// Load videoerne en af gangen og gør billederne aktive som de loades ind...! 
//Noget med et loop ud fra et array af film: 
$(document).ready(function() {
    populate_btns();
    load_videos(0);
    $("#video").fadeOut(0);

    //EVENT listeners: 

    $(".btn_neg").click(function() {

        $(".btn_neg").removeClass("selected");
        $("#video").fadeIn(200);
        video.currentTime = 0;
        video.play();
        $(this).addClass("selected");
        var num = parseInt($(this).attr("neg_id"));
         $(".neg_stof").html(negative_ioner[num])

    });

    $(".btn_pos").click(function() {

        $(".btn_pos").removeClass("selected");
        $("#video").fadeOut(0);
        $(this).addClass("selected");


        var num = parseInt($(this).attr("pos_id"));

        $(".img_container").attr("src", "media/img/" + pic_Array[num]);
        $(".pos_stof").html(positive_ioner[num])
    });

});

//

function load_videos(num) {
    myLoader.addFiles(video_Array[num]);
    myLoader.on('finish', function() {
        // Start playing the sound once it's finished loading
        num++;
        console.log("load complete!");

        console.log(myLoader);

        if (num < video_Array.length) {

            load_videos(num);

        }
    });
}


/// PRELODING END


// populater btns:
function populate_btns() {

    for (var i = 0; i < negative_ioner.length; i++) {
        $(".negativ_container").append("<div class='btn btn-lg btn-info btn_neg' neg_id='" + i + "''>" + negative_ioner[i] + "</div>");
    }

    for (var i = 0; i < positive_ioner.length; i++) {
        $(".positiv_container").append("<div class='btn btn-lg btn-info btn_pos' pos_id='" + i + "''>" + positive_ioner[i] + "</div>");
    }
}



// Video control options: 

/*
$(".videoplayer").click(function() {
    if (playing === false) {
        video.play();
        playing = true;
    } else {
        video.pause();
        playing = false;
    }
    console.log("virker det? JA DET GØR! MÅSKE?");
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

**/
