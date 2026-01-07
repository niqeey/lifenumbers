import { Language } from '../App';

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

export default function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-lg border-2 border-purple-300 dark:border-purple-700 overflow-hidden">
      <button
        onClick={() => onToggle('en')}
        className={`px-4 py-2 font-medium transition ${
          language === 'en'
            ? 'bg-purple-600 text-white'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
        }`}
      >
        English
      </button>
      <button
        onClick={() => onToggle('zh')}
        className={`px-4 py-2 font-medium transition ${
          language === 'zh'
            ? 'bg-purple-600 text-white'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
        }`}
      >
        中文
      </button>
    </div>
  );
}
