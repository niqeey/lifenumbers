# Life Path Number Calculator | 生命靈數計算器

A beautiful React application for calculating Life Path Numbers (生命靈數) based on birthdates, displaying personality traits, and providing recommendations for personal growth.

## Features

- 🎯 **Life Path Number Calculation**: Accurate calculation based on birthdate
- 🌟 **Personality Traits**: Detailed descriptions for numbers 1-9
- 🔢 **Missing Number Analysis**: Identifies missing numbers in your birthdate
- 💡 **Personalized Recommendations**: Suggestions to balance missing energies
- 🌍 **Bilingual Support**: Full English and Chinese (中文) interface
- 🎨 **Beautiful UI**: Modern, responsive design with Tailwind CSS
- 🌓 **Dark Mode**: Automatic dark mode support

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **lowdb** for data storage (personality traits and recommendations)

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Usage

1. **Select your birthdate** using the date picker
2. **Click "Calculate My Number"** to see your Life Path Number
3. **View your results**:
   - Life Path Number and archetype
   - Element association
   - Personality traits
   - Strengths and challenges
   - Missing numbers in your birthdate
   - Recommendations for balance

4. **Toggle language** between English and Chinese using the language switcher

## Life Path Numbers

The calculator supports all Life Path Numbers 1-9, each with unique characteristics:

- **1 - The Leader** (領導者): Independent, pioneering, ambitious
- **2 - The Peacemaker** (和平使者): Diplomatic, cooperative, sensitive
- **3 - The Creative Communicator** (創意溝通者): Expressive, artistic, optimistic
- **4 - The Builder** (建設者): Practical, organized, reliable
- **5 - The Freedom Seeker** (自由追尋者): Adventurous, versatile, dynamic
- **6 - The Nurturer** (照顧者): Caring, compassionate, responsible
- **7 - The Seeker** (探索者): Analytical, spiritual, introspective
- **8 - The Powerhouse** (力量者): Ambitious, powerful, business-minded
- **9 - The Humanitarian** (人道主義者): Compassionate, idealistic, generous

## Calculation Method

The Life Path Number is calculated by:
1. Taking all digits from your birthdate (YYYY-MM-DD)
2. Adding them together
3. Reducing to a single digit (1-9)
4. Note: Master numbers 11, 22, and 33 are kept as-is

Example:
- Birthdate: 1990-05-15
- Digits: 1+9+9+0+0+5+1+5 = 30
- Reduce: 3+0 = 3
- Life Path Number: **3**

## Missing Numbers

The app identifies which numbers (0-9) are missing from your birthdate and provides specific recommendations to balance those energies through:
- Color therapy
- Element associations (Wood, Fire, Earth, Metal, Water)
- Lifestyle adjustments
- Personal development activities

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
lifenumbers/
├── src/
│   ├── components/         # React components
│   │   ├── BirthdayInput.tsx
│   │   ├── LanguageToggle.tsx
│   │   └── ResultDisplay.tsx
│   ├── data/              # Database files
│   │   ├── lifePathData.ts
│   │   └── missingNumberData.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   ├── types.ts           # TypeScript types
│   ├── utils.ts           # Utility functions
│   └── index.css          # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Future Enhancements

- [ ] Save calculation history
- [ ] Export results as PDF
- [ ] Compatibility analysis (compare two Life Path Numbers)
- [ ] Daily numerology insights
- [ ] More detailed element analysis
- [ ] Personal year number calculation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Disclaimer

This calculator is for entertainment and self-reflection purposes only. Numerology is not a science and should not be used as the sole basis for important life decisions.

## Acknowledgments

- Based on traditional numerology and Life Path Number principles
- Inspired by Vogue Taiwan's article on Life Path Numbers
- Element associations based on Chinese Five Elements theory

---

**Enjoy discovering your Life Path Number!** 🌟

For questions or support, please open an issue on the repository.
