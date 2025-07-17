import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0 z-50">
      <div className="grid grid-cols-4 h-20">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center space-y-1 cursor-pointer no-underline ${
            isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-500'
          }`}
        >
          <i className="fas fa-home text-2xl"></i>
          <span className="text-sm font-medium">홈</span>
        </Link>
        <Link 
          to="/sleep-record"
          className={`flex flex-col items-center justify-center space-y-1 cursor-pointer no-underline ${
            isActive('/sleep-record') ? 'text-blue-600 bg-blue-50' : 'text-gray-500'
          }`}
        >
          <i className="fas fa-chart-line text-2xl"></i>
          <span className="text-sm font-medium">수면 기록</span>
        </Link>
        <Link
          to="/program"
          className={`flex flex-col items-center justify-center space-y-1 cursor-pointer no-underline ${
            isActive('/program') ? 'text-blue-600 bg-blue-50' : 'text-gray-500'
          }`}
        >
          <i className="fas fa-graduation-cap text-2xl"></i>
          <span className="text-sm font-medium">프로그램</span>
        </Link>
        <Link
          to="/settings"
          className={`flex flex-col items-center justify-center space-y-1 cursor-pointer no-underline ${
            isActive('/settings') ? 'text-blue-600 bg-blue-50' : 'text-gray-500'
          }`}
        >
          <i className="fas fa-cog text-2xl"></i>
          <span className="text-sm font-medium">설정</span>
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
