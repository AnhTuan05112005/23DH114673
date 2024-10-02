// Hàm lấy giá trị và loại bỏ khoảng trắng
function getValue(id) {
    return document.getElementById(id).value.trim();
}

// Hiển thị lỗi
function showError(key, message) {
    document.getElementById(key + '_error').innerHTML = message;
}

// Kiểm tra chuỗi có đúng độ dài không
function validateStudentID() {
    var studentID = getValue('studentID');
    if (studentID.length !== 10) {
        showError('studentID', 'Mã sinh viên phải có đúng 10 ký tự.');
        return false;
    }
    showError('studentID', '');
    return true;
}

// Kiểm tra họ và tên
function validateFullName() {
    var fullName = getValue('fullName');
    if (fullName === '' || fullName.length > 30) {
        showError('fullName', 'Họ tên không được để trống và phải ít hơn 30 ký tự.');
        return false;
    }
    showError('fullName', '');
    return true;
}

// Kiểm tra tuổi >= 18
function validateAge() {
    var age = getValue('age');
    if (age < 18) {
        showError('age', 'Tuổi phải từ 18 trở lên.');
        return false;
    }
    showError('age', '');
    return true;
}

// Kiểm tra ngoại ngữ đã chọn ít nhất 1 ngoại ngữ
function validateLanguages() {
    var english = document.getElementById('languageEnglish').checked;
    var french = document.getElementById('languageFrench').checked;
    var japanese = document.getElementById('languageJapanese').checked;

    if (!english && !french && !japanese) {
        showError('language', 'Bạn phải chọn ít nhất một ngoại ngữ.');
        return false;
    }
    showError('language', '');
    return true;
}

// Hiển thị sở trường theo chuyên ngành đã chọn
function displaySpecialty() {
    var major = getValue('major');
    var specialty = '';

    if (major === 'Hệ thống') {
        specialty = 'Phân tích & Thiết kế';
    } else if (major === 'Phần mềm') {
        specialty = 'Lập trình';
    } else if (major === 'Mạng máy tính') {
        specialty = 'Quản lý mạng';
    } else {
        showError('major', 'Bạn phải chọn chuyên ngành.');
        return false;
    }

    showError('major', '');
    document.getElementById('specialty').innerText = specialty;
    return true;
}

// Hàm kiểm tra tổng hợp khi nhấn "Đăng ký"
function validateForm() {
    var isValid = true;

    isValid = validateStudentID() && isValid;
    isValid = validateFullName() && isValid;
    isValid = validateAge() && isValid;
    isValid = validateLanguages() && isValid;
    isValid = displaySpecialty() && isValid;

    if (isValid) {
        alert('Bạn đã đăng ký thành công!');
    } else {
        alert('Bạn phải nhập lại.');
    }

    return false; // Ngăn submit form để có thể kiểm tra
}
