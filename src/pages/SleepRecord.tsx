// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SleepDataEntry {
  quality: number;
  hours: number;
}

interface SleepDataType {
  [key: number]: SleepDataEntry;
}

const SleepRecord: React.FC = () => {
const [selectedPeriod, setSelectedPeriod] = useState('월별');
const [selectedDate, setSelectedDate] = useState(15);
const [sleepTime, setSleepTime] = useState('23:30');
const [wakeTime, setWakeTime] = useState('07:00');
const [sleepQuality, setSleepQuality] = useState(4);
const [sleepNote, setSleepNote] = useState('');
const currentMonth = '2024년 1월';
const daysInMonth = 31;
const startDay = 1; // Monday

const sleepData: SleepDataType = {
1: { quality: 3, hours: 6.5 },
2: { quality: 4, hours: 7.2 },
3: { quality: 2, hours: 5.8 },
4: { quality: 4, hours: 7.8 },
5: { quality: 5, hours: 8.1 },
6: { quality: 3, hours: 6.9 },
7: { quality: 4, hours: 7.5 },
8: { quality: 5, hours: 8.2 },
9: { quality: 3, hours: 6.7 },
10: { quality: 4, hours: 7.3 },
11: { quality: 2, hours: 5.5 },
12: { quality: 4, hours: 7.6 },
13: { quality: 5, hours: 8.0 },
14: { quality: 3, hours: 6.8 },
15: { quality: 4, hours: 7.4 },
16: { quality: 3, hours: 6.6 },
17: { quality: 4, hours: 7.7 }
};
const getSleepColor = (quality: number) => {
if (quality >= 4) return 'bg-blue-600';
if (quality >= 3) return 'bg-blue-300';
return 'bg-gray-400';
};
const renderCalendar = () => {
const days = [];
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
// Week headers
weekDays.forEach(day => {
days.push(
<div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
{day}
</div>
);
});
// Empty cells for start of month
for (let i = 0; i < startDay; i++) {
days.push(<div key={`empty-${i}`} className="p-2"></div>);
}
// Calendar days
for (let day = 1; day <= daysInMonth; day++) {
const sleepInfo = sleepData[day];
const isSelected = day === selectedDate;
const isToday = day === 15;
days.push(
<div
key={day}
onClick={() => setSelectedDate(day)}
className={`relative p-2 text-center cursor-pointer rounded-lg transition-all ${
isSelected ? 'bg-blue-100 ring-2 ring-blue-500' :
isToday ? 'bg-blue-50' : 'hover:bg-gray-50'
}`}
>
<div className={`text-sm font-medium ${
isToday ? 'text-blue-600' : 'text-gray-800'
}`}>
{day}
</div>
{sleepInfo && (
<div className={`w-2 h-2 rounded-full mx-auto mt-1 ${getSleepColor(sleepInfo.quality)}`}></div>
)}
</div>
);
}
return days;
};
const getStatsData = () => {
const totalHours = Object.values(sleepData).reduce((sum, data) => sum + data.hours, 0);
const avgHours = totalHours / Object.keys(sleepData).length;
const avgQuality = Object.values(sleepData).reduce((sum, data) => sum + data.quality, 0) / Object.keys(sleepData).length;
return {
avgSleep: avgHours.toFixed(1),
efficiency: Math.round((avgHours / 8) * 100),
bedtime: '23:30',
wakeTime: '07:15',
qualityScore: avgQuality.toFixed(1)
};
};
const stats = getStatsData();
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
<h1 className="text-xl font-bold text-gray-800">수면 기록</h1>
</div>
<button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
<i className="fas fa-calendar-plus text-gray-600 text-xl"></i>
</button>
</div>
</nav>
{/* Main Content */}
<main className="pt-20 pb-24 px-6 space-y-6">
{/* Calendar Section */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-gray-800">{currentMonth}</h2>
<div className="flex items-center space-x-2">
<button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
<i className="fas fa-chevron-left text-gray-400"></i>
</button>
<button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
<i className="fas fa-chevron-right text-gray-400"></i>
</button>
</div>
</div>
<div className="grid grid-cols-7 gap-1">
{renderCalendar()}
</div>
<div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-gray-100">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-blue-600 rounded-full"></div>
<span className="text-sm text-gray-600">좋은 수면</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-blue-300 rounded-full"></div>
<span className="text-sm text-gray-600">보통 수면</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-gray-400 rounded-full"></div>
<span className="text-sm text-gray-600">나쁜 수면</span>
</div>
</div>
</div>
{/* Period Selector */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
<div className="flex bg-gray-100 rounded-xl p-1">
{['일별', '주별', '월별'].map((period) => (
<button
key={period}
onClick={() => setSelectedPeriod(period)}
className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all cursor-pointer ${
selectedPeriod === period
? 'bg-white text-blue-600 shadow-sm'
: 'text-gray-600 hover:text-gray-800'
}`}
>
{period}
</button>
))}
</div>
</div>
{/* Statistics Section */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-semibold text-gray-800 mb-4">수면 통계</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-blue-50 rounded-xl p-4 text-center">
<div className="text-2xl font-bold text-blue-600 mb-1">{stats.avgSleep}시간</div>
<div className="text-sm text-gray-600">평균 수면시간</div>
</div>
<div className="bg-green-50 rounded-xl p-4 text-center">
<div className="text-2xl font-bold text-green-600 mb-1">{stats.efficiency}%</div>
<div className="text-sm text-gray-600">수면 효율</div>
</div>
<div className="bg-purple-50 rounded-xl p-4 text-center">
<div className="text-lg font-bold text-purple-600 mb-1">{stats.bedtime}</div>
<div className="text-sm text-gray-600">평균 취침시간</div>
</div>
<div className="bg-orange-50 rounded-xl p-4 text-center">
<div className="text-lg font-bold text-orange-600 mb-1">{stats.wakeTime}</div>
<div className="text-sm text-gray-600">평균 기상시간</div>
</div>
</div>
<div className="mt-4 bg-indigo-50 rounded-xl p-4 text-center">
<div className="text-2xl font-bold text-indigo-600 mb-1">{stats.qualityScore}점</div>
<div className="text-sm text-gray-600">수면의 질 평균</div>
</div>
</div>
{/* Sleep Pattern Graph */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-semibold text-gray-800 mb-4">수면 패턴</h3>
<div className="relative">
<img
src="https://readdy.ai/api/search-image?query=Sleep%20pattern%20graph%20chart%20showing%20sleep%20hours%20over%20time%2C%20clean%20modern%20design%20with%20blue%20gradient%20bars%2C%20white%20background%2C%20minimalist%20data%20visualization%2C%20professional%20medical%20chart%20style%2C%20horizontal%20bar%20chart%20format%2C%20time%20axis%20labels%2C%20sleep%20duration%20measurements%2C%20healthcare%20analytics%20design%2C%20soft%20blue%20colors%2C%20grid%20lines%2C%20clear%20typography&width=320&height=200&seq=chart001&orientation=landscape"
alt="수면 패턴 그래프"
className="w-full h-48 object-cover rounded-xl"
/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-xl"></div>
</div>
<p className="text-sm text-gray-600 mt-3 text-center">
최근 7일간의 수면 패턴을 보여줍니다
</p>
</div>
{/* Sleep Record Input */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-semibold text-gray-800 mb-4">
{selectedDate}일 수면 기록
</h3>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">취침 시간</label>
<input
type="time"
value={sleepTime}
onChange={(e) => setSleepTime(e.target.value)}
className="w-full p-3 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">기상 시간</label>
<input
type="time"
value={wakeTime}
onChange={(e) => setWakeTime(e.target.value)}
className="w-full p-3 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">수면의 질</label>
<div className="flex items-center justify-between">
{[1, 2, 3, 4, 5].map((rating) => (
<button
key={rating}
onClick={() => setSleepQuality(rating)}
className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all ${
rating <= sleepQuality
? 'bg-blue-500 text-white'
: 'bg-gray-200 text-gray-400'
}`}
>
<i className="fas fa-star text-lg"></i>
</button>
))}
</div>
<div className="flex justify-between text-xs text-gray-500 mt-2">
<span>매우 나쁨</span>
<span>매우 좋음</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">특이사항</label>
<textarea
value={sleepNote}
onChange={(e) => setSleepNote(e.target.value)}
placeholder="수면에 영향을 준 요인이나 특이사항을 기록해주세요"
className="w-full p-3 border border-gray-200 rounded-xl text-base h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>
</div>
<button className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium text-base cursor-pointer hover:bg-blue-700 transition-colors !rounded-button">
수면 기록 저장
</button>
</div>
</div>
</main>
{/* Bottom Navigation */}
<nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0 z-50">
<div className="grid grid-cols-4 h-20">
<a
href="https://readdy.ai/home/da32a320-1859-4680-a13d-f0b330ad3829/e8d9f213-050e-4b08-9c45-7fa6d9ce3896"
data-readdy="true"
className="flex flex-col items-center justify-center space-y-1 cursor-pointer text-gray-500 no-underline"
>
<i className="fas fa-home text-2xl"></i>
<span className="text-sm font-medium">홈</span>
</a>
<button className="flex flex-col items-center justify-center space-y-1 cursor-pointer text-blue-600 bg-blue-50">
<i className="fas fa-chart-line text-2xl"></i>
<span className="text-sm font-medium">수면 기록</span>
</button>
<a href="https://readdy.ai/home/da32a320-1859-4680-a13d-f0b330ad3829/2d4b8fdb-ed5a-4cad-b226-aca5f5f6b5d9" data-readdy="true" className="flex flex-col items-center justify-center space-y-1 cursor-pointer text-gray-500 no-underline">
<i className="fas fa-graduation-cap text-2xl"></i>
<span className="text-sm font-medium">프로그램</span>
</a>
<button className="flex flex-col items-center justify-center space-y-1 cursor-pointer text-gray-500">
<i className="fas fa-cog text-2xl"></i>
<span className="text-sm font-medium">설정</span>
</button>
</div>
</nav>
<style jsx>{`
.!rounded-button {
border-radius: 12px;
}
input[type="time"]::-webkit-calendar-picker-indicator {
filter: invert(0.5);
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
`}</style>
</div>
);
};
export default SleepRecord;