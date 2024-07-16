import { useState } from "react";

export default function Modal({ modalStatus }) {
  return (
    <>
      /
      <div className="mx-14 px-4 md:p-10 my-16 rounded-full flex justify-center items-center h-10 w-50 bg-slate-600 fixed inset-0 z-50">
        <div>
          {/* Modal content */}
          <h3 className="md:text-2xl md:font-semibold text-white">{modalStatus}</h3>
          {/* Add other form fields or content here */}
        </div>
      </div>
    </>
  );
}
