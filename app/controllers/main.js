const getEle = (id) => document.getElementById(id);
let service = new Services();
const getProducts = () => {
  service
    .fetchData()
    .then((res) => {
      renderHTML(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
getProducts();

const renderHTML = (data) => {
  getEle("tblDanhSachNguoiDung").innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    getEle("tblDanhSachNguoiDung").innerHTML += `
                                                    <tr>
                                                        <td>${i + 1}</td>
                                                        <td>${
                                                          data[i].taiKhoan
                                                        }</td>
                                                        <td>${
                                                          data[i].matKhau
                                                        }</td>
                                                        <td>${
                                                          data[i].hoTen
                                                        }</td>
                                                        <td>${
                                                          data[i].email
                                                        }</td>
                                                        <td>${
                                                          data[i].ngonNgu
                                                        }</td>
                                                        <td>${
                                                          data[i].loaiND
                                                        }</td>
                                                        <td>
                                                            <button class='btn btn-danger' onclick="xoaSP(${
                                                              data[i].id
                                                            })">Xóa</button>
                                                            <button class='btn btn-warning' data-toggle="modal" data-target="#myModal" onclick="btnSua(${
                                                              data[i].id
                                                            })">Sua</button>
                                                        </td>                      
                                                    </tr>`;
    listProduct.list.push(data[i].taiKhoan);
  }
};

// nut them moi
getEle("btnThemNguoiDung").addEventListener("click", () => {
  document.querySelector(".modal-title").innerHTML = "Thêm người dùng";
  document.querySelector(
    ".modal-footer"
  ).innerHTML = `<button class='btn btn-success' onclick='themSP()'>Thêm</button>`;
});

//xoa san pham
const xoaSP = (id) => {
  service
    .deleteData(id)
    .then((res) => {
      getProducts();
    })
    .catch((err) => {
      console.log(err);
    });
};

//nut sua san pham
const btnSua = (id) => {
  document.querySelector(".modal-title").innerHTML = "Cap nhat nguoi dung";
  document.querySelector(
    ".modal-footer"
  ).innerHTML = `<button class='btn btn-success' onclick='capNhatSP(${id})'>Cap Nhat</button>`;

  service
    .getDataById(id)
    .then((res) => {
      getEle("TaiKhoan").value = res.data.taiKhoan;
      getEle("HoTen").value = res.data.hoTen;
      getEle("MatKhau").value = res.data.matKhau;
      getEle("Email").value = res.data.email;
      getEle("HinhAnh").value = res.data.hinhAnh;
      getEle("loaiNguoiDung").value = res.data.loaiND;
      getEle("loaiNgonNgu").value = res.data.ngonNgu;
      getEle("MoTa").value = res.data.moTa;
    })
    .catch((err) => {
      console.log(err);
    });
};
var validation = new Validation();
var listProduct = new ListProduct();
console.log(listProduct.list);
const getInfo = (id) => {
  let _taiKhoan = getEle("TaiKhoan").value;
  let _hoTen = getEle("HoTen").value;
  let _matKhau = getEle("MatKhau").value;
  let _email = getEle("Email").value;
  let _hinhAnh = getEle("HinhAnh").value;
  let _loaiND = getEle("loaiNguoiDung").value;
  let _ngonNgu = getEle("loaiNgonNgu").value;
  let _moTa = getEle("MoTa").value;
  let isValid = true;

  isValid &=
    validation.kiemTraRong(_taiKhoan, "tbTK", "(*) Khong duoc de trong") &&
    validation.kiemTraTrung(
      _taiKhoan,
      "tbTK",
      "(*) Tai khoan da ton tai",
      listProduct.list
    );
  isValid &=
    validation.kiemTraRong(_hoTen, "tbTen", "(*) Khong duoc de trong") &&
    validation.kiemTraTen(_hoTen, "tbTen", "(*) Ho ten khong hop le");
  isValid &=
    validation.kiemTraRong(_matKhau, "tbMK", "(*) Khong duoc de trong") &&
    validation.kiemTraMatKhau(_matKhau, "tbMK", "(*) Mat khau khong hop le");
  isValid &=
    validation.kiemTraRong(_email, "tbEmail", "(*) Khong duoc de trong") &&
    validation.kiemTraEmail(_email, "tbEmail", "(*) Email khong hop le");
  isValid &= validation.kiemTraRong(
    _hinhAnh,
    "tbHinhAnh",
    "(*) Khong duoc de trong"
  );
  isValid &= validation.kiemTraNguoiDung(_loaiND, "tbLoaiND", "(*) Phai Chon");
  isValid &= validation.kiemTraNgonNgu(_ngonNgu, "tbLoaiNN", "(*) Phai Chon");
  isValid &=
    validation.kiemTraRong(_moTa, "tbMoTa", "(*) Khong duoc de trong") &&
    validation.kiemTraDoDai(
      _moTa,
      "tbMoTa",
      "(*) Mo ta co do dai tu 3 den 60 ky tu",
      3,
      60
    );

  if (isValid) {
    let product = new Product(
      id,
      _taiKhoan,
      _hoTen,
      _matKhau,
      _email,
      _loaiND,
      _ngonNgu,
      _hinhAnh,
      _moTa
    );
    return product;
  }
  return null;
};
//them san pham
const themSP = () => {
  let product = getInfo("");
  if (product) {
    service
      .addData(product)
      .then((res) => {
        getProducts();
        document.querySelector(".close").click();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//lay san pham theo id
const capNhatSP = (id) => {
  let product = getInfo(id);
  service
    .updateData(id, product)
    .then((res) => {
      getProducts();
      document.querySelector(".close").click();
    })
    .catch((err) => {
      console.log(err);
    });
};
