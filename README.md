# 🧮 React Calculator

A modern, fully-functional calculator application built with React. Features a sleek glass-morphism design, responsive layout, and complete arithmetic operations.

![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![CSS3](https://img.shields.io/badge/CSS3-1572B6)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Basic Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Clear Functions**: 
  - AC (All Clear) - Resets everything
  - CE (Clear Entry) - Clears current input only
- **Advanced Operations**:
  - Delete last digit (⌫)
  - Decimal point (.)
  - Sign toggle (±)
  - Percentage calculation (%)
- **Smart Display**:
  - Shows current expression
  - Displays calculation results
  - Handles large numbers with scientific notation
  - Error handling (division by zero)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Glass-morphism effect with smooth animations

## 🚀 Live Demo

[Add your deployed link here once available]

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn

## 🛠️ Installation

### Method 1: Create a new React app

1. **Create a new React application**
```bash
npx create-react-app calculator-app
cd calculator-app
Replace the default files

Delete the default src/App.js, src/App.css, and src/index.css

Create the project structure as shown below

Copy the provided code into respective files

Install dependencies (if any)

bash
npm install
# or
yarn install
Start the development server

bash
npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000

Method 2: Add to existing React project
Copy the component files into your src/components/ directory

Copy the styles into your src/style.css

Import the App component in your index.js:

jsx
import App from './App';
📁 Project Structure
text
calculator-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Display.jsx
│   │   ├── Button.jsx
│   │   └── ButtonPanel.js
|        ├── style.css
│   ├── App.jsx
|   └── index.js
│   
├── package.json
├── README.md
└── .gitignore
📝 File Contents
src/App.jsx
Main application component containing calculator logic and state management.

src/components/Display.jsx
Component for displaying the current expression and value.

src/components/Button.jsx
Reusable button component with variant styling.

src/components/ButtonPanel.jsx
Component that organizes all calculator buttons in a grid layout.

src/style.css
Complete styling including glass-morphism effects, responsive design, and animations.

🎮 Usage Guide
Basic Operations
Button	Function
0-9	Input numbers
.	Add decimal point
+ - × ÷	Perform arithmetic operations
=	Calculate result
AC	Clear everything
CE	Clear current entry
⌫	Delete last digit
±	Toggle positive/negative
%	Convert to percentage
Example Calculations
Simple addition: 5 + 3 = 8

Multiplication: 6 × 4 = 24

Division: 15 ÷ 3 = 5

Percentage: 50% = 0.5

Negative numbers: 5 ± = -5

Chain operations: 2 + 3 × 4 = 20 (follows standard order)

🎨 Features in Detail
Smart Display
Automatically formats large numbers

Shows full calculation expression

Prevents overflow with scientific notation

Error Handling
Division by zero shows "Error"

Invalid operations are caught and displayed

Input limits prevent overflow

Responsive Design
Desktop: Full calculator layout

Tablet: Adjusted button sizes

Mobile: Optimized touch targets

🔧 Customization
Changing Colors
Edit the CSS variables in style.css:

css
/* Modify gradient background */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Change button colors */
.btn-operator {
  background: #f59e0b; /* Change operator color */
}
Adding New Functions
Add new button in ButtonPanel.jsx

Create handler function in App.jsx

Implement logic in the handler

Style the button in style.css

🧪 Testing
Run tests using:

bash
npm test
Example test for calculator logic:

jsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('performs addition correctly', () => {
  render(<App />);
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('8')).toBeInTheDocument();
});

🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Development Guidelines
Follow React best practices

Use functional components with hooks

Maintain consistent code formatting

Write meaningful commit messages

Test your changes before submitting

🐛 Known Issues
Extremely large numbers may display in scientific notation

Mobile landscape mode may require scrolling

Continuous operations follow left-to-right precedence (not mathematical order)


👏 Acknowledgments
Inspired by classic calculator designs

Icons and typography from Font Awesome and Google Fonts

Glass-morphism effect inspired by modern UI trends

📞 Contact
Your Name - tesfayeaberalingane@gmail.com


