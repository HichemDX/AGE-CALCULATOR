const datePicker = document.getElementById("datePicker");
const choseDate = document.getElementById("choseDate");

const ageYers = document.getElementById("ageYers");
const ageMonth= document.getElementById("ageMonth");
const ageDays= document.getElementById("ageDays");
const ageHours= document.getElementById("ageHours");
const ageMinut= document.getElementById("ageMinut");
const ageSecond= document.getElementById("ageSecond");


datePicker.addEventListener('change',(eo) => {
    var option = { year: 'numeric' , month : 'long' , day: 'numeric'};
    var selectdate = new Date(eo.target.value);
    var DOB = selectdate.toLocaleDateString('en-US',option);
    choseDate.innerHTML = "DATE : " + DOB

    var secondeBTWDOB  = Date.parse(DOB);
    var secondeBTWNow = Date.now();
    var ageS =secondeBTWNow-secondeBTWDOB

    var miliseconde = ageS
    var second = 1000;
    var minut = second*60;
    var Hor = minut*60;
    var day = Hor*24;
    var month = day*30;
    var year = day*365;

    var years = Math.round(miliseconde/year);
    var months = years*12;
    var days = years*365;
    var Hors = Math.round(miliseconde/Hor);
    var minut = Math.round((miliseconde/second)/60);
    var seconde = Math.round(miliseconde/second);

    ageYers.innerHTML = years;
    ageMonth.innerHTML = months;
    ageDays.innerHTML = days;
    ageHours.innerHTML = Hors;
    ageMinut.innerHTML = minut ;
    ageSecond.innerHTML = seconde;

})