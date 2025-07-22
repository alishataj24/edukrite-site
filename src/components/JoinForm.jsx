import React from 'react';

const JoinForm = () => (
  <section className="px-6 py-16 bg-purple-50 dark:bg-purple-900 text-center">
    <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-white">Join the Waitlist</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Be the first to get access when we launch.</p>
    <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto space-y-4">
      <input type="email" name="email" required placeholder="Your Email" className="w-full px-4 py-2 rounded border" />
      <button type="submit" className="w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-800">Join</button>
    </form>
  </section>
);

export default JoinForm;