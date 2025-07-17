import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Program from './pages/Program';
import SleepRecord from './pages/SleepRecord';
import Footer from './components/Footer';

// 임시 Settings 컴포넌트
const Settings = () => (
  <div className="min-h-screen bg-gray-50 pt-20 px-6">
    <h1 className="text-2xl font-bold text-gray-800">설정</h1>
    <p className="mt-4 text-gray-600">설정 페이지는 준비 중입니다.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="pb-20"> {/* Footer 높이만큼 여백 추가 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/sleep-record" element={<SleepRecord />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
