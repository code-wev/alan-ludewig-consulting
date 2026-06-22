"use client";

import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  requestType: string;
  message: string;
}

export function CustomRequestForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requestType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "Sansation, sans-serif",
    fontSize: "14px",
    lineHeight: "160%",
    color: "#132651",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "Sansation, sans-serif",
    fontSize: "14px",
    lineHeight: "160%",
    color: "#132651",
  };

  const placeholderClass =
    "w-full border border-[#D0D4DC] rounded-md px-4 py-3 outline-none focus:border-[#132651] transition-colors bg-white placeholder-[#A3ACBA]";

  return (
    <div
      className="w-full bg-white border border-[#E3E6EC] rounded-xl p-6 flex flex-col gap-[18px]"
    >
      {/* Form heading */}
      <h3
        className="font-bold"
        style={{
          fontFamily: "Sansation, sans-serif",
          fontSize: "18px",
          lineHeight: "160%",
          color: "#132651",
        }}
      >
        Custom Request Form
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
        {/* Row 1: First Name + Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className={placeholderClass}
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className={placeholderClass}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={placeholderClass}
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label style={labelStyle}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={placeholderClass}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Row 3: Request Type (full width) */}
        <div className="flex flex-col gap-2 w-full">
          <label style={labelStyle}>Request Type</label>
          <input
            type="text"
            name="requestType"
            value={form.requestType}
            onChange={handleChange}
            placeholder="e.g. Site Visit, Bespoke RAMS, Custom Form..."
            className={placeholderClass}
            style={inputStyle}
          />
        </div>

        {/* Row 4: Message (full width, textarea) */}
        <div className="flex flex-col gap-2 w-full">
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Please describe what you need in detail..."
            rows={4}
            className={`${placeholderClass} resize-none`}
            style={{ ...inputStyle, height: "99px" }}
          />
        </div>

        {/* Submit button */}
        <div className="flex">
          <button
            type="submit"
            className="flex items-center justify-center px-8 py-4 rounded-md font-bold transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
            style={{
              backgroundColor: "#132651",
              fontFamily: "Sansation, sans-serif",
              fontSize: "14px",
              lineHeight: "160%",
              color: "#FFFFFF",
              minWidth: "250px",
            }}
          >
            {submitted ? "Submitted!" : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
}
