import React from "react";

export default function LabelledInput(props: { label: string; fieldType: string }) {
  return (
    <>
      <label>{props.label}</label>
      <input
        className="border-2 border-gray-200 rounded-lg p-2 my-2 w-full"
        type={props.fieldType}
      />
    </>
  );
}
