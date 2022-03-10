import React, { useState } from "react";
import FormGroup from "../common/FormGroup";
import axios from "axios";

function MyDetails() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    address: "",
    gender: "",
    dob: "",
    occupation: "",
    fathersName: "",
    idType: "",
    idNum: "",
    issuedPlace: "",
    issuedDate: "",
    expiryDate: "",
    userPhoto: "",
    asdasd: "",
    idPhoto: "",
    signature: "",
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
      console.log(values);
      axios
        .post("http://localhost:5000/api/data", values)
        .then((response) => {
          console.log(response);
          setIsSubmitted(true);
        })
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
            labelName="Full Name"
            name="fullName"
            type="text"
            handleChange={handleChange}
            value={values.fullName}
          />
          <FormGroup
            labelName="Address"
            name="address"
            type="text"
            handleChange={handleChange}
            value={values.address}
          />
          <FormGroup
            labelName="Gender"
            name="gender"
            type="text"
            handleChange={handleChange}
            value={values.gender}
          />
          <FormGroup
            labelName="Date of Birth"
            name="dob"
            type="date"
            handleChange={handleChange}
            value={values.dob}
          />
          <FormGroup
            labelName="Occupation"
            name="occupation"
            type="text"
            handleChange={handleChange}
            value={values.occupation}
          />
          <FormGroup labelName="Contact" name="contact" type="tel" />
          <FormGroup
            labelName="Father's Name"
            name="fathersName"
            type="text"
            handleChange={handleChange}
            value={values.fathersName}
          />
          <FormGroup
            labelName="Identification Type"
            name="idType"
            type="text"
            handleChange={handleChange}
            value={values.idType}
          />
          <FormGroup
            labelName="Identification Number"
            name="idNum"
            type="text"
            handleChange={handleChange}
            value={values.idNum}
          />
          <FormGroup
            labelName="Issued Place"
            name="issuedPlace"
            type="text"
            handleChange={handleChange}
            value={values.issuedPlace}
          />
          <FormGroup
            labelName="Issued Date"
            name="issuedDate"
            type="date"
            handleChange={handleChange}
            value={values.issuedDate}
          />
          <FormGroup
            labelName="Expiry Date"
            name="expiryDate"
            type="date"
            handleChange={handleChange}
            value={values.expiryDate}
          />
          <FormGroup
            labelName="User Photo"
            name="userPhoto"
            type="file"
            handleChange={handleImageChange}
          />
          {values.userPhoto && (
            <img src={values.userPhoto} width={200} height={200} alt="" />
          )}
          <FormGroup
            labelName="Identification Document Photo"
            name="idPhoto"
            type="file"
            handleChange={handleImageChange}
          />
          {values.idPhoto && (
            <img src={values.idPhoto} width={200} height={200} alt="" />
          )}
          <FormGroup
            labelName="Signature"
            name="signature"
            type="file"
            handleChange={handleImageChange}
          />
          {values.signature && (
            <img src={values.signature} width={200} height={200} alt="" />
          )}

          <div>
            <input type="checkbox" id="terms" name="terms" />
            <label for="terms" className="form-label">
              I agree to terms and conditions.
            </label>
          </div>
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

export default MyDetails;
