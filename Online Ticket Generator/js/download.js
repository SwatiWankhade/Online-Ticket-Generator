function dwn() {
  let ele = document.getElementById("mn");
  html2pdf().from(ele).save();
}


