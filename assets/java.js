
//GIVEN I am using a daily planner to create a schedule
// //WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



$(document).ready(function () {


    //Declaring variables for the html.
    var inputBlocks = document.getElementById("inputBlcks");
    var currentDay = document.getElementById("currentDay");
    var currentTime = moment().format("LT");
    var currentMin = moment().format("m");


    //object for times to call later with for loop and localstorage.
    var hoursinDay = [
        {
            time: 8,
            show: "8AM",
        },
        {
            time: 9,
            show: "9AM",
        },
        {
            time: 10,
            show: "10AM",
        },
        {
            time: 11,
            show: "11AM",
        },
        {
            time: 12,
            show: "12PM",
        },
        {
            time: 13,
            show: "1PM",
        },
        {
            time: 14,
            show: "2PM",
        },
        {
            time: 15,
            show: "3PM",
        },
        {
            time: 16,
            show: "4PM",
        },
        {
            time: 17,
            show: "5PM",
        },
        {
            time: 18,
            show: "6PM",
        },
    ];


    var calTable = $("<table>");
    var trEl = $("<tr>");
    var tdElTime = $("<div>");
    var tdElInput = $("<textarea>");
    var tdElBtn = $("<button>");


    console.log(calTable);

    //function creates the blocks and html through a forloop and adding an if/else to change the color of the app when it's past/present/future.

    function createBlocks() {

        calTable = $("<table>");
        $(calTable).attr("class", "description time-block");

        for (var i = 0; i < hoursinDay.length; i++) {

            trEl = $("<tr>");
            tdElTime = $("<div>");
            $(tdElTime).text(hoursinDay[i].show);
            tdElBtn = $("<button>");
            tdElBtn.val(hoursinDay[i].time);
            tdElInput = $("<textarea>");

            $(trEl).attr("class", "row");
            $(tdElTime).attr("class", "hour col-md-2");

            $(tdElInput).attr("class", "description col-md-8");
            $(tdElBtn).attr("class", "saveBtn col-md-2");
            $(tdElInput).attr("id", hoursinDay[i].time);



            $(calTable).appendTo(inputBlocks);
            $(trEl).appendTo(calTable);

            $(tdElTime).appendTo(trEl);

            $(tdElInput).appendTo(trEl);
            $(tdElBtn).appendTo(trEl);


            var plannerHour = moment().hour();


            console.log(plannerHour, hoursinDay[i].time);



            if (plannerHour > hoursinDay[i].time) {

                $(tdElInput).addClass("past");
                //present time
                //change color - gray past

            } else if (plannerHour < hoursinDay[i].time) {

                $(tdElInput).addClass("future");
                // present time
                //change color - green future

            } else {

                $(tdElInput).addClass("present");
                //future time
                //change color - red - present
            }
        }



        console.log(hoursinDay);

    }



    createBlocks();

    //adding date to page.

    function addTimeDate() {

        var date = moment().format("MMMM DD, YYYY");
        console.log(date);



        $(currentDay).text(date);

    }


    addTimeDate();

    //Setting up the save button to store event details added and then store them so they remain after refresh. 

    $("#8").val(localStorage.getItem("8"));
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
    $("#18").val(localStorage.getItem("18"));


    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        console.log("cliked");
        var eventInput = $(event.target).prev("textarea").val();
        var eventTime = $(event.target).val();


        localStorage.setItem(eventTime, eventInput);

        console.log(eventTime);
        console.log(localStorage);

        console.log(eventInput);


    });


});
