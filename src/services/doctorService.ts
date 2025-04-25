
import { Doctor } from "@/types/doctor";

export async function fetchDoctors(): Promise<Doctor[]> {
  try {
    const response = await fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json");
    
    if (!response.ok) {
      throw new Error("Failed to fetch doctor data");
    }
    
    const data = await response.json();
    return data.map((doctor: any) => ({
      id: doctor.id || String(Math.random()),
      name: doctor.name || "",
      specialties: doctor.specialties || [],
      qualifications: doctor.qualifications || "",
      experience: doctor.experience || 0,
      fees: doctor.fees || 0,
      location: doctor.location || "",
      clinicName: doctor.clinicName || "",
      consultationType: doctor.consultationType || ["Video Consult", "In Clinic"],
      avatarUrl: doctor.avatarUrl || null,
    }));
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
}
