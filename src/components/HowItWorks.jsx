import React from 'react';

const HowItWorks = () => (
  <section className="px-6 py-16 text-center max-w-5xl mx-auto">
    <h3 className="text-2xl font-bold mb-6">How We’re Starting</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { title: 'School Workshops', desc: 'Fun, hands-on sessions that spark growth.' },
        { title: 'Gen Z Batches', desc: '4-week missions & live cohorts.' },
        { title: 'Creator Collabs', desc: 'Learn from faces Gen Z already follows.' },
      ].map((item, idx) => (
        <div key={idx} className="p-4 bg-white dark:bg-gray-800 rounded shadow-md">
          <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-300">{item.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;