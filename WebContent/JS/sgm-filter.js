/* 
 * Sogamo-Filter Script 1.0
 * Written by Malathi C K
 *
 * Date: Fri Feb 1 22:00:00 2012 +0800
 * Modified Date: Fri Jun 15 22:00:00 2013 +0800
 */

/******** Variable Declaration ********/

var _game = new Array(); _game[0] = new Array(); _game[1] = new Array(); _game[2] = new Array();
var _date = new Array(); _date[0] = new Array(); _date[1] = new Array(); _date[2] = new Array();
var _age = new Array(); _age[0] = new Array(); _age[1] = new Array(); _age[2] = new Array(); _age[3] = new Array();
var _gender = new Array(); _gender[0] = new Array(); _gender[1] = new Array();
var _country = new Array(); _country[0] = new Array(); _country[1] = new Array();
var _city = new Array(); _city[0] = new Array(); _city[1] = new Array(); _city[2] = new Array(); _city[3] = new Array(); _city[4] = new Array();
//var _lastseen = new Array(); _lastseen[0] = new Array(); _lastseen[1] = new Array(); _lastseen[2] = new Array(); _lastseen[3] = new Array(); 
var _signup = new Array(); _signup[0] = new Array(); _signup[1] = new Array(); _signup[2] = new Array(); _signup[3] = new Array(); 

/* Global Functions */
function alphanumeric(e) {
    var t = /^[0-9a-zA-Z]+$/;
    if (!e.match(t)) {
        alert("Enter only alphanumeric characters");
        return false;
    } else {
        return true;
    }
}
function dateformat(d) {
    var t = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    if (!d.match(t)) {
        alert("Enter a valid (YYYY-MM-DD) date.");
        return false;
    } else {
        return true;
    }
}
function checknumber(e) {
    var t = /^[0-9]+$/;
    if (!e.match(t)) {
        alert("Enter a valid number");
        return false;
    } else {
        return true;
    }
}
function checkArray(arr, val){    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == val){
            return true;
        }
    }
    return false;
}
function checkandremove(arr, val){
    if(arr.length != 0 || arr != undefined){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == val){          
                removeByIndex(arr, i);
            }
        }
    }
}
function removeByIndex(a, i) {    
    a = a.splice(i, 1);
}

function getSegments(){
    $(".sogamo_widget_body").html("<p id='dummy'>New filter set will be added.</p>");
}

/* Filter Functions */
function showSecondFilter(v){
    $("#addt_filters").empty();    
    if (v == 1) {
        $("#addt_filters").append('<div style="width: 100px;" class="sgm-select"><select style="width: 100px;" name="second_filter_' + v + '" class="second_filter" onchange="showThirdFilter(this.value)"><option value="1" selected>is</option><option value="1">is not</option>' + '<option value="11">contains</option></select></div>');
        showThirdFilter(1);
    }
    if (v == 2) {
        $("#addt_filters").append('<div style="width: 100px;" class="sgm-select"><select style="width: 100px;" name="second_filter_' + v + '" class="second_filter" onchange="showThirdFilter(this.value)"><option value="2">' + 'is</option><option value="21">range is</option><option value="22" selected>custom</option></select></div>');
        showThirdFilter(22);
    }
    if (v == 3) {
        $("#addt_filters").append('<div style="width: 120px;" class="sgm-select"><select style="width: 120px;" name="second_filter_' + v + '" class="second_filter" onchange="showThirdFilter(this.value)"><option value="3" selected>is</option><option value="31">range is</option>' + '<option value="3">is not</option><option value="31">range is not</option></select></div>');
        showThirdFilter(3);
    }
    if (v == 4 || v == 5) {
        $("#addt_filters").append('<div style="width: 100px;" class="sgm-select"><select style="width: 100px;" name="second_filter_' + v + '" class="second_filter" onchange="showThirdFilter(this.value)"><option value="' + v + '" selected>is</option><option value="' + v + '">is not</option></select></div>');
        if (v == 4) { showThirdFilter(4); }
        if (v == 5) { showThirdFilter(5); }        
    }
    if (v == 6 || v == 7) {
        $("#addt_filters").append('<div style="width: 110px;" class="sgm-select"><select style="width: 110px;" name="second_filter_' + v + '" class="second_filter" onchange="showThirdFilter(this.value)"><option value="' + v + '" selected>is</option><option value="' + v + '">is not</option><option value="' + v + '">starts with</option><option value="' + v + '">ends with</option><option value="' + v + '">contains</option></select></div>');
        if (v == 6) { showThirdFilter(6); }
        if (v == 7) { showThirdFilter(7); }  
    }
    if (v == 8 || v == 9) {
        $("#addt_filters").append('<div style="width: 90px;" class="sgm-select"><select style="width: 90px;" name="second_filter_' + v + '" class="second_filter" onchange="showThirdFilter(this.value)"><option value="'+ v +'1" selected>ago</option><option value="'+ v +'2">on</option><option value="'+ v +'3">range</option><option value="'+ v +'4">custom</option></select></div>');
        showThirdFilter(81);  
        if (v == 8) { showThirdFilter(81); }
        if (v == 9) { showThirdFilter(91); } 
    }
    if (v == 10) {
        showThirdFilter(21);
    }
}

function showThirdFilter(e){
    var cnt = "addt_filters";   
    console.log(e)
    if(e == 2 || e == 21 || e == 22){ $("#addt_filters_date").find(".third_filter").remove(); cnt = "addt_filters_date"; } 
    else{ $("#addt_filters").find(".third_filter").remove(); }
    $('input[name="filter_cancel"]').remove(); $('input[name="filter_add"]').remove();    
    
    if (e == 1) {
        $("#addt_filters").append($("#hidden_values_1").html());
        $("#third_filter_1").width($("#third_filter_1").width()+30); $(".third_filter").width($("#third_filter_1").width()+12);
    }
    if (e == 11 || e == 2 || e == 3 || e == 6 || e == 7 || e == 81 || e == 82 || e == 91 || e == 92) {
        if(e == 81) { 
            $("#addt_filters").append('<div id="third_filter_' + e + '" class="third_filter">' + '<input maxlength="3" style="width: 80px; padding: 4px 0px 6px 2px; height: 14px;" class="filter_input" type="text" value="" id="third_filter_input" /><div style="width: 100px; margin-left: 3px;" class="sgm-select"><select style="width: 100px;" id="third_filter_unit" name="third_filter_unit" class="third_filter"><option value="1" selected>day(s)</option><option value="2">hour(s)</option><option value="3">min(s)</option><option value="4">sec(s)</option></select></div></div>');
        }else if(e == 91) { 
            $("#addt_filters").append('<div id="third_filter_' + e + '" class="third_filter">' + '<input maxlength="3" style="width: 80px; padding: 4px 0px 6px 2px; height: 14px;" class="filter_input" type="text" value="" id="third_filter_input" /><div style="width: 100px; margin-left: 3px;" class="sgm-select"><select style="width: 100px;" id="third_filter_unit" name="third_filter_unit" class="third_filter"><option value="3" selected>min(s)</option><option value="2">hour(s)</option><option value="1">day(s)</option><option value="5">month(s)</option><option value="6">year(s)</option></select></div></div>');
        }else if(e == 2 || e == 82 || e == 92) {             
            $("#"+cnt).append('<div id="third_filter_' + e + '" class="third_filter">' + '<input maxlength="10" readonly="readonly" style="width: 80px; padding: 4px 0px 6px 2px; height: 14px;" class="filter_input" type="text" value="" id="third_filter_input" /></div>');
            $("#third_filter_input").datepicker({
                 dateFormat: "yy-mm-dd"//,
                 //minDate: 0
            });
            $("#third_filter_input").trigger("click")
        }else{
            $("#addt_filters").append('<div id="third_filter_' + e + '" class="third_filter">' + '<input style="padding: 4px 0px 6px 2px; height: 14px;" class="filter_input" type="text" value="" id="third_filter_input" /></div>');
        }
        if(e == 3) $("#third_filter_input").attr("maxlength","3");
    }
    if (e == 21 || e == 83 || e == 93) {       
        $("#"+cnt).append('<div id="third_filter_21" class="third_filter">' + '<label for="from">From&nbsp;</label><input maxlength="10" style="width: 80px; padding: 4px 0px 6px 2px; height: 14px;" class="filter_input" type="text" id="from" name="from" readonly="readonly"/>' + '<label for="to">&nbsp;To&nbsp;</label><input maxlength="10" style="width: 80px; padding: 4px 0px 6px 2px; height: 14px;" class="filter_input" type="text" id="to" name="to" readonly="readonly"/></div>');
        if(window.location.pathname == "/cohortAnalysis"){
            $("#from").datepicker({
                dateFormat: "yy-mm-dd", minDate: "-3M", maxDate: 0,
                onClose: function (e) {
                    $("#to").datepicker("option", "minDate", e)
                }               
            });
            $("#to").datepicker({
                dateFormat: "yy-mm-dd", maxDate: 0
            });
        }else{
            $("#from").datepicker({
                dateFormat: "yy-mm-dd", changeMonth: true, numberOfMonths: 2, //minDate: 0, 
                onClose: function (e) {
                    $("#to").datepicker("option", "minDate", e)
                }
            });
            $("#to").datepicker({
                dateFormat: "yy-mm-dd", changeMonth: true, numberOfMonths: 2
            });
        }
               
        $("#from").trigger("click");
        $("#to").trigger("click")
    }
    if (e == 22 || e == 84 || e == 94) {
        $("#"+cnt).append('<div style="width: 130px; padding: 0;  margin-left: 3px;" class="sgm-select third_filter"><select style="width: 130px;" name="third_filter_'+e+'" id="third_filter_'+e+'" ><option value="1">This Week</option><option value="2">Last 2 Weeks</option><option value="3">Last 3 Weeks</option><option value="4">This Month</option><option value="5">Last 2 Months</option><option value="6">Last 3 Months</option></select></div>')
    }
    if (e == 31) {
        $("#addt_filters").append('<div id="third_filter_31" class="third_filter">' + 'Min: <input class="filter_input" name="min_age" id="min_age" style="width: 40px; padding: 4px 0px 6px 2px; height: 14px;" maxlength="3"/>&nbsp;' + 'Max: <input class="filter_input" name="max_age" id="max_age" style="width: 40px; padding: 4px 0px 6px 2px; height: 14px;" maxlength="3"/></div>')
    }
    if (e == 4) {
        $("#addt_filters").append('<div style="width: 100px; padding: 0; margin-left: 3px;" class="sgm-select third_filter"><select style="width: 100px;" name="third_filter_4" id="third_filter_4" ><option value="Male">Male</option><option value="Female">Female</option><option value="Others">Others</option></select></div>')
    }
    if (e == 5) {
        $("#addt_filters").append($("#hidden_values_5").html());
        $("#third_filter_5").width($("#third_filter_5").width()+30); $(".third_filter").width($("#third_filter_5").width()+12);
    }
    $("#"+cnt).append('<input type="button" onclick="addFilter()" class="whitishBtn button_small" name="filter_add" value="Add"/>');
    $("#"+cnt).append('<input type="button" onclick="cancelFilter()" class="whitishBtn button_small" name="filter_cancel" value="Cancel"/>')
    //$("#addt_filters").append('<input type="button" class="bluishBtn button_small" style="float: right;" onclick="applyActionFilter();" name="filter_apply" value="Apply Filter"/>')
}

function addFilter(){
    $("#dummy").remove();
    var e = "",
    t = [];
    t[0] = $("#first_filter option:selected").text();
    t[1] = $(".second_filter:visible option:selected").text();
    if (t[0] != "-- Filter By --") {
        if ($("#third_filter_input").is(":visible")) {
              if (t[0] == "Signed Up") {
                 if ($("#third_filter_input").val() == null || $("#third_filter_input").val() == "") {
                    alert("Enter a value");
                    return false;
                 }else {                   
                    if($(".sogamo_widget_body > div.signupholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column signupholder"></div>');
                    if(t[1] == "ago") {
                        if(!checknumber($("#third_filter_input").val())) {
                            return false;
                        }else if(checkArray(_signup[0], $("#third_filter_unit").val() + "/" +  $("#third_filter_input").val())) {
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").show(); $(".signupago").remove(); 
                            $(".sogamo_widget_body").find(".signupholder").prepend("<div class='signupago'><div id='myfilter' style='background: #66b3ff; color: white;'><span>" + t[0] + " "+ $("#third_filter_input").val() + " " + $("#third_filter_unit option:selected").text() + " ago" + "</span><span class='closethis' onclick='removeFilter(this.id)' id='sua-" + $("#third_filter_unit").val() + "sep" +  $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _signup[0] = []; _signup[0].push($("#third_filter_unit").val() + "/" +  $("#third_filter_input").val());
                        }
                    }else if(t[1] == "on") {
                        //if(!dateformat($("#third_filter_input").val())){
                            //return false;
                        //}else 
                        if(checkArray(_signup[1], $("#third_filter_input").val())) {
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").show(); $(".sogamo_widget_body").find(".signupholder").prepend("<div class='signupon'><div id='myfilter' style='background: #66b3ff; color: white;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='suo-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _signup[1].push($("#third_filter_input").val());
                        }
                    }
                }
            } /*else if (t[0] == "Last Seen") {
                if($("#third_filter_input").val() == null || $("#third_filter_input").val() == "") {
                    alert("Enter a value");
                    return false;
                }else {                    
                    if ($(".sogamo_widget_body > div.lastseenholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column lastseenholder"></div>');
                    if (t[1] == "ago") {
                        if(!checknumber($("#third_filter_input").val())) {
                            return false;
                        }else if(checkArray(_lastseen[0], $("#third_filter_unit").val() + "/" +  $("#third_filter_input").val())) {
                            alert("This filter already exists.");
                            return false;
                        }else {
                            $(".sogamo_widget_body").show(); $(".lastseenago").remove(); 
                            $(".sogamo_widget_body").find(".lastseenholder").prepend("<div class='lastseenago'><div id='myfilter' style='background: gray; color: whitesmoke;'><span>" + t[0] + " "+ $("#third_filter_input").val() + " " + $("#third_filter_unit option:selected").text() + " ago" + "</span><span class='closethis' onclick='removeFilter(this.id)' id='lsa-" + $("#third_filter_unit").val() + "sep" +  $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _lastseen[0] = []; _lastseen[0].push($("#third_filter_unit").val() + "/" +  $("#third_filter_input").val());
                        }
                    }else if(t[1] == "on") {
                        if (checkArray(_lastseen[1], $("#third_filter_input").val())) {
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").show(); $(".sogamo_widget_body").find(".lastseenholder").prepend("<div class='lastseenon'><div id='myfilter' style='background: gray; color: whitesmoke;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='lso-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _lastseen[1].push($("#third_filter_input").val());
                        }
                    }
                }
            }*/ else if (t[0] == "Date" && t[1] == "is") {
                if ($("#third_filter_input").val() == null || $("#third_filter_input").val() == "") {
                    alert("Choose a date");
                    return false;
                } else {
                    $(".sogamo_widget_body").show();
                    if ($(".sogamo_widget_body > div.dateholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column dateholder"></div>');
                    if (t[1] == "is") {
                        if (checkArray(_date[0], $("#third_filter_input").val())) {
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".dateholder").prepend("<div class='dateis'><div id='myfilter' style='background: #FFFF99; color: #858500;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='di-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _date[0].push($("#third_filter_input").val());
                        }
                    }
                }
            } else if (t[0] == "Game" && t[1] == "contains") {
                if ($("#third_filter_input").val() == null || $("#third_filter_input").val() == "") {
                    alert("Enter a game name");
                    return false;
                } else if (!alphanumeric($("#third_filter_input").val())) {
                    return false;
                } else {
                    $(".sogamo_widget_body").show();
                    if ($(".sogamo_widget_body > div.gameholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column gameholder"></div>');
                    if(checkArray(_game[2], $("#third_filter_input").val())){
                        alert("This filter already exists.");
                        return false;
                    }else{
                        $(".sogamo_widget_body").find(".gameholder").prepend("<div class='gamecontains'><div id='myfilter' style='background: #FFCC99; color: #d46a00;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='gac-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                        //$("#filtervalues").append("<input class='gamecontains' id='gamecontains' name='gac" + $("#third_filter_input").val() + "' type='hidden' value='" + $("#third_filter_input").val() + "'/>");
                        _game[2].push($("#third_filter_input").val()); $(".gameisnot").remove(); _game[1] = [];
                    }                   
                }
            } else if (t[0] == "Age" && (t[1] == "is" || t[1] == "is not")) {
                if ($("#third_filter_input").val() == null || $("#third_filter_input").val() == "") {
                    alert("Enter an age");
                    return false;
                } else if (!checknumber($("#third_filter_input").val())) {
                    return false;
                } else {
                    $(".sogamo_widget_body").show();
                    if ($(".sogamo_widget_body > div.ageholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column ageholder"></div>');
                    if (t[1] == "is") {
                        if(checkArray(_age[0], $("#third_filter_input").val())){
                        //if ($("#filtervalues").find("input[name=ai" + $("#third_filter_input").val() + "]").length == 1) {
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".ageholder").prepend("<div class='ageis'><div id='myfilter' style='background: #CCFFFF; color: #00b8b8;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='ai-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            //$("#filtervalues").append("<input class='ageis' id='ageis' name='ai" + $("#third_filter_input").val() + "' type='hidden' value='" + $("#third_filter_input").val() + "'/>")
                            _age[0].push($("#third_filter_input").val());
                            $(".ageisnot").remove(); $(".agerangeisnot").remove(); _age[1] = []; _age[3] = [];
                        }
                        
                    } else if (t[1] == "is not") {
                        //if ($("#filtervalues").find("input[name=ain" + $("#third_filter_input").val() + "]").length == 1) {
                        if(checkArray(_age[2], $("#third_filter_input").val())){
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".ageholder").prepend("<div class='ageisnot'><div id='myfilter' style='background: #CCFFFF; color: #00b8b8;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='ain-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            //$("#filtervalues").append("<input class='ageisnot' id='ageisnot' name='ain" + $("#third_filter_input").val() + "' type='hidden' value='" + $("#third_filter_input").val() + "'/>")
                            _age[2].push($("#third_filter_input").val()); $(".agerangeis").remove(); $(".ageis").remove(); _age[0] = []; _age[1] =[];
                        }                        
                    }
                }
            }else if (t[0] == "City") {
                if ($("#third_filter_input").val() == null || $("#third_filter_input").val() == "") {
                    alert("Enter city name");
                    return false;
                }else {
                    $(".sogamo_widget_body").show();
                    if ($(".sogamo_widget_body > div.cityholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column cityholder"></div>');
                    if (t[1] == "is") {
                        if(checkArray(_city[0], $("#third_filter_input").val())){
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".cityholder").prepend("<div class='cityis'><div id='myfilter' style='background: #BBCCDD; color: #547ea7;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='ci-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _city[0].push($("#third_filter_input").val()); $(".cityisnot").remove(); _city[1] = []; 
                        }                        
                    }else if (t[1] == "is not") {
                        if(checkArray(_city[1], $("#third_filter_input").val())){
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".cityholder").prepend("<div class='cityisnot'><div id='myfilter' style='background: #BBCCDD; color: #547ea7;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='cin-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _city[1].push($("#third_filter_input").val()); $(".cityis").remove();  _city[0] = []; 
                        }                        
                    }else if (t[1] == "starts with") {
                        if(checkArray(_city[2], $("#third_filter_input").val())){
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".cityholder").prepend("<div class='citystartswith'><div id='myfilter' style='background: #BBCCDD; color: #547ea7;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='csw-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _city[2].push($("#third_filter_input").val()); 
                        }                        
                    }else if (t[1] == "ends with") {
                        if(checkArray(_city[3], $("#third_filter_input").val())){
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".cityholder").prepend("<div class='cityendswith'><div id='myfilter' style='background: #BBCCDD; color: #547ea7;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='cew-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _city[3].push($("#third_filter_input").val()); 
                        }                        
                    }else if (t[1] == "contains") {
                        if(checkArray(_city[4], $("#third_filter_input").val())){
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".cityholder").prepend("<div class='cityendswith'><div id='myfilter' style='background: #BBCCDD; color: #547ea7;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_input").val() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='cc-" + $("#third_filter_input").val() + "' title='Remove'>X</span></div></div>");
                            _city[4].push($("#third_filter_input").val()); 
                        }                        
                    }
                }
            }
        } else if ($("#from").is(":visible")) {
            e = " from " + $("#from").val() + " to " + $("#to").val();
            if ($("#from").val() == "" || $("#to").val() == "") {
                alert("Choose from and to date");
                return false;
            } else {
                $(".sogamo_widget_body").show();               
                if (t[1] == "range is" || $("#first_filter option:selected").val() == 10) {
                    if ($(".sogamo_widget_body > div.dateholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column dateholder"></div>');
                    if (checkArray(_date[1], $("#from").val() + "," + $("#to").val())) {
                        alert("This filter already exists.");
                        return false;
                    } else {
                        $(".daterangeis").remove(); _date[1] = [];
                        $(".sogamo_widget_body").find(".dateholder").prepend("<div class='daterangeis'><div id='myfilter' style='background: #FFFF99; color: #858500;'><span>" + t[0] + " " + t[1] + " " + e + "</span><span class='closethis' onclick='removeFilter(this.id)' id='dri-" + $("#from").val() + "to" + $("#to").val() + "' title='Remove'>X</span></div></div>");
                        _date[1].push($("#from").val() + "," + $("#to").val());
                    }
                }else if(t[1] == "range"){     
                    /*if (t[0] == "Last Seen"){
                        if ($(".sogamo_widget_body > div.lastseenholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column lastseenholder"></div>');
                        if (checkArray(_lastseen[2], $("#from").val() + "," + $("#to").val())) {
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".lastseenholder").prepend("<div class='lastseenrangeis'><div id='myfilter' style='background: gray; color: whitesmoke;'><span>" + t[0] + " " + e + "</span><span class='closethis' onclick='removeFilter(this.id)' id='lsri-" + $("#from").val() + "to" + $("#to").val() + "' title='Remove'>X</span></div></div>");
                            _lastseen[2].push($("#from").val() + "," + $("#to").val());
                        }
                    }else*/ if (t[0] == "Signed Up"){
                        if ($(".sogamo_widget_body > div.signupholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column signupholder"></div>');
                        if (checkArray(_signup[2], $("#from").val() + "," + $("#to").val())) {
                            alert("This filter already exists.");
                            return false;
                        } else {
                            $(".sogamo_widget_body").find(".signupholder").prepend("<div class='signuprangeis'><div id='myfilter' style='background: #66b3ff; color: white;'><span>" + t[0] + " " + e + "</span><span class='closethis' onclick='removeFilter(this.id)' id='suri-" + $("#from").val() + "to" + $("#to").val() + "' title='Remove'>X</span></div></div>");
                            _signup[2].push($("#from").val() + "," + $("#to").val());
                        }
                    }
                }
            }
        } else if ($("#min_age").is(":visible")) {
            var n = $("#min_age").val();
            var r = $("#max_age").val();
            e = " from " + n + " to " + r;
            if (n == "" || r == "") {
                alert("Choose the min and max values");
                return false;
            } else if (!checknumber(n) || !checknumber(r)) {
                return false;
            } else if (parseInt(r) < parseInt(n) || parseInt(r) == parseInt(n)) {
                alert("Max age should be greater than min age");
                return false;
            } else {
                $(".sogamo_widget_body").show();
                if ($(".sogamo_widget_body > div.ageholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column ageholder"></div>');
                if (t[1] == "range is") {
                    //if ($("#filtervalues").find("input[name=ari" + $("#min_age").val() + "-" + $("#max_age").val() + "]").length == 1) {
                    if(checkArray(_age[1], $("#min_age").val() + "," + $("#max_age").val())){
                        alert("This filter already exists.");
                        return false;
                    } else {
                        $(".sogamo_widget_body").find(".ageholder").prepend("<div class='agerangeis'><div id='myfilter' style='background: #CCFFFF; color: #00b8b8;'><span>" + t[0] + " " + t[1] + " " + e + "</span><span class='closethis' onclick='removeFilter(this.id)' id='ari-" + $("#min_age").val() + "-" + $("#max_age").val() + "' title='Remove'>X</span></div></div>");
                        //$("#filtervalues").append("<input class='agerangeis' id='agerangeis' name='ari" + $("#min_age").val() + "-" + $("#max_age").val() + "' type='hidden' value='" + $("#min_age").val() + "," + $("#max_age").val() + "'/>")
                        _age[1].push($("#min_age").val() + "," + $("#max_age").val());
                        $(".ageisnot").remove(); $(".agerangeisnot").remove(); _age[2] = []; _age[3] = [];
                    }                    
                } else if (t[1] == "range is not") {
                    //if ($("#filtervalues").find("input[name=arin" + $("#min_age").val() + "-" + $("#max_age").val() + "]").length == 1) {
                    if(checkArray(_age[3], $("#min_age").val() + "," + $("#max_age").val())){
                        alert("This filter already exists.");
                        return false;
                    } else {
                        $(".sogamo_widget_body").find(".ageholder").prepend("<div class='agerangeisnot'><div id='myfilter' style='background: #CCFFFF; color: #00b8b8;'><span>" + t[0] + " " + t[1] + " " + e + "</span><span class='closethis' onclick='removeFilter(this.id)' id='arin-" + $("#min_age").val() + "-" + $("#max_age").val() + "' title='Remove'>X</span></div></div>");
                        //$("#filtervalues").append("<input class='agerangeisnot' id='agerangeisnot' name='arin" + $("#min_age").val() + "-" + $("#max_age").val() + "' type='hidden' value='" + $("#min_age").val() + "," + $("#max_age").val() + "'/>")
                        _age[3].push($("#min_age").val() + "," + $("#max_age").val()); $(".agerangeis").remove(); $(".ageis").remove(); _age[1] = []; _age[0] = [];
                    }                    
                    
                }
            }
        }
            
        if (t[0] == "Game") {
            $(".sogamo_widget_body").show();
            if ($(".sogamo_widget_body > div.gameholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column gameholder"></div>');
            if (t[1] == "is") {
                if (checkArray(_game[0], $("#third_filter_1").val())) {
                    alert("This filter already exists.");
                    return false;
                } else {
                    $(".sogamo_widget_body").find(".gameholder").prepend("<div class='gameis'><div id='myfilter' style='background: #FFCC99; color: #d46a00;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_1 option:selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='gai-" + $("#third_filter_1").val() + "' title='Remove'>X</span></div></div>");
                    _game[0].push($("#third_filter_1").val());
                    $(".gameisnot").remove(); _game[1] = [];
                }
                
            } else if (t[1] == "is not") {
                if (checkArray(_game[1], $("#third_filter_1").val())) {
                    alert("This filter already exists.");
                    return false;
                } else {
                    $(".sogamo_widget_body").find(".gameholder").prepend("<div class='gameisnot'><div id='myfilter' style='background: #FFCC99; color: #d46a00;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_1 option:selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='gain-" + $("#third_filter_1").val() + "' title='Remove'>X</span></div></div>");
                    _game[1].push($("#third_filter_1").val());
                    $(".gameis, .gamecontains").remove(); _game[0] = []; _game[2] = [];
                }                
            }
        }
        if (t[0] == "Gender") {
            $(".sogamo_widget_body").show();
            if ($(".sogamo_widget_body > div.genderholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column genderholder"></div>');
            if (t[1] == "is") {
                $(".genderisnot").remove(); _gender[1] = [];
                if (checkArray(_gender[0], $("#third_filter_4").val())) {
                //if ($("#filtervalues").find("input[name=gi" + $("#third_filter_4").val() + "]").length == 1) {
                    alert("This filter already exists.");
                    return false;
                } else {
                    $(".sogamo_widget_body").find(".genderholder").prepend("<div class='genderis'><div id='myfilter' style='background: #CCFFCC; color: #00b800;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_4 option:selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='gi-" + $("#third_filter_4").val() + "' title='Remove'>X</span></div></div>");
                    //$("#filtervalues").append("<input class='genderis' id='genderis' name='gi" + $("#third_filter_4").val() + "' type='hidden' value='" + $("#third_filter_4").val() + "'/>")
                    _gender[0].push($("#third_filter_4").val());
                }
            } else if (t[1] == "is not") {
                $(".genderis").remove(); _gender[0] = [];
                if (checkArray(_gender[1], $("#third_filter_4").val())) {
                //if ($("#filtervalues").find("input[name=gin" + $("#third_filter_4").val() + "]").length == 1) {
                    alert("This filter already exists.");
                    return false;
                } else {
                    $(".sogamo_widget_body").find(".genderholder").prepend("<div class='genderisnot'><div id='myfilter' style='background: #CCFFCC; color: #00b800;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_4 option:selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='gin-" + $("#third_filter_4").val() + "' title='Remove'>X</span></div></div>");
                    //$("#filtervalues").append("<input class='genderisnot' id='genderisnot' name='gin" + $("#third_filter_4").val() + "' type='hidden' value='" + $("#third_filter_4").val() + "'/>")
                    _gender[1].push($("#third_filter_4").val());
                }
            }
        }
        if (t[0] == "Country") {
            $(".sogamo_widget_body").show();
            if ($(".sogamo_widget_body > div.countryholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column countryholder"></div>');
            if (t[1] == "is") {
                //if ($("#filtervalues").find("input[name=ci" + $("#third_filter_5").val() + "]").length == 1) {
                if (checkArray(_country[0], $("#third_filter_5").val())) {
                    alert("This filter already exists.");
                    return false;
                } else {
                    $(".sogamo_widget_body").find(".countryholder").prepend("<div class='countryis'><div id='myfilter' style='background: #CCCC99; color: #858543;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_5 option:selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='coi-" + $("#third_filter_5").val() + "' title='Remove'>X</span></div></div>");
                    //$("#filtervalues").append("<input class='countryis' id='countryis' name='ci" + $("#third_filter_5").val() + "' type='hidden' value='" + $("#third_filter_5").val() + "'/>")
                    _country[0].push($("#third_filter_5").val()); $(".countryisnot").remove(); _country[1] = [];
                }                
            } else if (t[1] == "is not") {
                //if ($("#filtervalues").find("input[name=cin" + $("#third_filter_5").val() + "]").length == 1) {
                if (checkArray(_country[1], $("#third_filter_5").val())) {
                    alert("This filter already exists.");
                    return false;
                } else {
                    $(".sogamo_widget_body").find(".countryholder").prepend("<div class='countryisnot'><div id='myfilter' style='background: #CCCC99; color: #858543;'><span>" + t[0] + " " + t[1] + " " + $("#third_filter_5 option:selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='coin-" + $("#third_filter_5").val() + "' title='Remove'>X</span></div></div>");
                    //$("#filtervalues").append("<input class='countryisnot' id='countryisnot' name='cin" + $("#third_filter_5").val() + "' type='hidden' value='" + $("#third_filter_5").val() + "'/>")
                    _country[1].push($("#third_filter_5").val()); $(".countryis").remove(); _country[0] = [];
                }                
            }
        }
        if (t[0] == "Date" && t[1] == "custom") {
            $(".sogamo_widget_body").show();
            if ($(".sogamo_widget_body > div.dateholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column dateholder"></div>');
            if (checkArray(_date[2], $("#third_filter_22").val())) {
                alert("This filter already exists.");
                return false;
            } else {
                $(".datechosenis").remove();
                $(".sogamo_widget_body").find(".dateholder").prepend("<div class='datechosenis'><div id='myfilter' style='background: #FFFF99; color: #858500;'><span>Date is " + $("#third_filter_22 :selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='dc-" + $("#third_filter_22").val() + "' title='Remove'>X</span></div></div>");
                removeByIndex(_date[2], 0); _date[2].push($("#third_filter_22").val());
            }
        }
        /*if (t[0] == "Last Seen" && t[1] == "custom") {
            $(".sogamo_widget_body").show();
            if ($(".sogamo_widget_body > div.lastseenholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column lastseenholder"></div>');
            if (checkArray(_lastseen[3], $("#third_filter_84").val())) {
                alert("This filter already exists.");
                return false;
            } else {
                $(".lastseenchosen").remove();
                $(".sogamo_widget_body").find(".lastseenholder").prepend("<div class='lastseenchosen'><div id='myfilter' style='background: gray; color: whitesmoke;'><span>Last seen in " + $("#third_filter_84 :selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='lsc-" + $("#third_filter_84").val() + "' title='Remove'>X</span></div></div>");
                _lastseen[3] = []; _lastseen[3].push($("#third_filter_84").val());
            }
        }*/
        if (t[0] == "Signed Up" && t[1] == "custom") {
            $(".sogamo_widget_body").show();
            if ($(".sogamo_widget_body > div.signupholder").length != 1) $(".sogamo_widget_body").prepend('<div class="filter_column signupholder"></div>');
            if (checkArray(_signup[3], $("#third_filter_94").val())) {
                alert("This filter already exists.");
                return false;
            } else {
                $(".signupchosen").remove();
                $(".sogamo_widget_body").find(".signupholder").prepend("<div class='signupchosen'><div id='myfilter' style='background: #66b3ff; color: white;'><span>Last seen in " + $("#third_filter_94 :selected").text() + "</span><span class='closethis' onclick='removeFilter(this.id)' id='suc-" + $("#third_filter_94").val() + "' title='Remove'>X</span></div></div>");
                _signup[3] = []; _signup[3].push($("#third_filter_94").val());
            }
        }
    }
    
    if($(".sogamo_widget_footer").find("#filter_apply").is(":disabled")){
        $(".sogamo_widget_footer").find("#filter_apply").removeClass("silverBorder").addClass("bluishBtn").removeAttr("disabled");
    }
    
    filterset();
}

function filterset(){   
        var game = "", date = "", age = "", gender = "", country = "", city = "", name = "", lastseen = "", signup = "";
        if(_game[0].length != 0 && _game[0] != undefined){ game = "1:" + _game[0].join(","); }
        if(_game[1].length != 0 && _game[1] != undefined){ if(game == "") { game = "2:" + _game[1].join(","); }else{ game += "@2:" + _game[1].join(","); } }
        if(_game[2].length != 0 && _game[2] != undefined){ if(game == "") { game = "3:" + _game[2].join(","); }else{ game += "@3:" + _game[2].join(","); } }

        if(_date[0].length != 0 && _date[0] != undefined){ date = "1:" + _date[0].join(","); }
        if(_date[1].length != 0 && _date[0] != undefined){ if(date == "") { date = "2:" + _date[1].join("/"); }else{ date += "@2:" + _date[1].join("/"); } }
        if(_date[2].length != 0 && _date[0] != undefined){ if(date == "") { date = "3:" + _date[2].join(","); }else{ date += "@3:" + _date[2].join(","); } }
        
        if(_age[0].length != 0 && _age[0] != undefined){ age = "1:" + _age[0].join(","); }
        if(_age[1].length != 0 && _age[1] != undefined){ if(age == "") { age = "2:" + _age[1].join("/"); }else{ age += "@2:" + _age[1].join("/"); } }
        if(_age[2].length != 0 && _age[2] != undefined){ if(age == "") { age = "3:" + _age[2].join(","); }else{ age += "@3:" + _age[2].join(","); } }
        if(_age[3].length != 0 && _age[3] != undefined){ if(age == "") { age = "4:" + _age[3].join("/"); }else{ age += "@4:" + _age[3].join("/"); } }
        
        if(_gender[0].length != 0 && _gender[0] != undefined){ gender = "1:" + _gender[0].join(","); }
        if(_gender[1].length != 0 && _gender[1] != undefined){ if(gender == "") { gender = "2:" + _gender[1].join(","); }else{ gender += "@2:" + _gender[1].join(","); } }
        
        if(_country[0].length != 0 && _country[0] != undefined){ country = "1:" + _country[0].join(","); }
        if(_country[1].length != 0 && _country[1] != undefined){ if(country == "") { country = "2:" + _country[1].join(","); }else{ country += "@2:" + _country[1].join(","); } }
        
        if(_city[0].length != 0 && _city[0] != undefined){ city = "1:" + _city[0].join(","); }
        if(_city[1].length != 0 && _city[1] != undefined){ if(city == "") { city = "2:" + _city[1].join(","); }else{ city += "@2:" + _city[1].join(","); } }
        if(_city[2].length != 0 && _city[2] != undefined){ if(city == "") { city = "3:" + _city[2].join(","); }else{ city += "@3:" + _city[2].join(","); } }
        if(_city[3].length != 0 && _city[3] != undefined){ if(city == "") { city = "4:" + _city[3].join(","); }else{ city += "@4:" + _city[3].join(","); } }
        if(_city[4].length != 0 && _city[4] != undefined){ if(city == "") { city = "5:" + _city[4].join(","); }else{ city += "@5:" + _city[4].join(","); } }

        //if(_lastseen[0].length != 0 && _lastseen[0] != undefined){ lastseen = "1:" + _lastseen[0]; }
        //if(_lastseen[1].length != 0 && _lastseen[1] != undefined){ if(lastseen == "") { lastseen = "2:" + _lastseen[1].join(","); }else{ lastseen += "@2:" + _lastseen[1].join(","); } }
        //if(_lastseen[2].length != 0 && _lastseen[2] != undefined){ if(lastseen == "") { lastseen = "3:" + _lastseen[2].join("/"); }else{ lastseen += "@3:" + _lastseen[2].join("/"); } }
        //if(_lastseen[3].length != 0 && _lastseen[3] != undefined){ if(lastseen == "") { lastseen = "4:" + _lastseen[3]; }else{ lastseen += "@4:" + _lastseen[3]; } }
        
        if(_signup[0].length != 0 && _signup[0] != undefined){ signup = "1:" + _signup[0]; }
        if(_signup[1].length != 0 && _signup[1] != undefined){ if(signup == "") { signup = "2:" + _signup[1].join(","); }else{ signup += "@2:" + _signup[1].join(","); } }
        if(_signup[2].length != 0 && _signup[2] != undefined){ if(signup == "") { signup = "3:" + _signup[2].join("/"); }else{ signup += "@3:" + _signup[2].join("/"); } }
        if(_signup[3].length != 0 && _signup[3] != undefined){ if(signup == "") { signup = "4:" + _signup[3]; }else{ signup += "@4:" + _signup[3]; } }
       
        if(!$("#tempurlvalue").length) $("body").append('<input id="tempurlvalue" type="hidden"></input>');
        
        if(window.location.pathname == "/playerActions"){      
           if(date == "") date = "3:4";
           $("#tempurlvalue").val("gameId="+game+"&age="+age+"&country="+country+"&gender="+gender+"&daterange="+date);  
           //applyActionFilter();
        }else if(window.location.pathname == "/sendMessage"){
            if(date == "") date = "3:4";
            $("#tempurlvalue").val("id="+game+"&age="+age+"&country="+country+"&gender="+gender+"&name="+name+"&email=&city="+city+"&showNumber=100&signupDateRange="+signup+"&lastSeen="+lastseen);            
            //loadtabledata("");    
        }else if(window.location.pathname == "/streetReport"){
            if(date == "") date = "3:4";
            $("#tempurlvalue").val("gameId="+game+"&age="+age+"&gender="+gender+"&daterange="+date+"&city="+city+"&country="+country);              
        }else if(window.location.pathname == "/shopReport"){
            if(date == "") date = "3:4";
            $("#tempurlvalue").val("gameId="+game+"&age="+age+"&gender="+gender+"&daterange="+date+"&city="+city+"&country="+country);    
        }else if(window.location.pathname == "/costumeReport"){
            if(date == "") date = "3:6";
            $("#tempurlvalue").val("gameId="+game+"&age="+age+"&gender="+gender+"&daterange="+date+"&city="+city+"&country="+country);    
        }else if(window.location.pathname == "/cohortAnalysis"){  
            $("#tempurlvalue").val("id="+game+"&age="+age+"&country="+country+"&city="+city+"&gender="+gender+"&signupDateRange="+signup+"&lastSeen="+lastseen+"&daterange="+date.substring(2)); 
            //console.log("&daterange="+date.substring(2));
        }else{
            if(date == "") date = "3:7";
            $("#tempurlvalue").val("id="+game+"&age="+age+"&country="+country+"&gender="+gender+"&daterange="+date+"&sign=");
        }
}

function cancelFilter() {
    $("#addt_filters").empty();
    $('#first_filter').val(0);
}
function removeFilter(id) { 
    if(window.location.pathname == "/cohortAnalysis"){  
         if(loadingStatus == 1){ 
            alert("Loading data. Please wait..");
            return false;
         }
    }
    
    var arr, i = id.split("-");        
    if($("#"+id).parents().eq(2).children().length == 1){
        $("#"+id).parents().eq(2).remove(); 
    }else{
        $("#"+id).parent().parent().remove();   
    }     
    
    if(i[0] == "gai") arr = _game[0];  
    if(i[0] == "gain") arr = _game[1]; 
    if(i[0] == "gac") arr = _game[2];             

    if(i[0] == "ni") arr = _name[0]; 
    if(i[0] == "nin") arr = _name[1]; 
    if(i[0] == "nsw") arr = _name[2]; 
    if(i[0] == "new") arr = _name[3]; 
    if(i[0] == "nc") arr = _name[4]; 

    if(i[0] == "ci") arr = _city[0]; 
    if(i[0] == "cin") arr = _city[1]; 
    if(i[0] == "csw") arr = _city[2]; 
    if(i[0] == "cew") arr = _city[3]; 
    if(i[0] == "cc") arr = _city[4];

    if(i[0] == "di") { arr = _date[0]; i[1] = id.substring(3); }
    if(i[0] == "dri") { arr = _date[1]; i[1] = id.replace("to",",").substring(4); }
    if(i[0] == "dc") arr = _date[2]; 

    if(i[0] == "ai") arr = _age[0]; 
    if(i[0] == "ari") {arr = _age[1]; i[1] = i[1]+","+i[2]; }
    if(i[0] == "ain") arr = _age[2]; 
    if(i[0] == "arin") {arr = _age[3]; i[1] = i[1]+","+i[2];}

    if(i[0] == "gi") arr = _gender[0]; 
    if(i[0] == "gin") arr = _gender[1]; 

    if(i[0] == "coi") arr = _country[0]; 
    if(i[0] == "coin") arr = _country[1]; 
    
    //if(i[0] == "lsa") { arr = _lastseen[0]; i[1] = i[1].replace("sep","/");}
    //if(i[0] == "lso") { arr = _lastseen[1]; i[1] = id.substring(4); }
    //if(i[0] == "lsri") { arr = _lastseen[2]; i[1] = id.replace("to",",").substring(5); }
    //if(i[0] == "lsc") arr = _lastseen[3]; 
    
    if(i[0] == "sua") { arr = _signup[0]; i[1] = i[1].replace("sep","/");}
    if(i[0] == "suo") { arr = _signup[1]; i[1] = id.substring(4); }
    if(i[0] == "suri") { arr = _signup[2]; i[1] = id.replace("to",",").substring(5); }
    if(i[0] == "suc") arr = _signup[3]; 
    
    checkandremove(arr, i[1]); 
    if($(".sogamo_widget_body").children().length == 0) { 
        $(".sogamo_widget_body").css("display", "none"); $('#first_filter').val(0).change();        
        defaultUrls();
    }else{
        if($(".sogamo_widget_footer").find("#filter_apply").is(":disabled")){
            $(".sogamo_widget_footer").find("#filter_apply").removeClass("silverBorder").addClass("bluishBtn").removeAttr("disabled");
        }
        filterset();
    }    
}

function getIndiviValue(w){
   if(w == "date") {
       var date = "3:4";
       if(_date[0].length != 0 && _date[0] != undefined){ date = "1:" + _date[0].join(","); }
       if(_date[1].length != 0 && _date[0] != undefined){ if(date == "") { date = "2:" + _date[1].join("/"); }else{ date += "@2:" + _date[1].join("/"); } }
       if(_date[2].length != 0 && _date[0] != undefined){ if(date == "") { date = "3:" + _date[2].join(","); }else{ date += "@3:" + _date[2].join(","); } }
       return date;
   }
}

function getDateRange(){              
       return _date[1][0];   
}

function applyFilterCall(){
     $(".sogamo_widget_footer").find("#filter_apply").removeClass("bluishBtn").addClass("silverBorder").attr("disabled", "true");   
     $("#urlvalue").val($("#tempurlvalue").val());
     if(window.location.pathname == "/playerActions"){         
           applyActionFilter();
     }else if(window.location.pathname == "/sendMessage"){            
           loadtabledata("filter"); 
     }else if(window.location.pathname == "/charts"){          
           applyFilter();   
     }else if(window.location.pathname == "/streetReport"){ 
           applyStreetFilter(); 
     }else if(window.location.pathname == "/shopReport"){          
           applyShopFilter();   
     }else if(window.location.pathname == "/costumeReport"){           
           applyCostumeFilter();    
     }else if(window.location.pathname == "/cohortAnalysis"){          
           if(loadingStatus == 1){            
               $(".sogamo_widget_footer").find("#filter_apply").removeClass("silverBorder").addClass("bluishBtn").removeAttr("disabled");
               alert("Loading data. Please wait..");
           }else{            
               loadCohortData();
           }
     }
      
}

function defaultUrls(){
     if(window.location.pathname == "/playerActions"){           
         $("#urlvalue").val("gameId=&age=&country=&gender=&daterange=3:4"); applyActionFilter();
     }else if(window.location.pathname == "/sendMessage"){  
         $("#urlvalue").val("id=&age=&country=&gender=&name=&email=&city=&showNumber=100&signupDateRange=&lastSeen=");  loadtabledata("filter");    
     }else if(window.location.pathname == "/charts"){  
         $("#urlvalue").val("id=&age=&country=&gender=&daterange=3:7&sign="); applyFilter();    
     }else if(window.location.pathname == "/streetReport"){            
         $("#urlvalue").val("gameId=&age=&gender=&daterange=3:4&city=&country="); applyStreetFilter();  
     }else if(window.location.pathname == "/shopReport"){          
         $("#urlvalue").val("gameId=&age=&gender=&daterange=3:4&city=&country="); applyShopFilter();    
     }else if(window.location.pathname == "/costumeReport"){  
         $("#urlvalue").val("gameId=&age=&gender=&daterange=3:6&city=&country="); applyCostumeFilter(); 
     }else if(window.location.pathname == "/cohortAnalysis"){  
         $("#urlvalue").val("id=&age=&country=&city=&gender=&signupDateRange=&lastSeen=&daterange="); loadCohortData(); 
     }   
     $(".sogamo_widget_footer").find("#filter_apply").removeClass("bluishBtn").addClass("silverBorder").attr("disabled", "true");
}

jQuery(document).ready(function() {
    $(".sogamo_widget_footer").on("click", "#filter_apply", function(event){
        applyFilterCall();
    });
});

