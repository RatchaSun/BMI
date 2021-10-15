function BMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height / 100 * height / 100);
    //weight / Math.pow(height / 100, 2);
    var bmio = (bmi.toFixed(2));
    document.getElementById("result").innerHTML = bmio;
}