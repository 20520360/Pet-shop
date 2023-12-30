import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/header/index.js";
import Content from "./components/content/index.js";
import Footer from "./components/footer/index.jsx";
import Contact from "./components/page/contact.js";
import Login from "./components/page/Login.js";
import Signup from "./components/page/Signup.js";
import Home from "./components/page/Home.js";
import FoodProduct from "./components/page/FoodProduct.js";
import HygieneProduct from "./components/page/HygieneProduct.js";
import TreatmentProduct from "./components/page/TreatmentProduct.js";
import About from "./components/page/About.js";
import OnlineBooking from "./components/page/OnlineBooking.js";
import ViewCart from "./components/page/ViewCart.js";
import Admin from "./components/page/Admin.js";
import AddProduct from "./components/page/AddProduct.js";
import EditProduct from "./components/page/EditProduct.js";
import Feedback from "./components/page/Feedback.js";
import Booking from "./components/page/Booking.js";
import Search from "./components/page/Search.js";
import Profile from "./components/page/Profile.js";
import MyBooking from "./components/page/my-booking.js";
function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* trang chủ */}
        <Route path="/About" element={<About />} /> {/* trang giới thiệu */}
        <Route path="/FoodProduct" element={<FoodProduct />} />{" "}
        {/*  trang store thực phẩm thú cưng*/}
        <Route path="/HygieneProduct" element={<HygieneProduct />} />{" "}
        {/*  trang store sản phẩm vệ sinh thú cưng*/}
        <Route path="/TreatmentProduct" element={<TreatmentProduct />} />{" "}
        {/*  trang store sản phẩm điều trị thú cưng*/}
        <Route path="/Contact" element={<Contact navigate={navigate} />} />{" "}
        {/* trang liên hệ */}
        <Route path="/booking" element={<OnlineBooking />} />{" "}
        <Route path="/profile" element={<Profile />} /> {/* trang profile */}
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/search/" element={<Search />} />
        {/* trang đặt lịch */}
        <Route path="/Login" element={<Login />} /> {/* trang login*/}
        <Route path="/Signup" element={<Signup />} /> {/* trang signup*/}
        <Route path="/cart" element={<ViewCart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />
        <Route path="/admin/feedback/" element={<Feedback />} />
        <Route path="/admin/booking/" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;

// import { useState } from "react";

// // useState

// const courses = [{
//   id: 1,
//   name: 'HTML, CSS'
// },
// {
//   id: 2,
//   name: 'Javasript'

// },
// {
//   id: 3,
//   name: 'ReactJS'
// }
// ]
// function App() {
//   const [checked, setChecked] = useState([])

//   console.log(checked);
//   const handleChecked = (id) => {
//     setChecked(pre => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         //unCheck
//         return checked.filter(item => item !== id)
//       }
//       else { return [...pre, id] }
//     })
//   }
//   const handleSubmit = () => {
//     console.log(checked);
//   }

//   return (
//     <div className="App" style={{ padding: 46 }}>
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input
//               type="checkbox"
//               checked={checked.includes(course.id)}
//               onChange={() => handleChecked(course.id)}
//             />
//             {course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleSubmit} >Register</button>
//     </div>
//   );
// }

// export default App;
