// Function to parse the CSV text into an array of objects
function parseCSV(csvText) {
    const rows = csvText.split('\n');  // Split CSV text into rows
    const headers = rows[0].split(',');  // Get headers from the first row
    const data = rows.slice(1);  // Remove header row

    return data.map(row => {
        const values = row.split(',');  // Split each row into values
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index];  // Map values to headers
        });
        return obj;
    });
}

// Function to fetch and process the CSV file
async function fetchCSV(url) {
    try {
        // Fetch the CSV file from the given URL
        const response = await fetch(url);

        // Check if the response is OK (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the CSV content as text
        const csvText = await response.text();

        // Process the CSV text here (e.g., split into rows/columns)
        const parsedCSV = parseCSV(csvText);

        console.log(parsedCSV); // Now you can work with the parsed data
    } catch (error) {
        console.error('Error fetching the CSV file:', error);
    }
}

export const files = {
    parseCSV: (csvContent)=> parseCSV(csvContent),
    fetchCSV: (url) => fetchCSV(url)
}