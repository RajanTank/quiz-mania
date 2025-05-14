import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {

  const location = useLocation();
  const { questionResult } = location.state || {};
  const navigate = useNavigate()

  const score = (questionResult.correctAnswer / questionResult.totalQuestion) * 100


  return (
    <div class="text-center mt-20">

      <h1 class="text-[#2E2A4A] tracking-widest text-[18px] md:text-[20px] font-semibold mb-1">
        {score > 80 ? 'C O N G R A T U L A T I O N' : "Keep practicing!"}
      </h1>
      <p class="text-[#2E2A4A] text-[10px] md:text-[12px] font-semibold mb-6">
        <span class="font-normal">
          You successfully completed the Quiz and holds
        </span>
      </p>
      <p class="text-[#2E2A4A] text-[14px] md:text-[16px] mb-1">
        Your Score
      </p>
      <p class="text-[#00B050] font-extrabold text-[24px] md:text-[28px] mb-1">
        {score.toFixed(0)} %
      </p>
      {score > 80 && <p class="text-[#2E2A4A] font-extrabold text-[18px] md:text-[20px] mb-6">
        Great job!
      </p>}
      <div class="border border-[#D9D9D9] rounded-md p-4 mb-6 text-center text-[10px] md:text-[12px] text-[#2E2A4A]">
        <p class="mb-2 font-semibold">
          Out of {questionResult.totalQuestion} question
        </p>
        <p>
          <span class="text-[#00B050] font-semibold">
            {questionResult.correctAnswer}
          </span>
          {" "} Correct
          <span class="text-[#B22222] font-semibold ml-3">
            {questionResult.wrongAnswer}
          </span>
          {" "}  Incorrect
          <span class="ml-3">
            {questionResult.skippedQuestion} Not answered
          </span>
        </p>
      </div>
      <button onClick={() => navigate("/")} class="text-[#B22222] border border-[#B22222] text-[10px] md:text-[12px] px-4 py-1 rounded-md font-semibold hover:bg-[#B22222] hover:text-white transition-colors duration-300" type="button">
        Retake Quiz
      </button>
    </div>
  )
}

export default Result