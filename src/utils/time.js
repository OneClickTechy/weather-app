import { format } from 'date-fns';

export const toLocaleDateAndTime = (dt) => {
    // Convert Unix timestamp to UTC date
    const utcDate = new Date(dt * 1000);

    // Format the date as per this format "Nov 5, 12:34am"
    const formattedDate = format(utcDate, 'MMM d, h:mma');

    console.log(formattedDate); // Outputs in the desired format
    return formattedDate;
};

// Usage
toLocaleDateAndTime(1730750699);