import React, { useState } from "react";
import FormGroup from "../common/FormGroup";
import axios from "axios";
import { saveClaim } from "../../Controllers/claim";
import Constants from "../../constants";

function FileClaimForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    amount: 0,
    institutionName: "",
    institutionAddress: "",
    contact: "",
    description: "",
    suppDocs: "",
  });
  function handleChange(e) {
    const data = e.target.value;
    setValues({
      ...values,
      [e.target.name]: data,
    });
  }

  function handleImageChange(e) {
    setLoading(true);
    if (e.target.files.length) {
      let formData = new FormData();
      formData.set("image", e.target.files[0]);
      axios
        .post("http://localhost:5000/api/uploadImage", formData)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setValues((prevState) => ({
              ...prevState,
              [e.target.name]: res.data.image,
            }));
            setLoading(false);
          }
        });
    }
  }

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      console.log(values);
      axios
        .post(`${Constants.baseURL}/api/data`, values)
        .then((response) => {
          console.log(response);
          setIsSubmitted(true);
        })
        .then(saveClaim(values))
        .catch((error) => {
          console.log(error);
        });
    }
    setValidated(true);
  }
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-4xl">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form
          className="mb-0 space-y-6"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <FormGroup
            labelName="Amount"
            name="amount"
            type="number"
            handleChange={handleChange}
            value={values.amount}
          />
          <FormGroup
            labelName="Name of Institution"
            name="institutionName"
            type="text"
            handleChange={handleChange}
            value={values.institutionName}
          />
          <FormGroup
            labelName="Institution Address"
            name="institutionAddress"
            type="text"
            handleChange={handleChange}
            value={values.institutionAddress}
          />
          <FormGroup
            labelName="Contact"
            name="contact"
            type="tel"
            handleChange={handleChange}
            value={values.contact}
          />
          <FormGroup
            labelName="Description"
            name="description"
            type="text"
            handleChange={handleChange}
            value={values.description}
          />
          <FormGroup
            labelName="Supporting Documents"
            name="suppDocs"
            type="file"
            handleChange={handleImageChange}
          />

          {values.suppDocs && (
            <img src={values.suppDocs} width={200} height={200} alt="" />
          )}

          <button
            variant="primary"
            type="submit"
            className="bg-mb-purple text-white rounded-lg py-2.5 px-7"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FileClaimForm;
