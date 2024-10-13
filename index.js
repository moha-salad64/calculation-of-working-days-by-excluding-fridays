function calculateTotalTarget(startDate, endDate, target) {


    //first we must get  days of the week that are excluded friday
    function isworkingDay(day) {
        const date = new Date(day);
        const daysOfWeek = date.getDay();
        return daysOfWeek !== 5;
    }
    // console.log(isworkingDay('2024-10-19'));


    //count working days in the month 
    function countWorkingDaysinMonth(year, month) {
        let workingDays = 0;
        //get the first day of the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        //loop through the days in the month
        for (let i = 1; i <= daysInMonth; i++) {
            const currentDate = new Date(year, month, i);
            if (isworkingDay(currentDate)) {
                workingDays++;
            }
        }
        return workingDays;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    let TotalWorkingdays = 0;
    let TotaldaysInYears = 0;

    let daysExcludingFriend =[];
    let  daysWorkedExcludingFridays = [];
    let monthlyTargets = [];

    //calculate the total number of working days in the years
    for (let month = 0; month < 12; month++) {
        let workingDays = countWorkingDaysinMonth(start.getFullYear(), month);
        daysExcludingFriend.push(workingDays);
        TotaldaysInYears += workingDays;
       
    }


    // Calculate working days for the specific period between start and end dates
    for (let month = start.getMonth(); month <= end.getMonth(); month++) {
        let daysInMonth = countWorkingDaysinMonth(start.getFullYear(), month);
        let workedDaysInMonth = 0;

        // Check for working days in the specified date range within each month
        for (let i = 1; i <= daysInMonth; i++) {
            let currentDate = new Date(start.getFullYear(), month, i);
            if (currentDate >= start && currentDate <= end && isworkingDay(currentDate)) {
                workedDaysInMonth++;
            }
        } 
        daysWorkedExcludingFridays.push(workedDaysInMonth);

        // Calculate monthly target proportional to valid working days
        const monthlyTarget = (target / TotaldaysInYears) * workedDaysInMonth;
        monthlyTargets.push(monthlyTarget);
    }

    // Calculate total working days between start and end dates excluding Fridays
    for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
        if (isworkingDay(day)) {
            TotalWorkingdays++;  
        }
    }
    
    //calculate the annual target by dividing the total target by the total number of working days in the years  and 
    //then multiply by the total number of working days in the years  for the entire period.
    const TotalTarget = (target / TotaldaysInYears) * TotalWorkingdays;
    
    return {
          TotalTarget,
         daysExcludingFriend,
         daysWorkedExcludingFridays,
         monthlyTargets

    }
    

    
}
const Result = calculateTotalTarget('2024-01-01' , '2024-03-31', 435);

console.log('working day for each month in year with non-friday: ' + " " + Result.daysExcludingFriend + " ");
console.log('worked day excluding friday with start and end months in each months: ' + " " + Result.daysWorkedExcludingFridays + " ");
console.log('monthly target of each month: ' + " " + Result.monthlyTargets + " ");
console.log('Total Target based on working days: ' + " " +  Result.TotalTarget + " ");