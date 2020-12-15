
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
    var currentTime = moment().format("LT");
    
    var currentMin = moment().format("m")



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
            time: 1,
            show: "1PM",
        },
        {
            time: 2,
            show: "2PM",
        },
        {
            time: 3,
            show: "3PM",
        },
        {
            time: 4,
            show: "4PM",
        },
        {
            time: 5,
            show: "5PM",
        },
        {
            time: 6,
            show: "6PM",
        },
        {
            time: 7,
            show: "7PM",
        },
        {
            time: 8,
            show: "8PM",
        },

    ]


    var calTable = $("<table>");
    var trEl = $("<tr>")
    var tdElTime = $("<div>")
    var tdElInput = $("<textarea>");
    var tdElBtn = $("<button>");
    

    console.log(calTable)

   

    function createBlocks() {

        calTable = $("<table>");
        $(calTable).attr("class", "description time-block");

        for (var i = 0; i < hoursinDay.length; i++) {

            trEl = $("<tr>")
            tdElTime = $("<div>")
            $(tdElTime).text(hoursinDay[i].show);
            tdElBtn = $("<button>");
            tdElBtn.val(i);
            tdElInput = $("<textarea>");

            $(trEl).attr("class", "row");
            $(tdElTime).attr("class", "hour col-md-2");
            // var tdElInput = $("<input>");
            $(tdElInput).attr("class", "textarea description col-md-6");
            $(tdElBtn).attr("class", "saveBtn col-md-2");

            var eventInput = localStorage.getItem(hoursinDay[i].show)
            tdElInput.val(eventInput)

            $(calTable).appendTo(inputBlocks);
            $(trEl).appendTo(calTable);
            
            $(tdElTime).appendTo(trEl);

            $(tdElInput).appendTo(trEl);
            $(tdElBtn).appendTo(trEl);

            // var eventInput = localStorage.getItem(hoursinDay[i].show)
            //tdElInput.val(eventInput)
            //console.log(eventInput)
            //timeChange()

            //hoursinDay[i], "H a"
            //var currentTime = moment().format("LT")
            //var currentTime = moment().format("LT");
            //console.log(currentTime)
            var plannerHour = moment().hour()
            
            //var timeDiff = hoursinDay[i].id
    
            //trEl = hoursinDay[i].id
    
                if (plannerHour < hoursinDay[i].time) {
                    

                    $(tdElInput).addClass("past");
                    //present time
                    //change color - gray past
    
                } else if (plannerHour > hoursinDay[i].time) {
    
                    $(tdElInput).addClass("future");
                    // present time
                    //change color - green future
    
                } else {
    
                    $(tdElInput).addClass("present");
                    //future time
                    //change color - red - present
                }
        }



        console.log(hoursinDay)

    }



    createBlocks()


    function addTimeDate() {

        var date = moment().format("MMMM DD, YYYY")
        console.log(date);



        $(currentDay).text(date);

    }


    addTimeDate()


   $(tdElBtn).on("click", function (event) {
       event.preventDefault()
    
        var eventInput = $(event.target).prev("textarea").val();
        var eventTime = $(event.target).text();
        //var eventTime = localStorage.getItem(hoursinDay[i].show)
        //tdElInput.value = localStorage.getItem ("input")
        //localStorage.setItem("input", tdElInput.value);
        
        //at this point you are taking what was inserted in the input box and upon clicking btn it stores it in local storage.
        
        localStorage.setItem(eventTime, eventInput);

        console.log(eventTime)
        console.log(localStorage)

        console.log(eventInput)
        //set local storage save portion here. when clicked the event is stored in local storage.

       
   });
    // -- add on click event for save button and add in details for local storage of the event.

});
