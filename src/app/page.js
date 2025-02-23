import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Home Page</h1>
      <p className="text-lg text-gray-700 mb-6">Explore our latest  posts!</p>

      <Link href="/blog" passHref>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Go to Blog Page
        </button>
      </Link>
    </div>
  );
}
