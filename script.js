function traCuu() {
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var resultDiv = document.getElementById('result');
    var resultText1 = '';
    var resultText2 = '';

    var namArray = ['LA HẦU', 'THỔ TÚ', 'THỦY DIỆU', 'THÁI BẠCH', 'THÁI DƯƠNG', 'VÂN HỚN', 'KẾ ĐÔ', 'THÁI ÂM', 'MỘC ĐỨC'];
    var nuArray = ['KẾ ĐÔ', 'VÂN HỚN', 'MỘC ĐỨC', 'THÁI ÂM', 'THỔ TÚ', 'LA HẦU', 'THÁI DƯƠNG', 'THÁI BẠCH', 'THỦY DIỆU'];

    var namHArray = ['HUỲNH TUYỀN', 'TAM KHEO', 'NGŨ MỘ', 'THIÊN TINH', 'TÁN TẬN', 'THIÊN LA', 'ĐỊA VÕNG', 'DIÊM VƯƠNG'];
    var nuHArray = ['TÁN TẬN', 'THIÊN TINH', 'NGŨ MỘ', 'TAM KHEO', 'HUỲNH TUYỀN', 'DIÊM VƯƠNG', 'ĐỊA VÕNG', 'THIÊN LA'];

    if (age >= 10 && age <= 99) {
        var index = (age - 10) % 9;
        resultText1 = (gender === 'male') ? namArray[index] : nuArray[index];
    } else {
        resultText1 = 'Độ tuổi không hợp lệ';
    }

    if (age >= 10 && age <= 88) {
        if (age === 10 || age === 18 || age === 27 || age === 36 || age === 45 || age === 54 || age === 63 || age === 72 || age === 81) {
            resultText2 = (gender === 'male') ? namHArray[0] : nuHArray[0];
        } else if (age === 10 || age === 18 || age === 27 || age === 36 || age === 45 || age === 54 || age === 63 || age === 72 || age === 81) {
            resultText2 = (gender === 'male') ? namHArray[0] : nuHArray[0];
        } else if (age === 11 || age === 19 || age === 20 || age === 28 || age === 37 || age === 46 || age === 55 || age === 64 || age === 73 || age === 82) {
            resultText2 = (gender === 'male') ? namHArray[1] : nuHArray[1];
        } else if (age === 12 || age === 21 || age === 29 || age === 30 || age === 38 || age === 47 || age === 56 || age === 65 || age === 74 || age === 83) {
            resultText2 = (gender === 'male') ? namHArray[2] : nuHArray[2];
        } else if (age === 13 || age === 22 || age === 31 || age === 39 || age === 40 || age === 48 || age === 57 || age === 66 || age === 75 || age === 84) {
            resultText2 = (gender === 'male') ? namHArray[3] : nuHArray[3];
        } else if (age === 14 || age === 23 || age === 32 || age === 41 || age === 49 || age === 50 || age === 58 || age === 67 || age === 76 || age === 85) {
            resultText2 = (gender === 'male') ? namHArray[4] : nuHArray[4];
        } else if (age === 15 || age === 24 || age === 33 || age === 42 || age === 51 || age === 59 || age === 60 || age === 68 || age === 77 || age === 86) {
            resultText2 = (gender === 'male') ? namHArray[5] : nuHArray[5];
        } else if (age === 16 || age === 25 || age === 34 || age === 43 || age === 52 || age === 61 || age === 69 || age === 70 || age === 78 || age === 87) {
            resultText2 = (gender === 'male') ? namHArray[6] : nuHArray[6];
        } else if (age === 17 || age === 26 || age === 35 || age === 44 || age === 53 || age === 62 || age === 71 || age === 79 || age === 80 || age === 88) {
            resultText2 = (gender === 'male') ? namHArray[7] : nuHArray[7];
        }
    } else {
        resultText2 = 'Độ tuổi không hợp lệ';
    }

    resultDiv.textContent = resultText1 + " - " + resultText2;
}

