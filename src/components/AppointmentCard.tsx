interface Appointment {
  patient: string;
  date: string;
  // Add more appointment fields if needed
}

export default function AppointmentCard({ appointment }: { appointment: Appointment }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{appointment.patient}</h3>
      <p className="text-sm text-gray-600">{appointment.date}</p>
    </div>
  );
}
