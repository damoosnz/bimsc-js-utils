function isoDateToDDMMYYYYHHMMampm(dateISOStr) {

    const date = new Date(dateISOStr)

    // Extract day, month, year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const year = date.getFullYear();

    // Extract hours and minutes
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight (0 => 12)

    // Format the final string
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

    return {
        date: formattedDate,
        time: formattedTime,
        string: formattedDate + ' ' + formattedTime
    };

}

export const times = {
    isoDateToDDMMYYYYHHMMampm : (dateISOStr)=> isoDateToDDMMYYYYHHMMampm(dateISOStr)
}