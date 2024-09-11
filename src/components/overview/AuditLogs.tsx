import timeline from "../assets/timeline.png";
import React from "react";

interface Comment {
  author: string;
  content: string;
}

const comments: Comment[] = [
  {
    author: "William",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    author: "Archie",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    author: "Hazel",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

const AuditLogs = () => {
  return (
    <div>
      <div className="w-full rounded-md overflow-hidden">
        <img src={timeline} alt="timeline" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg  mb-4">COMMENTS</h2>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <h3 className="text-blue-500  mb-2">
                {comment.author} -
              </h3>
              <p className="text-gray-700 text-sm">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;
