// Convert a unix timestamp to a HH:MM format date
export function convertUnix(timestamp, timeZoneOffset) {
  const date = new Date((timestamp + timeZoneOffset) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

export function sunshineCalculator(sunriseStamp, sunsetStamp) {
  const sunshineStamp = (sunsetStamp - sunriseStamp) * 1000; // milisec
  const sunshineMinutes = Math.round((sunshineStamp / (1000 * 60)) % 60); // minutes
  const sunshineHours = Math.round((sunshineStamp / (1000 * 60 * 60)) % 24); // hours

  return `${sunshineHours} heure${
    sunshineHours > 1 ? "s" : ""
  } et ${sunshineMinutes} minute${sunshineMinutes > 1 ? "s" : ""}`;
}
