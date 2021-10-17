function BMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height / 100 * height / 100);
    var bmio = (bmi.toFixed(2));
    document.getElementById("result").innerHTML = "ค่า BMI ของคุณเท่ากับ " + bmio;
}

function newFunction() {
    if (BMI >= 30) {
        document.getElementById("result2").innerHTML = 'โรคอ้วนอันตราย';
    } else if (BMI >= 25) {
        document.getElementById("result2").innerHTML = 'โรคอ้วน';
    } else if (BMI >= 23) {
        document.getElementById("result2").innerHTML = 'นำหนักเกิน';
    } else if (BMI >= 18.5) {
        document.getElementById("result2").innerHTML = 'สมส่วน';
    } else {
        document.getElementById("result2").innerHTML = 'น้ำหนักต่ำกว่าเกณฑ์';
    }
}
