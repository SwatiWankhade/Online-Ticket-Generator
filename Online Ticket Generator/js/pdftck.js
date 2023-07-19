


document.addEventListener("DOMContentLoaded", function () {
    var tableElements = document.getElementsByClassName("tktBtn");
    for (var i = 0; i < tableElements.length; i++) {
        tableElements[i].addEventListener("click", (e) => {
            var id = e.target.id;
            document.getElementById("ticket").style.display = "none"
            document.getElementById("pdfTkt").style.display = "block";

            let leftdv = document.createElement('div');
            leftdv.setAttribute("id", "left");
            document.getElementById('mn').appendChild(leftdv);

            leftdv.appendChild(document.getElementsByClassName("ticketTitle")[id]);
            leftdv.appendChild(document.getElementsByClassName("companyName")[id]);
            leftdv.appendChild(document.getElementsByClassName("ticketDate")[id]);
            leftdv.appendChild(document.getElementsByClassName("dvLoc")[id]);
            leftdv.appendChild(document.getElementsByClassName("Ticketdist")[id]);
            leftdv.appendChild(document.getElementsByClassName("dvTime")[id]);
            let seat = Math.floor(Math.random() * 50) + 1;
            let seatNo = document.createElement("h2");
            seatNo.innerText="Seat NO - " +seat;
            seatNo.setAttribute("class","seat");
            leftdv.appendChild(seatNo);
            leftdv.appendChild(document.getElementsByClassName("tktPrice")[id]);
            


            // QR GEnerator -------------->
            new QRious({ element: document.getElementById("qrCode"), value: `Name : ${document.getElementById('fullName').value}  Date: ${document.getElementById('date').value}  Age: ${document.getElementById('age').value}  Phone NO : ${document.getElementById('number').value}  Email : ${document.getElementById('email').value}  Address : ${document.getElementById('address').value}` });

        });
    }
});

// console.log(leftdv);

