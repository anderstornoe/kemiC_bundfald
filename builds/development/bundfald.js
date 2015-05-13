var playing = false;
var mousedown = false;


var pos_selected = false;
var neg_selected = false;

var pic_Array = ["Nh4plus.jpg", "Naplus.jpg", "Kplus.jpg", "Mg2plus.jpg", "Zn2plus.jpg", "Cu2plus.jpg", "Fe2plus.jpg", "Fe3plus.jpg", "Ca2plus.jpg", "Ba2plus.jpg", "Pb2plus.jpg", "Agplus.jpg"];

var negative_ioner = ["NO<sub>3</sub><sup>-</sup>", "Cl<sup>-</sup", "Br<sup>-</sup", "I<sup>-</sup", "SO<sub>4</sub><sup>2-</sup", "CO<sub>3</sub><sup>2-</sup", "OH<sup>-</sup", "S<sup>2-</sup", "PO<sub>4</sub><sup>3-</sup"];
var positive_ioner = ["NH<sub>4</sub><sup>+</sup>", "Na<sup>+</sup", "K<sup>+</sup", "Mg<sup>2+</sup", "Zn<sup>2+</sup", "Cu<sup>2+</sup", "Fe<sup>2+</sup", "Fe<sup>3+</sup", "Ca<sup>2+</sup", "Ba<sup>2+</sup", "Pb<sup>2+</sup", "Ag<sup>+</sup"];

var myLoader = html5Preloader();

var matrix_Array = [
    [1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 6, 7],
    [1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 8, 9],
    [5, 5, 5, 5, 5, 10, 11, 12, 5, 5, 13, 14],
    [1, 1, 1, 1, 1, 2, 3, 4, 24, 24, 24, 7],
    [1, 1, 1, 24, 24, 21, 22, 23, 24, 1, 8, 26],
    [1, 1, 1, 27, 27, 29, 30, 31, 32, 1, 8, 34],
    [1, 1, 1, 35, 36, 37, 38, 39, 24, 41, 42, 43],
    [1, 1, 1, 24, 24, 46, 47, 48, 24, 24, 51, 52]
];

// PRELOAD VIDEOS USING html5Preloader.js
// Load videoerne en af gangen og gør billederne aktive som de loades ind...! 
//Noget med et loop ud fra et array af film: 
$(document).ready(function() {
    populate_btns();
    //load_videos(0);
    $("#video").fadeOut(0);

    //EVENT listeners: 



    $(".btn_pos").click(function() {

        $(".btn_pos").removeClass("btn-primary").addClass("btn-info");
        $("#video").fadeOut(0);
        $(this).addClass("btn-primary").removeClass("btn-info");
        video.currentTime = 0;
        video.pause();

        pos_selected = parseInt($(this).attr("pos_id"));
        console.log("pos: " + pos_selected);
        $(".img_container").fadeOut(50, function() {
            $(".img_container").attr("src", "media/img/" + pic_Array[pos_selected]);

            $(".img_container").fadeIn(200);
        });
        $(".pos_stof").html(positive_ioner[pos_selected])
    });

    $(".btn_neg").click(function() {
        if (pos_selected === false) {
            alert("vælg en positiv ion først");
        } else {
            $(this).addClass("btn-primary").removeClass("btn-info");
            neg_selected = parseInt($(this).attr("neg_id"));
            console.log("selected ")
            $(".neg_stof").html(negative_ioner[neg_selected])

            //alert("vi skal afspille film nummer: "  + matrix_Array[neg_selected][pos_selected]);
            $(".btn_neg").removeClass("btn-primary").addClass("btn-info");
            $("source").attr("src", "media/" + matrix_Array[neg_selected][pos_selected] + ".mp4");
            $("#video").load();
            $("#video").fadeIn(200);
            video.currentTime = 0;
            video.play();
        }
    });
});

//

function load_videos(num) {
    myLoader.addFiles('myvid:' + video_Array[num]);
    //myLoader.addFiles('mysound*:sound.ogg||sound.mp3');
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
    //video.pause();
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

    //return newstring;
}

// Scrubber event listener: 

setInterval(function() {
    var percent = video.currentTime / video.duration;

    var scrub_pos = percent * video.width;

    video.duration
    $(".scrubber").css("left", scrub_pos + "px");
}, 50);
