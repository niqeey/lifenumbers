export interface LifePathData {
  number: number;
  nameEN: string;
  nameZH: string;
  personalityEN: string[];
  personalityZH: string[];
  strengthsEN: string[];
  strengthsZH: string[];
  weaknessesEN: string[];
  weaknessesZH: string[];
  element: string;
  elementZH: string;
}

export interface MissingNumberRecommendation {
  number: number;
  nameEN: string;
  nameZH: string;
  remediesEN: string[];
  remediesZH: string[];
  elementsEN: string[];
  elementsZH: string[];
}

export interface TriangleNumbers {
  // Base layer - birth date digits
  A: number; B: number; C: number; D: number;
  E: number; F: number; G: number; H: number;
  
  // Second layer - sums of adjacent base digits
  P: number; Q: number; R: number;
  S: number; T: number; U: number;
  
  // Third layer
  M: number; N: number;
  V: number; W: number;
  
  // Fourth layer
  O: number; // Main personality (主性格) - 60% of behavior
  X: number;
  
  // Top
  Z: number;
  
  // Derived codes
  innerPersonality: number;  // O+M+N (内心性格密码)
  outerPersonality: number;  // U+R+X (外心密码)
  subconsciousCode: number;  // L+I+O (潜意识码) - main motivation
  
  // Parent genes
  fatherGenes: string; // I、J、M
  motherGenes: string; // K、L、N
  
  // Personality types based on outer personality
  personalityType: string; // 理想主义(3), 现实主义(6), 远见主义(9)
  
  // All layers for display
  layers: number[][];
}

export interface CalculationResult {
  lifePathNumber: number;
  birthdate: string;
  missingNumbers: number[];
  allDigits: number[];
  triangleNumbers: TriangleNumbers;
}
