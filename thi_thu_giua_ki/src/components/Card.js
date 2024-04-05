import React from "react";

const Card = () => {
  return (
    <div class="wrapper">
      <div class="header">
        <h1>THÔNG TIN SINH VIÊN</h1>
      </div>
      <div class="body">
        <div class="content_left">
          <img
            src="https://wallpapersmug.com/download/1920x1080/b1b27d/camper-van-synthwave-art.jpg"
            alt=""
          />
          <button onclick="showAlert()">Đăng Ký</button>
        </div>
        <div class="content_right">
          <div class="content_information_text">
            <ul>
              <li class="listItem">MSSV</li>
              <li class="listItem">Họ Và Tên</li>
              <li class="listItem">Ngày Sinh</li>
              <li class="listItem">Nơi Sinh</li>
              <li class="listItem">Số Điện Thoại</li>
            </ul>
            <ul>
              <li>:</li>
              <li>:</li>
              <li>:</li>
              <li>:</li>
              <li>:</li>
            </ul>
          </div>
          <div class="content_information_input">
            <ul>
              <li>
                <input type="text" maxlength="20" class="inputText" />
              </li>
              <li>
                <input type="text" class="inputText" />
              </li>
              <li>
                <input type="date" class="inputText" />
              </li>
              <li>
                <input type="text" class="inputText" />
              </li>
              <li>
                <input type="number" class="inputText" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
