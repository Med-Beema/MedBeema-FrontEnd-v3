import React, { useState } from "react";
import Cards from "../Cards/Cards";
import FormGroup from "../common/FormGroup";

function MyDetails() {
  
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-4xl">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form
          action="#"
          method="POST"
          className="mb-0 space-y-6"
          encType="multipart"
        >
          <FormGroup labelName="Full Name" name="fullName" type="text" />
          <FormGroup labelName="Address" name="address" type="text" />
          <FormGroup labelName="Gender" name="gender" type="text" />
          <FormGroup labelName="Date of Birth" name="dob" type="date" />
          <FormGroup labelName="Occupation" name="occupation" type="text" />
          <FormGroup labelName="Contact" name="contact" type="tel" />
          <FormGroup labelName="Father's Name" name="fathersName" type="text" />
          <FormGroup
            labelName="Identification Type"
            name="idType"
            type="text"
          />
          <FormGroup
            labelName="Identification Number"
            name="idNum"
            type="text"
          />
          <FormGroup labelName="Issued Place" name="issuedPlace" type="text" />
          <FormGroup labelName="Issued Date" name="issuedDate" type="date" />
          <FormGroup labelName="Issued Date" name="issuedDate" type="date" />
          <FormGroup labelName="User Photo" name="userPhoto" type="file" />
          <FormGroup
            labelName="Identification Document Photo"
            name="idPhoto"
            type="file"
          />
          <FormGroup labelName="Signature" name="signature" type="file" />
        </form>
      </div>
    </div>
  );
}

export default MyDetails;
