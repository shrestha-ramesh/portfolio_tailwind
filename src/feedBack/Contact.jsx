import { useState } from "react";
import axios from "../components/API";
import Modal from "../components/Modal";

export default function Contact() {
  // Define a delay function that waits for N milliseconds
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [openModal, setOpenModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const handleOpenModal = (e) => {
    setOpenModal(e);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const isValid = isValidEmail(email);
    if (isValid && formData.name != "" && formData.message != "") {
      setModalStatus("Thank you for your email");
      handleOpenModal(true);
      await delay(5000);
      handleOpenModal(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setModalStatus("Please Enter all the field and valid email");
      handleOpenModal(true);
      console.log(false);
      return;
    }
    axios
      .post("https://getform.io/f/azyllozb", formData)
      .then((response) => {
        console.log("Data sent successfully:",response);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  return (
    <>
      {openModal && <Modal modalStatus={modalStatus} />}
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:p-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col justify-center items-center mt-5">
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send your message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                className="showdow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Enter Your FullName"
                value={formData.name}
                onChange={handleChange}
              />
              <label className="block text-gray-700">Email Address</label>
              <input
                className="showdow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <label className="block text-gray-700">Message</label>
              <textarea
                className="showdow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                type="text"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white text-xl px-3 py-2 hover:bg-slate-700 duration-300 rounded-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
