var ajaxURL = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?";

function getEpoch() {
    var d = new Date();
    var epoch = Math.round(d.getTime() / 1000);
    return epoch;
}

function checkTimeOut() {
    var appStorage = JSON.parse(sessionStorage.getItem("web_fc_utm_my_ttms"));

    var epoch_current = getEpoch();
    var epoch_lapse = epoch_current - appStorage.epoch_last;

    console.log(epoch_current);
    console.log(appStorage.epoch_last);
    console.log(epoch_lapse);

    // 15 minutes (900 seconds) for session timeout
    if (epoch_lapse > 900 ) { 
        sessionStorage.removeItem("web_fc_utm_my_ttms");
        closeSidebar();
        window.location.href = "login.html";
        
    } else {
        appStorage.epoch_last = epoch_current;
        sessionStorage.setItem("web_fc_utm_my_ttms", JSON.stringify(appStorage));
        console.log(appStorage.epoch_last);
    }
}

function checkSession() {
    if (sessionStorage.getItem("web_fc_utm_my_ttms") == null) {
        window.location.href = "login.html";
    } else {
        checkTimeOut();
    }
}

