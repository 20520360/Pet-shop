import axiosClient from "./axiosClient";

const bookingAPI = {
  getAllBooking: () => {
    return axiosClient.get("/booking/list");
  },
  findAllMyBooking: (username) => {
    return axiosClient.get(`/client/booking/list/${username}`);
  },
  createBooking: (data, navigate) => {
    axiosClient
      .post("/booking/create", data)
      .then((res) => {
        alert("Booking successfully");
        navigate("/");
      })
      .catch((err) => {
      });
  },
  actionBooking: (id, status) => {
    return axiosClient.put("/booking/action", { id, status });
  },
};

export default bookingAPI;
