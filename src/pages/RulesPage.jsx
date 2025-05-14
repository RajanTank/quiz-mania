const RulesPage = () => {
  return (
    <div className="min-h-screen bg-white p-10">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Quiz Rules</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Read the question carefully.</li>
        <li>Select the correct answer.</li>
        <li>You cannot go back once an answer is submitted.</li>
        <li>Results will be shown at the end.</li>
      </ul>
    </div>
  );
};

export default RulesPage;