document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  function calc_shaur() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    r.innerHTML = f1[0].value * f2[0].value;
    return false;
  }
});
