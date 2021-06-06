/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHealthDetails, addHealthDetails } from "../Redux/actions";
import { FullLoading } from "./common/loader";
const HealthDetail = () => {
  const initForm = {
    allergies: [],
    medications: [],
    others: "",
  };
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [form, setForm] = useState(initForm);
  const removeItem = (e) => {
    const fieldValue = { ...form };
    fieldValue[e.target.name] = fieldValue[e.target.name].filter(
      (item) => item !== e.target.innerHTML
    );
    setForm(fieldValue);
  };
  const getDetails = () => {
    setLoading(true);
    dispatch(getHealthDetails()).then((resp) => {
      const { data: res } = resp;
      const fieldValue = { ...form };
      fieldValue["allergies"] = res.data.patient_data.allergies;
      fieldValue["medications"] = res.data.patient_data.current_medications;
      fieldValue["others"] = res.data.patient_data.other_comments;
      setForm(fieldValue);
      setLoading(false);
    });
  };
  useEffect(() => {
    getDetails();
  }, []);
  const handleSubmit = (e) => {
    const form1 = {
      allergies: form["allergies"],
      current_medications: form["medications"],
      other_comments: form["others"],
    };
    dispatch(addHealthDetails(form1)).then((resp) => {
      console.log(resp);
      window.location.reload();
    });
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const fieldValue = { ...form };
      fieldValue[e.target.name] = [
        ...fieldValue[e.target.name],
        e.target.value,
      ];
      setForm(fieldValue);
      e.target.value = "";
    }
  };
  return (
    <div className="my-8 ml-auto mr-auto">
      {loading ? (
        <div>
          <FullLoading />
        </div>
      ) : (
        <div>
          <div className="pb-6 md:pb-0 flex flex-col">
            <label htmlFor="name" className="input-label text-base mb-2">
              Allegries
            </label>
            <div>
              <label className="input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
                <div className="flex-1 leading-none">
                  <input
                    id="handleAllergies"
                    type="text"
                    className="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker"
                    name="allergies"
                    onKeyPress={handleEnter}
                    placeholder="Allegries"
                    autocomplete="off"
                  />
                </div>
              </label>
            </div>
            <label htmlFor="name" className=" mt-5 input-label text-base mb-2">
              Medications
            </label>
            <div>
              <label className=" input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
                <div className="flex-1 leading-none">
                  <input
                    id="handleMedications"
                    type="text"
                    className="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker"
                    name="medications"
                    onKeyPress={handleEnter}
                    placeholder="Medications"
                    autocomplete="off"
                  />
                </div>
              </label>
            </div>
            <label for="name" className="mt-5  input-label text-base mb-2">
              Other Comments
            </label>
            <div>
              <label className="input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
                <div className="flex-1 leading-none">
                  <input
                    id="handleComments"
                    type="text"
                    className="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker"
                    name="others"
                    onKeyPress={handleEnter}
                    placeholder="Other Comments"
                    autocomplete="off"
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-5 w-max-prose">
            {form.allergies.length > 0 ? (
              <div>
                <label
                  htmlFor="Allergies"
                  className="input-label text-base mb-2"
                >
                  Allergies
                </label>
                <div className="flex flex-wrap overflow-hidden">
                  {form.allergies.map((item1) => {
                    return (
                      <div key={item1}>
                        <button
                          name="allergies"
                          onClick={removeItem}
                          className="h-6 md:h-12 w-full inline-block md:text-sm text-xs bg-gray-300 hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-transparent rounded-full"
                        >
                          {item1}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
            {form.medications.length > 0 ? (
              <div className="mt-5">
                <label
                  htmlFor="Medications"
                  className="input-label text-base mb-2"
                >
                  Medications
                </label>
                <div className="flex flex-wrap overflow-hidden">
                  {form.medications.map((item1) => {
                    return (
                      <div key={item1}>
                        <button
                          name="medications"
                          onClick={removeItem}
                          className="h-6 md:h-12 w-full inline-block md:text-sm text-xs bg-gray-300 hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-transparent rounded-full"
                        >
                          {item1}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
            {form.allergies.length > 0 || form.medications.length > 0 ? (
              <div className="m-3">
                <button
                  onClick={handleSubmit}
                  className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mr-2">Submit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentcolor"
                      d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default HealthDetail;
