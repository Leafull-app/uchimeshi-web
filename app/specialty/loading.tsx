export default function SpecialtyLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="h-9 w-48 bg-gray-100 rounded-lg animate-pulse mb-8" />
      <div className="h-12 bg-gray-100 rounded-xl animate-pulse mb-6" />
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-orange-50">
                <div className="h-48 bg-gray-100 animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-16 bg-gray-100 animate-pulse rounded-full" />
                  <div className="h-5 bg-gray-100 animate-pulse rounded" />
                  <div className="h-4 bg-gray-100 animate-pulse rounded" />
                  <div className="h-4 w-3/4 bg-gray-100 animate-pulse rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-64 shrink-0">
          <div className="bg-white rounded-2xl p-5 border border-orange-50 space-y-4">
            <div className="h-4 w-16 bg-gray-100 animate-pulse rounded" />
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-24 bg-gray-100 animate-pulse rounded-xl" />
                <div className="h-3 w-12 bg-gray-100 animate-pulse rounded-full" />
                <div className="h-4 bg-gray-100 animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
