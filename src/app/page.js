
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 font-aeonik">
        Welcome to My Next.js App!
      </h1>
      <p className="mt-4 text-xl text-gray-700 font-polysans">
        This is a simple starter layout with Tailwind CSS and custom fonts.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}
