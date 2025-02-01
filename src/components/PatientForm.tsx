import { useState } from 'react';

export default function PatientForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to submit the form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter patient name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          id="age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter patient age"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="gender">
          Gender
        </label>
        <select
          id="gender"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Add Patient
      </button>
    </form>
  );
}