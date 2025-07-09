export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">🔍 페이지를 찾을 수 없습니다</h1>
        <p className="text-gray-600 mb-6">
          요청하신 상담 내용을 찾을 수 없습니다.<br />
          링크가 잘못되었거나 만료되었을 수 있습니다.
        </p>
        <div className="space-y-3 text-sm text-gray-500">
          <p>• 링크를 다시 확인해주세요</p>
          <p>• 7일이 지난 링크는 자동 만료됩니다</p>
          <p>• 문제가 지속되면 관리자에게 문의하세요</p>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-400">빅데이터기술연구원(주)</p>
        </div>
      </div>
    </div>
  );
} 