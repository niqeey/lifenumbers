import { useState } from 'react';
import { CalculationResult, LifePathData, MissingNumberRecommendation } from '../types';
import type { Language } from '../App';
import TriangleDisplay from './TriangleDisplay';
import { HoroscopeDisplay } from './HoroscopeDisplay';
import { BaZiDisplay } from './BaZiDisplay';
import { getZodiacByDate, getChineseZodiacByYear } from '../data/horoscopeData';
import { BaZiProfile } from '../data/baZiData';

interface ResultDisplayProps {
  result: CalculationResult;
  lifePathData: LifePathData | null | undefined;
  missingNumberData: (MissingNumberRecommendation | undefined)[];
  language: Language;
  onReset: () => void;
  baZi?: BaZiProfile | null;
}

export default function ResultDisplay({ 
  result, 
  lifePathData, 
  missingNumberData, 
  language, 
  onReset,
  baZi,
}: ResultDisplayProps) {
  const [activeTab, setActiveTab] = useState<'lifePath' | 'western' | 'chinese' | 'baZi'>('lifePath');
  
  // Parse birthdate for horoscope calculation
  const [year, month, day] = result.birthdate.split('-').map(Number);
  const zodiacSign = getZodiacByDate(month, day);
  const chineseZodiac = getChineseZodiacByYear(year);
  
  return (
    <div className="space-y-6">
      {/* Main Number Summary - Always Visible */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white">
        <div className="text-center">
          <div className="inline-block p-8 bg-white/20 backdrop-blur-sm rounded-full mb-4 border-4 border-white/30">
            <span className="text-7xl font-bold">{result.lifePathNumber}</span>
          </div>
          <h2 className="text-4xl font-bold mb-2">
            {language === 'en' ? 'Your Life Path Number' : '你的生命靈數'}
          </h2>
          {lifePathData && (
            <>
              <p className="text-2xl font-semibold mb-2">
                {language === 'en' ? lifePathData.nameEN : lifePathData.nameZH}
              </p>
              <p className="text-lg opacity-90">
                {language === 'en' ? `Element: ${lifePathData.element}` : `元素：${lifePathData.elementZH}`}
              </p>
            </>
          )}
          <div className="mt-6 text-sm opacity-80">
            {language === 'en' ? `Birthday: ${result.birthdate}` : `生日：${result.birthdate}`}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 border-b border-gray-300 dark:border-gray-600 overflow-x-auto">
        <button
          onClick={() => setActiveTab('lifePath')}
          className={`px-4 py-2 text-sm md:text-base font-semibold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'lifePath'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
          }`}
        >
          {language === 'en' ? '🔢 Life Path' : '🔢 生命靈數'}
        </button>
        <button
          onClick={() => setActiveTab('western')}
          className={`px-4 py-2 text-sm md:text-base font-semibold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'western'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
          }`}
        >
          {language === 'en' ? '♈ Horoscope' : '♈ 星座'}
        </button>
        <button
          onClick={() => setActiveTab('chinese')}
          className={`px-4 py-2 text-sm md:text-base font-semibold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'chinese'
              ? 'border-orange-600 text-orange-600'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
          }`}
        >
          {language === 'en' ? '🐉 Zodiac' : '🐉 生肖'}
        </button>
        <button
          onClick={() => setActiveTab('baZi')}
          className={`px-4 py-2 text-sm md:text-base font-semibold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'baZi'
              ? 'border-amber-600 text-amber-600'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
          }`}
        >
          {language === 'en' ? '🎋 Ba Zi' : '🎋 八字'}
        </button>
      </div>

      {/* Tab Content - Life Path */}
      {activeTab === 'lifePath' && (
        <>
          {/* Description */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                {language === 'en' 
                  ? '💡 Understanding Your Life Path Number'
                  : '💡 了解你的生命靈數'}
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                {language === 'en' 
                  ? 'Your Life Path Number is the core essence of your personality and life journey. It reveals your natural talents, innate abilities, and the path you are destined to walk. This special pyramid method (生命密碼三角形) adds up the digits of your birthdate in layers, creating a complete personality map.'
                  : '你的生命靈數是你性格和人生旅程的核心精髓。它揭示了你的天賦、內在能力和你註定要走的路。這種特殊的三角形方法（生命密碼三角形）按層次疊加你的出生日期數字，創造出完整的性格地圖。'}
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                {language === 'en'
                  ? '🎯 Life Path Numbers range from 1-9, each carrying distinct archetypal meanings and life lessons. The triangle visualization shows how different aspects of your personality interact and influence your destiny.'
                  : '🎯 生命靈數從1-9，每個數字都有獨特的原型意義和人生課題。三角形可視化顯示了你性格的不同方面如何相互作用並影響你的命運。'}
              </p>
            </div>
          </div>

          {/* Life Path Triangle */}
          <TriangleDisplay triangle={result.triangleNumbers} language={language} />
      
      {/* Personality Details Card */}
      {lifePathData && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
            {language === 'en' ? 'Personality Analysis' : '性格分析'}
          </h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
            {language === 'en' 
              ? 'Discover your natural talents, strengths, and areas for personal growth'
              : '探索你的天賦、優勢和個人成長的領域'}
          </p>
          
          <div className="space-y-6">
            {/* Personality Traits */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-lg flex items-center">
                <span className="text-2xl mr-2">✨</span>
                {language === 'en' ? 'Core Traits' : '核心特質'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(language === 'en' ? lifePathData.personalityEN : lifePathData.personalityZH).map((trait, index) => (
                  <li key={index} className="flex items-start bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                    <span className="text-purple-500 mr-2 text-lg">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-lg flex items-center">
                <span className="text-2xl mr-2">💪</span>
                {language === 'en' ? 'Strengths' : '優勢'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(language === 'en' ? lifePathData.strengthsEN : lifePathData.strengthsZH).map((strength, index) => (
                  <span 
                    key={index}
                    className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-lg flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                {language === 'en' ? 'Growth Areas' : '成長領域'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(language === 'en' ? lifePathData.weaknessesEN : lifePathData.weaknessesZH).map((weakness, index) => (
                  <span 
                    key={index}
                    className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    {weakness}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Missing Numbers Card */}
      {result.missingNumbers.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {language === 'en' ? 'Missing Numbers in Your Birthdate' : '你生日中缺少的數字'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            {language === 'en' 
              ? '📊 Missing numbers represent areas where you might benefit from focused development. In numerology, absent digits suggest life lessons and opportunities for growth. By recognizing and strengthening these areas, you can achieve greater balance and fulfillment.' 
              : '📊 缺少的數字代表你可能需要專注發展的領域。在生命靈數學中，缺少的數字暗示你的人生課題和成長機會。通過認識和加強這些領域，你可以實現更大的平衡和充實。'}
          </p>

          <div className="space-y-6">
            {missingNumberData.map((recommendation, index) => recommendation && (
              <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                  {language === 'en' ? `Number ${recommendation.number}` : `數字 ${recommendation.number}`}
                </h3>
                
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'en' ? 'Recommendations:' : '建議：'}
                  </h4>
                  <ul className="space-y-1">
                    {(language === 'en' ? recommendation.remediesEN : recommendation.remediesZH).map((remedy, ridx) => (
                      <li key={ridx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{remedy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'en' ? 'Helpful Elements:' : '有益的元素：'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'en' ? recommendation.elementsEN : recommendation.elementsZH).map((element, eidx) => (
                      <span 
                        key={eidx}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium"
                      >
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Digit Breakdown */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-4">
          {language === 'en' ? 'Calculation Breakdown' : '計算明細'}
        </h3>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">{language === 'en' ? 'Birthdate:' : '生日：'}</span> {result.birthdate}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">{language === 'en' ? 'All Digits:' : '所有數字：'}</span> {result.allDigits.join(', ')}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{language === 'en' ? 'Sum:' : '總和：'}</span> {result.allDigits.reduce((a, b) => a + b, 0)} → {result.lifePathNumber}
          </p>
        </div>
      </div>
        </>
      )}

      {/* Tab Content - Horoscope */}
      {activeTab === 'western' && (
        <div className="space-y-6">
          {/* Description */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-200">
                {language === 'en' 
                  ? '♈ Understanding Your Horoscope (Tropical Zodiac)'
                  : '♈ 了解你的西方星座'}
              </p>
              <p className="text-sm text-indigo-800 dark:text-indigo-300">
                {language === 'en' 
                  ? 'Your Horoscope sign is determined by the Sun\'s position at the moment of your birth. This tropical zodiac system divides the year into 12 signs, each with unique personality characteristics, strengths, and challenges. Your horoscope reveals your conscious identity, core vitality, and the archetypal energy you naturally express.'
                  : '你的西方星座由你出生時太陽的位置決定。這個熱帶黃道系統將一年分為12個星座，每個星座都有獨特的性格特徵、優勢和挑戰。你的星座揭示了你的自我意識、核心活力和你自然表現的原型能量。'}
              </p>
              <p className="text-sm text-indigo-700 dark:text-indigo-400">
                {language === 'en'
                  ? '⭐ Each sign rules a different period of the year and is associated with an element (Fire, Earth, Air, Water), representing different temperament and worldview. Your element influences how you approach life and interact with others.'
                  : '⭐ 每個星座統治一年中的不同時期，並與一個元素（火、土、風、水）相關聯，代表不同的氣質和世界觀。你的元素影響你如何對待生活和與他人互動。'}
              </p>
            </div>
          </div>
          {zodiacSign && (
            <HoroscopeDisplay 
              language={language}
              zodiacSign={zodiacSign}
              chineseZodiac={null}
            />
          )}
        </div>
      )}

      {/* Tab Content - Zodiac */}
      {activeTab === 'chinese' && (
        <div className="space-y-6">
          {/* Description */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-orange-900 dark:text-orange-200">
                {language === 'en' 
                  ? '🐉 Understanding Your Chinese Zodiac (Lunar Zodiac)'
                  : '🐉 了解你的中國生肖'}
              </p>
              <p className="text-sm text-orange-800 dark:text-orange-300">
                {language === 'en' 
                  ? 'Your Chinese Zodiac sign is determined by the lunar year of your birth. This ancient system operates on a 12-year cycle, with each year represented by a different animal. Your zodiac animal reveals your intrinsic nature, behavior patterns, and how you naturally relate to the world. It reflects deeper personality dimensions shaped by the lunar calendar and Eastern philosophy.'
                  : '你的中國生肖由你出生的農曆年份決定。這個古老的系統在12年的周期內運作，每一年都由不同的動物代表。你的生肖動物揭示了你的內在本質、行為模式和你如何自然地與世界相關聯。它反映了由農曆和東方哲學塑造的更深層的性格特徵。'}
              </p>
              <p className="text-sm text-orange-700 dark:text-orange-400">
                {language === 'en'
                  ? '✨ Each zodiac animal is also associated with one of five elements (Metal, Wood, Water, Fire, Earth) in a 60-year cycle, creating a more nuanced personality profile. This adds another layer of meaning to your birth animal sign (生肖).'
                  : '✨ 每個生肖動物也與五行之一（金、木、水、火、土）在60年的周期內相關聯，創造出更細微的性格檔案。這為你的生肖動物（生肖）增加了另一層含義。'}
              </p>
            </div>
          </div>
          {chineseZodiac && (
            <HoroscopeDisplay 
              language={language}
              zodiacSign={null}
              chineseZodiac={chineseZodiac}
            />
          )}
        </div>
      )}

      {/* Tab Content - Ba Zi */}
      {activeTab === 'baZi' && baZi && (
        <div className="space-y-6">
          {/* Description */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                {language === 'en' 
                  ? '🎋 Understanding Your Ba Zi (Four Pillars of Destiny)'
                  : '🎋 了解你的八字（四柱八字命理）'}
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                {language === 'en' 
                  ? 'Ba Zi (八字), meaning "Eight Characters," is one of the most profound Chinese metaphysical systems for understanding human destiny. Your Ba Zi is composed of four pillars (四柱) derived from your birth year, month, day, and hour. Each pillar contains two characters: a Heavenly Stem (天干) and an Earthly Branch (地支).'
                  : '八字（八字），意為「八個字符」，是最深奧的中國玄學系統之一，用於理解人的命運。你的八字由四個柱子（四柱）組成，分別來自你的出生年、月、日和時。每個柱子包含兩個字符：一個天干和一個地支。'}
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                {language === 'en'
                  ? '🔮 The 10 Heavenly Stems (甲乙丙丁戊己庚辛壬癸) represent the active forces and elements, while the 12 Earthly Branches (子丑寅卯辰巳午未申酉戌亥) represent time and energy cycles. Together, they create a 60-year cycle that reveals your life destiny, fortune patterns, and compatibility with others.'
                  : '🔮 十個天干（甲乙丙丁戊己庚辛壬癸）代表主動力和元素，而十二個地支（子丑寅卯辰巳午未申酉戌亥）代表時間和能量周期。它們一起創造出60年的周期，揭示你的人生命運、財運模式和與他人的兼容性。'}
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                {language === 'en'
                  ? '⚡ Your Day Master (日主) is the most important element - it represents your core nature. Analyzing the balance of the five elements (金木水火土: Metal, Wood, Water, Fire, Earth) in your Ba Zi reveals your strengths, weaknesses, and the life lessons you\'re meant to learn.'
                  : '⚡ 你的日主是最重要的元素 - 它代表你的核心本質。分析你八字中五行（金木水火土）的平衡，揭示了你的優勢、劣勢和你應該學習的人生課題。'}
              </p>
            </div>
          </div>
          <BaZiDisplay baZi={baZi} language={language} />
        </div>
      )}

      {/* Reset Button */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-12 rounded-full transition duration-200 shadow-lg transform hover:scale-105"
        >
          {language === 'en' ? '✨ Calculate Another' : '✨ 再計算一次'}
        </button>
      </div>
    </div>
  );
}