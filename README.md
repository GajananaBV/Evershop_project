🚀 Playwright Automation Framework

Author: Gajanan Vilas Bhange

https://img.shields.io/badge/Playwright-1.54.2-2EA44F?style=for-the-badge&logo=playwright
https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript
https://img.shields.io/badge/Cucumber-BDD-23D96C?style=for-the-badge&logo=cucumber
https://img.shields.io/badge/Allure-Reports-FF4A36?style=for-the-badge&logo=allure

A comprehensive TypeScript-based automation framework using Playwright for robust end-to-end testing with BDD support, database integration, and beautiful reporting.

✨ Features

🎭 Cross-Browser Testing - Chromium, Firefox, WebKit support
📝 BDD with Cucumber - Behavior-Driven Development approach
🗄️ Database Integration - PostgreSQL testing capabilities
📊 Data-Driven Testing - Excel, CSV data handling
📱 Multi-Environment - Dev, QA, Prod environment support
🎨 Allure Reporting - Detailed and interactive test reports
📸 Visual Testing - Screenshot and video capture
🏗️ Page Object Model - Maintainable test architecture

📁 Project Structure

text





playwright_training/
├── 📂 pages/                          # Page Object Model
│   ├── basePage.ts                    # Base page class
│   ├── flightBookingPage.ts           # Flight booking interactions
│   ├── makemytrip.page.ts             # MakeMyTrip page
│   └── signupPage.ts                  # Signup flows
├── 📂 tests/
│   ├── 📂 data/                       # Test data
│   │   └── testData.ts                # Centralized test data
│   ├── 📂 Evershop/                   # E-commerce tests
│   ├── 📂 Evershop_DDF/               # Data-driven tests
│   ├── 📂 features/                   # BDD feature files
│   └── 📂 steps/                      # Step definitions
├── 📂 typescript-basics/              # TS learning examples
├── playwright.config.ts               # Playwright configuration
├── package.json                       # Dependencies & scripts
└── tsconfig.json                      # TypeScript config



🚀 Quick Start

Prerequisites

Node.js 16+
npm or yarn
Java 8+ (for Allure reports)

Installation

Clone and setup

bash





git clone <repository-url>cd playwright_trainingnpm installnpx playwright install



Environment setup

bash





cp .env.example .env# Configure your environment variables



Run tests

bash





# Run all testsnpm test# Run smoke testsnpm run test:smoke
# Run with UInpm run test:smoke:headed



🧪 Test Execution

Run Specific Test Types

bash





# BDD Tests with Cucumbernpm run test:bdd
# Regression testsnpm run test:regression
# Debug modenpm run test:smoke:debug
# Specific tag (@p1)npm run test:p1



Database Tests

bash





# Run database integration testsnpm run test:regression



Visual Tests

bash





# Run tests with visual validationnpm run test:smoke:headed



📊 Reporting

Allure Reports

bash





# Generate and view Allure reportnpm run test:allure report# ornpm run allure:open



Playwright Reports

bash





# View HTML reportnpm run test:report



Clean Reports

bash





# Remove previous test artifactsnpm run test:report:clean



🔧 Configuration

Environment Variables

Create .env file:

env





# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=testdb
DB_USER=username
DB_PASSWORD=password

# Applications
BASE_URL=https://example.com
EVERSHOP_URL=https://evershop.example.com

# Test Settings
HEADLESS=true
TIMEOUT=30000
SLOW_MO=100



Playwright Config

Key settings in playwright.config.ts:

Multiple browser support
Timeout configurations
Screenshot & video on failure
Allure & HTML reporters

🛠️ Development

Code Quality

bash





# Lint TypeScript filesnpm run code:lint



Project Maintenance

bash





# Clean installationnpm run clean:install
# Remove test artifactsnpm run clean



🧩 Test Types

1. UI Tests

E-commerce flows - Product management, coupons
Travel booking - Flight search and booking
User management - Registration, login, subscriptions

2. API Tests

REST API validation
Database integrity checks

3. Database Tests

PostgreSQL data validation
UI-to-database consistency

4. File Tests

Excel data processing
CSV file handling
File upload scenarios

📋 Best Practices

Page Object Model - All UI interactions encapsulated
Data Separation - Test data stored separately from logic
Reusable Utilities - Common functions in helper classes
Tagging System - Organized test execution
Error Handling - Comprehensive error management

🤝 Contributing

Follow existing code structure
Write tests for new features
Update documentation
Ensure all tests pass
Use conventional commit messages

📝 Scripts Overview



Command

Description

npm test

Run all tests

npm run test:bdd

Run BDD tests with Cucumber

npm run test:smoke

Run smoke tests

npm run test:regression

Run regression tests

npm run test:report

View HTML report

npm run allure:open

Open Allure report

npm run code:lint

Lint TypeScript files

Author: Gajanan Vilas Bhange

