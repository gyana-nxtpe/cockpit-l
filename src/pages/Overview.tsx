import { BASE_PAGE_URL } from "@/constants/url.constant";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const [openFlapId, setOpenFlapId] = useState<string | null>(null);
  const navigate = useNavigate();

  const colorClasses = {
    green: "bg-green-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quick Stats</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Pending with me</h3>
          <p className="text-2xl font-bold text-blue-500">120</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">In Progress</h3>
          <p className="text-2xl font-bold text-orange-500">89</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Closed</h3>
          <p className="text-2xl font-bold text-gray-500">20</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Rejected</h3>
          <p className="text-2xl font-bold text-red-500">20</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Overall</h3>
          <p className="text-2xl font-bold">345</p>
        </div>
      </div>

      {/* Tabs */}
      {/* <div className="mb-6">
        <div className="flex border-b">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            All
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Pending with me
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            In Progress
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Closed
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Rejected
          </button>
        </div>
      </div> */}

      {/* Search */}
      <div className="flex justify-end mb-4 mt-10">
        <input
          type="text"
          placeholder="Search keyword"
          className="px-3 py-2 border rounded-md"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-[#0078BE15]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Application No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submitted Date With Ageing
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Insurance Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Insurance Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Insurance Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                id: "5533",
                name: "John Smith",
                submittedDate: "20-05-2024\n3 Days",
                startDate: "20-05-2024",
                insuranceType: "Comprehensive",
                amount: "UGX 1,000,000",
              },
              {
                id: "5534",
                name: "Oliver Edison",
                submittedDate: "21-05-2024\n4 Days",
                startDate: "20-05-2024",
                insuranceType: "Comprehensive",
                amount: "UGX 1,000,000",
              },
              {
                id: "5535",
                name: "Henry Noah",
                submittedDate: "22-05-2024\n4 Days",
                startDate: "20-05-2024",
                insuranceType: "Comprehensive",
                amount: "UGX 1,000,000",
              },
              {
                id: "5536",
                name: "Oscar Archie",
                submittedDate: "23-05-2024\n5 Days",
                startDate: "20-05-2024",
                insuranceType: "Fire and Theft",
                amount: "UGX 1,000,000",
              },
              {
                id: "5537",
                name: "Arthur Benjamin",
                submittedDate: "24-05-2024\n6 Days",
                startDate: "20-05-2024",
                insuranceType: "Fire and Theft",
                amount: "UGX 1,000,000",
              },
            ].map((app, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 cursor-pointer"
                    onClick={() =>
                      setOpenFlapId(openFlapId === app.id ? null : app.id)
                    }
                  >
                    {app.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {app.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {app.submittedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {app.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {app.insuranceType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {app.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        className="text-gray-400 hover:text-gray-500"
                        onClick={() => navigate(`/${BASE_PAGE_URL}/dashboard`)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="text-green-400 hover:text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="text-red-400 hover:text-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                {openFlapId === app.id && (
                  <tr>
                    <td colSpan={7}>
                      <div className="bg-gray-100 p-4">
                        <div className="flex items-center justify-between relative">
                          {/* <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 z-0"></div> */}
                          <div className="absolute top-[11%] left-0 right-0 h-0.5 z-10 w-[90%] mx-auto">
                            <div className="w-full h-full border-t-2 border-gray-300 border-dashed"></div>
                          </div>

                          {[
                            {
                              status: "Submitted",
                              color: "green",
                              name: "Hussam Baday",
                            },
                            {
                              status: "Approved",
                              color: "purple",
                              name: "Kelvin",
                            },
                            {
                              status: "Pending Approval",
                              color: "yellow",
                              name: "Mukesh Singla",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center z-20"
                            >
                              <div
                                className={`rounded-full h-5 w-5 ${
                                  colorClasses[item.color]
                                } flex items-center justify-center mb-2`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-2 w-2 text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div className="text-center">
                                <span
                                  className={`font-semibold text-${item.color}-500`}
                                >
                                  {item.status}
                                </span>
                                <p className="text-sm text-gray-600">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                  02-05-2020 05:40 PM
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
