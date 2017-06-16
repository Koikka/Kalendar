/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    data: null,
    nfcOn: false,
    dayWeek: 'day',
    xDown: null,
    yDown: null,
    visibleday: '',
    canswipe: true,
    positiondisplay: true,
    positionCounter: 0,
    hammertime: null,

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // document.addEventListener('DOMContentLoaded', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        setInterval(function() {
            // app.showTime();
            app.showTimeNew();
            console.log('time updated');
        }, 2000);


        console.log('deviceready');
        document.addEventListener("resume", app.onResume, false);
        document.addEventListener("pause", app.onPause, false);
        var slotSize = 340/2;//60 + $('.line').height();
        var slot = $('#first').val()-1;
        $('.data').css({'top': 'calc(('+slotSize+'px * '+slot+')'});
        $("#first").change(function () {
            slot = $('#first').val()-1;
            $('.data').css({'top': 'calc(('+slotSize+'px * '+slot+')'});
        });
        window.onresize = function(event) {
            for (var i = 0; i < 7; i++) {
                $('.day_column')[i].css({'width': $('.day_column_data')[i].width()+'px'});
            }
            // $('.day_column').css({'width': $('.day_column_data').width()+'px'});
            $('.time_column').css({'width': $('.time_column_data').width()+'px'});
        };
        var lastScrollLeft = 0;
        var lastScrollTop = 0;
        $(window).scroll(function(event) {
            var sl = $(this).scrollLeft();
            var st = $(this).scrollTop();
            if (sl > lastScrollLeft){
               // downscroll code
               // console.log('right');
               $('#times').css({'left': sl+16+'px'});
            } else if (sl < lastScrollLeft) {
              // upscroll code
              // console.log('left');
              $('#times').css({'left': sl+16+'px'});
            }
            // if () {
                // console.log('up/down:');
                $('.titles').css({'top': st+'px'});
            // }
            lastScrollLeft = sl;
        });
        var voicelist = responsiveVoice.getVoices();
        // console.log(voicelist);
        // app.showTime();
        // app.showTimeNew();
        app.redytonfc();
    },
    onPause: function() {
        // if (!app.nfcOn)
            // app.logout();
    },
    onResume: function() {
        setTimeout(function() {
          // TODO: do your thing!
          // if (!app.nfcOn)
            // window.location.reload();
        }, 100);
    },
    drawdate: function(w, key) {
        // $('.date')[w].append(key);
        $('.date'+w).append(key);
    },

    makeItem: function(day, style, start, end, action, responsible, hour, minute, tag, date) {
        console.log(day +" - "+ action);
        var color = "";
        if (tag == 'RTULO' || tag == 'RKUNTO' || tag == 'RULKO' || tag == 'RPSYKO' || tag == 'RTOIMI') {
            // sininen
            // color = '#00B0CA';
            color = '#8ff1ff';
        } else if (tag == 'TULOHAAS') {
            // keltainen
            // color = '#ffd500';
            color = '#ffec89';
        } else if (tag == 'LOUNAS' || tag == 'VAPAINFO') {
            // valkoinen
            color = '#fbfbfb';
        } else {
            // vihreä default
            color = '#48dc82';
        }
        var ms = moment(end,"HH:mm").diff(moment(start,"HH:mm"));
        var d = moment.duration(ms);

        var h = ((parseFloat(d*1.0)/1000)/3600)*(340/2);
        // var string_date = date+' '+hour+':'+minute;
        var string_date = date+' '+end;
        var d1 = Date.parse(moment().format('YYYY-MM-DD HH:mm'));
        var d2 = Date.parse(string_date);
        if (d1 < d2) {
            $(day).append('<div class="data" style="'+style+' height: '+h+'px; background-color: '+color+'"><span class="startItem">'+start+' - '+end+'</span><br /><span class="actionItem">'+action+'</span><br /><span class="responsibleItem">'+(typeof responsible.name == 'undefined' ? "" : responsible.name+", ")+'<i>'+(typeof responsible.profession == 'undefined' ? "" : responsible.profession)+'</i></span><br /><img src="./img/speaker_but.png" width="30px" height="30px" onclick="$(\'#curtain\').css(\'display\', \'block\'); responsiveVoice.speak(\'Kello '+hour+' '+minute+' . '+action+'\', \'Finnish Female\', {volume: 1});" style="float: right; margin-right: 4px; margin-bottom: 2px;" /></div>');
        } else {
            $(day).append('<div class="data" style="'+style+' height: '+h+'px; background-color: '+color+'; opacity: 0.3;"><span class="startItem">'+start+' - '+end+'</span><br /><span class="actionItem">'+action+'</span><br /><span class="responsibleItem">'+(typeof responsible.name == 'undefined' ? "" : responsible.name+", ")+'<i>'+(typeof responsible.profession == 'undefined' ? "" : responsible.profession)+'</i></span><br /><img src="./img/speaker_but.png" width="30px" height="30px" onclick="$(\'#curtain\').css(\'display\', \'block\'); responsiveVoice.speak(\'Kello '+hour+' '+minute+' . '+action+'\', \'Finnish Female\', {volume: 1});" style="float: right; margin-right: 4px; margin-bottom: 2px;" /></div>');
        }


    },
    ajax: function(id_no) {
        app.nfcOn = false;
        $('.date').empty();
        var weekDay = ["#mo", "#tu", "#we", "#th", "#fr", "#sa", "#su"];
        // var d = new Date();
        // var currentDay = weekDay[d.getDay()-1];
        var currentDay = "#"+moment().format("dd").toLowerCase();
        /*var index = weekDay.indexOf(currentDay);
        weekDay = weekDay.filter(function(item) {
            return item !== currentDay
        });*/
        // app.stopNFC();
        // OLD AJAX CALL
        /*$.ajax({
            method: "GET",
            url: "http://198.61.227.138/Webdemohealth/Calendar",
            data: { id: id_no}
        }).done(function( msg ) {
            // console.log(msg);
            app.data = msg;
            // console.log(msg.calname);
            var days = [];
            $.each( msg, function( key, value ) {
                // console.log(key);
                if (key=='calname') {
                    app.calowner = value;
                    alert("Welcome "+app.calowner+"!");
                } else {
                    days.push(key);
                }
            });
            // Days are in right order! Print calendar.
            for (var i = 0; i < days.length; i++) {
                app.setData(msg[days[i]], i, days[i]);
            }
        });*/
        // NEW AJAX CALL
        // YYYY-MM-DD
        // http://koikka.work/kuntke/calendar_api.php?method=get_calendar&id=010101-0101&start=2017-11-14&end=2017-11-24

        // id_no = '010101-0101';
        $('#curtain').css('display', 'block');
        $.ajax({
            method: "GET",
            url: "http://koikka.work/kuntke/calendar_api.php",
            data: { method: "get_calendar", id: id_no, start: moment(moment().isoWeekday(1)._d).format('YYYY-MM-DD'), end: moment(moment().isoWeekday(7)._d).format('YYYY-MM-DD')},
            // data: { method: "get_calendar", id: '010101-0101', start: '2017-11-14', end: '2017-11-24'},
            cache: false,
            dataType: "json"
        }).done(function( msg ) {
            // console.log(msg);
            app.data = msg;
            // console.log(msg.calname);
            var days = [];
            $.each( msg, function( key, value ) {
                console.log(key);
                console.log(value);
                if (key=='calname') {
                    app.calowner = value;
                    $('#elementToFadeInAndOut p').empty();
                    $('#elementToFadeInAndOut h3').empty();
                    $('#elementToFadeInAndOut p').append("Tervetuloa "+app.calowner+"!");
                    $("#elementToFadeInAndOut").fadeIn(500);
                    setTimeout(function() {
                        $("#elementToFadeInAndOut").fadeOut(500);
                        app.canswipe = true;
                    }, 3000);
                    // alert("Tervetuloa "+app.calowner+"!");

                } else {
                    days.push(key);
                }
            });
            // Days are in right order! Print calendar.
            for (var i = 0; i < days.length; i++) {
                console.log(msg[days[i]] + ' - ' + days[i]);
                if (days[i] == moment(moment().isoWeekday(1)._d).format('YYYY-MM-DD')) {
                    if (typeof msg[days[i]] != "undefined")
                        app.setData(msg[days[i]], 0, days[i]);
                } else if (days[i] == moment(moment().isoWeekday(2)._d).format('YYYY-MM-DD')) {
                    if (typeof msg[days[i]] != "undefined")
                        app.setData(msg[days[i]], 1, days[i]);
                } else if (days[i] == moment(moment().isoWeekday(3)._d).format('YYYY-MM-DD')) {
                    if (typeof msg[days[i]] != "undefined")
                        app.setData(msg[days[i]], 2, days[i]);
                } else if (days[i] == moment(moment().isoWeekday(4)._d).format('YYYY-MM-DD')) {
                    if (typeof msg[days[i]] != "undefined")
                        app.setData(msg[days[i]], 3, days[i]);
                } else if (days[i] == moment(moment().isoWeekday(5)._d).format('YYYY-MM-DD')) {
                    if (typeof msg[days[i]] != "undefined")
                        app.setData(msg[days[i]], 4, days[i]);
                } else if (days[i] == moment(moment().isoWeekday(6)._d).format('YYYY-MM-DD')) {
                    if (typeof msg[days[i]] != "undefined")
                        app.setData(msg[days[i]], 5, days[i]);
                } else if (days[i] == moment(moment().isoWeekday(7)._d).format('YYYY-MM-DD')) {
                    if (typeof msg[days[i]] != "undefined")
                        app.setData(msg[days[i]], 6, days[i]);
                }
            }
        });

        if (document.getElementById('dayview').checked) {
            app.dayWeek = 'day';
            // $('#dayinfo').css({'overflow-x': 'hidden !important'});
            // currentDay = '#mo';
            // document.addEventListener('touchstart', app.handleTouchStart, false);
            // document.addEventListener('touchmove', app.handleTouchMove, false);

            app.hammertime.set({ enable: true });

            for (var i = 0; i < weekDay.length; i++) {
                if (weekDay[i] == currentDay) {
                    $('#dayinfo').append('<div id="'+currentDay.split('#')[1]+'"></div>');
                    app.visibleday = currentDay;
                } else {
                    $('#dayinfo').append('<div id="'+weekDay[i].split('#')[1]+'" style="display: none;"></div>');
                }
            }
            $('#daytime').css('padding-top', '60px');
            $('#login').css({'display': 'none'});
            $('#app').css({'display': 'block'});
            $('#day').css({'display': 'block'});
            $('#app').css({'min-width': '100%', 'height':'100%'});
            app.dayWeek = 'day';
        } else {
            app.visibleday = currentDay;
            app.dayWeek = 'week';
            $(currentDay).append('<div id="clockW"></div>');
            $('#login').css({'display': 'none'});
            $('#app').css({'display': 'block'});
            $('#week').css({'display': 'block'});
            $('#app').css({'min-width': '1024px', 'height':'1190px'});
        }
        app.drawHourLine();
        for (var i = 0; i < 7; i++) {
            app.drawdate(i, moment(moment().isoWeekday(i+1)._d).format('DD.MM.YYYY'));
        }
        app.moveToCurrentPosition();
    },
    sort: function (a) {
        var swapped;
        do {
            swapped = false;
            for (var i=0; i < a.length-1; i++) {
                if (a[i] > a[i+1]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return a;
    },
    setData: function(value, w, key) {
        var slotSize = 340/2;
        if (w == 0) {
            // Monday
            // app.drawdate(w, key);
            for (var i = 0; i < value.length; i++) {
                var slot = parseInt(value[i].start);
                if (!isNaN(slot)) {
                    var hour = slot;
                    var specify = value[i].start.split(":")[1];
                    var minute = specify;
                    var style = "";

                    var getSlot = ['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
                    var z = 0;
                    if (hour >= 8 && hour <= 22) {
                        z = getSlot.indexOf(hour.toString());
                    } else {
                        z = -1;
                    }
                    if (app.dayWeek == 'day') {

                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize*slot+'px + 60px - '+parseInt(2+z)+'px); width: calc(100% - 60px);';
                    } else {
                        // slot = app.setPositionAccordingToTime(slot, specify);
                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize+'px * '+slot+' - '+parseInt(2+z)+'px);';
                    }

                    app.makeItem("#mo", style, value[i].start, value[i].end, value[i].action_general, value[i].responsible, hour, minute, value[i].action, key);
                }
            }
        } else if (w == 1) {
            // Tuesday
            // app.drawdate(w, key);
            for (var i = 0; i < value.length; i++) {
                var slot = parseInt(value[i].start);
                if (!isNaN(slot)) {
                    var hour = slot;
                    var specify = value[i].start.split(":")[1];
                    var minute = specify;
                    var style = "";

                    var getSlot = ['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
                    var z = 0;
                    if (hour >= 8 && hour <= 22) {
                        z = getSlot.indexOf(hour.toString());
                    } else {
                        z = -1;
                    }
                    if (app.dayWeek == 'day') {

                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize*slot+'px + 60px - '+parseInt(2+z)+'px); width: calc(100% - 60px);';
                    } else {
                        // slot = app.setPositionAccordingToTime(slot, specify);
                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize+'px * '+slot+' - '+parseInt(2+z)+'px);';
                    }

                    app.makeItem("#tu", style, value[i].start, value[i].end, value[i].action_general, value[i].responsible, hour, minute, value[i].action, key);
                }
            }

        } else if (w == 2) {
            // Wednesday
            // app.drawdate(w, key);
            for (var i = 0; i < value.length; i++) {
                var slot = parseInt(value[i].start);
                if (!isNaN(slot)) {
                    var hour = slot;
                    var specify = value[i].start.split(":")[1];
                    var minute = specify;
                    var style = "";

                    var getSlot = ['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
                    var z = 0;
                    if (hour >= 8 && hour <= 22) {
                        z = getSlot.indexOf(hour.toString());
                    } else {
                        z = -1;
                    }
                    if (app.dayWeek == 'day') {

                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize*slot+'px + 60px - '+parseInt(2+z)+'px); width: calc(100% - 60px);';
                    } else {
                        // slot = app.setPositionAccordingToTime(slot, specify);
                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize+'px * '+slot+' - '+parseInt(2+z)+'px);';
                    }

                    app.makeItem("#we", style, value[i].start, value[i].end, value[i].action_general, value[i].responsible, hour, minute, value[i].action, key);
                }
            }

        } else if (w == 3) {
            // Thursday
            // app.drawdate(w, key);
            for (var i = 0; i < value.length; i++) {
                var slot = parseInt(value[i].start);
                if (!isNaN(slot)) {
                    var hour = slot;
                    var specify = value[i].start.split(":")[1];
                    var minute = specify;
                    var style = "";

                    var getSlot = ['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
                    var z = 0;
                    if (hour >= 8 && hour <= 22) {
                        z = getSlot.indexOf(hour.toString());
                    } else {
                        z = -1;
                    }
                    if (app.dayWeek == 'day') {

                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize*slot+'px + 60px - '+parseInt(2+z)+'px); width: calc(100% - 60px);';
                    } else {
                        // slot = app.setPositionAccordingToTime(slot, specify);
                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize+'px * '+slot+' - '+parseInt(2+z)+'px);';
                    }

                    app.makeItem("#th", style, value[i].start, value[i].end, value[i].action_general, value[i].responsible, hour, minute, value[i].action, key);
                }
            }

        } else if (w == 4) {
            // Friday
            // app.drawdate(w, key);
            for (var i = 0; i < value.length; i++) {
                var slot = parseInt(value[i].start);
                if (!isNaN(slot)) {
                    var hour = slot;
                    var specify = value[i].start.split(":")[1];
                    var minute = specify;
                    var style = "";

                    var getSlot = ['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
                    var z = 0;
                    if (hour >= 8 && hour <= 22) {
                        z = getSlot.indexOf(hour.toString());
                    } else {
                        z = -1;
                    }
                    if (app.dayWeek == 'day') {

                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize*slot+'px + 60px - '+parseInt(2+z)+'px); width: calc(100% - 60px);';
                    } else {
                        // slot = app.setPositionAccordingToTime(slot, specify);
                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize+'px * '+slot+' - '+parseInt(2+z)+'px);';
                    }

                    app.makeItem("#fr", style, value[i].start, value[i].end, value[i].action_general, value[i].responsible, hour, minute, value[i].action, key);
                }
            }

        } else if (w == 5) {
            // Saturday
            // app.drawdate(w, key);
            for (var i = 0; i < value.length; i++) {
                var slot = parseInt(value[i].start);
                if (!isNaN(slot)) {
                    var hour = slot;
                    var specify = value[i].start.split(":")[1];
                    var minute = specify;
                    var style = "";

                    var getSlot = ['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
                    var z = 0;
                    if (hour >= 8 && hour <= 22) {
                        z = getSlot.indexOf(hour.toString());
                    } else {
                        z = -1;
                    }
                    if (app.dayWeek == 'day') {

                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize*slot+'px + 60px - '+parseInt(2+z)+'px); width: calc(100% - 60px);';
                    } else {
                        // slot = app.setPositionAccordingToTime(slot, specify);
                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize+'px * '+slot+' - '+parseInt(2+z)+'px);';
                    }

                    app.makeItem("#sa", style, value[i].start, value[i].end, value[i].action_general, value[i].responsible, hour, minute, value[i].action, key);
                }
            }

        } else if (w == 6) {
            // Sunday
            // app.drawdate(w, key);
            for (var i = 0; i < value.length; i++) {
                var slot = parseInt(value[i].start);
                if (!isNaN(slot)) {
                    var hour = slot;
                    var specify = value[i].start.split(":")[1];
                    var minute = specify;
                    var style = "";

                    var getSlot = ['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
                    var z = 0;
                    if (hour >= 8 && hour <= 22) {
                        z = getSlot.indexOf(hour.toString());
                    } else {
                        z = -1;
                    }
                    if (app.dayWeek == 'day') {

                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize*slot+'px + 60px - '+parseInt(2+z)+'px); width: calc(100% - 60px);';
                    } else {
                        // slot = app.setPositionAccordingToTime(slot, specify);
                        slot = app.setClockPosition(slot, specify);
                        style = 'top: calc('+slotSize+'px * '+slot+' - '+parseInt(2+z)+'px);';
                    }

                    app.makeItem("#su", style, value[i].start, value[i].end, value[i].action_general, value[i].responsible, hour, minute, value[i].action, key);
                }
            }

        } else {
            alert('false day');
        }
    },
    replaceAll: function(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    },
    setPositionAccordingToTime: function(slotOld, specify) {
        var getSlot = ['8','10','12','14','16','18','20','22'];
        var slot;
        if (getSlot.indexOf(slotOld.toString()) < 0) {
            var modif = slotOld - 1;
            slot = getSlot.indexOf(modif.toString());
        } else {
            slot = getSlot.indexOf(slotOld.toString());
        }
        if (slot < 0) {
            slot = 0;
        }

        var minadd = (specify*0.83333)/100;
        slot += minadd;

        if (slotOld % 2 > 0) {
            slot += 0.5
        }

        return slot;
    },
    setClockPosition: function(slotOld, specify) {
        var getSlot = ['8','9','10','11','12','13','14','15','16','17','18','19','20','21','22'];
        var slot;
        if (slotOld >= 8 && slotOld <= 22) {
            slot = getSlot.indexOf(slotOld.toString());
        } else {
            slot = 0;
            specify = 0;
        }
        var minadd = (specify*1.66667)/100;
        slot += minadd;
        // if (slotOld % 2 > 0) {
        //     slot += 0.5
        // }

        return slot;
    },
    redytonfc: function() {
        // document.addEventListener("resume", window.location.reload(), false);
        nfc.addTagDiscoveredListener(function (nfcEvent) {
            app.nfcOn = true;
            // app.stopNFC();
            console.log("discovered");
            var hex = nfc.bytesToHexString(nfcEvent.tag.id);
            console.log(hex);
            $('.date').empty();
            app.ajax(hex);
            // if (hex == "044ddbf2bc2b80") {
            //     // $('#login').css({'display': 'none'});
            //     // $('#app').css({'display': 'block'});
            //     app.ajax(12567890);
            // } else if (hex == "04f1e60abd2b80") {
            //     // $('#login').css({'display': 'none'});
            //     // $('#app').css({'display': 'block'});
            //     app.ajax(12312345);
            // } else {
            //     alert("I do not know you!");
            // }
            // console.log(JSON.stringify(nfcEvent));
        }, function () {
            console.log("Discovering NFC Messages.");
        },
        function (error) {
            console.log("Failed to discover NDEF.");
        });
    },
    stopNFC: function() {
        nfc.removeTagDiscoveredListener(function(e){
            console.log("Stop NFC");
        }, function() {
            console.log("[onSuccess]");
        }, function() {
            console.log("[onFailure]");
        });
    },
    logout: function() {
        $('#elementToFadeInAndOut h3').empty();
        $('#elementToFadeInAndOut p').empty();
        $('#elementToFadeInAndOut p').append("Yhteys suljettu.");
        $("#elementToFadeInAndOut").fadeIn(500);
        setTimeout(function() {
            $("#elementToFadeInAndOut").fadeOut(500);
            app.canswipe = true;
        }, 3000);
        // alert("Logout");
        app.positiondisplay = true;
        app.positionCounter = 0;
        if (app.dayWeek == 'week') {
            var weekDay = ["#mo", "#tu", "#we", "#th", "#fr", "#sa", "#su"];
            for (var i = 0; i < weekDay.length; i++) {
                $(weekDay[i]).empty();
            }
        }
        // $('#dayinfo').empty();
        if (app.dayWeek == 'day') {
            $('#daytime').css('padding-top', '0px');
            $('#dayinfo').empty();
            $('#dayinfo').append("<div id='clockD'></div>");
            // document.removeEventListener('touchstart', app.handleTouchStart, false);
            // document.removeEventListener('touchmove', app.handleTouchMove, false);
            app.hammertime.set({ enable: true });
        }
        $('#app').css({'display': 'none'});
        $('#login').css({'display': 'block'});
        $('#day').css({'display': 'none'});
        $('#week').css({'display': 'none'});
        $('.data').remove();
        // app.redytonfc();
    },
    showTime: function() {
        navigator.globalization.dateToString(new Date(), function(date) {
            date.value;
            console.log(date.value);
            // day = date.value.split("/");
            // 3/17/17 14:27
            var day = date.value
            var localLocale = moment();
            localLocale.locale('fi'); // set this instance to use French
            /*
                moment.locale();         // fi
                moment().format('LT');   // 09.39
                moment().format('LTS');  // 09.39.03
                moment().format('L');    // 26.05.2017
                moment().format('l');    // 26.5.2017
                moment().format('LL');   // 26. toukokuuta 2017
                moment().format('ll');   // 26. touko 2017
                moment().format('LLL');  // 26. toukokuuta 2017, klo 09.39
                moment().format('lll');  // 26. touko 2017, klo 09.39
                moment().format('LLLL'); // perjantai, 26. toukokuuta 2017, klo 09.39
                moment().format('llll'); // pe, 26. touko 2017, klo 09.39
             */

            localLocale.format('LLLL');
            moment().format('LLLL');
            console.log("localLocale.format('LLLL'): "+localLocale.format('LLLL'));
            console.log("moment().format('LLLL'): "+moment().format('LLLL'));
            console.log("moment().get('hour'): "+moment().get('hour'));
            console.log("moment().get('minute'): "+moment().get('minute'));

            $('#dateinfo').empty();
            $('#dateinfo').append(localLocale.format('LLLL'));
            var hour = "";
            var minute = "";
            if (day.includes(":")) {
                hour = day.split(" ")[1].split(":")[0];
                minute = day.split(" ")[1].split(":")[1];
            }
            if (day.includes(".")) {
                hour = day.split(" ")[1].split(".")[0];
                minute = day.split(" ")[1].split(".")[1];
            }

            var slotSize = 340/2;
            var id = "";
            if (app.dayWeek == 'day') {
                id = '#clockD';
                var timeposi = app.setClockPosition(hour, minute);
                slotSize = (slotSize * timeposi)+60;
            } else {
                id = '#clockW';
                // var timeposi = app.setPositionAccordingToTime(hour, minute);
                var timeposi = app.setClockPosition(hour, minute);
                slotSize = (slotSize * timeposi);
            }



            var style = 'top: calc('+slotSize+'px)'
            console.log("1: "+style);
            console.log(slotSize);

            $(id).css({'top': slotSize+'px'});
        }, function() { console.log('errorCallback'); }, {formatLength:'short', selector:'date and time'});
    },
    showTimeNew: function() {
        var localLocale = moment();
        localLocale.locale('fi');
            /*
            moment.locale();         // fi
            moment().format('LT');   // 09.39
            moment().format('LTS');  // 09.39.03
            moment().format('L');    // 26.05.2017
            moment().format('l');    // 26.5.2017
            moment().format('LL');   // 26. toukokuuta 2017
            moment().format('ll');   // 26. touko 2017
            moment().format('LLL');  // 26. toukokuuta 2017, klo 09.39
            moment().format('lll');  // 26. touko 2017, klo 09.39
            moment().format('LLLL'); // perjantai, 26. toukokuuta 2017, klo 09.39
            moment().format('llll'); // pe, 26. touko 2017, klo 09.39
            */

        $('#dateinfo').empty();
        // $('#dateinfo').append(localLocale.format('LLLL'));
        if (app.visibleday == "#"+moment().format("dd").toLowerCase()) {
            $('#dateinfo').append(localLocale.format('L')+"  klo:"+localLocale.format('LT'));
            $('#dateinfo').css('background-color', '#00B0CA');
        } else {
            $('#dateinfo').css('background-color', 'rgba(0,176,202,0.25)');
            var weekDay = ["#mo", "#tu", "#we", "#th", "#fr", "#sa", "#su"];
            var index = weekDay.indexOf(app.visibleday);
            var displaydate = moment(moment().isoWeekday(index+1)._d).format('DD.MM.YYYY');
            $('#dateinfo').append(displaydate+" klo:"+localLocale.format('LT'));
        }
        // $('#dateinfo').append(localLocale.format('L')+"  klo:"+localLocale.format('LT'));
        var hour = moment().get('hour');
        var minute = moment().get('minute');

        var slotSize = 340/2;
        var id = "";
        if (app.dayWeek == 'day') {
            id = '#clockD';
            var timeposi = app.setClockPosition(hour, minute);
            slotSize = (slotSize * timeposi)+60;
        } else {
            id = '#clockW';
            // var timeposi = app.setPositionAccordingToTime(hour, minute);
            var timeposi = app.setClockPosition(hour, minute);
            slotSize = (slotSize * timeposi);
        }

        // This is first day of the week
        moment(moment().format().slice(0, -9)).startOf('isoWeek')._d;
        moment().isoWeekday(1)._d;
        moment(moment().isoWeekday(1)._d).format('DD.MM.YYYY');
        // This is last day of the week
        moment().isoWeekday(7)._d;


        var style = 'top: calc('+slotSize+'px)'

        $(id).css({'top': slotSize+'px'});
    },
    moveToCurrentPosition: function() {
        setTimeout(function() {
            if (app.positiondisplay) {
                if (app.dayWeek == 'week') {
                    $('html, body').animate({
                        scrollTop: $("#clockW").offset().top - (window.screen.height/2),
                        scrollLeft: $(app.visibleday).position().left - (window.screen.width/2)
                    }, 1000);
                    // $('html, body').animate({scrollLeft: $(app.visibleday).position().left}, 1000);
                }
                if (app.dayWeek == 'day') {
                    $('html, body').animate({
                        scrollTop: $("#clockD").offset().top - (window.screen.height/2)
                    }, 1000);
                }
            }
            $('#curtain').css('display', 'none');
        }, 3000);
        // if (app.positionCounter <= 2) {
        //     app.positiondisplay = false;
        // } else {
        //     app.positionCounter++;
        // }
    },
    drawHourLine: function() {
        var slotSize = 340/2;
        var weekDay;

        // if (app.dayWeek == 'day') {
            // weekDay = ["#"+moment().format("dd").toLowerCase()];
        // } else {
           weekDay = ["#mo", "#tu", "#we", "#th", "#fr", "#sa", "#su"];
        // }
        for (var i = 1; i <= 14; i++) {
            var style = "";
            if (app.dayWeek == 'day') {
                var style = 'top: calc('+slotSize*i+'px + 60px - '+parseInt(2+i)+'px); width: calc(100% - 60px);';
            } else {
                var style = 'top: calc('+slotSize*i+'px - '+parseInt(2+i)+'px); width: calc(100%);';
            }
            for (var j = 0; j < weekDay.length; j++) {
                $(weekDay[j]).append('<div class="hour_line" style="'+style+'"></div>');
            }
        }
    },
    handleTouchStart: function(evt) {
        app.xDown = evt.touches[0].clientX;
        app.yDown = evt.touches[0].clientY;
    },
    handleTouchMove: function(evt) {
        if ( ! app.xDown || ! app.yDown ) {
            return;
        }


        var xUp = evt.touches[0].clientX;
        // var yUp = evt.touches[0].clientY;

        var xDiff = app.xDown - xUp;
        // var yDiff = app.yDown - yUp;
        /* reset values */
        app.xDown = null;
        app.yDown = null;


        var weekDay = ["#mo", "#tu", "#we", "#th", "#fr", "#sa", "#su"];
        var weekDaysFin = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"]
        var index = weekDay.indexOf(app.visibleday);
console.log("2: "+xDiff);
        // if (Math.abs(xDiff) > Math.abs(yDiff) && app.canswipe) {/*most significant*/
        if (app.canswipe) {
            if (xDiff > 15) {
                if (app.visibleday != '#su') {
                    console.log(weekDay[index+1]);
                    $(app.visibleday).css('display', 'none');
                    app.visibleday = weekDay[index+1];
                    $(app.visibleday).css('display', 'block');
                    $('#elementToFadeInAndOut h3').empty();
                    $('#elementToFadeInAndOut p').empty();
                    $('#elementToFadeInAndOut h3').append(weekDaysFin[index+1])
                    $("#elementToFadeInAndOut").fadeIn(500);
                    setTimeout(function() {
                        $("#elementToFadeInAndOut").fadeOut(500);
                        app.canswipe = true;
                    }, 3000);
                    app.canswipe = false;
                    // app.fadeIn(document.getElementById('elementToFadeInAndOut'));

                    console.log('/* left swipe */');
                }
            } else if (xDiff < -15) {
                if (app.visibleday != '#mo') {
                    console.log(weekDay[index-1]);
                    $(app.visibleday).css('display', 'none');
                    app.visibleday = weekDay[index-1];
                    $(app.visibleday).css('display', 'block');
                    $('#elementToFadeInAndOut h3').empty();
                    $('#elementToFadeInAndOut p').empty();
                    $('#elementToFadeInAndOut h3').append(weekDaysFin[index-1]);
                    $("#elementToFadeInAndOut").fadeIn(500);
                    setTimeout(function() {
                        $("#elementToFadeInAndOut").fadeOut(500);
                        app.canswipe = true;
                    }, 3000);
                    app.canswipe = false;
                    console.log('/* right swipe */');
                }
            }
        }

    },
    fadeOut: function(element){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    },
    fadeIn: function(element){
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }
};
app.initialize();
















