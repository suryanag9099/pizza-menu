# Fast React Pizza Co.

## Description

Fast React Pizza Co. is a simple React application that showcases a restaurant menu for an Italian pizza place. The app dynamically renders available pizzas, indicates sold-out items, and displays operational hours. Users can explore the menu and check whether the restaurant is open.

## Features

- *Dynamic Menu Display**: Lists all available pizzas with images, descriptions, and prices.
- **Conditional Rendering**: Shows a message when the menu is empty.
- **Operational Hours Display**: Indicates whether the restaurant is open or closed based on the current time.
- **Sold Out State Handling**: Grays out sold-out pizzas.
- **Styled Components**: Uses CSS for a polished UI.

## Tech Stack

- **Frontend**: React.js
- **Styling**: CSS (with Google Fonts)
- **Data Handling**: Static JavaScript object

## Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com//fast-react-pizza.git
   ```
2. Navigate to the project directory:
   ```sh
   cd fast-react-pizza
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000/`.

## Components Breakdown

### `App.js`
Renders the main layout and includes `Header`, `Menu`, and `Footer` components.

### `Header.js`

- Displays the restaurant's name.

### `Menu.js`

- Maps through `pizzaData` to render the list of pizzas.
- Uses conditional rendering to handle empty menus.

### `Pizza.js`

- Displays individual pizza details.
- Highlights sold-out pizzas.

### `Footer.js`

- Displays restaurant operating hours and an order button when open.

## CSS Styling

- The UI follows a clean and minimal design.
- Uses a responsive grid layout for the pizza list.
- Google Fonts (`Roboto Mono`) for typography.
- Styled elements like buttons, headers, and sold-out indicators.

## Future Improvements

- Add online ordering functionality.
- Implement a backend for dynamic data storage.
- Add animations for better UI/UX.

## License
This project is open-source and available under the MIT License.

