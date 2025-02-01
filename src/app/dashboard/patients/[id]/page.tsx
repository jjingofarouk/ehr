export default function PatientDetailsPage({
    params,
  }: {
    params: { id: string };
  }) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Patient Details</h1>
        <p>Details for patient with ID: {params.id}</p>
      </div>
    );
  }