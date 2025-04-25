
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { FilterPanel } from "@/components/FilterPanel";
import { DoctorCard } from "@/components/DoctorCard";
import { useDoctorData } from "@/hooks/useDoctorData";

const Index = () => {
  const {
    doctors,
    loading,
    error,
    specialties,
    searchQuery,
    consultationType,
    selectedSpecialties,
    sortBy,
    updateFilters,
    getAutocompleteSuggestions,
  } = useDoctorData();

  const handleSearch = (query: string) => {
    updateFilters({ search: query });
  };

  const handleSpecialtyChange = (specialties: string[]) => {
    updateFilters({ specialties });
  };

  const handleConsultationTypeChange = (type: string | null) => {
    updateFilters({ consultationType: type as any });
  };

  const handleSortChange = (sort: string | null) => {
    updateFilters({ sortBy: sort as any });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <header className="bg-blue-700 py-6">
        <div className="container mx-auto px-4">
          <SearchBar 
            searchQuery={searchQuery}
            onSearch={handleSearch}
            getAutocompleteSuggestions={getAutocompleteSuggestions}
          />
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <FilterPanel
              specialties={specialties}
              selectedSpecialties={selectedSpecialties}
              consultationType={consultationType}
              sortBy={sortBy}
              onSpecialtyChange={handleSpecialtyChange}
              onConsultationTypeChange={handleConsultationTypeChange}
              onSortChange={handleSortChange}
            />
          </div>
          
          <div className="md:col-span-2 lg:col-span-3">
            {loading ? (
              <div className="text-center py-8">Loading doctors...</div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">{error}</div>
            ) : doctors.length === 0 ? (
              <div className="text-center py-8">
                No doctors found. Please try adjusting your filters.
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-4">Found {doctors.length} Doctors</h2>
                <div className="space-y-4">
                  {doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
