import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal";
import CategorySelection from "../components/categorySelection";

const HomePage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#fafaf6] flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to <span className="text-pink-600">QuizMania</span></h1>
        <div>
          <div className="bg-[#D9D9D94D] py-4  px-6 mb-4 rounded-md">
            <p className="text-sm text-gray-600 mb-2">
              Please read all the rules about this quiz before you start.
            </p>
            <button
              className="text-pink-600 text-sm underline "
              onClick={() => setModalOpen(true)}
            >
              Quiz rules
            </button>
          </div>
          <div>
            <p className="text-gray-600 mb-2">Full name</p>
            <input
              type="text"
              placeholder="Full name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md mb-6"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <CategorySelection categories={quizData.categories} selectedCategory={category} handleChange={(e) => setCategory(e.target.value)} />
        <button
          disabled={!name || !category}
          onClick={() => navigate("/quiz", { state: { name, category } })}
          className="bg-pink-500 text-white px-6 py-2 rounded disabled:bg-pink-300"
        >
          Start Quiz
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
          <p className="text-gray-700">You can put any content here.</p>
        </Modal>
      </div>
    </>
  );
};

export default HomePage;



let quizData =
{
  "categories": [
    {
      "id": "js_basics",
      "name": "JavaScript Basics",
      "questions": [
        {
          "id": "q1",
          "question": "What is the correct syntax for referring to an external script called 'script.js'?",
          "options": [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        }
      ]
    },
    {
      "id": "js_basics",
      "name": "JavaScript Basics",
      "questions": [
        {
          "id": "q1",
          "question": "What is the correct syntax for referring to an external script called 'script.js'?",
          "options": [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        }
      ]
    },
    {
      "id": "js_basics",
      "name": "JavaScript Basics",
      "questions": [
        {
          "id": "q1",
          "question": "What is the correct syntax for referring to an external script called 'script.js'?",
          "options": [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        }
      ]
    }
  ]
}