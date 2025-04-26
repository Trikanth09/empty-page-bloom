
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Doctor } from "@/types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const specialtiesToShow = doctor.specialties.length > 0 ? doctor.specialties : ['General Physician'];
  const avatarUrl = doctor.avatarUrl || doctor.photo;

  return (
    <Card 
      className="mb-4 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group" 
      data-testid="doctor-card"
    >
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0">
            <Avatar className="h-20 w-20 transition-transform duration-300 group-hover:scale-105" aria-label={`${doctor.name}'s profile picture`}>
              {avatarUrl && (
                <AvatarImage 
                  src={avatarUrl} 
                  alt={doctor.name}
                  className="object-cover"
                />
              )}
              <AvatarFallback className="text-lg bg-blue-100 text-blue-800">
                {doctor.name_initials || getInitials(doctor.name)}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-grow space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-300" data-testid="doctor-name">
                  {doctor.name}
                </h3>
                <p className="text-gray-600" data-testid="doctor-specialty">
                  {specialtiesToShow.join(", ")}
                </p>
                <p className="text-gray-500">{doctor.qualifications}</p>
              </div>
              
              <div className="mt-2 sm:mt-0 text-right">
                <p className="text-lg font-semibold text-blue-700" data-testid="doctor-fee">
                  ₹{doctor.fees}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between">
              <div>
                <p className="text-sm text-gray-600" data-testid="doctor-experience">
                  <span className="font-medium">{doctor.experience} years</span> of experience
                </p>
                <p className="text-sm text-gray-600">
                  {doctor.clinicName}, {doctor.location}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {doctor.consultationType.map((type) => (
                  <span
                    key={type}
                    className={`text-xs px-2 py-1 rounded-full transition-colors duration-300 ${
                      type === "Video Consult"
                        ? "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
                        : "bg-green-100 text-green-700 group-hover:bg-green-200"
                    }`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 transition-colors duration-300 group-hover:bg-gray-100">
        <Button className="w-full md:w-auto ml-auto transition-all duration-300 hover:scale-105">
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
}
