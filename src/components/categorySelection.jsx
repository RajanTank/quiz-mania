import React from "react";

const CategorySelection = ({
  handleChange,
  selectedCategory,
  categories
}) => {

  return (
    <div className=" flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <h2 className="text-gray-700 text-sm mb-4 font-medium">
          Please select topic to continue
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {categories.map((topic) => (
            <label
              key={topic.id}
              className={`flex items-center border rounded-lg px-4 py-3 cursor-pointer transition ${selectedCategory === topic
                ? "border-radio-selected"
                : "border-radio-text"
                }`}
            >
              <input
                type="radio"
                name="topic"
                value={topic.id}
                checked={selectedCategory === topic.id}
                onChange={handleChange}
                className="form-radio text-purple-700 mr-3"
              />
              <span className="text-radio-label font-medium">{topic.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
