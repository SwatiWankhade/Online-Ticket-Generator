for (let i = 1; i <= 4; i++) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "selectTicket");
    dv.setAttribute("id", i);
    // dv.innerText=`${document.getElementById('fullName').value}`
    document.getElementById("ticket").appendChild(dv);

    var text;
    if (i == 1) {
        text = "AC Seater";
    } else if (i == 2) {
        text = "Non AC Seater";
    } else if (i == 3) {
        text = "AC Sleeper";
    } else {
        text = "Non AC Sleeper";
    }

    var ticketType = document.createElement("h1");
    ticketType.setAttribute("class", "ticketTitle");
    ticketType.innerText = text;
    document.getElementById(i).appendChild(ticketType);

    var companyName = document.createElement("h2");
    companyName.setAttribute("class", "companyName");
    companyName.innerText = "This Company";
    document.getElementById(i).appendChild(companyName);

    var ticketDate = document.createElement("p");
    ticketDate.setAttribute("class", "ticketDate");
    ticketDate.innerText = "Date : " + `${document.getElementById("date").value}`;
    document.getElementById(i).appendChild(ticketDate);
    console.log(ticketDate);

    var dvLoc = document.createElement("div");
    dvLoc.setAttribute("class", "dvLoc");
    document.getElementById(i).appendChild(dvLoc);

    var ticketFrom = document.createElement("p");
    ticketFrom.setAttribute("class", "tktFrom");
    ticketFrom.innerText = "From : " + `${document.getElementById("fromForm").value}`;
    dvLoc.appendChild(ticketFrom);

    var ticketTo = document.createElement("p");
    ticketTo.setAttribute("class", "tktTo");
    ticketTo.innerText = "To : " + `${document.getElementById("toForm").value}`;
    dvLoc.appendChild(ticketTo);


    var from = document.getElementById("fromForm").value;
    var to = document.getElementById("toForm").value;
    var Ticketdist = document.createElement("p");
    Ticketdist.setAttribute("class", "Ticketdist");

    var distance ;

    var timeCal;
    if (from === "Delhi" && to === "Mumbai" || from === "Mumbai" && to === "Delhi") {
       distance = 1416;
    } else if (from === "Hyderabad" && to === "Bangalore" || from === "Bangalore" && to === "Hyderabad") {
             distance = 3000;
    } if (from === "Kolkata" && to === "Chennai" || from === "Chennai" && to === "Kolkata") {
        distance = 1006;
    }else if (from === "Ahmedabad" && to === "Surat" || from === "Surat" && to === "Ahmedabad") {
        distance = 1200;
    }else if (from === "Delhi" && to === "Bangalore" || from === "Bangalore" && to === "Delhi") {
        distance = 1416;
     } 
     else if (from === "Delhi" && to === "Hyderabad" || from === "Hyderabad" && to === "Delhi") {
        distance = 3333;
     } else if (from === "Delhi" && to === "Kolkata" || from === "Kolkata" && to === "Delhi") {
        distance = 2222;
     } else if (from === "Delhi" && to === "Surat" || from === "Surat" && to === "Delhi") {
        distance = 1211;
     } else if (from === "Delhi" && to === "Ahmedabad" || from === "Ahmedabad" && to === "Delhi") {
        distance = 6758;
     } else if (from === "Delhi" && to === "Chennai" || from === "Chennai" && to === "Delhi") {
        distance = 4322;
     } else if (from === "Mumbai" && to === "Bangalore" || from === "Bangalore" && to === "Mumbai") {
        distance = 7890;
     } else if (from === "Mumbai" && to === "Hyderabad" || from === "Hyderabad" && to === "Mumbai") {
        distance = 5678;
     } else if (from === "Mumbai" && to === "Kolkata" || from === "Kolkata" && to === "Mumbai") {
        distance = 3214;
     } else if (from === "Mumbai" && to === "Surat" || from === "Surat" && to === "Mumbai") {
        distance = 3214;
     } else if (from === "Mumbai" && to === "Chennai" || from === "Chennai" && to === "Mumbai") {
        distance = 2134;
     } else if (from === "Mumbai" && to === "Ahmedabad" || from === "Ahmedabad" && to === "Mumbai") {
        distance = 1000;
     } else if (from === "Hyderabad" && to === "Ahmedabad" || from === "Ahmedabad" && to === "Hyderabad") {
        distance = 6565;
     } else if (from === "Hyderabad" && to === "Chennai" || from === "Chennai" && to === "Hyderabad") {
        distance = 3462;
     } else if (from === "Hyderabad" && to === "Surat" || from === "Surat" && to === "Hyderabad") {
        distance = 8769;
     } else if (from === "Hyderabad" && to === "Kolkata" || from === "Kolkata" && to === "Hyderabad") {
        distance = 7654;
     } else if (from === "Bangalore" && to === "Kolkata" || from === "Kolkata" && to === "Bangalore") {
        distance = 8921;
     } else if (from === "Bangalore" && to === "Surat" || from === "Surat" && to === "Bangalore") {
        distance = 1290;
     } else if (from === "Bangalore" && to === "Chennai" || from === "Chennai" && to === "Bangalore") {
        distance = 4563;
     } else if (from === "Bangalore" && to === "Ahmedabad" || from === "Ahmedabad" && to === "Bangalore") {
        distance = 8976;
     } else if (from === "Kolkata" && to === "Ahmedabad" || from === "Ahmedabad" && to === "Kolkata") {
        distance = 4567;
     } else if (from === "Kolkata" && to === "Chennai" || from === "Chennai" && to === "Kolkata") {
        distance = 4321;
     } else if (from === "Kolkata" && to === "Surat" || from === "Surat" && to === "Kolkata") {
        distance = 1234;
     } else if (from === "Chennai" && to === "Surat" || from === "Surat" && to === "Chennai") {
        distance = 2000;
     } 

    Ticketdist.innerText =  `Distance : ${distance} km`;
    document.getElementById(i).appendChild(Ticketdist);


    var dvTime = document.createElement("div");
    dvTime.setAttribute("class", "dvTime");
    document.getElementById(i).appendChild(dvTime);

     function randomTime() {
        var hours = Math.floor(Math.random() * 12) + 1;
        var minutes = Math.floor(Math.random() * 60);
        var ampm = hours >= 12 ? 'pm' : 'am';
        return hours + ':' + minutes + ' ' + ampm;
      }
      let repTime =randomTime();
      

    var ticketReport = document.createElement("p");
    ticketReport.setAttribute("class", "tktReport");
    console.log(repTime);
    ticketReport.innerText = `Reporting Time : ${repTime}`;
    dvTime.appendChild(ticketReport);

    // var ticketArrival = document.createElement("p");
    // ticketArrival.setAttribute("class", "tktArrival");
    // ticketArrival.innerText = `Arrival Time : ${1+repTime}`;
    // dvTime.appendChild(ticketArrival);

    var setPrice = Math.round(distance*(i+1));

    var ticketPrice = document.createElement("h3");
    ticketPrice.setAttribute("class", "tktPrice");
    ticketPrice.innerText = `Price : ${setPrice} Rs.`;
    document.getElementById(i).appendChild(ticketPrice);

    var btn = document.createElement("button");
    btn.setAttribute("class", "tktBtn");
    btn.setAttribute("id", `${i-1}`);
    btn.innerText = "Buy Now";
    document.getElementById(i).appendChild(btn);
}