import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-lg text-gray-700">
          If you see styled text with a blue heading, rounded card, and shadow,
          Tailwind CSS is working in your Vite project!
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;