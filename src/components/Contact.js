import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./contact.css";

const schema = yup.object().shape({
  name: yup.string().required("name is required"),
  contactNumber: yup
    .number()
    .integer()
    .positive()
    .required("phone number is required"),
  email: yup.string().email().required("enter Email"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const body = `${data.name} with contact number ${data.contactNumber} and email ${data.email}`;
    window.location.href = `mailto:venkateshkrishna997@gmail.com?subject=Join Slam&body=${body}`;
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Join Us</h1>
      <div className="contact-content">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="form-input"
          />
          <p className="form-error">{errors.name?.message}</p>
          <input
            {...register("contactNumber")}
            type="text"
            placeholder="Contact Number"
            className="form-input"
          />
          <p className="form-error">{errors.contactNumber?.message}</p>
          <input
            {...register("email")}
            type="text"
            placeholder="Email id"
            className="form-input"
          />
          <p className="form-error">{errors.email?.message}</p>
          <button
            className="submit-button"
            type="submit"
            id="submit"
            disabled={isDirty && !isValid}
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
