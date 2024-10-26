export default function LoadingSpinner() {
  return (
    <div className="flex pt-8 items-start justify-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}
