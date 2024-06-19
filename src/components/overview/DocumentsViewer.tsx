import IdFront from "../assets/nationaId_front.png";
import IdBack from "../assets/nationalD_back.png";
import sig from "../assets/sig.png";
import React from "react";

const DocumentsViewer = () => {
  return (
    <div className="bg-white p-4 rounded-lg mt-6 mx-4 py-4">
      <h3 className="text-lg font-semibold mb-2 text-[#0078BD]">Attachment</h3>

      <div className="flex gap-4">
        <Viewer title="National ID Front" imgUrl={IdFront} />
        <Viewer title="National ID Back" imgUrl={IdBack} />
        <Viewer title="Signature" imgUrl={sig} />
      </div>
    </div>
  );
};

const Viewer = ({ title, imgUrl }) => {
  return (
    <div className="bg-white p-4 rounded-lg mt-6 mx-4 shadow-lg">
      <h3 className="text-sm font-semibold mb-2 text-[#354052]">{title}</h3>
      <img src={imgUrl} alt="image" className=" object-cover" />
    </div>
  );
};

export default DocumentsViewer;
