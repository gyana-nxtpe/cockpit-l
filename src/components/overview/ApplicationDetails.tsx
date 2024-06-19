import { applicationDetails } from "@/data";
import React from "react";

const ApplicationDetails = () => {
  return (
    <div className="bg-white p-4 rounded-lg mt-6 mx-4">
      {Object.entries(applicationDetails).map(([key, value]) => {
        return (
          <div key={key} className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-[#0078BD]">{key}</h3>
            {Array.isArray(value) ? (
              value.map((v, i) => (
                <div key={i} className={"grid grid-cols-5 "+"border-b"}>
                  {Object.entries(v).map(([k, val]) => (
                    <div key={k} className="flex flex-col gap-4 my-4">
                      <span className="text-gray-500 text-sm">{k}</span>
                      <span>{val as string}</span>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <div className="grid grid-cols-5">
                {Object.entries(value).map(([k, val]) => (
                  <div key={k} className="flex flex-col gap-4">
                    <span className="text-gray-500">{k}</span>
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationDetails;
