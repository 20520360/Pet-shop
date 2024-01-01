import React, { useState } from "react";
import bookingAPI from "../api/booking.api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Booking() {
  const [serviceName, setServiceName] = useState("Tắm - Vệ Sinh Tại Nhà");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dateBooking, setDateBooking] = useState("");
  const [typeAnimal, setTypeAnimal] = useState("Chó");
  const [ageAnimal, setAgeAnimal] = useState("");
  const [weightAnimal, setWeightAnimal] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const storedUser = Cookies.get("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const bookingService = async (e) => {
    e.preventDefault();
    try {
      const item = {
        serviceName,
        fullname,
        phone,
        email,
        address,
        dateBooking,
        typeAnimal,
        ageAnimal,
        weightAnimal,
        note,
        status: "Đang chờ",
        username: user ? user.username : null
      };
      bookingAPI.createBooking(item, navigate);
    } catch (error) {
    }
  };

  return (
    <div className="flex justify-center py-6">
      <div className="w-1220 flex">
        <div className="w-4/5 ml-16 pl-16 mt-8 mb-8">
          <p className="mb-6">
            Đặt lịch nhanh <br />
            Các trường được đánh dấu
            <span className="text-[#e80000] text-[18px] font-extrabold">*</span>
            là bắt buộc
          </p>
          <div>
            <form
              method=""
              action=""
              id="formBooking"
              onSubmit={bookingService}
            >
              <div>
                <label
                  className="text-xl opacity-80 font-medium"
                  for="seriviceType"
                >
                  YÊU CẦU DỊCH VỤ
                  <span className="text-[#e80000] text-[18px] font-extrabold">
                    *
                  </span>
                </label>
                <br />
                <p className="text-xs mb-2">
                  Vui lòng chọn 1 dịch vụ bạn đang cần để Pet Service HCM có thể
                  chuẩn bị, và phục vụ các bé một cách chu đáo nhất nhé!
                </p>
                <select
                  className="p-3 w-660 border-2 rounded-lg outline-none focus:border-[#7787ea]"
                  id="seriviceType"
                  value={serviceName}
                  defaultValue={"Tắm - Vệ Sinh Tại Nhà"}
                  onChange={(e) => setServiceName(e.target.value)}
                >
                  <option selected value="Tắm - Vệ Sinh Tại Nhà">
                    Tắm - Vệ Sinh Tại Nhà
                  </option>
                  <option value="Cắt - Tỉa Lông Tại Nhà">
                    Cắt - Tỉa Lông Tại Nhà
                  </option>
                  <option value="Thú Y Tại Nhà">Thú Y Tại Nhà </option>
                  <option value="Dắt Chó Đi Dạo">Dắt Chó Đi Dạo </option>
                  <option value="Combo 1: (Tắm Sấy + Vệ Sinh)">
                    Combo 1: (Tắm Sấy + Vệ Sinh)
                  </option>
                  <option value="Combo 2: (Cắt Tỉa + Vệ Sinh)">
                    Combo 2: (Cắt Tỉa + Vệ Sinh)
                  </option>
                  <option value="Combo 3: (Cắt Tỉa + Vệ Sinh + Tắm Sấy)">
                    Combo 3: (Cắt Tỉa + Vệ Sinh + Tắm Sấy)
                  </option>
                  <option value="Combo 4: (Tắm Sấy + Vệ Sinh + Cạo Lông)">
                    Combo 4: (Tắm Sấy + Vệ Sinh + Cạo Lông)
                  </option>
                </select>
              </div>

              <div className="mt-3">
                <label
                  className="text-xl opacity-80 font-medium"
                  for="fullName"
                >
                  Họ Tên
                  <span className="text-[#e80000] font-extrabold">*</span>
                </label>
                <br />
                <input
                  className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]"
                  type="text"
                  id="fullName"
                  required
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                ></input>
              </div>

              <div className="mt-3">
                <label className="text-xl opacity-80 font-medium" for="tel">
                  Số điện thoại
                  <span className="text-[#e80000] font-extrabold">*</span>
                </label>
                <br />
                <input
                  className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]"
                  type="tel"
                  id="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>

              <div className="mt-3">
                <label className="text-xl opacity-80 font-medium" for="email">
                  Email <span className="text-[#e80000] font-extrabold">*</span>
                </label>
                <br />
                <input
                  className="p-3 w-660 mt-2 border-2 rounded-lg outline-none focus:border-[#7787ea]"
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="mt-3">
                <label className="text-xl opacity-80 font-medium" for="address">
                  Địa chỉ
                  <span className="text-[#e80000] font-extrabold">*</span>
                </label>
                <br />
                <input
                  className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]"
                  type="text"
                  id="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>

              <div className="mt-3">
                <label className="text-xl opacity-80 font-medium" for="time">
                  Thời gian
                  <span className="text-[#e80000] font-extrabold">*</span>
                </label>
                <br />
                <input
                  type="date"
                  className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]"
                  id="time"
                  required
                  value={dateBooking}
                  onChange={(e) => setDateBooking(e.target.value)}
                ></input>
              </div>

              <div className="mt-3">
                <label className="text-xl opacity-80 font-medium" for="animals">
                  Loài <span className="text-[#e80000] font-extrabold">*</span>
                </label>
                <br />
                <select
                  className="p-3 mt-2 w-660 border-2 rounded-lg outline-none focus:border-[#7787ea]"
                  id="animals"
                  value={typeAnimal}
                  defaultValue={"Chó"}
                  onChange={(e) => setTypeAnimal(e.target.value)}
                >
                  <option selected value="Chó">
                    Chó
                  </option>
                  <option value="Mèo">Mèo</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <div className="mt-3 flex w-660 ">
                <div className="mt-3 w-1/2 mr-4 ">
                  <label className="text-xl opacity-80 font-medium" for="age">
                    Tuổi (Năm)
                    <span className="text-[#e80000] font-extrabold">*</span>
                  </label>
                  <br />
                  <input
                    className="p-3 w-full mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]"
                    type="text"
                    id="age"
                    required
                    value={ageAnimal}
                    onChange={(e) => setAgeAnimal(e.target.value)}
                  ></input>
                </div>

                <div className="mt-3 w-1/2 ml-4">
                  <label
                    className="text-xl opacity-80 font-medium"
                    for="weight"
                  >
                    Trọng lượng (Kg)
                    <span className="text-[#e80000] font-extrabold">*</span>
                  </label>
                  <br />
                  <input
                    className="p-3 w-full mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    id="weight"
                    required
                    value={weightAnimal}
                    onChange={(e) => setWeightAnimal(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="mt-3">
                <label
                  className="text-xl opacity-80 font-medium"
                  for="noteMassage"
                >
                  Ghi chú
                  <span className="text-[#e80000] font-extrabold">*</span>
                </label>
                <br />
                <textarea
                  className="p-3 w-660 mt-2 border-2 rounded-lg h-[200px] outline-none focus:border-[#7787ea]"
                  type="text"
                  id="noteMassage"
                  required
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Nhập một vài mô tả về tình trạng của các bé để các chuyên viên của chúng tôi có thể hỗ trợ bạn một cách tốt nhất..."
                ></textarea>
                <div>
                  <input
                    value="Gửi yêu cầu"
                    type="submit"
                    className="border rounded-lg w-32 h-14 text-white bg-black hover:bg-[#c4c4c4] hover:cursor-pointer ease-in duration-100 transition-colors"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="w-1/5">
          <p className="text-9xl text-[#293478] italic">
            2 <br />4<br />/<br />7
          </p>
        </div>
      </div>
    </div>
  );
}

export default Booking;
