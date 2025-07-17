// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [sleepStarted, setSleepStarted] = useState(false);
  const weeklyProgress = [
    { week: 1, title: '수면 생리 교육', progress: 75, completed: true },
    { week: 2, title: '수면 습관 형성', progress: 45, completed: false },
    { week: 3, title: '생활 습관 점검', progress: 0, completed: false },
    { week: 4, title: '이완 반응 훈련', progress: 0, completed: false },
    { week: 5, title: '사고 전환 훈련', progress: 0, completed: false },
    { week: 6, title: '재발 방지 전략', progress: 0, completed: false },
  ];

  const todayMissions = [
    { id: 1, title: '수면 일기 작성하기', completed: true },
    { id: 2, title: '취침 2시간 전 카페인 금지', completed: false },
    { id: 3, title: '이완 호흡법 연습', completed: false },
  ];

  const handleSleepToggle = () => {
    setSleepStarted(!sleepStarted);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://readdy.ai/api/search-image?query=Sleep%20improvement%20app%20logo%20icon%2C%20moon%20and%20stars%2C%20peaceful%20night%20theme%2C%20minimalist%20design%2C%20soft%20blue%20and%20purple%20gradient%20colors%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20modern%20clean%20style%2C%20gentle%20curves%2C%20calming%20aesthetic&width=48&height=48&seq=logo001&orientation=squarish"
              alt="잠이솔솔 로고"
              className="w-12 h-12 object-cover rounded-full"
            />
            <h1 className="text-2xl font-bold text-gray-800">잠이솔솔</h1>
          </div>
          <button className="p-3 bg-blue-100 rounded-full cursor-pointer">
            <i className="fas fa-microphone text-blue-600 text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-24 px-6 space-y-6">
        {/* Sleep Record Button */}
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <h3 className="text-lg font-medium text-gray-800 mb-6">수면 기록</h3>
          <button
            onClick={handleSleepToggle}
            className={`w-32 h-32 rounded-xl mx-auto flex items-center justify-center text-white text-2xl font-bold transition-all duration-300 cursor-pointer ${
              sleepStarted
                ? 'bg-gradient-to-r from-orange-400 to-red-500 shadow-lg'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
            }`}
          >
            {sleepStarted ? (
              <div className="text-center">
                <i className="fas fa-sun text-3xl mb-2"></i>
                <div className="text-sm">기상</div>
              </div>
            ) : (
              <div className="text-center">
                <i className="fas fa-moon text-3xl mb-2"></i>
                <div className="text-sm">취침</div>
              </div>
            )}
          </button>
          <p className="text-gray-600 mt-4 text-lg">
            {sleepStarted ? '좋은 아침입니다! 기상 시간을 기록해주세요' : '편안한 밤 되세요. 취침 시간을 기록해주세요'}
          </p>
        </div>

        {/* Today's Missions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-4">오늘의 미션</h3>
          <div className="space-y-3">
            {todayMissions.map((mission) => (
              <div key={mission.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    mission.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  {mission.completed && <i className="fas fa-check text-white text-sm"></i>}
                </div>
                <span
                  className={`flex-1 text-base ${
                    mission.completed ? 'text-gray-500 line-through' : 'text-gray-800'
                  }`}
                >
                  {mission.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Coach Message */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-robot text-blue-600 text-xl"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-2">AI 수면 코치</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                안녕하세요! 오늘 수면 일기 작성을 완료하셨네요. 훌륭합니다!
                취침 2시간 전 카페인 섭취를 피하시면 더 좋은 수면을 취하실 수 있어요.
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-4">이번 주 수면 요약</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-1">7.2시간</div>
              <div className="text-sm text-gray-600">평균 수면시간</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">수면 효율성</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;