// Gets the day portion of the URL that corresponds to a date
// August-21 returns 21 as a number (+)
export function getParamDay(date) {
    return +date.split('-')[1];
}

// Gets the month portion of the URL that corresponds to a date
// August-21 returns August as a string
export function getParamMonth(date) {
    return date.split('-')[0];
}

// Gets the number representation of the month protion of the URL
// August-21 returns 7 as a number
export function getParamMonthNumber(date) {
    const month = getParamMonth(date);
    return +(new Date(Date.parse(month + " 1, 1890")).getMonth());
}

// Returns a formatted string of the date passed into the function minus one day (Yesterday)
// The passed in date is in the format "Month-Day"
// "August-21" returns "August-20"
// Not sure this would cope with leap years
export function dateMinusOneDay(date) {
    const today = new Date(1890, getParamMonthNumber(date), getParamDay(date) - 1);
    return `${today.toLocaleDateString("en-us", { month: "long" })}-${today.toLocaleDateString("en-us", { day: "2-digit" })}`
}

// Returns a formatted string of the date passed into the function plus one day (Tomorrow)
// The passed in date is in the format "Month-Day"
// "August-21" returns "August-22"
// Not sure this would cope with leap years
export function datePlusOneDay(date) {
    const today = new Date(1890, getParamMonthNumber(date), getParamDay(date) + 1);
    return `${today.toLocaleDateString("en-us", { month: "long" })}-${today.toLocaleDateString("en-us", { day: "2-digit" })}`
}

// Returns a formatted string representation of todays date
// Returns "August-21"
export function getToday(today) {
    return `${today.toLocaleDateString("en-us", { month: "long" })}-${today.toLocaleDateString("en-us", { day: "2-digit" })}`;
}
