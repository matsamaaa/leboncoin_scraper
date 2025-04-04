# Leboncoin Scraper

## Description

Leboncoin Scraper is a Node.js-based tool designed to extract data from the popular French classifieds website, Leboncoin. This scraper allows you to automate the process of collecting information such as ads, prices, descriptions, and more.

## Features

- Continuously monitor Leboncoin for ads matching your specified criteria.
- Search for items by name and filter results based on a defined maximum price.
- Extract details such as title, price, location, and description.
- Save the scraped data in a MongoDB database for easy access and management.
- The search URL is configurable via environment variables for flexibility.
- Easy to configure and extend for various use cases.

## Prerequisites

- Node.js 14 or higher
- Required npm packages (see [Installation](#installation))
- A running MongoDB instance

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/leboncoin_scraper.git
    cd leboncoin_scraper
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    update the `.env` file in the root directory and configure the following:
    ```env
    MONGODB_URL="mongodb://dbname:password@url:port/?authMechanism=DEFAULT&authSource=admin&dbName=dbname"
    ```

## Usage

1. Ensure your MongoDB instance is running.

2. Run the scraper:
    ```bash
    npm run build
    ```

### Fixtures

1. Populate the database with sample data:
    ```bash
    npm run fixtures
    ```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is intended for educational purposes only. Please ensure you comply with Leboncoin's terms of service when using this scraper.
