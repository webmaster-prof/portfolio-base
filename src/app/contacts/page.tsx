"use client";

import { useRouter } from "next/navigation";
import "./contacts.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="contacts">
      <div className="container">
        <button
          className="contacts__backbutton"
          onClick={() => router.push("/")}
        >
          To Home
        </button>
        <h2 className="contacts__title title" data-aos="fade-up">
          Напишіть мені
        </h2>
        <form className="contacts__form">
          <div
            className="contacts__form-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <label className="contacts__form-label" htmlFor="name">
              Ваше імя
            </label>
            <input
              className="contacts__form-input"
              type="text"
              id="name"
              required
            />
          </div>
          <div
            className="contacts__form-block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <label className="contacts__form-label" htmlFor="email">
              Ваша електронна адреса
            </label>
            <input
              className="contacts__form-input"
              type="email"
              id="email"
              required
            />
          </div>
          <div
            className="contacts__form-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <label className="contacts__form-label" htmlFor="text">
              Вашe повідомлення
            </label>
            <textarea
              className="contacts__form-area"
              id="text"
              required
            ></textarea>
            <button className="contacts__form-button" type="submit">
              Надіслати
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
