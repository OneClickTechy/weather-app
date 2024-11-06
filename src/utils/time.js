import { format } from "date-fns";

export const toLocaleDateAndTime = (dt) => {
  // Convert Unix timestamp to UTC date
  const utcDate = new Date(dt * 1000);

  // Format the date as per this format "Nov 5, 12:34am"
  const formattedDate = format(utcDate, "MMM d, h:mma");

  return formattedDate;
};

export const toLocalDayDate = (dt) => {
  // Convert Unix timestamp to UTC date
  const utcDate = new Date(dt * 1000);
  const formattedDate = format(utcDate, "EEE, MMM dd");
  return formattedDate;
};

export const toLocalTime = (dt) => {
  const utcDate = new Date(dt * 1000);
  const formattedDate = format(utcDate, "hh:mma");
  return formattedDate;
};

