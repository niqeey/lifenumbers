export interface ZodiacSign {
  name: string;
  nameZH: string;
  symbol: string;
  dateRange: string;
  dateRangeZH: string;
  element: string;
  elementZH: string;
  rulingPlanet: string;
  rulingPlanetZH: string;
  traitsEN: string[];
  traitsZH: string[];
  strengthsEN: string[];
  strengthsZH: string[];
  weaknessesEN: string[];
  weaknessesZH: string[];
  luckyNumbersEN: number[];
  luckyNumbersZH: number[];
  luckyColorEN: string;
  luckyColorZH: string;
  compatibleSignsEN: string[];
  compatibleSignsZH: string[];
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: 'Aries',
    nameZH: '白羊座',
    symbol: '♈',
    dateRange: 'Mar 21 - Apr 19',
    dateRangeZH: '3月21日 - 4月19日',
    element: 'Fire',
    elementZH: '火',
    rulingPlanet: 'Mars',
    rulingPlanetZH: '火星',
    traitsEN: ['Courageous', 'Determined', 'Confident', 'Passionate'],
    traitsZH: ['勇敢', '堅定', '自信', '充滿激情'],
    strengthsEN: ['Leadership', 'Initiative', 'Honesty', 'Enthusiasm'],
    strengthsZH: ['領導力', '主動性', '誠實', '熱情'],
    weaknessesEN: ['Impatience', 'Aggressiveness', 'Arrogance', 'Impulsiveness'],
    weaknessesZH: ['缺乏耐心', '好鬥', '傲慢', '衝動'],
    luckyNumbersEN: [1, 8, 17],
    luckyNumbersZH: [1, 8, 17],
    luckyColorEN: 'Red',
    luckyColorZH: '紅色',
    compatibleSignsEN: ['Leo', 'Sagittarius', 'Gemini'],
    compatibleSignsZH: ['獅子座', '射手座', '雙子座'],
  },
  {
    name: 'Taurus',
    nameZH: '金牛座',
    symbol: '♉',
    dateRange: 'Apr 20 - May 20',
    dateRangeZH: '4月20日 - 5月20日',
    element: 'Earth',
    elementZH: '土',
    rulingPlanet: 'Venus',
    rulingPlanetZH: '金星',
    traitsEN: ['Stable', 'Reliable', 'Determined', 'Practical'],
    traitsZH: ['穩定', '可靠', '堅定', '務實'],
    strengthsEN: ['Loyalty', 'Persistence', 'Honesty', 'Practicality'],
    strengthsZH: ['忠誠', '堅持', '誠實', '務實'],
    weaknessesEN: ['Stubbornness', 'Inflexibility', 'Possessiveness', 'Laziness'],
    weaknessesZH: ['固執', '不靈活', '佔有欲', '懶惰'],
    luckyNumbersEN: [2, 6, 9],
    luckyNumbersZH: [2, 6, 9],
    luckyColorEN: 'Green',
    luckyColorZH: '綠色',
    compatibleSignsEN: ['Virgo', 'Capricorn', 'Cancer'],
    compatibleSignsZH: ['處女座', '摩羯座', '巨蟹座'],
  },
  {
    name: 'Gemini',
    nameZH: '雙子座',
    symbol: '♊',
    dateRange: 'May 21 - Jun 20',
    dateRangeZH: '5月21日 - 6月20日',
    element: 'Air',
    elementZH: '風',
    rulingPlanet: 'Mercury',
    rulingPlanetZH: '水星',
    traitsEN: ['Adaptable', 'Communicative', 'Witty', 'Versatile'],
    traitsZH: ['適應力強', '善於交流', '機智', '多才多藝'],
    strengthsEN: ['Communication', 'Curiosity', 'Intelligence', 'Flexibility'],
    strengthsZH: ['溝通能力', '好奇心', '聰慧', '靈活'],
    weaknessesEN: ['Inconsistency', 'Indecision', 'Superficiality', 'Nervous'],
    weaknessesZH: ['不一致', '猶豫不決', '膚淺', '神經質'],
    luckyNumbersEN: [3, 5, 14],
    luckyNumbersZH: [3, 5, 14],
    luckyColorEN: 'Yellow',
    luckyColorZH: '黃色',
    compatibleSignsEN: ['Aries', 'Leo', 'Aquarius'],
    compatibleSignsZH: ['白羊座', '獅子座', '水瓶座'],
  },
  {
    name: 'Cancer',
    nameZH: '巨蟹座',
    symbol: '♋',
    dateRange: 'Jun 21 - Jul 22',
    dateRangeZH: '6月21日 - 7月22日',
    element: 'Water',
    elementZH: '水',
    rulingPlanet: 'Moon',
    rulingPlanetZH: '月球',
    traitsEN: ['Sensitive', 'Emotional', 'Caring', 'Protective'],
    traitsZH: ['敏感', '感情豐富', '體貼', '保護慾強'],
    strengthsEN: ['Intuition', 'Loyalty', 'Creativity', 'Empathy'],
    strengthsZH: ['直覺', '忠誠', '創意', '同情心'],
    weaknessesEN: ['Oversensitivity', 'Mood Swings', 'Clinginess', 'Insecurity'],
    weaknessesZH: ['過度敏感', '情緒波動', '依賴', '不安全感'],
    luckyNumbersEN: [2, 4, 15],
    luckyNumbersZH: [2, 4, 15],
    luckyColorEN: 'Silver',
    luckyColorZH: '銀色',
    compatibleSignsEN: ['Taurus', 'Virgo', 'Scorpio'],
    compatibleSignsZH: ['金牛座', '處女座', '天蠍座'],
  },
  {
    name: 'Leo',
    nameZH: '獅子座',
    symbol: '♌',
    dateRange: 'Jul 23 - Aug 22',
    dateRangeZH: '7月23日 - 8月22日',
    element: 'Fire',
    elementZH: '火',
    rulingPlanet: 'Sun',
    rulingPlanetZH: '太陽',
    traitsEN: ['Confident', 'Generous', 'Dramatic', 'Charismatic'],
    traitsZH: ['自信', '慷慨', '戲劇化', '有魅力'],
    strengthsEN: ['Leadership', 'Creativity', 'Warmth', 'Loyalty'],
    strengthsZH: ['領導力', '創意', '溫暖', '忠誠'],
    weaknessesEN: ['Arrogance', 'Self-centeredness', 'Pride', 'Stubbornness'],
    weaknessesZH: ['傲慢', '以自我為中心', '驕傲', '固執'],
    luckyNumbersEN: [1, 5, 19],
    luckyNumbersZH: [1, 5, 19],
    luckyColorEN: 'Gold',
    luckyColorZH: '金色',
    compatibleSignsEN: ['Aries', 'Sagittarius', 'Gemini'],
    compatibleSignsZH: ['白羊座', '射手座', '雙子座'],
  },
  {
    name: 'Virgo',
    nameZH: '處女座',
    symbol: '♍',
    dateRange: 'Aug 23 - Sep 22',
    dateRangeZH: '8月23日 - 9月22日',
    element: 'Earth',
    elementZH: '土',
    rulingPlanet: 'Mercury',
    rulingPlanetZH: '水星',
    traitsEN: ['Practical', 'Analytical', 'Meticulous', 'Helpful'],
    traitsZH: ['務實', '分析力強', '細心', '樂於助人'],
    strengthsEN: ['Precision', 'Reliability', 'Modesty', 'Intelligence'],
    strengthsZH: ['精確', '可靠性', '謙虛', '聰慧'],
    weaknessesEN: ['Perfectionism', 'Criticism', 'Overthinking', 'Anxiety'],
    weaknessesZH: ['完美主義', '愛批評', '過度思考', '焦慮'],
    luckyNumbersEN: [3, 6, 15],
    luckyNumbersZH: [3, 6, 15],
    luckyColorEN: 'Green',
    luckyColorZH: '綠色',
    compatibleSignsEN: ['Taurus', 'Capricorn', 'Cancer'],
    compatibleSignsZH: ['金牛座', '摩羯座', '巨蟹座'],
  },
  {
    name: 'Libra',
    nameZH: '天秤座',
    symbol: '♎',
    dateRange: 'Sep 23 - Oct 22',
    dateRangeZH: '9月23日 - 10月22日',
    element: 'Air',
    elementZH: '風',
    rulingPlanet: 'Venus',
    rulingPlanetZH: '金星',
    traitsEN: ['Balanced', 'Diplomatic', 'Artistic', 'Social'],
    traitsZH: ['平衡', '善於外交', '藝術品味', '善於社交'],
    strengthsEN: ['Fairness', 'Harmony', 'Cooperation', 'Graciousness'],
    strengthsZH: ['公平', '和諧', '合作', '優雅'],
    weaknessesEN: ['Indecision', 'Avoidance', 'Dishonesty', 'Superficiality'],
    weaknessesZH: ['猶豫不決', '迴避', '不誠實', '膚淺'],
    luckyNumbersEN: [4, 6, 15],
    luckyNumbersZH: [4, 6, 15],
    luckyColorEN: 'Blue',
    luckyColorZH: '藍色',
    compatibleSignsEN: ['Gemini', 'Aquarius', 'Leo'],
    compatibleSignsZH: ['雙子座', '水瓶座', '獅子座'],
  },
  {
    name: 'Scorpio',
    nameZH: '天蠍座',
    symbol: '♏',
    dateRange: 'Oct 23 - Nov 21',
    dateRangeZH: '10月23日 - 11月21日',
    element: 'Water',
    elementZH: '水',
    rulingPlanet: 'Pluto',
    rulingPlanetZH: '冥王星',
    traitsEN: ['Passionate', 'Determined', 'Secretive', 'Intense'],
    traitsZH: ['熱情', '堅定', '神祕', '強烈'],
    strengthsEN: ['Bravery', 'Honesty', 'Loyalty', 'Intuition'],
    strengthsZH: ['勇敢', '誠實', '忠誠', '直覺'],
    weaknessesEN: ['Jealousy', 'Obsessiveness', 'Secretiveness', 'Resentment'],
    weaknessesZH: ['嫉妒', '執著', '神祕', '怨恨'],
    luckyNumbersEN: [2, 4, 8],
    luckyNumbersZH: [2, 4, 8],
    luckyColorEN: 'Maroon',
    luckyColorZH: '褐紅色',
    compatibleSignsEN: ['Cancer', 'Virgo', 'Pisces'],
    compatibleSignsZH: ['巨蟹座', '處女座', '雙魚座'],
  },
  {
    name: 'Sagittarius',
    nameZH: '射手座',
    symbol: '♐',
    dateRange: 'Nov 22 - Dec 21',
    dateRangeZH: '11月22日 - 12月21日',
    element: 'Fire',
    elementZH: '火',
    rulingPlanet: 'Jupiter',
    rulingPlanetZH: '木星',
    traitsEN: ['Optimistic', 'Adventurous', 'Honest', 'Philosophical'],
    traitsZH: ['樂觀', '冒險', '誠實', '哲學的'],
    strengthsEN: ['Enthusiasm', 'Independence', 'Honesty', 'Generosity'],
    strengthsZH: ['熱情', '獨立', '誠實', '慷慨'],
    weaknessesEN: ['Impatience', 'Tactlessness', 'Recklessness', 'Over-optimism'],
    weaknessesZH: ['缺乏耐心', '不諳世故', '魯莽', '過度樂觀'],
    luckyNumbersEN: [3, 9, 12],
    luckyNumbersZH: [3, 9, 12],
    luckyColorEN: 'Purple',
    luckyColorZH: '紫色',
    compatibleSignsEN: ['Aries', 'Leo', 'Libra'],
    compatibleSignsZH: ['白羊座', '獅子座', '天秤座'],
  },
  {
    name: 'Capricorn',
    nameZH: '摩羯座',
    symbol: '♑',
    dateRange: 'Dec 22 - Jan 19',
    dateRangeZH: '12月22日 - 1月19日',
    element: 'Earth',
    elementZH: '土',
    rulingPlanet: 'Saturn',
    rulingPlanetZH: '土星',
    traitsEN: ['Ambitious', 'Disciplined', 'Responsible', 'Self-reliant'],
    traitsZH: ['有野心', '有紀律', '負責任', '自力更生'],
    strengthsEN: ['Ambition', 'Discipline', 'Responsibility', 'Self-control'],
    strengthsZH: ['野心', '紀律', '責任感', '自我控制'],
    weaknessesEN: ['Pessimism', 'Coldness', 'Condescension', 'Detachment'],
    weaknessesZH: ['悲觀', '冷淡', '傲慢', '冷漠'],
    luckyNumbersEN: [1, 4, 8],
    luckyNumbersZH: [1, 4, 8],
    luckyColorEN: 'Brown',
    luckyColorZH: '棕色',
    compatibleSignsEN: ['Taurus', 'Virgo', 'Scorpio'],
    compatibleSignsZH: ['金牛座', '處女座', '天蠍座'],
  },
  {
    name: 'Aquarius',
    nameZH: '水瓶座',
    symbol: '♒',
    dateRange: 'Jan 20 - Feb 18',
    dateRangeZH: '1月20日 - 2月18日',
    element: 'Air',
    elementZH: '風',
    rulingPlanet: 'Uranus',
    rulingPlanetZH: '天王星',
    traitsEN: ['Independent', 'Intellectual', 'Humanitarian', 'Innovative'],
    traitsZH: ['獨立', '聰慧', '人道主義', '創新'],
    strengthsEN: ['Innovation', 'Intellectualism', 'Independence', 'Altruism'],
    strengthsZH: ['創新', '智力', '獨立', '利他'],
    weaknessesEN: ['Detachment', 'Unpredictability', 'Aloofness', 'Stubbornness'],
    weaknessesZH: ['冷漠', '不可預測', '冷淡', '固執'],
    luckyNumbersEN: [4, 7, 11],
    luckyNumbersZH: [4, 7, 11],
    luckyColorEN: 'Blue',
    luckyColorZH: '藍色',
    compatibleSignsEN: ['Gemini', 'Libra', 'Sagittarius'],
    compatibleSignsZH: ['雙子座', '天秤座', '射手座'],
  },
  {
    name: 'Pisces',
    nameZH: '雙魚座',
    symbol: '♓',
    dateRange: 'Feb 19 - Mar 20',
    dateRangeZH: '2月19日 - 3月20日',
    element: 'Water',
    elementZH: '水',
    rulingPlanet: 'Neptune',
    rulingPlanetZH: '海王星',
    traitsEN: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle'],
    traitsZH: ['有同情心', '藝術性', '直覺', '溫和'],
    strengthsEN: ['Compassion', 'Artistry', 'Intuition', 'Gentleness'],
    strengthsZH: ['同情心', '藝術性', '直覺', '溫和'],
    weaknessesEN: ['Overly trusting', 'Escapism', 'Oversensitivity', 'Fearfulness'],
    weaknessesZH: ['過度信任', '逃避現實', '過度敏感', '膽小'],
    luckyNumbersEN: [3, 9, 12],
    luckyNumbersZH: [3, 9, 12],
    luckyColorEN: 'Sea Green',
    luckyColorZH: '海綠色',
    compatibleSignsEN: ['Cancer', 'Scorpio', 'Taurus'],
    compatibleSignsZH: ['巨蟹座', '天蠍座', '金牛座'],
  },
];

export interface ChineseZodiac {
  year: number;
  animal: string;
  animalZH: string;
  element: string;
  elementZH: string;
  traitsEN: string[];
  traitsZH: string[];
  compatibleAnimalsEN: string[];
  compatibleAnimalsZH: string[];
}

export const chineseZodiacs: ChineseZodiac[] = [
  {
    year: 2020,
    animal: 'Rat',
    animalZH: '鼠',
    element: 'Metal',
    elementZH: '金',
    traitsEN: ['Intelligent', 'Quick-witted', 'Charming', 'Adaptable'],
    traitsZH: ['聰慧', '機敏', '迷人', '適應力強'],
    compatibleAnimalsEN: ['Dragon', 'Monkey', 'Ox'],
    compatibleAnimalsZH: ['龍', '猴', '牛'],
  },
  {
    year: 2021,
    animal: 'Ox',
    animalZH: '牛',
    element: 'Metal',
    elementZH: '金',
    traitsEN: ['Diligent', 'Reliable', 'Honest', 'Strong'],
    traitsZH: ['勤勞', '可靠', '誠實', '強壯'],
    compatibleAnimalsEN: ['Rat', 'Snake', 'Rooster'],
    compatibleAnimalsZH: ['鼠', '蛇', '雞'],
  },
  {
    year: 2022,
    animal: 'Tiger',
    animalZH: '虎',
    element: 'Water',
    elementZH: '水',
    traitsEN: ['Brave', 'Competitive', 'Unpredictable', 'Confident'],
    traitsZH: ['勇敢', '好競爭', '難以預測', '自信'],
    compatibleAnimalsEN: ['Horse', 'Dog', 'Pig'],
    compatibleAnimalsZH: ['馬', '狗', '豬'],
  },
  {
    year: 2023,
    animal: 'Rabbit',
    animalZH: '兔',
    element: 'Water',
    elementZH: '水',
    traitsEN: ['Gentle', 'Quiet', 'Elegant', 'Vigilant'],
    traitsZH: ['溫和', '安靜', '優雅', '警覺'],
    compatibleAnimalsEN: ['Sheep', 'Pig', 'Dog'],
    compatibleAnimalsZH: ['羊', '豬', '狗'],
  },
  {
    year: 2024,
    animal: 'Dragon',
    animalZH: '龍',
    element: 'Wood',
    elementZH: '木',
    traitsEN: ['Ambitious', 'Confident', 'Charismatic', 'Energetic'],
    traitsZH: ['有野心', '自信', '有魅力', '精力充沛'],
    compatibleAnimalsEN: ['Rat', 'Monkey', 'Rooster'],
    compatibleAnimalsZH: ['鼠', '猴', '雞'],
  },
  {
    year: 2025,
    animal: 'Snake',
    animalZH: '蛇',
    element: 'Wood',
    elementZH: '木',
    traitsEN: ['Wise', 'Mysterious', 'Intuitive', 'Graceful'],
    traitsZH: ['聰慧', '神祕', '直覺', '優雅'],
    compatibleAnimalsEN: ['Ox', 'Rooster', 'Monkey'],
    compatibleAnimalsZH: ['牛', '雞', '猴'],
  },
  {
    year: 2026,
    animal: 'Horse',
    animalZH: '馬',
    element: 'Fire',
    elementZH: '火',
    traitsEN: ['Passionate', 'Active', 'Sociable', 'Independent'],
    traitsZH: ['熱情', '活躍', '善於社交', '獨立'],
    compatibleAnimalsEN: ['Tiger', 'Dog', 'Sheep'],
    compatibleAnimalsZH: ['虎', '狗', '羊'],
  },
  {
    year: 2027,
    animal: 'Sheep',
    animalZH: '羊',
    element: 'Fire',
    elementZH: '火',
    traitsEN: ['Gentle', 'Creative', 'Sensitive', 'Kind'],
    traitsZH: ['溫和', '有創意', '敏感', '善良'],
    compatibleAnimalsEN: ['Rabbit', 'Horse', 'Pig'],
    compatibleAnimalsZH: ['兔', '馬', '豬'],
  },
  {
    year: 2028,
    animal: 'Monkey',
    animalZH: '猴',
    element: 'Earth',
    elementZH: '土',
    traitsEN: ['Clever', 'Playful', 'Witty', 'Mischievous'],
    traitsZH: ['聰慧', '頑皮', '機智', '調皮'],
    compatibleAnimalsEN: ['Rat', 'Dragon', 'Snake'],
    compatibleAnimalsZH: ['鼠', '龍', '蛇'],
  },
  {
    year: 2029,
    animal: 'Rooster',
    animalZH: '雞',
    element: 'Earth',
    elementZH: '土',
    traitsEN: ['Honest', 'Reliable', 'Direct', 'Confident'],
    traitsZH: ['誠實', '可靠', '直接', '自信'],
    compatibleAnimalsEN: ['Ox', 'Snake', 'Dragon'],
    compatibleAnimalsZH: ['牛', '蛇', '龍'],
  },
  {
    year: 2030,
    animal: 'Dog',
    animalZH: '狗',
    element: 'Metal',
    elementZH: '金',
    traitsEN: ['Loyal', 'Honest', 'Protective', 'Trustworthy'],
    traitsZH: ['忠誠', '誠實', '保護慾強', '值得信賴'],
    compatibleAnimalsEN: ['Tiger', 'Rabbit', 'Horse'],
    compatibleAnimalsZH: ['虎', '兔', '馬'],
  },
  {
    year: 2031,
    animal: 'Pig',
    animalZH: '豬',
    element: 'Metal',
    elementZH: '金',
    traitsEN: ['Compassionate', 'Generous', 'Sincere', 'Diligent'],
    traitsZH: ['有同情心', '慷慨', '誠摯', '勤勞'],
    compatibleAnimalsEN: ['Tiger', 'Rabbit', 'Sheep'],
    compatibleAnimalsZH: ['虎', '兔', '羊'],
  },
];

export function getZodiacByDate(month: number, day: number): ZodiacSign | null {
  for (const sign of zodiacSigns) {
    const [startStr, endStr] = sign.dateRange.split(' - ');
    const [startMonth, startDay] = startStr.split(' ').map((v, i) => i === 0 ? getMonthNumber(v) : parseInt(v));
    const [endMonth, endDay] = endStr.split(' ').map((v, i) => i === 0 ? getMonthNumber(v) : parseInt(v));

    const dateNum = month * 100 + day;
    const startNum = startMonth * 100 + startDay;
    const endNum = endMonth * 100 + endDay;

    // Handle signs that cross year boundary (e.g., Capricorn: Dec 22 - Jan 19)
    if (startNum > endNum) {
      if (dateNum >= startNum || dateNum <= endNum) {
        return sign;
      }
    } else {
      // Normal case: sign within same year
      if (dateNum >= startNum && dateNum <= endNum) {
        return sign;
      }
    }
  }
  return null;
}

function getMonthNumber(monthStr: string): number {
  const months: { [key: string]: number } = {
    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12,
  };
  return months[monthStr] || 0;
}

export function getChineseZodiacByYear(year: number): ChineseZodiac | null {
  // Chinese zodiac cycles every 12 years starting from 1900 (Rat)
  const baseYear = 1900;
  const cyclePosition = (year - baseYear) % 12;
  const zodiac = chineseZodiacs.find(z => (z.year - baseYear) % 12 === cyclePosition);
  
  if (zodiac) {
    // Return the zodiac data but with the actual user-input year
    return { ...zodiac, year };
  }
  return null;
}
