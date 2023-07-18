


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
            leftdv.appendChild(document.getElementsByClassName("tktPrice")[id]);


            // QR GEnerator -------------->
            new QRious({ element: document.getElementById("qrCode"), value: `ithe info` });

        });
    }
});

// console.log(leftdv);

