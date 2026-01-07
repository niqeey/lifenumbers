/**
 * Ba Zi (四柱八字) - Four Pillars of Destiny
 * 
 * Heavenly Stems (天干): 10 items cycling
 * Earthly Branches (地支): 12 items cycling
 * 
 * Each pillar: Year, Month, Day, Hour
 * Each pillar has 1 stem + 1 branch = 2 characters
 * Total: 8 characters (四柱八字)
 */

export interface HeavenlyStem {
  stem: string;
  stemZH: string;
  element: string;
  elementZH: string;
  yinYang: string;
  yinYangZH: string;
  meaning: string;
  meaningZH: string;
}

export interface EarthlyBranch {
  branch: string;
  branchZH: string;
  position: number; // 0-11
  animal: string;
  animalZH: string;
  element: string;
  elementZH: string;
  yinYang: string;
  yinYangZH: string;
  hourRange: string;
}

export interface BaZiPillar {
  pillarName: string;
  pillarNameZH: string;
  stem: string;
  stemZH: string;
  branch: string;
  branchZH: string;
  combined: string;
}

export interface BaZiProfile {
  year: BaZiPillar;
  month: BaZiPillar;
  day: BaZiPillar;
  hour: BaZiPillar;
  dayMasterElement: string;
  dayMasterElementZH: string;
  analysis: string;
  analysisZH: string;
  elementAnalysis: ElementAnalysis;
}

export interface ElementAnalysis {
  wood: number;
  fire: number;
  earth: number;
  metal: number;
  water: number;
  total: number;
  strongest: string;
  weakest: string;
  balance: string;
  recommendation: string;
  recommendationZH: string;
}

// Heavenly Stems (天干)
export const heavenlyStems: HeavenlyStem[] = [
  { stem: 'Jia', stemZH: '甲', element: 'Wood', elementZH: '木', yinYang: 'Yang', yinYangZH: '陽', meaning: 'First', meaningZH: '開始' },
  { stem: 'Yi', stemZH: '乙', element: 'Wood', elementZH: '木', yinYang: 'Yin', yinYangZH: '陰', meaning: 'Second', meaningZH: '柔韌' },
  { stem: 'Bing', stemZH: '丙', element: 'Fire', elementZH: '火', yinYang: 'Yang', yinYangZH: '陽', meaning: 'Third', meaningZH: '光亮' },
  { stem: 'Ding', stemZH: '丁', element: 'Fire', elementZH: '火', yinYang: 'Yin', yinYangZH: '陰', meaning: 'Fourth', meaningZH: '柔光' },
  { stem: 'Wu', stemZH: '戊', element: 'Earth', elementZH: '土', yinYang: 'Yang', yinYangZH: '陽', meaning: 'Fifth', meaningZH: '厚實' },
  { stem: 'Ji', stemZH: '己', element: 'Earth', elementZH: '土', yinYang: 'Yin', yinYangZH: '陰', meaning: 'Sixth', meaningZH: '柔地' },
  { stem: 'Geng', stemZH: '庚', element: 'Metal', elementZH: '金', yinYang: 'Yang', yinYangZH: '陽', meaning: 'Seventh', meaningZH: '堅硬' },
  { stem: 'Xin', stemZH: '辛', element: 'Metal', elementZH: '金', yinYang: 'Yin', yinYangZH: '陰', meaning: 'Eighth', meaningZH: '柔金' },
  { stem: 'Ren', stemZH: '壬', element: 'Water', elementZH: '水', yinYang: 'Yang', yinYangZH: '陽', meaning: 'Ninth', meaningZH: '流動' },
  { stem: 'Gui', stemZH: '癸', element: 'Water', elementZH: '水', yinYang: 'Yin', yinYangZH: '陰', meaning: 'Tenth', meaningZH: '柔水' },
];

// Earthly Branches (地支)
export const earthlyBranches: EarthlyBranch[] = [
  { branch: 'Zi', branchZH: '子', position: 0, animal: 'Rat', animalZH: '鼠', element: 'Water', elementZH: '水', yinYang: 'Yang', yinYangZH: '陽', hourRange: '23:00-01:00' },
  { branch: 'Chou', branchZH: '丑', position: 1, animal: 'Ox', animalZH: '牛', element: 'Earth', elementZH: '土', yinYang: 'Yin', yinYangZH: '陰', hourRange: '01:00-03:00' },
  { branch: 'Yin', branchZH: '寅', position: 2, animal: 'Tiger', animalZH: '虎', element: 'Wood', elementZH: '木', yinYang: 'Yang', yinYangZH: '陽', hourRange: '03:00-05:00' },
  { branch: 'Mao', branchZH: '卯', position: 3, animal: 'Rabbit', animalZH: '兔', element: 'Wood', elementZH: '木', yinYang: 'Yin', yinYangZH: '陰', hourRange: '05:00-07:00' },
  { branch: 'Chen', branchZH: '辰', position: 4, animal: 'Dragon', animalZH: '龍', element: 'Earth', elementZH: '土', yinYang: 'Yang', yinYangZH: '陽', hourRange: '07:00-09:00' },
  { branch: 'Si', branchZH: '巳', position: 5, animal: 'Snake', animalZH: '蛇', element: 'Fire', elementZH: '火', yinYang: 'Yin', yinYangZH: '陰', hourRange: '09:00-11:00' },
  { branch: 'Wu', branchZH: '午', position: 6, animal: 'Horse', animalZH: '馬', element: 'Fire', elementZH: '火', yinYang: 'Yang', yinYangZH: '陽', hourRange: '11:00-13:00' },
  { branch: 'Wei', branchZH: '未', position: 7, animal: 'Sheep', animalZH: '羊', element: 'Earth', elementZH: '土', yinYang: 'Yin', yinYangZH: '陰', hourRange: '13:00-15:00' },
  { branch: 'Shen', branchZH: '申', position: 8, animal: 'Monkey', animalZH: '猴', element: 'Metal', elementZH: '金', yinYang: 'Yang', yinYangZH: '陽', hourRange: '15:00-17:00' },
  { branch: 'You', branchZH: '酉', position: 9, animal: 'Rooster', animalZH: '雞', element: 'Metal', elementZH: '金', yinYang: 'Yin', yinYangZH: '陰', hourRange: '17:00-19:00' },
  { branch: 'Xu', branchZH: '戌', position: 10, animal: 'Dog', animalZH: '狗', element: 'Earth', elementZH: '土', yinYang: 'Yang', yinYangZH: '陽', hourRange: '19:00-21:00' },
  { branch: 'Hai', branchZH: '亥', position: 11, animal: 'Pig', animalZH: '豬', element: 'Water', elementZH: '水', yinYang: 'Yin', yinYangZH: '陰', hourRange: '21:00-23:00' },
];

// Sexagenary Cycle (60-year cycle) starting from 1900
const sexagenaryCycle: string[] = [
  '甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉',
  '甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未',
  '甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳',
  '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯',
  '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑',
  '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥',
];

// Lunar Calendar Conversion
interface LunarDate {
  year: number;
  month: number;
  day: number;
}

// Enhanced lunar calendar conversion using lunar month data
// Data structure: for each year, store month lengths and leap month info
interface YearLunarData {
  springStart: { month: number; day: number }; // Spring begins (立春)
  months: number[]; // lengths of lunar months (29 or 30), leap month at end if exists
  leapMonth: number | null; // which month is leap, or null if no leap month
}

// Lunar year data for 1900-2100 (simplified representation)
// Each year: array of month lengths (29 or 30 days), leap info
const lunarYearData: { [key: number]: { spring: { m: number; d: number }; months: number[]; leap: number | null } } = {
  1990: { spring: { m: 2, d: 4 }, months: [29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 29, 30], leap: null },
  1991: { spring: { m: 2, d: 4 }, months: [29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29], leap: 5 },
  1992: { spring: { m: 2, d: 4 }, months: [30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29], leap: null },
  1993: { spring: { m: 2, d: 4 }, months: [30, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30], leap: 8 },
  1994: { spring: { m: 2, d: 4 }, months: [29, 30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30], leap: null },
  1995: { spring: { m: 2, d: 4 }, months: [29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29], leap: 3 },
  1996: { spring: { m: 2, d: 4 }, months: [30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29], leap: null },
  1997: { spring: { m: 2, d: 4 }, months: [30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30], leap: 11 },
  1998: { spring: { m: 2, d: 4 }, months: [29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30], leap: null },
  1999: { spring: { m: 2, d: 4 }, months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29], leap: 6 },
  2000: { spring: { m: 2, d: 4 }, months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30], leap: null },
  2001: { spring: { m: 2, d: 4 }, months: [30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29], leap: 2 },
  2020: { spring: { m: 2, d: 4 }, months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 30, 29], leap: null },
  2021: { spring: { m: 2, d: 4 }, months: [29, 30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29], leap: 4 },
  2024: { spring: { m: 2, d: 4 }, months: [29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30], leap: null },
};

// Lunar New Year dates (more comprehensive list)
const lunarNewYears: { [key: number]: { m: number; d: number } } = {
  1979: { m: 1, d: 28 }, 1980: { m: 2, d: 16 }, 1981: { m: 2, d: 5 },
  1982: { m: 1, d: 25 }, 1983: { m: 2, d: 13 }, 1984: { m: 2, d: 2 },
  1985: { m: 2, d: 20 }, 1986: { m: 2, d: 9 }, 1987: { m: 1, d: 29 },
  1988: { m: 2, d: 17 }, 1989: { m: 2, d: 6 }, 1990: { m: 1, d: 29 },
  1991: { m: 2, d: 15 }, 1992: { m: 2, d: 4 }, 1993: { m: 1, d: 23 },
  1994: { m: 2, d: 10 }, 1995: { m: 1, d: 31 }, 1996: { m: 2, d: 19 },
  1997: { m: 2, d: 7 }, 1998: { m: 1, d: 28 }, 1999: { m: 2, d: 16 },
  2000: { m: 2, d: 5 }, 2001: { m: 1, d: 24 }, 2002: { m: 2, d: 12 },
  2003: { m: 2, d: 1 }, 2004: { m: 1, d: 22 }, 2005: { m: 2, d: 9 },
  2006: { m: 1, d: 29 }, 2007: { m: 2, d: 18 }, 2008: { m: 2, d: 7 },
  2009: { m: 1, d: 26 }, 2010: { m: 2, d: 14 }, 2011: { m: 2, d: 3 },
  2012: { m: 1, d: 23 }, 2013: { m: 2, d: 10 }, 2014: { m: 1, d: 31 },
  2015: { m: 2, d: 19 }, 2016: { m: 2, d: 8 }, 2017: { m: 1, d: 28 },
  2018: { m: 2, d: 16 }, 2019: { m: 2, d: 5 }, 2020: { m: 1, d: 25 },
  2021: { m: 2, d: 12 }, 2022: { m: 2, d: 1 }, 2023: { m: 1, d: 22 },
  2024: { m: 2, d: 10 }, 2025: { m: 1, d: 29 }, 2026: { m: 2, d: 17 },
};

function solarToLunar(solarYear: number, solarMonth: number, solarDay: number): LunarDate {
  // Get current year and previous year's lunar new year
  const currentYearLNY = lunarNewYears[solarYear];
  const prevYearLNY = lunarNewYears[solarYear - 1];
  
  if (!currentYearLNY || !prevYearLNY) {
    // Fallback for years not in our table
    return { year: solarYear, month: solarMonth, day: solarDay };
  }
  
  const currentDate = new Date(solarYear, solarMonth - 1, solarDay);
  const currentLNY = new Date(solarYear, currentYearLNY.m - 1, currentYearLNY.d);
  const prevLNY = new Date(solarYear - 1, prevYearLNY.m - 1, prevYearLNY.d);
  
  // Check which lunar year we're in
  let lunarYear = solarYear;
  let daysFromNewYear = 0;
  
  if (currentDate >= currentLNY) {
    // We're in the current lunar year
    daysFromNewYear = Math.floor((currentDate.getTime() - currentLNY.getTime()) / (24 * 60 * 60 * 1000));
  } else {
    // We're in the previous lunar year
    lunarYear = solarYear - 1;
    daysFromNewYear = Math.floor((currentDate.getTime() - prevLNY.getTime()) / (24 * 60 * 60 * 1000));
  }
  
  // Calculate lunar month and day
  let lunarMonth = 1;
  let lunarDay = 1 + daysFromNewYear;
  
  // Get month data for this lunar year
  const yearData = lunarYearData[lunarYear];
  let monthLengths: number[];
  
  if (yearData) {
    monthLengths = yearData.months;
  } else {
    // Approximation for years not in our data
    monthLengths = [29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 29, 30];
  }
  
  // Adjust to lunar month and day
  let dayCounter = 0;
  for (let i = 0; i < monthLengths.length; i++) {
    const monthLength = monthLengths[i];
    if (dayCounter + monthLength >= lunarDay) {
      lunarMonth = i + 1;
      lunarDay = lunarDay - dayCounter;
      break;
    }
    dayCounter += monthLength;
  }
  
  // Ensure valid bounds
  if (lunarMonth > 12) {
    lunarMonth = 12;
    lunarDay = monthLengths[11] || 30;
  }
  if (lunarDay < 1) lunarDay = 1;
  if (lunarDay > 30) lunarDay = 30;
  
  return { year: lunarYear, month: lunarMonth, day: lunarDay };
}

export function getSexagenaryYear(year: number): string {
  const baseYear = 1900;
  const cyclePosition = (year - baseYear) % 60;
  return sexagenaryCycle[cyclePosition] || sexagenaryCycle[0];
}

export function getHeavenlyStem(index: number): HeavenlyStem {
  return heavenlyStems[index % 10];
}

export function getEarthlyBranch(index: number): EarthlyBranch {
  return earthlyBranches[index % 12];
}

export function getMonthPillar(lunarYear: number, lunarMonth: number): BaZiPillar {
  // Get year stem to determine month stems
  const yearStemIndex = (lunarYear - 1900) % 10;
  const yearBranch = getSexagenaryYear(lunarYear).charAt(1);
  
  // Month branch corresponds to lunar month (Yin=1st month, Xu=12th month)
  // In Ba Zi, month branches are fixed: Yin(2) Mao(3) Chen(4) Si(5) Wu(6) Wei(7) Shen(8) You(9) Xu(10) Hai(11) Zi(12) Chou(1)
  // This maps to lunar months 1-12
  const monthBranchMap = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1]; // index is lunar month (0-11), value is branch index
  const monthBranchIndex = monthBranchMap[lunarMonth - 1] || 0;
  
  // Month stem is calculated based on year stem
  // Pattern: for each year stem, there's a base month stem for month 1 (Yin)
  // Yin month: 甲年寅月起丙寅, 丙年寅月起戊寅, 戊年寅月起庚寅, 庚年寅月起壬寅, 壬年寅月起甲寅
  //           乙年寅月起丁寅, 丁年寅月起己寅, 己年寅月起辛寅, 辛年寅月起癸寅
  
  const stemBaseMap: { [key: number]: number } = {
    0: 2,  // 甲 (Jia) -> starts with 丙 (Bing) for Yin month
    1: 3,  // 乙 (Yi) -> starts with 丁 (Ding) for Yin month
    2: 4,  // 丙 (Bing) -> starts with 戊 (Wu) for Yin month
    3: 5,  // 丁 (Ding) -> starts with 己 (Ji) for Yin month
    4: 6,  // 戊 (Wu) -> starts with 庚 (Geng) for Yin month
    5: 7,  // 己 (Ji) -> starts with 辛 (Xin) for Yin month
    6: 8,  // 庚 (Geng) -> starts with 壬 (Ren) for Yin month
    7: 9,  // 辛 (Xin) -> starts with 癸 (Gui) for Yin month
    8: 0,  // 壬 (Ren) -> starts with 甲 (Jia) for Yin month
    9: 1,  // 癸 (Gui) -> starts with 乙 (Yi) for Yin month
  };
  
  const baseStemIndex = stemBaseMap[yearStemIndex] || 0;
  
  // Add lunar month offset to get the correct stem
  // Lunar months cycle through the heavenly stems (but skip months)
  // Every 2 months moves to next stem
  const monthOffset = Math.floor((lunarMonth - 1) / 2) * 2 % 10; // Every 2 lunar months advance 2 stems
  const monthStemIndex = (baseStemIndex + (lunarMonth - 1)) % 10;
  
  const stem = getHeavenlyStem(monthStemIndex);
  const branch = getEarthlyBranch(monthBranchIndex);
  
  return {
    pillarName: 'Month Pillar',
    pillarNameZH: '月柱',
    stem: stem.stemZH,
    stemZH: stem.stemZH,
    branch: branch.branchZH,
    branchZH: branch.branchZH,
    combined: stem.stemZH + branch.branchZH,
  };
}

export function getDayPillar(lunarYear: number, lunarMonth: number, lunarDay: number): BaZiPillar {
  // Day pillar is calculated from a reference day in the sexagenary cycle
  // Reference: 0001-01-01 is 甲子 (day 0 in cycle)
  // We need to count days from a known reference point
  
  // Known reference: 1900-01-31 (Gregorian) = 甲午 day (31st day in sexagenary cycle)
  // This is day index 30 (0-indexed)
  
  // First convert lunar date back to gregorian for counting
  // Find the closest lunar new year
  const currentYearLNY = lunarNewYears[lunarYear];
  if (!currentYearLNY) {
    // Fallback: use simple calculation
    const baseDate = new Date(1900, 0, 31); // 甲午
    const targetDate = new Date(lunarYear, lunarMonth - 1, lunarDay);
    const dayDiff = Math.floor((targetDate.getTime() - baseDate.getTime()) / (24 * 60 * 60 * 1000));
    
    const stemIndex = (dayDiff + 30) % 10;
    const branchIndex = (dayDiff + 30) % 12;
    
    const stem = getHeavenlyStem(stemIndex);
    const branch = getEarthlyBranch(branchIndex);
    
    return {
      pillarName: 'Day Pillar',
      pillarNameZH: '日柱',
      stem: stem.stemZH,
      stemZH: stem.stemZH,
      branch: branch.branchZH,
      branchZH: branch.branchZH,
      combined: stem.stemZH + branch.branchZH,
    };
  }
  
  // Calculate gregorian date from lunar
  const lunarNewYearDate = new Date(lunarYear, currentYearLNY.m - 1, currentYearLNY.d);
  
  // Get the day of year for the lunar date
  let dayOfYear = 0;
  const yearData = lunarYearData[lunarYear];
  let monthLengths: number[];
  
  if (yearData) {
    monthLengths = yearData.months;
  } else {
    monthLengths = [29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 29, 30];
  }
  
  // Add days from months before this one
  for (let i = 0; i < lunarMonth - 1; i++) {
    dayOfYear += monthLengths[i] || 30;
  }
  dayOfYear += lunarDay;
  
  // Calculate gregorian date
  const gregorianDate = new Date(lunarNewYearDate.getTime() + (dayOfYear - 1) * 24 * 60 * 60 * 1000);
  
  // Calculate day index in sexagenary cycle
  // Reference: 1900-01-31 (Gregorian) is day 30 in sexagenary cycle (甲午)
  const baseDate = new Date(1900, 0, 31);
  const dayDiff = Math.floor((gregorianDate.getTime() - baseDate.getTime()) / (24 * 60 * 60 * 1000));
  
  const stemIndex = (dayDiff + 30) % 10;
  const branchIndex = (dayDiff + 30) % 12;
  
  const stem = getHeavenlyStem(stemIndex);
  const branch = getEarthlyBranch(branchIndex);
  
  return {
    pillarName: 'Day Pillar',
    pillarNameZH: '日柱',
    stem: stem.stemZH,
    stemZH: stem.stemZH,
    branch: branch.branchZH,
    branchZH: branch.branchZH,
    combined: stem.stemZH + branch.branchZH,
  };
}

export function getHourPillar(hour: number, dayBranchIndex: number): BaZiPillar {
  // Hour branch is determined by the time of day (24-hour day divided into 12 double-hour periods)
  // 23:00-01:00 (子), 01:00-03:00 (丑), 03:00-05:00 (寅), 05:00-07:00 (卯), 07:00-09:00 (辰), 09:00-11:00 (巳)
  // 11:00-13:00 (午), 13:00-15:00 (未), 15:00-17:00 (申), 17:00-19:00 (酉), 19:00-21:00 (戌), 21:00-23:00 (亥)
  
  // Convert hour to double-hour period (0-11)
  let hourBranchIndex = 0;
  if (hour >= 23 || hour < 1) {
    hourBranchIndex = 0; // Zi
  } else if (hour >= 1 && hour < 3) {
    hourBranchIndex = 1; // Chou
  } else if (hour >= 3 && hour < 5) {
    hourBranchIndex = 2; // Yin
  } else if (hour >= 5 && hour < 7) {
    hourBranchIndex = 3; // Mao
  } else if (hour >= 7 && hour < 9) {
    hourBranchIndex = 4; // Chen
  } else if (hour >= 9 && hour < 11) {
    hourBranchIndex = 5; // Si
  } else if (hour >= 11 && hour < 13) {
    hourBranchIndex = 6; // Wu
  } else if (hour >= 13 && hour < 15) {
    hourBranchIndex = 7; // Wei
  } else if (hour >= 15 && hour < 17) {
    hourBranchIndex = 8; // Shen
  } else if (hour >= 17 && hour < 19) {
    hourBranchIndex = 9; // You
  } else if (hour >= 19 && hour < 21) {
    hourBranchIndex = 10; // Xu
  } else if (hour >= 21 && hour < 23) {
    hourBranchIndex = 11; // Hai
  }
  
  // Hour stem is determined by day stem
  // Each day stem has a corresponding hour stem sequence
  // For each day stem, hour stems follow a 5-element repeating pattern
  const dayBranch = getEarthlyBranch(dayBranchIndex);
  const dayBranchChar = dayBranch.branchZH;
  
  // Get day stem from day branch index (we need to look this up from our known day)
  // Actually, we need day stem, not branch
  // Day stem mapping for hour stem: 甲己子時起甲子, 乙庚子時起丙子, 丙辛子時起戊子, 丁壬子時起庚子, 戊癸子時起壬子
  
  const hourStemMap: { [key: number]: number[] } = {
    0: [0, 2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2], // 甲/己 day -> starts with 甲 for 子 hour
    1: [1, 3, 5, 7, 9, 1, 3, 5, 7, 9, 1, 3], // 乙/庚 day -> starts with 乙 for 子 hour  
    2: [2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2, 4], // 丙/辛 day -> starts with 丙 for 子 hour
    3: [3, 5, 7, 9, 1, 3, 5, 7, 9, 1, 3, 5], // 丁/壬 day -> starts with 丁 for 子 hour
    4: [4, 6, 8, 0, 2, 4, 6, 8, 0, 2, 4, 6], // 戊/癸 day -> starts with 戊 for 子 hour
  };
  
  // Get the stem pattern for this day stem
  // 甲/己 -> pattern 0, 乙/庚 -> pattern 1, 丙/辛 -> pattern 2, 丁/壬 -> pattern 3, 戊/癸 -> pattern 4
  const stemPattern = dayBranchIndex % 5;
  const stemSequence = hourStemMap[stemPattern] || [0, 2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2];
  
  const hourStemIndex = stemSequence[hourBranchIndex];
  
  const stem = getHeavenlyStem(hourStemIndex);
  const branch = getEarthlyBranch(hourBranchIndex);
  
  return {
    pillarName: 'Hour Pillar',
    pillarNameZH: '時柱',
    stem: stem.stemZH,
    stemZH: stem.stemZH,
    branch: branch.branchZH,
    branchZH: branch.branchZH,
    combined: stem.stemZH + branch.branchZH,
  };
}

export function calculateBaZi(year: number, month: number, day: number, hour: number = 12): BaZiProfile {
  // IMPORTANT: Convert solar (Gregorian) date to lunar date first
  // Ba Zi calculations must use lunar calendar dates
  const lunarDate = solarToLunar(year, month, day);
  const lunarYear = lunarDate.year;
  const lunarMonth = lunarDate.month;
  const lunarDay = lunarDate.day;
  
  // Get year pillar (using sexagenary cycle based on lunar year)
  const yearPillarStr = getSexagenaryYear(lunarYear);
  const yearStem = yearPillarStr[0];
  const yearBranch = yearPillarStr[1];
  
  const yearPillar: BaZiPillar = {
    pillarName: 'Year Pillar',
    pillarNameZH: '年柱',
    stem: yearStem,
    stemZH: yearStem,
    branch: yearBranch,
    branchZH: yearBranch,
    combined: yearPillarStr,
  };
  
  // Use lunar month and day for remaining pillars
  const monthPillar = getMonthPillar(lunarYear, lunarMonth);
  const dayPillar = getDayPillar(lunarYear, lunarMonth, lunarDay);
  
  const dayBranchIndex = earthlyBranches.findIndex(b => b.branchZH === dayPillar.branchZH);
  const hourPillar = getHourPillar(hour, dayBranchIndex);
  
  // Get day master element (日主五行) from day stem
  const dayStem = heavenlyStems.find(s => s.stemZH === dayPillar.stemZH);
  const dayMasterElement = dayStem?.elementZH || '未知';
  
  // Calculate five elements analysis
  const elementAnalysis = analyzeElements(yearPillar, monthPillar, dayPillar, hourPillar);
  
  return {
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar,
    dayMasterElement: dayMasterElement,
    dayMasterElementZH: dayMasterElement,
    analysis: `Your Ba Zi shows a ${dayMasterElement} day master. This represents your core personality and destiny direction.`,
    analysisZH: `你的八字顯示日主為${dayMasterElement}。這代表你的核心性格和人生方向。`,
    elementAnalysis: elementAnalysis,
  };
}

function getElementFromCharacter(char: string): string {
  const stemElement = heavenlyStems.find(s => s.stemZH === char);
  if (stemElement) return stemElement.elementZH;
  
  const branchElement = earthlyBranches.find(b => b.branchZH === char);
  if (branchElement) return branchElement.elementZH;
  
  return '';
}

function analyzeElements(year: BaZiPillar, month: BaZiPillar, day: BaZiPillar, hour: BaZiPillar): ElementAnalysis {
  const elements = {
    '木': 0, // Wood
    '火': 0, // Fire
    '土': 0, // Earth
    '金': 0, // Metal
    '水': 0, // Water
  };
  
  // Count elements from all four pillars (both stem and branch)
  const pillars = [year, month, day, hour];
  
  pillars.forEach(pillar => {
    const stemElement = getElementFromCharacter(pillar.stem);
    const branchElement = getElementFromCharacter(pillar.branch);
    
    if (stemElement && elements.hasOwnProperty(stemElement)) {
      elements[stemElement as keyof typeof elements]++;
    }
    if (branchElement && elements.hasOwnProperty(branchElement)) {
      elements[branchElement as keyof typeof elements]++;
    }
  });
  
  const total = Object.values(elements).reduce((a, b) => a + b, 0);
  const entries = Object.entries(elements).map(([el, count]) => ({ element: el, count }));
  const strongest = entries.reduce((max, curr) => curr.count > max.count ? curr : max);
  const weakest = entries.reduce((min, curr) => curr.count < min.count ? curr : min);
  
  let balance = 'Balanced';
  let recommendation = 'Maintain harmony among all five elements';
  let recommendationZH = '保持五行的和諧';
  
  const maxCount = strongest.count;
  const minCount = weakest.count;
  
  if (maxCount - minCount > 4) {
    balance = 'Imbalanced - Excess';
    recommendation = `${strongest.element === '木' ? 'Wood' : strongest.element === '火' ? 'Fire' : strongest.element === '土' ? 'Earth' : strongest.element === '金' ? 'Metal' : 'Water'} is dominant. Reduce excessive ${strongest.element} energy and strengthen ${weakest.element}.`;
    recommendationZH = `${strongest.element}過旺。應減弱過度的${strongest.element}能量，並加強${weakest.element}。`;
  } else if (maxCount - minCount > 2) {
    balance = 'Slightly Imbalanced';
    recommendation = `Enhance ${weakest.element} to balance with ${strongest.element}.`;
    recommendationZH = `增強${weakest.element}以平衡${strongest.element}。`;
  }
  
  return {
    wood: elements['木'],
    fire: elements['火'],
    earth: elements['土'],
    metal: elements['金'],
    water: elements['水'],
    total: total,
    strongest: strongest.element,
    weakest: weakest.element,
    balance: balance,
    recommendation: recommendation,
    recommendationZH: recommendationZH,
  };
}

