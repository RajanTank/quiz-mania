import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-xl shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-lg font-bold text-purple-900 mb-4">Quiz rules</h2>
        <div className="space-y-4 text-sm text-gray-800">
          <div>
            <div className="bg-gray-100 font-semibold px-2 py-1 rounded  mb-1">
              10-Second Timer
            </div>
            <ul className="list-disc list-inside pl-2">
              <li>Each question comes with a 10-second timer.</li>
              <li>
                If you don’t answer within the time limit, the app will
                automatically move to the next question.
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-gray-100 font-semibold px-2 py-1 rounded  mb-1">
              Manual Navigation
            </div>
            <ul className="list-disc list-inside pl-2">
              <li>
                You can navigate to the next question manually before the timer
                expires.
              </li>
              <li>
                Use the “Next” button to move ahead if you’re ready before the
                timer runs out.
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-gray-100 font-semibold px-2 py-1 rounded mb-1">
              Final Score and Performance Message
            </div>
            <ul className="list-disc list-inside pl-2">
              <li>
                After all questions are answered, your final score will be
                displayed.
              </li>
              <li>
                Based on your performance, you will receive a personalized
                message:
                <ul className="pl-5 list-disc mt-1">
                  <li>
                    Great job!: If you score <strong>above 80%</strong>.
                  </li>
                  <li>
                    Well done!: If you score{" "}
                    <strong>between 60% and 80%</strong>.
                  </li>
                  <li>
                    Keep practicing!: If you score <strong>below 60%</strong>.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
