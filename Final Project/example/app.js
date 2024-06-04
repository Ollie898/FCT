// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("adinrossResult").style.display = "none";
    document.getElementById("jynxyResult").style.display = "none";
    document.getElementById("stableronaldoResult").style.display = "none";
    document.getElementById("ninjaResult").style.display = "none";
    document.getElementById("kaicenatResult").style.display = "none";
    document.getElementById("sypherpkResult").style.display = "none";
}

function seeResult() {
    var adinross = 0;
    var jynxy = 0;
    var stableronaldo = 0;
    var ninja = 0;
    var kaicenat = 0;
    var sypherpk = 0;

    if (document.getElementById("kick").checked) {
        adinross += 1;
    } else if (document.getElementById("youtube").checked) {
        sypherpk += 1;
    } else {
        jynxy += 1;
        stableronaldo += 1;
        ninja += 1;
        kaicenat += 1;
    }

    if (document.getElementById("fort").checked) {
        ninja += 1;
        sypherpk += 1;
        stableronaldo += 1;
    } else if (document.getElementById("r6").checked) {
        jynxy += 1;
    } else {
        adinross += 1;
        kaicenat += 1;
    }

    if (document.getElementById("payphone").checked) {
        stableronaldo += 1;
        sypherpk += 1;
    } else if (document.getElementById("lowtaper").checked) {
        ninja += 1;
    } else {
        kaicenat += 1;
        jynxy += 1;
        adinross += 1;
    }

    if (document.getElementById("bleached").checked) {
        jynxy += 1;
        adinross += 1
    } else if (document.getElementById("lowtaperfade").checked) {
        ninja += 1;
        stableronaldo += 1;
        sypherpk += 1;
    } else {
        kaicenat += 1;
       
    }

    if (document.getElementById("johnson").checked) {
        jynxy += 1;
    } else if (document.getElementById("rizz").checked) {
        ninja += 1;
        kaicenat += 1;
        adinross += 1;
    } else {
        stableronaldo += 1;
        sypherpk += 1;

    }

    if (document.getElementById("watermelon").checked) {
        kaicenat += 1;
    } else if (document.getElementById("burger").checked) {
        stableronaldo += 1;
    } else {
        jynxy += 1;
        sypherpk += 1;
        ninja += 1;
        adinross += 1;

    }

    if (document.getElementById("football").checked) {
        jynxy += 1;
        kaicenat += 1;
    } else if (document.getElementById("soccer").checked) {
        stableronaldo += 1;
        sypherpk += 1;
    } else {
        ninja += 1;
        adinross += 1;
        
        
    }

    if (document.getElementById("breckie").checked) {
        jynxy += 1;
        adinross += 1;
    } else if (document.getElementById("chun li").checked) {
        ninja += 1;
        stableronaldo += 1;
        sypherpk += 1;
    } else {
        kaicenat += 1;
    }

    if (document.getElementById("personality").checked) {
        jynxy += 1;
        kaicenat += 1;
    } else if (document.getElementById("haircut").checked) {
        ninja += 1;
        adinross += 1;
        stableronaldo += 1;
    } else {
        sypherpk += 1;
        
    }

    if (document.getElementById("black").checked) {
        kaicenat += 1;
    } else if (document.getElementById("white").checked) {
        ninja += 1;
        adinross += 1;
        sypherpk += 1;
        jynxy += 1;
    } else {
        stableronaldo += 1;
        
    }

    resetResult();

    if (jynxy > ninja && jynxy > kaicenat && jynxy > adinross && jynxy > stableronaldo && jynxy > sypherpk) {
        document.getElementById("jynxyResult").style.display = "block";
    } else if (ninja > jynxy && ninja > kaicenat && ninja > adinross && ninja > stableronaldo && ninja > sypherpk) {
        document.getElementById("ninjaResult").style.display = "block";
    } else if (kaicenat > ninja && kaicenat > kaicenat && jynxy > adinross && kaicenat > stableronaldo && kaicenat > sypherpk) {
        document.getElementById("kaicenatResult").style.display = "block";
    } else if (adinross > ninja && adinross > kaicenat && adinross > jynxy && adinross > stableronaldo && adinross > sypherpk) {
        document.getElementById("adinrossResult").style.display = "block";
    } else if (stableronaldo > ninja && stableronaldo > kaicenat && stableronaldo > adinross && stableronaldo > jynxy && stableronaldo > sypherpk) {
        document.getElementById("stableronaldoResult").style.display = "block";
    } else if (sypherpk > ninja && sypherpk > kaicenat && sypherpk > adinross && sypherpk > stableronaldo && sypherpk > jynxy) {
        document.getElementById("sypherpkResult").style.display = "block";
   
    }
}
