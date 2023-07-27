# My CSV Project

This project is designed to process a CSV file using Node.js.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies

## Usage

1. Place your CSV file in the `data` folder
2. Run `npm start` to process the CSV file
3. The processed data will be saved in the `output` folder as `output.csv`

## Project Structure

```
my-csv-project
├── src
│   ├── index.js
│   └── utils
│     ├── csv.js
│     └── logger.js
├── data
│   └── input.csv
├── output
│   └── output.csv
├── .vscode
│   ├── settings.json
│   └── launch.json
├── package.json
└── README.md
```

- `src`: Contains the source code for the project
  - `index.js`: The main entry point for the application
  - `utils`: Contains utility functions used by the application
    - `csv.js`: Contains functions for processing CSV files
    - `logger.js`: Contains functions for logging messages to the console
- `data`: Contains the input CSV file
- `output`: Contains the output CSV file
- `.vscode`: Contains Visual Studio Code configuration files
- `package.json`: Contains project metadata and dependencies
- `README.md`: Contains project documentation