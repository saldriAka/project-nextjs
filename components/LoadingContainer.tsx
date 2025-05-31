import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

function LoadingContainer() {
  return (
    <div className="p-4 space-y-4">
      <Skeleton className="h-8 w-32" /> {/* Title skeleton */}
      
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-md space-y-2">
            <Skeleton className="h-4 w-3/4" /> {/* Name */}
            <Skeleton className="h-4 w-1/2" /> {/* Email */}
          </div>
        ))}
      </div>
    </div>
  );
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className='p-4'>
        <Skeleton className='h-48 w-full' />
        <Skeleton className='h-4 w-3/4 mt-4' />
        <Skeleton className='h-4 w-1/2 mt-4' />
      </CardContent>
    </Card>
  );
}
export default LoadingContainer;
