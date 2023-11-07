import React, { useState } from "react";
import LabelledInput from "../LabelledInput";

const formFields = [
  {
    id: 1,
    label: "First Name",
    FieldType: "text",
  },
  {
    id: 2,
    label: "Last Name",
    FieldType: "text",
  },
  {
    id: 3,
    label: "Email",
    FieldType: "email", // Use "email" type for email input
  },
  {
    id: 4,
    label: "Date of Birth",
    FieldType: "date", // Use "date" type for Date of Birth input
  },
  {
    id: 5,
    label: "Phone Number",
    FieldType: "tel", // Use "tel" type for Phone Number input
  },
];

export function Form(props: { closeFormCB: () => void }) {
  const [state, setstate] = useState(formFields);
  const addFields = () => {
    setstate([
      ...state,
      {
        id: state.length + 2,
        label: "new Field",
        FieldType: "text",
      },
    ]);
  };
  return (
    <div className="p-4">
      {state.map((field) => (
        <LabelledInput key={field.id} label={field.label} fieldType={field.FieldType} />
      ))}
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer">
          Submit
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer"
          onClick={props.closeFormCB}>
          close Form
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer"
          onClick={addFields}>
          Add New Fields
        </button>
      </div>
    </div>
  );
}
