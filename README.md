Below is the README file that explains how the provided code works:

Working Days and Target Calculation Project
This project calculates the total working days excluding Fridays between a given start and end date. It also distributes a target proportionally across the valid working days. The code consists of several functions that each serve a specific purpose. Below is a detailed explanation of the code and its functions.

Code Breakdown
1. function calculateTotalTarget(startDate, endDate, target)
This is the main function that accepts three inputs:

startDate: The starting date of the period you want to calculate working days for.
endDate: The ending date of the period.
target: The target number that will be distributed proportionally across the working days in the given range.
The main output of the function includes:

TotalTarget: The total calculated target based on valid working days in the given period.
daysExcludingFriend: Array of working days for each month in the year, excluding Fridays.
daysWorkedExcludingFridays: Array showing how many working days (excluding Fridays) were actually worked between the given start and end dates in each month.
monthlyTargets: Array showing the proportional target for each month.
2. function isworkingDay(day)
This helper function checks whether a given date is a working day (i.e., it is not a Friday).

Input:
day: A date string or Date object.
Output:
Returns true if the day is not Friday, otherwise returns false.
This function uses JavaScript’s getDay() method which returns 5 for Friday. If the day is not a Friday, it is considered a working day.

3. function countWorkingDaysinMonth(year, month)
This function counts the total number of working days (excluding Fridays) for a given month.

Input:
year: The year of the month you are calculating.
month: The month you are calculating.
Output:
Returns the number of working days in that month (excluding Fridays).
This function:

Loops through each day in the month.
Checks if the day is a working day by calling isworkingDay().
If the day is a working day, it increments the workingDays counter.
4. function calculateTotalTarget()
This is the core function that:

Iterates over each month within the year and calculates the working days using countWorkingDaysinMonth().
For each month between the start and end dates, it calculates the actual worked days, excluding Fridays.
It distributes the target across the working days proportionally.
The breakdown of its tasks:

Calculate working days in each month of the year:

The loop from January to December calculates how many working days are in each month, excluding Fridays, and stores the results in the daysExcludingFriend array.
The total number of working days in the year is summed in TotaldaysInYears.
Calculate working days for the specific date range:

The code loops through the months between startDate and endDate and counts the number of worked days in the range, excluding Fridays. These values are stored in daysWorkedExcludingFridays.
Distribute the target proportionally:

The function calculates a proportional target for each month based on the worked days (excluding Fridays) and stores them in monthlyTargets.
Calculate total target based on working days:

The total target for the period is calculated by distributing the target across the total working days.
Example Run
If you call the function with the following inputs:

javascript
Copy code
const Result = calculateTotalTarget('2024-01-01', '2024-03-31', 435);
The output will be:

TotalTarget: The calculated target based on the working days in the given date range.
daysExcludingFriend: Shows working days for each month (January to December), excluding Fridays. Example for January and March could be:
csharp
Copy code
[26, ..., 26]
daysWorkedExcludingFridays: Shows how many days (excluding Fridays) were worked between January 1st and March 31st. Example:
csharp
Copy code
[26, 0, 26]
monthlyTargets: Shows how the target is distributed across the valid working days. Example:
csharp
Copy code
[93.3, 0, 93.3]
Example Output
sql
Copy code
working day for each month in year with non-friday: 26, ..., 26 
worked day excluding friday with start and end months in each month: 26, 0, 26 
monthly target of each month: 93.3, 0, 93.3 
Total Target based on working days: 186.6
