import { CalculationResult, TriangleNumbers } from './types';

/**
 * Reduce a number to single digit (1-9)
 */
function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
}

/**
 * Calculate Life Path Triangle Numbers
 * Following the 生命密碼三角形計算方法
 */
export function calculateLifePathNumber(birthdate: string): CalculationResult {
  // Parse birthdate (YYYY-MM-DD)
  const [year, month, day] = birthdate.split('-');

  // Get all 8 digits: YYYYMMDD -> A B C D E F G H
  const yearDigits = year.split('').map(Number);
  const monthDigits = month.split('').map(Number);
  const dayDigits = day.split('').map(Number);

  const allDigits = [...yearDigits, ...monthDigits, ...dayDigits];

  // Build triangle with non-overlapping pairs per layer
  const layers: number[][] = [];
  layers.push(allDigits); // base layer length 8

  while (layers[layers.length - 1].length > 1) {
    const prev = layers[layers.length - 1];
    const next: number[] = [];
    for (let i = 0; i < prev.length; i += 2) {
      if (prev[i + 1] === undefined) break; // safety
      next.push(reduceToSingleDigit(prev[i] + prev[i + 1]));
    }
    layers.push(next);
  }

  // Base layer (8 digits)
  const [A, B, C, D, E, F, G, H] = layers[0];

  // Layer1 (4 digits) if present
  const layer1 = layers[1] || [];
  const P = layer1[0] ?? 0; // A+B
  const Q = layer1[1] ?? 0; // C+D
  const R = layer1[2] ?? 0; // E+F
  const S = layer1[3] ?? 0; // G+H

  // Layer2 (2 digits) if present
  const layer2 = layers[2] || [];
  const X = layer2[1] ?? 0; // second-row right

  // Top (main personality)
  const Z = layers[layers.length - 1][0];
  const O = Z; // main personality is the top number

  // Derived codes (best-effort with simplified mapping)
  const innerPersonality = reduceToSingleDigit(O + (layer1[1] ?? 0) + (layer1[2] ?? 0));
  const outerPersonality = reduceToSingleDigit(P + S + X);
  const subconsciousCode = reduceToSingleDigit(P + (layer1[1] ?? 0) + O);

  let personalityType = '';
  if (outerPersonality === 3) personalityType = 'idealist';
  else if (outerPersonality === 6) personalityType = 'realist';
  else if (outerPersonality === 9) personalityType = 'visionary';

  const fatherGenes = `${Q}-${O}`;
  const motherGenes = `${O}-${S}`;

  const triangleNumbers: TriangleNumbers = {
    A, B, C, D, E, F, G, H,
    P, Q, R, S, T: 0, U: 0,
    M: 0, N: 0, V: 0, W: 0,
    O, X,
    Z,
    innerPersonality,
    outerPersonality,
    subconsciousCode,
    fatherGenes,
    motherGenes,
    personalityType,
    layers,
  };

  // Find missing numbers (1-9, excluding 0)
  const uniqueDigits = new Set(allDigits.filter(d => d !== 0));
  const missingNumbers: number[] = [];
  for (let i = 1; i <= 9; i++) {
    if (!uniqueDigits.has(i)) {
      missingNumbers.push(i);
    }
  }

  return {
    lifePathNumber: Z, // top of pyramid with non-overlap method
    birthdate,
    missingNumbers,
    allDigits,
    triangleNumbers,
  };
}

/**
 * Format date to YYYY-MM-DD
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Validate birthdate
 */
export function isValidBirthdate(dateString: string): boolean {
  const date = new Date(dateString);
  const now = new Date();
  return date instanceof Date && !isNaN(date.getTime()) && date < now;
}
