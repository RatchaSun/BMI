function BMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height / 100 * height / 100);
    var bmio = (bmi.toFixed(2));
    document.getElementById("result").innerHTML = "ค่า BMI ของคุณเท่ากับ " + bmio;

    if (BMI >= 30) {
        document.getElementById("category").innerHTML = 'โรคอ้วนอันตราย';
    } else if (BMI >= 25) {
        document.getElementById("category").innerHTML = 'โรคอ้วน';
    } else if (BMI >= 23) {
        document.getElementById("category").innerHTML = 'นำหนักเกิน';
    } else if (BMI >= 18.5) {
        document.getElementById("category").innerHTML = 'สมส่วน';
    } else {
        document.getElementById("category").innerHTML = 'น้ำหนักต่ำกว่าเกณฑ์';
    }
}
