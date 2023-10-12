/* ================================================================
FACCIO PARTIRE LA FUNZIONE
================================================================== */

(function () {


    var mX, mY, distance,
        $element = $('#element');

    /* ================================================================
    CALCOLO LA DURATA DEL VIDEO
    ================================================================== */

    let videoTarget = document.getElementById("myVideo");
    function getVideoDuration() {
        videoDuration = videoTarget.duration;
        console.log(videoDuration);
        return videoDuration;
    };
    videoTarget.addEventListener("loadedmetadata", getVideoDuration);

    /* ================================================================
    CALCOLO LA DISTANZA DAL VERTICE MAGGIORE
    ================================================================== */

    let windowWith = $(window).width();
    let windowHeight = $(window).height();
    let V1x = 0;
    let V1y = 0;
    let V2x = windowWith;
    let V2y = 0;
    let V3x = windowWith;
    let V3y = windowHeight;
    let V4x = 0;
    let V4y = windowHeight;
    let Dv1 = calculateDistanceV1($element, V1x, V1y);
    let Dv2 = calculateDistanceV2($element, V2x, V2y);
    let Dv3 = calculateDistanceV3($element, V3x, V3y);
    let Dv4 = calculateDistanceV4($element, V4x, V4y);
    let Dvmax = Math.max(Math.max(Dv1, Dv2), Math.max(Dv3, Dv4));

    /* ================================================================
    CALCOLO LA DISTANZA DELL'ELEMENTO DAI QUATTRO VERTICI DELLO SCHERMO
    ================================================================== */

    function calculateDistanceV1(elem, V1x, V1y) {
        return Math.floor(Math.sqrt(Math.pow(V1x - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(V1y - (elem.offset().top + (elem.height() / 2)), 2)));
    }
    function calculateDistanceV2(elem, V2x, V2y) {
        return Math.floor(Math.sqrt(Math.pow(V2x - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(V2y - (elem.offset().top + (elem.height() / 2)), 2)));
    }
    function calculateDistanceV3(elem, V3x, V3y) {
        return Math.floor(Math.sqrt(Math.pow(V3x - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(V3y - (elem.offset().top + (elem.height() / 2)), 2)));
    }
    function calculateDistanceV4(elem, V4x, V4y) {
        return Math.floor(Math.sqrt(Math.pow(V4x - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(V4y - (elem.offset().top + (elem.height() / 2)), 2)));
    }

    /* ================================================================
    CALCOLO IL RAPPORTO FRA LA DISTANZA ED IL TIMING DEL VIDEO
    ================================================================== */

    function heibob() {
        let videoTiming = (videoDuration * distance) / Dvmax ;
        videoTarget.currentTime = videoTiming;
        console.log('heibob' + videoTiming);
    }

    /* ================================================================
    CALCOLO IL RAPPORTO LA LUMINANZA DEL PULSANTE
    ================================================================== */

    let elementTarget = document.getElementById("element");
    function heicarl() {
        let luxMax = 2;
        let elementFilter = (luxMax * distance) / Dvmax ;
        elementTarget.style.filter = "grayscale(" + elementFilter + ")";
    }

    /* ================================================================
    CALCOLO LA DISTANZA
    ================================================================== */

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
    }

    $(document).mousemove(function (e) {
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);
        console.log(distance);
        heibob();
        heicarl();
    });
})();



