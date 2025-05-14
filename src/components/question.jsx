import React from 'react';

const Question = ({
  questionDetails,
  questionNumber,
  totalQuestion,
  handleOptionChange,
  nextQuestion,
  timer,
  selectedOption
}) => {

  const parsedOption = () => {
    return questionDetails.options.map(option => {
      const [label, ...rest] = option.split('. ');
      return {
        value: label.trim(),
        text: rest.join('. ').trim()
      };
    });
  }

  const questionInfo = { ...questionDetails, options: parsedOption() }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" p-6 w-2xl">
        <div class="mx-auto">
          <div class="flex justify-between items-center mb-2">
            <div class="text-[#B91C4A] font-semibold text-sm leading-5">
              {questionNumber} <span class="font-normal text-black/80">/{totalQuestion}</span>
            </div>
            <div class="text-xs text-black/60 bg-[#D9D9D9] rounded px-3 py-1 select-none">
              {`0:${String(timer).padStart(2, '0')}`}
            </div>
          </div>
          <div class="w-full h-1 bg-[#D9D9D9] rounded overflow-hidden">
            <div id={`progress-${questionNumber}`} class={`h-1 bg-[#B91C4A] w-${questionNumber}/10`}></div>
          </div>
        </div>
        <h2 className="mt-4 text-lg">{questionNumber} {questionDetails.question}</h2>
        <div className="mt-6">
          {questionInfo.options.map((option, index) => (
            <div key={index} className={`flex border border-radio-text rounded-lg px-4 py-3 
            cursor-pointer transition items-center mb-4
            `}>
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => handleOptionChange(option.value)}
                className="mr-2 text-blue-600"
              />
              <label htmlFor={`option-${index}`} className="text-gray-700"> {option.text}</label>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={() => nextQuestion(selectedOption ? String(selectedOption) === String(questionInfo.correctAnswer) : null,)}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            disabled={selectedOption === null}
          >
            Next
          </button>
          <button className="text-gray-600" onClick={nextQuestion}>Skip this question</button>
        </div>
      </div>
    </div>
  );
};

export default Question;