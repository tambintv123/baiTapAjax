function Validation() {
  this.kiemTraRong = function (value, spanId, message) {
    if (value === "") {
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
  };
  this.kiemTraEmail = function (value, spanId, message) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraDoDai = function (value, spanId, message, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraMatKhau = function (value, spanId, message) {
    var matKhau =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(matKhau)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraSo = function (value, spanId, message) {
    var integer = /^[0-9]+$/;
    if (value.match(integer)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraTrung = function (value, spanId, message, array) {
    var flag = true;
    for (let i = 0; i < array.length; i++) {
      let person = array[i];
      if (person === value) {
        flag = false;
        break;
      }
    }
    if (flag) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
  this.kiemTraNguoiDung = function (value, spanId, message) {
    if (value === "Chọn loại người dùng") {
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
  };
  this.kiemTraNgonNgu = function (value, spanId, message) {
    if (value === "Chọn ngôn ngữ") {
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
  };
  this.kiemTraTen = function (value, spanId, message) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
}
