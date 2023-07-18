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
    } else if (from === "Pune" && to === "Hyderabad" || from === "Hyderabad" && to === "Pune") {
        distance = 1400;
    }else if (from === "Kolkata" && to === "Chennai" || from === "Chennai" && to === "Kolkata") {
        distance = 1006;
    }else if (from === "Jaipur" && to === "Mumbai" || from === "Mumbai" && to === "Jaipur") {
        distance = 1000;
    }else if (from === "Ahmedabad" && to === "Surat" || from === "Surat" && to === "Ahmedabad") {
        distance = 1200;
    }
    Ticketdist.innerText =  `Distance : ${distance} km`;
    document.getElementById(i).appendChild(Ticketdist);


    var dvTime = document.createElement("div");
    dvTime.setAttribute("class", "dvTime");
    document.getElementById(i).appendChild(dvTime);

    var ticketReport = document.createElement("p");
    ticketReport.setAttribute("class", "tktReport");
    ticketReport.innerText = "Reporting Time : 10:00 AM";
    dvTime.appendChild(ticketReport);

    var ticketArrival = document.createElement("p");
    ticketArrival.setAttribute("class", "tktArrival");
    ticketArrival.innerText = "Arrival Time : ";
    dvTime.appendChild(ticketArrival);

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