var playing = false;
var mousedown = false;

var video_Array = ["media/1.mp4", "media/2.mp4", "media/6.mp4"];
var pic_Array = ["Nh4plus.jpg", "Naplus.jpg", "Kplus.jpg", "Mg2plus.jpg", "Zn2plus.jpg", "Cu2plus.jpg", "Fe2plus.jpg", "Fe3plus.jpg", "Ca2plus.jpg", "Ba2plus.jpg", "Pb2plus.jpg", "Agplus.jpg"];

var negative_ioner = ["NO_$3_€-", "Cl_€-", "Br_€-", "I_€-", "SO_$4_€2-", "CO_$3_€2-", "OH_€-", "S_€2-", "PO_$4_€3-"];
var positive_ioner = ["NH_$4_€+", "Na_€+", "K_€+", "Mg_€2+", "Zn_€2+", "Cu_€2+", "Fe_€2+", "Fe_€3+", "Ca_€2+", "Ba_€2+", "Pb_€2+", "Ag_€+"];

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
    	convert_tosup("NO_$3_€-");

        $(".btn_neg").removeClass("btn-primary").addClass("btn-info");

        $("#video").fadeIn(200);
        video.currentTime = 0;
        video.play();
        $(this).addClass("btn-primary").removeClass("btn-info");
        var num = parseInt($(this).attr("neg_id"));
        $(".neg_stof").html(negative_ioner[num])

    });

    $(".btn_pos").click(function() {

        $(".btn_pos").removeClass("btn-primary").addClass("btn-info");
        $("#video").fadeOut(0);
        $(this).addClass("btn-primary").removeClass("btn-info");
        video.currentTime = 0;
        video.pause();

        var num = parseInt($(this).attr("pos_id"));
        $(".img_container").fadeOut(50, function() {
            $(".img_container").attr("src", "media/img/" + pic_Array[num]);

            $(".img_container").fadeIn(200);
        });
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


$(".scrubzone").click(function() {
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
    //video.play();
});


$(".scrubzone").mousemove(function(e) {
    if (mousedown == true) {
        video.pause();
        divPos = {
            left: e.pageX - offset.left
        };
        var playpos = video.duration * (divPos.left / video.width);
        video.currentTime = playpos;
    }
});

function convert_tosup(string) {
    var n = str.search(_$);
    alert(n);

    return newstring;
}

// Scrubber event listener: 

setInterval(function() {
    var percent = video.currentTime / video.duration;

    var scrub_pos = percent * video.width;

    video.duration
    $(".scrubber").css("left", scrub_pos + "px");
}, 50);
