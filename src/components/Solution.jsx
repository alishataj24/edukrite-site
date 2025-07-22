import React from 'react';

const Solution = () => (
  <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900 text-center">
    <h3 className="text-2xl font-bold mb-6">We built what school forgot.</h3>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {['Confidence', 'Communication', 'Leadership', 'Mindset', 'Money'].map((skill, idx) => (
        <div key={idx} className="p-4 bg-white dark:bg-gray-800 rounded shadow-md">
          <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-300">{skill}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Bite-sized lessons Gen Z actually uses in life.</p>
        </div>
      ))}
    </div>
  </section>
);

export default Solution;