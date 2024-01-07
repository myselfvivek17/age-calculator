let bday = document.getElementById("bday");
let btn = document.getElementById("btn");
let info = document.getElementById("info");
btn.addEventListener("click", function () {
  if (bday.value) {
    var iday = new Date(bday.value);
    var tday = new Date();
    var timeDifference = tday - iday; // Corrected variable name
    var yearsDifference = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 365.25)
    );
    var monthsDifference = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44)
    );
    var daysDifference = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );
    info.innerHTML = `${yearsDifference} years ${monthsDifference} months ${daysDifference} days`;
  } else {
    alert("Invalid date");
  }
});
