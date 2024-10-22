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
        console.log(csvText.slice(-1000))
        return csvText.trim()

    } catch (error) {
        console.error('Error fetching the CSV file:', error);
    }
}

function cleanCSV(csvObj) {
    const cleanedData = csvObj.map(entry => {
        const cleanedEntry = {};

        // Loop through each key-value pair in the object
        for (let [key, value] of Object.entries(entry)) {
            // Clean the key and value by removing \r and trimming whitespace
            try{
                const cleanKey = key.replace(/\r/g, '').trim();
                const cleanValue = value.replace(/\r/g, '').trim();
                cleanedEntry[cleanKey] = cleanValue;
            } catch (err) {
                cleanedEntry[key] = value;
                console.log(key,value)
            }

            
        }

        return cleanedEntry;
    });

    return cleanedData; // Return the cleaned data
}

export const files = {
    parseCSV: (csvContent) => parseCSV(csvContent),
    fetchCSV: (url) => fetchCSV(url),
    cleanCSV: (csvObj) => cleanCSV(csvObj)
}