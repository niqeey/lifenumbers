import { TriangleNumbers } from '../types';
import { Language } from '../App';

interface TriangleDisplayProps {
  triangle: TriangleNumbers;
  language: Language;
}

export default function TriangleDisplay({ triangle, language }: TriangleDisplayProps) {
  const layers = [...triangle.layers].reverse(); // top-first for rendering
  
  // Color palette for each layer (from top to bottom)
  const layerColors = [
    'bg-gradient-to-br from-green-500 to-green-600', // top
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-indigo-500',
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        {language === 'en' ? 'Life Path Triangle' : '生命密碼三角形'}
      </h2>

      {/* Triangle Visual - Non-overlapping pyramid */}
      <div className="relative py-8 px-4 overflow-x-auto">
        <div className="flex flex-col items-center space-y-3 min-w-max">
          {layers.map((row, rowIdx) => {
            const colorClass = layerColors[rowIdx] || 'bg-gray-500';
            const isTopRow = rowIdx === 0;
            
            // Skip rendering row 3 (the base/pink circle row - 8 numbers)
            if (rowIdx === 3) return null;
            
            return (
              <div key={rowIdx} className="flex justify-center gap-3">
                {row.map((num, colIdx) => {
                  const isTop = isTopRow && colIdx === 0;
                  return (
                    <div
                      key={colIdx}
                      className={`triangle-node relative ${colorClass} text-white shadow-lg ${
                        isTop ? 'shadow-2xl scale-110' : ''
                      }`}
                      title={
                        isTop
                          ? language === 'en'
                            ? 'Main Personality - Life Path Top Number'
                            : '主性格 - 生命靈數頂點'
                          : undefined
                      }
                    >
                      {isTop && (
                        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap text-green-600 dark:text-green-400 font-bold">
                          {language === 'en' ? 'Main' : '主性格'}
                        </div>
                      )}
                      {num}
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* Base Layer - Original Input Data */}
          <div className="flex justify-center gap-2 mt-6">
            {triangle.layers[0].map((digit, i) => (
              <div key={i} className="w-8 h-8 rounded-md bg-gray-400 text-white flex items-center justify-center text-xs font-semibold shadow-md">
                {digit}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Derived Codes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
          <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
            {language === 'en' ? '🎯 Inner Personality' : '🎯 內心性格密碼'}
          </h3>
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-300">
            {triangle.innerPersonality}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            {language === 'en' ? '🌟 Outer Personality' : '🌟 外心密碼'}
          </h3>
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-300">
            {triangle.outerPersonality}
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
            {language === 'en' ? '💫 Subconscious Code' : '💫 潛意識碼'}
          </h3>
          <div className="text-3xl font-bold text-green-600 dark:text-green-300">
            {triangle.subconsciousCode}
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-4">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
            {language === 'en' ? '🧬 Parent Genes' : '🧬 父母基因'}
          </h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{language === 'en' ? 'Father:' : '父親：'}</span>
              <span className="font-semibold text-amber-700 dark:text-amber-300">{triangle.fatherGenes}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{language === 'en' ? 'Mother:' : '母親：'}</span>
              <span className="font-semibold text-amber-700 dark:text-amber-300">{triangle.motherGenes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
