
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



    var inputBlocks = document.getElementById("inputBlcks");
    var currentDay = document.getElementById("currentDay");
    var hoursinDay = ["5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM", "1AM", "2AM", "3AM", "4AM"]


    function createBlocks(nom) {

       

        var calTable = $("<table>");
        $(calTable).attr("class", "description time-block");

        for (var i = 0; i < hoursinDay.length; i++) {
           

            var trEl = $("<tr>").html(hoursinDay[i]);
            $(trEl).attr("class", "row");
            
            var tdElTime = $("<div>")
            $(tdElTime).attr("class", "hour");

            var tdElInput = $("<input>");
            $(tdElInput).attr("class", "textarea");

            var tdElBtn = $("<button>");
            $(tdElBtn).attr("class", "saveBtn");


            $(calTable).appendTo(inputBlocks);
            $(trEl).appendTo(calTable);
            
            $(tdElTime).appendTo(trEl);

            $(tdElInput).appendTo(trEl);
            $(tdElBtn).appendTo(trEl);


        }

        console.log(hoursinDay)

    }



    createBlocks()


    function addTimeDate () {

        var date = moment().format("MM DD YYYY")
        console.log(date);

        $(currentDay).text(date);

    }


    addTimeDate()

    function timeChange() {

        if (s) {

            //present time
            //change color - red (call class)

        } if (s) {

            // past time
            //change color - gray (present class)

        } else {

            //future time
            //change color - green (future class)
        }


    }


    timeChange()
    
    // -- add on click event for save button and add in details for local storage of the event.

});
