document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});
function calc_shaur() {
  let f1 = document.getElementsByName("field1");
  let f2 = document.getElementsByName("field2");
  let r = document.getElementById("result");
  r.innerHTML = f1[0].value * f2[0].value;
  return false;
}
function calc_shaur2() {
  let f3 = document.getElementsByName("field3");
  let f4 = document.getElementsByName("field4");
  let r2 = document.getElementById("result2");
  if (!Number(f3[0].value) && !Number(f4[0].value)) {
    alert("Поле 1 и 2 не являются числами");
    r2.innerHtML = none;
    return false;
  }
  if (!Number(f3[0].value)) {
    alert("Поле 1 не является числом");
    r2.innerHtML = none;
    return false;
  }
  if (!Number(f4[0].value)) {
    alert("Поле 2 не является числом");
    r2.innerHtML = none;
    return false;
  }
  r2.innerHTML = f3[0].value * f4[0].value;
  return false;
}
