export default function AppointmentCard({ appointment }: { appointment: any }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">{appointment.patient}</h3>
        <p className="text-sm text-gray-600">{appointment.date}</p>
      </div>
    );
  }