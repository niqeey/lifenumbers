import React from 'react';
import { BaZiProfile } from '../data/baZiData';
import type { Language } from '../App';

interface BaZiDisplayProps {
  baZi: BaZiProfile;
  language: Language;
}

export const BaZiDisplay: React.FC<BaZiDisplayProps> = ({ baZi, language }) => {
  const isEnglish = language === 'en';

  const pillars = [
    { name: isEnglish ? 'Year' : '年', data: baZi.year, color: 'from-red-50 to-red-100' },
    { name: isEnglish ? 'Month' : '月', data: baZi.month, color: 'from-blue-50 to-blue-100' },
    { name: isEnglish ? 'Day' : '日', data: baZi.day, color: 'from-green-50 to-green-100' },
    { name: isEnglish ? 'Hour' : '時', data: baZi.hour, color: 'from-yellow-50 to-yellow-100' },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Important Note about Lunar Calendar */}
      <div className="bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-300 rounded-lg p-3 mb-4">
        <p className="text-xs text-pink-900 font-semibold">
          {isEnglish
            ? '📅 Note: This Ba Zi reading is calculated using the lunar calendar. Your input date (Gregorian calendar) has been automatically converted to lunar calendar for accurate calculations.'
            : '📅 注意：此八字是使用農曆計算的。你輸入的日期（公曆）已自動轉換為農曆，以確保計算準確性。'}
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 rounded-lg p-6">
        <div className="space-y-3 mb-4">
          <p className="text-sm font-semibold text-amber-900">
            {isEnglish
              ? '🎋 What Are The Four Pillars?'
              : '🎋 四柱是什麼？'}
          </p>
          <p className="text-sm text-amber-900">
            {isEnglish
              ? 'Your Ba Zi chart is based on the lunar calendar and contains four pillars, each representing a different time dimension of your birth:'
              : '你的八字圖表基於農曆，包含四個柱子，每個都代表你出生的不同時間維度：'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="bg-red-100 rounded p-3 text-center border-l-4 border-red-500">
            <p className="text-xs font-bold text-red-700 mb-1">{isEnglish ? 'Year Pillar' : '年柱'}</p>
            <p className="text-xs text-red-800">{isEnglish ? 'Your Luck & Destiny' : '運勢與命運'}</p>
          </div>
          <div className="bg-blue-100 rounded p-3 text-center border-l-4 border-blue-500">
            <p className="text-xs font-bold text-blue-700 mb-1">{isEnglish ? 'Month Pillar' : '月柱'}</p>
            <p className="text-xs text-blue-800">{isEnglish ? 'Opportunities & Relationships' : '機會與關係'}</p>
          </div>
          <div className="bg-green-100 rounded p-3 text-center border-l-4 border-green-500">
            <p className="text-xs font-bold text-green-700 mb-1">{isEnglish ? 'Day Pillar' : '日柱'}</p>
            <p className="text-xs text-green-800">{isEnglish ? 'Your Core Nature' : '核心本質'}</p>
          </div>
          <div className="bg-yellow-100 rounded p-3 text-center border-l-4 border-yellow-600">
            <p className="text-xs font-bold text-yellow-700 mb-1">{isEnglish ? 'Hour Pillar' : '時柱'}</p>
            <p className="text-xs text-yellow-800">{isEnglish ? 'Actions & Children' : '行動與後代'}</p>
          </div>
        </div>
      </div>

      {/* Four Pillars Display with Descriptions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {isEnglish ? '📊 The Four Pillars' : '📊 四柱詳解'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${pillar.color} rounded-xl p-6 shadow-lg border-2 border-gray-200 text-center hover:shadow-2xl transition-shadow`}
            >
              <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                {pillar.name} {isEnglish ? 'Pillar' : '柱'}
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">{isEnglish ? 'Stem' : '天干'}</p>
                  <p className="text-3xl font-bold text-gray-800">{pillar.data.stem}</p>
                  <p className="text-xs text-gray-600 mt-1">{pillar.data.stemZH}</p>
                </div>
                <div className="border-t border-gray-300 pt-3">
                  <p className="text-xs text-gray-500 mb-1">{isEnglish ? 'Branch' : '地支'}</p>
                  <p className="text-3xl font-bold text-gray-800">{pillar.data.branch}</p>
                  <p className="text-xs text-gray-600 mt-1">{pillar.data.branchZH}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Day Master (日主) Analysis */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-xl p-8 border-l-4 border-purple-600">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {isEnglish ? '🔮 Your Day Master (日主)' : '🔮 你的日主'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {isEnglish
            ? 'The Day Master is the core of your Ba Zi chart. It represents your fundamental nature, personality, and how you naturally react to life situations. All other elements in your chart interact with your Day Master.'
            : '日主是你八字圖表的核心。它代表你的基本本質、性格，以及你如何自然地對生活情況做出反應。你圖表中的所有其他元素都與你的日主相互作用。'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
            <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase mb-2">
              {isEnglish ? 'Core Element' : '核心元素'}
            </p>
            <div className="text-5xl font-bold text-purple-600 mb-3">
              {baZi.dayMasterElement}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {isEnglish ? 'This is your fundamental nature' : '這是你的基本本質'}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-green-200 dark:border-green-700">
            <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase mb-2">
              {isEnglish ? 'Your Day Pillar' : '你的日柱'}
            </p>
            <div className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              {baZi.day.combined}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {isEnglish
                ? 'The stem is your Day Master, the branch is your Life Partner Indicator'
                : '天干是你的日主，地支是你的配偶宮'}
            </p>
          </div>
        </div>
      </div>

      {/* Five Elements Analysis (五行分析) */}
      {baZi.elementAnalysis && (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl p-8 border-t-4 border-indigo-600">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {isEnglish ? '🌿 Five Elements Balance (五行分析)' : '🌿 五行分析'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {isEnglish
                ? 'The Five Elements (金木水火土: Metal, Wood, Water, Fire, Earth) are fundamental forces in Ba Zi. Their balance in your chart reveals your strengths, weaknesses, and life path. Each element controls a different aspect of your personality and destiny.'
                : '五行（金木水火土：金、木、水、火、土）是八字中的基本力量。它們在你圖表中的平衡揭示了你的優勢、劣勢和人生道路。每個元素控制著你性格和命運的不同方面。'}
            </p>
          </div>
          
          {/* Element Distribution Grid */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 text-center border-2 border-green-300 hover:shadow-lg transition-shadow">
              <p className="text-2xl mb-2">🌲</p>
              <p className="font-bold text-green-900 text-lg">{baZi.elementAnalysis.wood}</p>
              <p className="text-xs text-green-700 font-semibold">{isEnglish ? 'Wood' : '木'}</p>
              <p className="text-xs text-green-600 mt-1">{isEnglish ? 'Growth, Creativity' : '生長、創新'}</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-lg p-4 text-center border-2 border-red-300 hover:shadow-lg transition-shadow">
              <p className="text-2xl mb-2">🔥</p>
              <p className="font-bold text-red-900 text-lg">{baZi.elementAnalysis.fire}</p>
              <p className="text-xs text-red-700 font-semibold">{isEnglish ? 'Fire' : '火'}</p>
              <p className="text-xs text-red-600 mt-1">{isEnglish ? 'Passion, Energy' : '熱情、能量'}</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-4 text-center border-2 border-yellow-400 hover:shadow-lg transition-shadow">
              <p className="text-2xl mb-2">🌍</p>
              <p className="font-bold text-yellow-900 text-lg">{baZi.elementAnalysis.earth}</p>
              <p className="text-xs text-yellow-700 font-semibold">{isEnglish ? 'Earth' : '土'}</p>
              <p className="text-xs text-yellow-600 mt-1">{isEnglish ? 'Stability, Trust' : '穩定、信任'}</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-4 text-center border-2 border-gray-300 hover:shadow-lg transition-shadow">
              <p className="text-2xl mb-2">✨</p>
              <p className="font-bold text-gray-900 text-lg">{baZi.elementAnalysis.metal}</p>
              <p className="text-xs text-gray-700 font-semibold">{isEnglish ? 'Metal' : '金'}</p>
              <p className="text-xs text-gray-600 mt-1">{isEnglish ? 'Precision, Logic' : '精確、邏輯'}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 text-center border-2 border-blue-300 hover:shadow-lg transition-shadow">
              <p className="text-2xl mb-2">💧</p>
              <p className="font-bold text-blue-900 text-lg">{baZi.elementAnalysis.water}</p>
              <p className="text-xs text-blue-700 font-semibold">{isEnglish ? 'Water' : '水'}</p>
              <p className="text-xs text-blue-600 mt-1">{isEnglish ? 'Wisdom, Flow' : '智慧、流動'}</p>
            </div>
          </div>

          {/* Balance Status with Interpretations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-5 border-l-4 border-indigo-600">
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase mb-2">
                {isEnglish ? '⚖️ Balance Status' : '⚖️ 平衡狀態'}
              </p>
              <p className="text-lg font-bold text-indigo-900 dark:text-indigo-200 mb-2">
                {isEnglish ? baZi.elementAnalysis.balance : baZi.elementAnalysis.balance === 'Balanced' ? '平衡' : baZi.elementAnalysis.balance === 'Imbalanced - Excess' ? '失衡 - 過剩' : '失衡 - 不足'}
              </p>
              <p className="text-xs text-indigo-700 dark:text-indigo-300">
                {isEnglish
                  ? 'A balanced chart brings stability, while imbalance indicates areas for personal growth'
                  : '平衡的八字帶來穩定，失衡表示個人成長的領域'}
              </p>
            </div>
            
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-5 border-l-4 border-orange-600">
              <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase mb-2">
                {isEnglish ? '💪 Strongest/Weakest Elements' : '💪 旺/弱元素'}
              </p>
              <p className="text-lg font-bold text-orange-900 dark:text-orange-200 mb-2">
                <span className="text-green-700 dark:text-green-400">{baZi.elementAnalysis.strongest}</span>
                {' / '}
                <span className="text-red-700 dark:text-red-400">{baZi.elementAnalysis.weakest}</span>
              </p>
              <p className="text-xs text-orange-700 dark:text-orange-300">
                {isEnglish
                  ? 'Strongest: your advantage | Weakest: area needing support'
                  : '最強：你的優勢 | 最弱：需要支持的領域'}
              </p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border-l-4 border-purple-600">
            <p className="text-sm font-semibold text-purple-900 dark:text-purple-300 mb-3 flex items-center">
              <span className="mr-2">💡</span>
              {isEnglish ? 'Recommendations for Balance' : '平衡建議'}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              {isEnglish ? baZi.elementAnalysis.recommendation : baZi.elementAnalysis.recommendationZH}
            </p>
          </div>
        </div>
      )}

      {/* Pillar Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {isEnglish ? '⚖️ Four Pillars Significance' : '⚖️ 四柱含義'}
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {isEnglish ? baZi.analysis : baZi.analysisZH}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
              <p className="font-semibold text-amber-900 dark:text-amber-300 mb-1">
                {isEnglish ? '年柱 (Year)' : '年柱'}
              </p>
              <p className="text-amber-800 dark:text-amber-200 text-xs">
                {isEnglish ? 'Luck & Destiny' : '運勢與命運'}
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
              <p className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                {isEnglish ? '月柱 (Month)' : '月柱'}
              </p>
              <p className="text-blue-800 dark:text-blue-200 text-xs">
                {isEnglish ? 'Opportunity & Potential' : '機遇與潛力'}
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
              <p className="font-semibold text-green-900 dark:text-green-300 mb-1">
                {isEnglish ? '日柱 (Day)' : '日柱'}
              </p>
              <p className="text-green-800 dark:text-green-200 text-xs">
                {isEnglish ? 'Core Nature' : '核心性質'}
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
              <p className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                {isEnglish ? '時柱 (Hour)' : '時柱'}
              </p>
              <p className="text-yellow-800 dark:text-yellow-200 text-xs">
                {isEnglish ? 'Actions & Manifestation' : '行動與表現'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-xs text-blue-900 dark:text-blue-300">
          {isEnglish
            ? '💡 Ba Zi is a complex ancient Chinese system. The above is a simplified representation. For detailed analysis, consult with a Ba Zi master.'
            : '💡 八字是複雜的中國古代系統。以上是簡化的代表。詳細分析請諮詢八字大師。'}
        </p>
      </div>
    </div>
  );
};
