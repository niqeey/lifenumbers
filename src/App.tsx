import { useState } from 'react';
import { CalculationResult } from './types';
import { lifePathDatabase } from './data/lifePathData';
import { missingNumberRecommendations } from './data/missingNumberData';
import { calculateLifePathNumber, isValidBirthdate } from './utils';
import { calculateBaZi, BaZiProfile } from './data/baZiData';
import BirthdayInput from './components/BirthdayInput';
import ResultDisplay from './components/ResultDisplay';
import LanguageToggle from './components/LanguageToggle';

export type Language = 'en' | 'zh';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [baZi, setBaZi] = useState<BaZiProfile | null>(null);

  const handleCalculate = (birthdate: string, time: string = '12:00') => {
    if (!isValidBirthdate(birthdate)) {
      alert(language === 'en' ? 'Invalid birthdate!' : '無效的出生日期！');
      return;
    }
    
    const calculationResult = calculateLifePathNumber(birthdate);
    setResult(calculationResult);
    
    // Calculate Ba Zi
    const [year, month, day] = birthdate.split('-').map(Number);
    const [hours] = time.split(':').map(Number);
    const baZiResult = calculateBaZi(year, month, day, hours);
    setBaZi(baZiResult);
  };

  const handleReset = () => {
    setResult(null);
    setBaZi(null);
  };

  const lifePathData = result 
    ? lifePathDatabase.find(data => data.number === result.lifePathNumber)
    : null;

  const missingNumberData = result
    ? result.missingNumbers.map(num => 
        missingNumberRecommendations.find(rec => rec.number === num)
      ).filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 dark:text-purple-200 mb-2">
            {language === 'en' ? 'Destiny Calculator' : '命運計算器'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {language === 'en' 
              ? 'Life Path Number • Horoscope • Ba Zi' 
              : '生命靈數 • 星座 • 八字'}
          </p>
          <div className="mt-4">
            <LanguageToggle language={language} onToggle={setLanguage} />
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          {!result ? (
            <BirthdayInput onCalculate={handleCalculate} language={language} />
          ) : (
            <ResultDisplay
              result={result}
              lifePathData={lifePathData}
              missingNumberData={missingNumberData}
              language={language}
              onReset={handleReset}
              baZi={baZi}
            />
          )}
        </main>

        <footer className="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm">
          <p>
            {language === 'en' 
              ? '© 2026 Life Path Number Calculator. For entertainment purposes only.' 
              : '© 2026 生命靈數計算器。僅供娛樂參考。'}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
