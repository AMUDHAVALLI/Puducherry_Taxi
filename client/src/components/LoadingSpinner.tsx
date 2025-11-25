export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-primary/20"></div>
          <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Loading...</h3>
          <p className="text-sm text-muted-foreground">Please wait while we prepare your taxi service</p>
        </div>
      </div>
    </div>
  );
}