import React from 'react';
import { ZodiacSign, ChineseZodiac } from '../data/horoscopeData';
import type { Language } from '../App';

interface HoroscopeDisplayProps {
  language: Language;
  zodiacSign: ZodiacSign | null;
  chineseZodiac: ChineseZodiac | null;
}

export const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({
  language,
  zodiacSign,
  chineseZodiac,
}) => {
  const isEnglish = language === 'en';

  return (
    <div className="w-full space-y-6">
      {zodiacSign && (
        <>
          {/* Introduction */}
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-300 rounded-lg p-4">
            <p className="text-sm text-indigo-900 font-medium">
              {isEnglish 
                ? '🌟 Your horoscope profile is based on your birth date. The position of the Sun at your birth determines your zodiac sign, which reveals your core identity, natural personality, and fundamental approach to life. It also influences your compatibility and relationships with other signs.'
                : '🌟 你的星座檔案是根據你的出生日期。你出生時太陽的位置決定了你的星座，揭示了你的核心身份、自然性格和對生活的基本態度。它也影響你與其他星座的兼容性和關係。'}
            </p>
          </div>

          {/* Horoscope Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg border border-purple-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{zodiacSign.symbol}</div>
              <div>
                <h2 className="text-2xl font-bold text-indigo-900">
                  {isEnglish ? zodiacSign.name : zodiacSign.nameZH}
                </h2>
                <p className="text-sm text-indigo-600">
                  {isEnglish ? zodiacSign.dateRange : zodiacSign.dateRangeZH}
                </p>
              </div>
            </div>
            <p className="text-xs text-indigo-700 mb-4">
              {isEnglish 
                ? '🔮 Horoscope (Tropical Zodiac) - Your Sun sign defines your conscious identity and core personality. It represents the essential self you show to the world.'
                : '🔮 星座（tropical zodiac）- 你的太陽星座定義了你的自我意識和核心性格。它代表了你向世界展示的本質自我。'}
            </p>

            {/* Element and Ruling Planet with Descriptions */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                <p className="text-xs text-gray-500 font-semibold uppercase mb-1">{isEnglish ? 'Element' : '元素'}</p>
                <p className="text-lg font-bold text-indigo-600 mb-1">
                  {isEnglish ? zodiacSign.element : zodiacSign.elementZH}
                </p>
                <p className="text-xs text-gray-600">
                  {isEnglish 
                    ? 'Influences your temperament and emotional nature'
                    : '影響你的氣質和情感本質'}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <p className="text-xs text-gray-500 font-semibold uppercase mb-1">{isEnglish ? 'Ruling Planet' : '守護星'}</p>
                <p className="text-lg font-bold text-indigo-600 mb-1">
                  {isEnglish ? zodiacSign.rulingPlanet : zodiacSign.rulingPlanetZH}
                </p>
                <p className="text-xs text-gray-600">
                  {isEnglish
                    ? 'Shapes your core drive and motivation'
                    : '塑造你的核心驅動力和動力'}
                </p>
              </div>
            </div>

            {/* Traits - Personality Characteristics */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">✨ {isEnglish ? 'Key Traits & Characteristics' : '主要特徵'}</h3>
              <p className="text-xs text-gray-600 mb-3">
                {isEnglish
                  ? 'These innate qualities define your personality and how you interact with the world'
                  : '這些天生的品質定義了你的性格和你如何與世界互動'}
              </p>
              <div className="flex flex-wrap gap-2">
                {(isEnglish ? zodiacSign.traitsEN : zodiacSign.traitsZH).map((trait, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium border border-indigo-300">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Strengths and Weaknesses with More Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="text-md font-semibold text-green-700 mb-3">💪 {isEnglish ? 'Strengths & Talents' : '優勢與天賦'}</h4>
                <p className="text-xs text-gray-600 mb-3">
                  {isEnglish
                    ? 'Natural abilities that give you an advantage'
                    : '給你優勢的天然能力'}
                </p>
                <ul className="space-y-2">
                  {(isEnglish ? zodiacSign.strengthsEN : zodiacSign.strengthsZH).map((strength, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">✓</span> {strength}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="text-md font-semibold text-red-700 mb-3">⚡ {isEnglish ? 'Challenges to Overcome' : '需克服的挑戰'}</h4>
                <p className="text-xs text-gray-600 mb-3">
                  {isEnglish
                    ? 'Areas for growth and self-awareness'
                    : '成長和自我認識的領域'}
                </p>
                <ul className="space-y-2">
                  {(isEnglish ? zodiacSign.weaknessesEN : zodiacSign.weaknessesZH).map((weakness, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">◆</span> {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Lucky Numbers and Colors with Explanations */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">🔮 {isEnglish ? 'Lucky Numbers' : '幸運數字'}</p>
                <p className="text-xs text-gray-500 mb-3">{isEnglish ? 'Align with your cosmic energy' : '與你的宇宙能量相符'}</p>
                <div className="flex gap-2">
                  {(zodiacSign.luckyNumbersEN || []).map((num, idx) => (
                    <span key={idx} className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {num}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">🎨 {isEnglish ? 'Lucky Color' : '幸運顏色'}</p>
                <p className="text-xs text-gray-500 mb-3">{isEnglish ? 'Resonates with your sign\'s vibration' : '與你星座的振動共鳴'}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-300"
                    style={{ backgroundColor: getColorCode(zodiacSign.luckyColorEN) }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {isEnglish ? zodiacSign.luckyColorEN : zodiacSign.luckyColorZH}
                  </span>
                </div>
              </div>
            </div>

            {/* Compatible Signs */}
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">💕 {isEnglish ? 'Compatible Signs' : '相容星座'}</p>
              <p className="text-xs text-gray-500 mb-3">{isEnglish ? 'Harmonious relationships and partnerships' : '和諧的關係和夥伴關係'}</p>
              <div className="flex flex-wrap gap-2">
                {(isEnglish ? zodiacSign.compatibleSignsEN : zodiacSign.compatibleSignsZH).map((sign, idx) => (
                  <span key={idx} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {sign}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Zodiac Section */}
      {chineseZodiac && (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg border border-orange-200">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-orange-900 mb-1">
              {isEnglish ? 'Zodiac' : '生肖'}
            </h2>
            <p className="text-sm text-orange-700 mb-3">
              {isEnglish 
                ? '🐉 Your Chinese Zodiac animal is determined by your lunar birth year. In a 12-year cycle, each animal represents a different archetypal personality. When combined with the Five Elements (Metal, Wood, Water, Fire, Earth), it creates a unique 60-year cycle that defines your destiny and life path.'
                : '🐉 你的中國生肖由你的農曆出生年份決定。在12年的周期內，每個動物代表不同的原型性格。當與五行（金、木、水、火、土）結合時，它創造出一個獨特的60年周期，定義了你的命運和人生道路。'}
            </p>
            <div className="bg-white rounded-lg p-3 mt-3">
              <p className="text-xl font-bold text-orange-600 text-center mb-1">
                {isEnglish ? chineseZodiac.animal : chineseZodiac.animalZH}
              </p>
              <p className="text-xs text-gray-500 text-center">
                {chineseZodiac.year}
              </p>
            </div>
          </div>

          {/* Element and Year Info with Descriptions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
              <p className="text-xs text-gray-500 font-semibold uppercase mb-1">{isEnglish ? 'Element' : '五行'}</p>
              <p className="text-lg font-bold text-orange-600 mb-1">
                {isEnglish ? chineseZodiac.element : chineseZodiac.elementZH}
              </p>
              <p className="text-xs text-gray-600">
                {isEnglish
                  ? 'Adds complexity to your zodiac profile'
                  : '增加你的生肖檔案的複雜性'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-xs text-gray-500 font-semibold uppercase mb-1">{isEnglish ? 'Cycle' : '週期'}</p>
              <p className="text-lg font-bold text-orange-600 mb-1">
                {isEnglish ? '12 Years' : '12年'}
              </p>
              <p className="text-xs text-gray-600">
                {isEnglish
                  ? 'Your sign repeats every 12 years'
                  : '你的生肖每12年重複一次'}
              </p>
            </div>
          </div>

          {/* Characteristics and Personality */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-2">✨ {isEnglish ? 'Zodiac Animal Characteristics' : '生肖特點'}</h3>
            <p className="text-xs text-gray-600 mb-3">
              {isEnglish
                ? 'The inherent personality traits associated with your birth animal'
                : '與你出生動物相關的固有性格特徵'}
            </p>
            <div className="flex flex-wrap gap-2">
              {(isEnglish ? chineseZodiac.traitsEN : chineseZodiac.traitsZH).map((trait, idx) => (
                <span key={idx} className="bg-gradient-to-r from-orange-200 to-red-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium border border-orange-300">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Compatible Animals with More Detail */}
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-5 border-l-4 border-orange-600">
            <h4 className="text-sm font-semibold text-orange-900 mb-2">🐉 {isEnglish ? 'Compatible Zodiac Animals' : '相容生肖'}</h4>
            <p className="text-xs text-gray-700 mb-3">
              {isEnglish 
                ? 'These animals share natural harmony, making relationships more compatible and successful'
                : '這些動物有著天然的和諧，使關係更具兼容性和成功'}
            </p>
            <div className="flex flex-wrap gap-2">
              {(isEnglish ? chineseZodiac.compatibleAnimalsEN : chineseZodiac.compatibleAnimalsZH).map((animal, idx) => (
                <span key={idx} className="bg-white text-orange-700 px-3 py-1 rounded-lg text-sm font-medium border-2 border-orange-300 shadow-sm">
                  {animal}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function getColorCode(colorName: string): string {
  const colors: { [key: string]: string } = {
    'Red': '#EF4444',
    'Green': '#22C55E',
    'Blue': '#3B82F6',
    'Yellow': '#EAB308',
    'Gold': '#FBBF24',
    'Silver': '#D1D5DB',
    'Purple': '#A855F7',
    'Maroon': '#991B1B',
    'Brown': '#92400E',
    'Sea Green': '#14B8A6',
  };
  return colors[colorName] || '#6366F1';
}
