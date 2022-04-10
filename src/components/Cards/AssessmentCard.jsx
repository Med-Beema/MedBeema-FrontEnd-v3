import React, { useState } from "react";
import FormGroup from "../common/FormGroup";
import axios from "axios";
import Constants from "../../constants";
import { useNavigate, useParams } from "react-router-dom";
export default function AssessmentCard() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    reason: "",
  });
  function handleChange(e) {
    const data = e.target.value;
    setValues({
      ...values,
      [e.target.name]: data,
    });
  }
  let { claimID } = useParams();
  function handleSubmit(e) {
    e.preventDefault();

    const values = e.currentTarget.name;
    axios
      .put(`${Constants.baseURL}/assessment/${claimID}`, values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("../claims");
        }
      });
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
            labelName="Reason"
            name="reason"
            type="text"
            handleChange={handleChange}
            value={values.reason}
          />
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
