
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function DoctorCardSkeleton() {
  return (
    <Card className="mb-4 overflow-hidden transition-all duration-300 animate-pulse">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="flex-grow space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="space-y-2">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-6 w-20 mt-2 sm:mt-0" />
            </div>
            <div className="flex flex-col sm:flex-row justify-between pt-2">
              <div className="space-y-2">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-52" />
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4">
        <Skeleton className="h-10 w-40 ml-auto" />
      </CardFooter>
    </Card>
  );
}
