import { useState } from 'react';
import { Language } from '../App';

interface BirthdayInputProps {
  onCalculate: (birthdate: string, time?: string) => void;
  language: Language;
}

export default function BirthdayInput({ onCalculate, language }: BirthdayInputProps) {
  const [birthdate, setBirthdate] = useState('');
  const [time, setTime] = useState('12:00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthdate) {
      onCalculate(birthdate, time);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="inline-block p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
          <svg className="w-12 h-12 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {language === 'en' ? 'Enter Your Birth Information' : '輸入你的出生資訊'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'en' 
            ? 'Calculate your Life Path Number & Ba Zi' 
            : '計算你的生命靈數和八字'}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {language === 'en' ? 'Birthdate' : '出生日期'}
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
            required
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="birthtime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {language === 'en' ? 'Birth Time (Optional)' : '出生時間（選填）'}
          </label>
          <input
            type="time"
            id="birthtime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {language === 'en' 
              ? '💡 Birth time is used for Ba Zi (Four Pillars) calculation. If unknown, 12:00 will be used as default.'
              : '💡 出生時間用於八字計算。如果不知道，將使用12:00作為預設值。'}
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition duration-200 shadow-lg"
        >
          {language === 'en' ? 'Calculate My Profile' : '計算我的檔案'}
        </button>
      </form>
    </div>
  );
}
