import React from "react";
import { Progress } from "@/components/ui/progress";
import QuestionnaireForm from "./components/QuestionnaireForm";

const App: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="">
        {/* Header */}
        <div className="bg-[#3A6EA5] text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full p-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 h-8 text-[#3A6EA5]"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 12l3 3 6-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">AI Family Match</h1>
              <p className="text-sm">Reuniting Families Through Technology</p>
            </div>
          </div>

        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-4xl font-bold text-[#3A6EA5]">6,472</h2>
            <p className="text-[#4F4F4F]">Families Reunited</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-4xl font-bold text-[#3A6EA5]">6,472</h2>
            <p className="text-[#4F4F4F]">Families Reunited</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-4xl font-bold text-[#3A6EA5]">6,472</h2>
            <p className="text-[#4F4F4F]">Families Reunited</p>
          </div>
        </div>

        {/* How it works section */}
        <div className="bg-[#FFF8E8] border-l-8 border-[#F9A03F] rounded-lg p-6 mb-4">
          <div className="flex items-start gap-4">
            <div className="text-[#F9A03F]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                How It Works
              </h3>
              <p className="text-[#4F4F4F]">
                Our AI technology analyzes your answers and cross-references
                them with our database of over 200,000 records to find potential
                family matches. The more detailed your answers, the higher the
                chance of finding a match.
              </p>
            </div>
          </div>
        </div>

        {/* Questionnaire form */}
        <QuestionnaireForm />
      </div>
    </div>
  );
};

export default App;
