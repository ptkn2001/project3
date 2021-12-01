import Moment from 'moment';

class ReportHelper {
    getThisMonthExpenses(expenses, isGreaterThan, amount) {
        let results = [];

        if(!amount) return results;

        if(isGreaterThan) {
            for (let i = 0; i < expenses.length; i++) {
                if(parseInt(expenses[i].amount) > parseInt(amount) && Moment(Date.now()).format('MMM') == expenses[i].date.substring(0, 3)) {
                    results.push(expenses[i]);
                } 
              }
        }
        else 
        {
            for (let i = 0; i < expenses.length; i++) {
                if(parseInt(expenses[i].amount) <= parseInt(amount) && Moment(Date.now()).format('MMM') == expenses[i].date.substring(0, 3)) {
                    results.push(expenses[i]);
                }
              }
        }
        return results;
    }
    
    getThisYearExpenses(expenses, isGreaterThan, amount) {
        let results = [];

        if(!amount) return results;

        if(isGreaterThan) {
            for (let i = 0; i < expenses.length; i++) {
                if(parseInt(expenses[i].amount) > parseInt(amount) && Moment(Date.now()).format('YYYY') == expenses[i].date.substring(expenses[i].date.length - 4)) {
                    results.push(expenses[i]);
                } 
              }
        }
        else 
        {
            for (let i = 0; i < expenses.length; i++) {
                if(parseInt(expenses[i].amount) <= parseInt(amount) && Moment(Date.now()).format('YYYY') == expenses[i].date.substring(expenses[i].date.length - 4)) {
                    results.push(expenses[i]);
                }
              }
        }
        debugger
        return results;
    }
   
  }
  
  export default new ReportHelper();
  