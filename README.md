# Unit Converter

A simple and intuitive web-based unit converter application built with Node.js, Express, and EJS. Convert between different units of length, weight, and temperature with a clean, user-friendly interface.

## Features

- **Length Conversion**: Convert between meters (m), decimeters (dm), centimeters (cm), kilometers (km), and millimeters (mm)
- **Weight Conversion**: Convert between ounces (oz), pounds (lb), milligrams (mg), grams (g), kilograms (kg), and metric tons (t)
- **Temperature Conversion**: Convert between Celsius, Fahrenheit, and Kelvin
- **Real-time Error Handling**: Displays helpful error messages for invalid inputs
- **Responsive Design**: Clean and modern UI that works across different screen sizes
- **Server-side Rendering**: Fast and efficient page rendering using EJS templates

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Template Engine**: EJS 3.1.10
- **Layout Engine**: express-ejs-layouts 2.5.1
- **Development**: Nodemon 3.1.11
- **Package Manager**: pnpm

## Project Structure

```
├── app.js                          # Main application entry point
├── package.json                    # Project dependencies and scripts
├── public/
│   └── css/
│       └── global.css             # Global styling
├── controllers/
│   ├── lengthController.js        # Length conversion handler
│   ├── tempController.js          # Temperature conversion handler
│   └── weightController.js        # Weight conversion handler
├── services/
│   ├── lengthService.js           # Length conversion logic
│   ├── tempService.js             # Temperature conversion logic
│   └── weightService.js           # Weight conversion logic
├── routes/
│   ├── api/
│   │   └── convert.js             # API routes for conversions
│   └── views/
│       ├── home.js                # Length page route
│       ├── temp.js                # Temperature page route
│       └── weight.js              # Weight page route
└── views/
    ├── layouts/
    │   └── index.ejs              # Main layout template
    ├── pages/
    │   ├── home.ejs               # Length conversion page
    │   ├── temp.ejs               # Temperature conversion page
    │   └── weight.ejs             # Weight conversion page
    └── partials/
        └── header.ejs             # Navigation header component
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Cleve-keem/UnitConverterEJS
cd UnitConverterEJS
```

2. Install dependencies:

```bash
pnpm install
```

### Running the Application

**Development mode** (with auto-reload):

```bash
pnpm dev
```

**Production mode**:

```bash
pnpm start
```

The application will start on `http://localhost:3000`

## Usage

1. **Navigate** to one of the conversion pages using the navigation menu:

   - Length: `/length`
   - Weight: `/weight`
   - Temperature: `/temperature`

2. **Enter** the value you want to convert

3. **Specify** the unit you're converting from

4. **Specify** the unit you're converting to

5. **Click** the "Convert" button to see the result

6. **Click** "Reset" to clear the result and convert again

## Supported Units

### Length

- Meters (m)
- Decimeters (dm)
- Centimeters (cm)
- Kilometers (km)
- Millimeters (mm)

### Weight

- Ounces (oz)
- Pounds (lb)
- Milligrams (mg)
- Grams (g)
- Kilograms (kg)
- Metric Tons (t)

### Temperature

- Celsius (C)
- Fahrenheit (F)
- Kelvin (K)

## API Routes

### POST `/length`

Convert length units

**Request Body**:

```json
{
  "value": 100,
  "from": "m",
  "to": "cm"
}
```

### POST `/weight`

Convert weight units

**Request Body**:

```json
{
  "value": 5,
  "from": "kg",
  "to": "g"
}
```

### POST `/temperature`

Convert temperature units

**Request Body**:

```json
{
  "value": 32,
  "from": "f",
  "to": "c"
}
```

## Error Handling

The application includes comprehensive error handling:

- Invalid unit names are caught and reported
- Non-numeric values are rejected with clear error messages
- Errors are displayed on the page without breaking the application

## Styling

The application uses a modern, clean design with:

- Custom CSS styling in [public/css/global.css](public/css/global.css)
- Responsive layout that adapts to different screen sizes
- Accessible form elements with proper labels
- Visual feedback for input focus states
- Color-coded buttons and interactive elements

## Project Inspiration

https://roadmap.sh/projects/unit-converter

## License

ISC

## Author

Hackhim

---

**Happy Converting!** 🔄
