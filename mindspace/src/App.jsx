import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true); // default: dark

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <header className="text-3xl font-bold text-center mb-6">
        🧠 MindSpace
      </header>

      <div className="text-center mb-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <main className="max-w-xl mx-auto">
        <p className="text-center text-lg">
          Welcome to your personal journal and mood space.
        </p>
      </main>
    </div>
  );
}

export default App;
