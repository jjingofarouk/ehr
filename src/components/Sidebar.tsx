import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard/patients" className="hover:text-gray-400">
              Patients
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/appointments" className="hover:text-gray-400">
              Appointments
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}