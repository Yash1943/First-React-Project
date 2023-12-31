import React from "react";

export default function LabelledInput(props: {
  id: number;
  label: string;
  fieldType: string;
  removeFieldCB: (id: number) => void;
}) {
  return (
    <>
      <label>{props.label}</label>
      <div className="flex gap-2">
        <input
          className="border-2 border-gray-200 rounded-lg p-2 my-2 flex-1"
          type={props.fieldType}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer"
          onClick={(_) => props.removeFieldCB(props.id)}>
          Remove Field
        </button>
      </div>
    </>
  );
}
