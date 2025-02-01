import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the EHR System</h1>
        <p className="mb-6">Manage patient records, appointments, and more.</p>
        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}