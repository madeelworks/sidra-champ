import React, { useState } from "react";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [newTrainer, setNewTrainer] = useState("");
  const [newExpertise, setNewExpertise] = useState("");

  const handleAddTrainer = () => {
    if (newTrainer.trim() && newExpertise.trim()) {
      setTrainers([
        ...trainers,
        { name: newTrainer.trim(), expertise: newExpertise.trim() },
      ]);
      setNewTrainer("");
      setNewExpertise("");
    }
  };

  const handleRemoveTrainer = (index) => {
    const updatedTrainers = [...trainers];
    updatedTrainers.splice(index, 1);
    setTrainers(updatedTrainers);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Manage Trainers</h1>
      <div className="w-1/2 bg-white shadow-lg rounded-lg p-6">
        {/* Input for trainer name and expertise */}
        <div className="mb-4">
          <input
            type="text"
            value={newTrainer}
            onChange={(e) => setNewTrainer(e.target.value)}
            placeholder="Enter trainer's name"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            value={newExpertise}
            onChange={(e) => setNewExpertise(e.target.value)}
            placeholder="Enter expertise"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          onClick={handleAddTrainer}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-4"
        >
          Add Trainer
        </button>

        {/* Display list of trainers */}
        <ul className="list-disc pl-6">
          {trainers.map((trainer, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 bg-gray-100 px-4 py-2 rounded-lg shadow"
            >
              <div>
                <p className="font-bold text-gray-800">{trainer.name}</p>
                <p className="text-sm text-gray-600">Expertise: {trainer.expertise}</p>
              </div>
              <button
                onClick={() => handleRemoveTrainer(index)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trainers;
