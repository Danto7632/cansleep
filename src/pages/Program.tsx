// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Program: React.FC = () => {
  const currentProgress = {
    total: 24,
    completed: 8,
    inProgress: 3,
    percentage: 46
  };

  const recommendedPrograms = [
    {
      id: 1,
      title: '7일 수면 개선 챌린지',
      description: '체계적인 수면 습관 형성을 위한 단계별 가이드',
      duration: '7일',
      image: 'https://readdy.ai/api/search-image?query=Peaceful%20bedroom%20scene%20with%20soft%20lighting%2C%20comfortable%20bed%20with%20white%20linens%2C%20minimalist%20modern%20interior%20design%2C%20calming%20atmosphere%2C%20warm%20ambient%20light%2C%20clean%20and%20serene%20environment%2C%20sleep%20wellness%20concept%2C%20relaxing%20bedroom%20setup%2C%20professional%20photography%20style%2C%20soft%20shadows%2C%20neutral%20color%20palette&width=280&height=160&seq=prog001&orientation=landscape',
      tag: '추천',
      progress: 30
    },
    {
      id: 2,
      title: '수면 명상 기초 과정',
      description: '마음을 편안하게 하는 명상 기법 학습',
      duration: '14일',
      image: 'https://readdy.ai/api/search-image?query=Meditation%20and%20relaxation%20scene%20with%20person%20sitting%20peacefully%2C%20soft%20natural%20lighting%2C%20zen%20atmosphere%2C%20mindfulness%20concept%2C%20calm%20and%20serene%20environment%2C%20wellness%20and%20mental%20health%2C%20peaceful%20meditation%20space%2C%20minimalist%20design%2C%20soothing%20colors%2C%20tranquil%20setting&width=280&height=160&seq=prog002&orientation=landscape',
      tag: 'NEW',
      progress: 0
    },
    {
      id: 3,
      title: '수면 환경 최적화',
      description: '완벽한 수면 환경 조성을 위한 실용적 팁',
      duration: '5일',
      image: 'https://readdy.ai/api/search-image?query=Optimized%20sleep%20environment%20with%20perfect%20bedroom%20setup%2C%20blackout%20curtains%2C%20comfortable%20temperature%2C%20clean%20organized%20space%2C%20sleep%20hygiene%20concept%2C%20modern%20bedroom%20design%2C%20wellness%20lifestyle%2C%20peaceful%20atmosphere%2C%20professional%20interior%20photography&width=280&height=160&seq=prog003&orientation=landscape',
      tag: '인기',
      progress: 60
    }
  ];

  const categories = [
    {
      id: 'education',
      title: '수면 교육 콘텐츠',
      description: '수면의 과학과 건강한 수면 습관에 대한 전문 지식',
      icon: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20Education%20book%20and%20brain%20symbol%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20blue%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=80&height=80&seq=cat001&orientation=squarish',
      progress: 65,
      totalPrograms: 12
    },
    {
      id: 'guide',
      title: '가이드 프로그램',
      description: '단계별 수면 개선을 위한 체계적인 실습 과정',
      icon: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20Step%20by%20step%20guide%20with%20checklist%20and%20path%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20green%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=80&height=80&seq=cat002&orientation=squarish',
      progress: 40,
      totalPrograms: 8
    },
    {
      id: 'tips',
      title: '수면 개선 팁',
      description: '일상에서 바로 적용할 수 있는 실용적인 수면 팁',
      icon: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20Light%20bulb%20with%20tips%20and%20ideas%20symbol%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20yellow%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=80&height=80&seq=cat003&orientation=squarish',
      progress: 80,
      totalPrograms: 15
    },
    {
      id: 'meditation',
      title: '명상/이완 프로그램',
      description: '깊은 휴식과 마음의 평온을 위한 명상 및 이완 기법',
      icon: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%2C%20Meditation%20lotus%20pose%20with%20peaceful%20zen%20symbol%2C%20subject%20fills%2080%20percent%20of%20frame%2C%20vibrant%20purple%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=80&height=80&seq=cat004&orientation=squarish',
      progress: 25,
      totalPrograms: 10
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              to="/"
              className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
            >
              <i className="fas fa-arrow-left text-gray-600 text-xl"></i>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">수면 개선 프로그램</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <i className="fas fa-search text-gray-600 text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-24 px-6 space-y-6">
        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">전체 진행 현황</h2>
              <p className="text-blue-100 text-sm">꾸준한 학습으로 수면의 질을 개선해보세요</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{currentProgress.percentage}%</div>
              <div className="text-blue-100 text-sm">완료율</div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded-full h-3 mb-4">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-500"
              style={{ width: `${currentProgress.percentage}%` }}
            ></div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex space-x-6">
              <div>
                <span className="text-blue-100">진행 중</span>
                <span className="ml-2 font-semibold">{currentProgress.inProgress}개</span>
              </div>
              <div>
                <span className="text-blue-100">완료</span>
                <span className="ml-2 font-semibold">{currentProgress.completed}개</span>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-xl font-medium text-sm cursor-pointer hover:bg-blue-50 transition-colors">
              계속하기
            </button>
          </div>
        </div>

        {/* Recommended Programs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">추천 프로그램</h3>
            <button className="text-blue-600 text-sm font-medium cursor-pointer">
              전체보기 <i className="fas fa-chevron-right ml-1"></i>
            </button>
          </div>
          
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {recommendedPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-sm min-w-72 cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      program.tag === '추천' ? 'bg-blue-600 text-white' :
                      program.tag === 'NEW' ? 'bg-green-600 text-white' :
                      'bg-orange-600 text-white'
                    }`}>
                      {program.tag}
                    </span>
                  </div>
                  {program.progress > 0 && (
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg text-xs">
                      {program.progress}% 완료
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{program.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="fas fa-clock mr-1"></i>
                      <span>{program.duration}</span>
                    </div>
                    <button className="text-blue-600 text-sm font-medium cursor-pointer">
                      시작하기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Categories */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">프로그램 카테고리</h3>
          
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-5 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{category.title}</h4>
                      <span className="text-sm text-gray-500">{category.totalPrograms}개</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                          style={{ width: `${category.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{category.progress}%</span>
                    </div>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">빠른 실행</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center cursor-pointer hover:bg-blue-100 transition-colors">
              <i className="fas fa-play-circle text-blue-600 text-2xl mb-2"></i>
              <div className="text-sm font-medium text-blue-700">오늘의 명상</div>
            </button>
            <button className="bg-green-50 border border-green-200 rounded-xl p-4 text-center cursor-pointer hover:bg-green-100 transition-colors">
              <i className="fas fa-moon text-green-600 text-2xl mb-2"></i>
              <div className="text-sm font-medium text-green-700">수면 준비</div>
            </button>
            <button className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center cursor-pointer hover:bg-purple-100 transition-colors">
              <i className="fas fa-book-open text-purple-600 text-2xl mb-2"></i>
              <div className="text-sm font-medium text-purple-700">학습 계속하기</div>
            </button>
            <button className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center cursor-pointer hover:bg-orange-100 transition-colors">
              <i className="fas fa-lightbulb text-orange-600 text-2xl mb-2"></i>
              <div className="text-sm font-medium text-orange-700">오늘의 팁</div>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0 z-50">
        <div className="grid grid-cols-4 h-20">
          <Link 
            to="/"
            className="flex flex-col items-center justify-center space-y-1 cursor-pointer text-gray-500 no-underline"
          >
            <i className="fas fa-home text-2xl"></i>
            <span className="text-sm font-medium">홈</span>
          </Link>
          <button className="flex flex-col items-center justify-center space-y-1 cursor-pointer text-gray-500">
            <i className="fas fa-chart-line text-2xl"></i>
            <span className="text-sm font-medium">수면 기록</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1 cursor-pointer text-blue-600 bg-blue-50">
            <i className="fas fa-graduation-cap text-2xl"></i>
            <span className="text-sm font-medium">프로그램</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1 cursor-pointer text-gray-500">
            <i className="fas fa-cog text-2xl"></i>
            <span className="text-sm font-medium">설정</span>
          </button>
        </div>
      </nav>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Program;
