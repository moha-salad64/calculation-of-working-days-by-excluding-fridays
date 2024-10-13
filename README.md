📅 Working Days and Target Calculation Project
This project calculates the total number of working days, excluding Fridays, for a given period between a start and end date. It also distributes a target value proportionally across the valid working days.

📌 Features
Exclude Fridays from working days.
Calculate the total number of working days for each month.
Calculate the worked days between a specific range of dates.
Proportionally distribute a given target based on working days.
🛠️ Functions Overview
1. calculateTotalTarget(startDate, endDate, target)
Main function that calculates working days and target distribution.

Parameters:

startDate: The starting date of the period (e.g., '2024-01-01').
endDate: The ending date of the period (e.g., '2024-03-31').
target: The target number to be distributed across working days.
Returns:

TotalTarget: The total calculated target for the working days.
daysExcludingFriend: Array of working days (excluding Fridays) for each month of the year.
daysWorkedExcludingFridays: Array of worked days (excluding Fridays) for each month in the date range.
monthlyTargets: Proportional target for each month based on working days.
2. isworkingDay(day)
Checks whether the given day is a working day (excluding Fridays).

Parameter:

day: A date string or Date object.
Returns:

true if the day is not Friday, otherwise false.
3. countWorkingDaysinMonth(year, month)
Calculates the number of working days (excluding Fridays) in a given month.

Parameters:

year: The year of the month.
month: The month (0-based index).
Returns:

Number of working days (excluding Fridays) in the month.
💻 Code Walkthrough
Working Days Calculation
Excluding Fridays:
The function isworkingDay() is used to check if a day is not Friday. It uses JavaScript's getDay() method, where 5 represents Friday.

Monthly Working Days:
The function countWorkingDaysinMonth() loops through all days of a given month, checks if it's a working day using isworkingDay(), and counts the valid days.

Target Distribution:
After calculating the total working days in the given period, the monthlyTargets array holds the target values proportional to the number of working days in each month.

Example
javascript
Copy code
const Result = calculateTotalTarget('2024-01-01', '2024-03-31', 435);

console.log(Result.TotalTarget);                // Total target for the working days
console.log(Result.daysExcludingFriend);        // Working days in each month (excluding Fridays)
console.log(Result.daysWorkedExcludingFridays); // Worked days in the period (excluding Fridays)
console.log(Result.monthlyTargets);             // Proportional target for each month
📝 Example Run
If you run the code with the input:

javascript
Copy code
calculateTotalTarget('2024-01-01', '2024-03-31', 435);
January has 26 working days.
February has 0 working days (if the range does not include Feb).
March has 26 working days.
The calculated total target is distributed across these months, resulting in a proportional target value for each.

📊 Output Details
TotalTarget: Total distributed target based on valid working days.
daysExcludingFriend: The working days for each month in the year, excluding Fridays.
daysWorkedExcludingFridays: Worked days (excluding Fridays) between the start and end dates.
monthlyTargets: Proportional distribution of the target across the working days.
🚀 How to Use
Clone the project repository:

bash
Copy code
git clone <your-repo-url>
Navigate to the project directory:

bash
Copy code
cd <project-directory>
Run the function in any JavaScript environment (e.g., Node.js or browser console) and pass the required parameters.

📂 Project Structure
bash
Copy code
├── src/
│   └── calculateWorkingDays.js   # Main function file
├── README.md                     # Project documentation
└── package.json                  # Project dependencies (if any)
📧 Contact
For any questions or support, feel free to reach out at:

Email: mohamedsalaad509@gmail.com
GitHub: moha-salad64
