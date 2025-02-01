import api from "@/lib/api";
import { useEffect, useState } from "react";

// Assuming this is the structure of a patient
interface Patient {
  id: string;
  name: string;
  age: number;
  // Add more fields as needed
}

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await api.get('/patients');
        setPatients(response.data as Patient[]); // Specify the type here
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return { patients };
};
