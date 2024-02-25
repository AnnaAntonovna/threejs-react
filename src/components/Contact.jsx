import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { link, gmail, github } from "../assets";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_fl70jq2",
        "template_u8n4hsw",
        {
          from_name: form.name,
          to_name: "Anna",
          from_email: form.email,
          to_email: "annabaranova.edu@gmail.com",
          message: form.message,
        },
        "wKg5OsaPnDmfk1awV"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you! I'll get back to you as fast as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        }),
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong.");
          };
      });
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-navy p-8 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-cold-gray uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-[10px]">
          Contact.
        </h3>
        <div className="flex">
          <img
            src={link}
            onClick={() =>
              window.open("https://www.linkedin.com/in/baranovaanna/", "_blank")
            }
            alt="linkedIn"
            className="w-[40px] h-[40px] object-contain cursor-pointer mr-[20px]"
          />

          <img
            src={gmail}
            onClick={() => alert("Email: annabaranova.edu@gmail.com")}
            alt="annabaranova.edu@gmail.com"
            className="w-[33px] h-[33px] object-contain cursor-pointer mr-[20px]"
          />

          <img
            src={github}
            onClick={() =>
              window.open("https://github.com/AnnaAntonovna", "_blank")
            }
            alt="gitHub"
            className="w-[40px] h-[40px] object-contain cursor-pointer"
          />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-cold-gray py-4 px-6 placeholder:text-primary
            text-primary rounded-lg outlined-none
            border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-cold-gray py-4 px-6 placeholder:text-primary
            text-primary rounded-lg outlined-none
            border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              value={form.message}
              rows="7"
              name="message"
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-cold-gray py-4 px-6 placeholder:text-primary
            text-primary rounded-lg outlined-none
            border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none 
            w-fit text-white font-bold shadow-md shadow-primary
            rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {width > 450 ? (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
