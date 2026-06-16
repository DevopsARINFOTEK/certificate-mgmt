import { useState } from "react";

export default function CertificateForm({
  onGenerate,
}) {
  const [formData, setFormData] =
    useState({
      name: "",
      gender: "Male",
      course_name: "",
      start_date: "",
      end_date: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">

      <div className="text-center mb-8">

        <img
          src="/logo.png"
          alt="ARINFOTEK"
          className="w-24 mx-auto mb-4"
        />

        <h1 className="text-4xl font-bold text-blue-700">
          ARINFOTEK
        </h1>

        <p className="text-gray-600 mt-2">
          Internship Certificate Generator
        </p>

      </div>

      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          onGenerate(formData);
        }}
      >

        <div>
          <label className="block font-semibold mb-2">
            Student Name
          </label>

          <input
            type="text"
            name="name"
            required
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Gender
          </label>

          <div className="flex gap-8">

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                defaultChecked
                onChange={handleChange}
              />
              <span className="ml-2">
                Male
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              <span className="ml-2">
                Female
              </span>
            </label>

          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Course Name
          </label>

          <input
            type="text"
            name="course_name"
            required
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block font-semibold mb-2">
              Start Date
            </label>

            <input
              type="date"
              name="start_date"
              required
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              End Date
            </label>

            <input
              type="date"
              name="end_date"
              required
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="text-center pt-4">

          <button
            type="submit"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-3
              rounded-lg
              font-semibold
              shadow-md
            "
          >
            Generate Certificate
          </button>

        </div>

      </form>

    </div>
  );
}