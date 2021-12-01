import React , { useState }  from 'react';
import ReportHelper from '../utils/reporthelper';

export const Report = ({expenses}) => {
    const [amount, setAmount] = useState('0');
    const [isGreaterThan, setIsGreaterThan] = useState(1);
    const [reportType, setReportType] = useState(1);
    const [reportData, setReportData] = useState([]);

    const handleOnClick = (event) => {
        let isGreater = true;

        if(reportType == 1) {
            setReportData(ReportHelper.getThisMonthExpenses(expenses, (isGreaterThan == 1)? true: false, amount));
        }
        else
        {
            setReportData(ReportHelper.getThisYearExpenses(expenses, (isGreaterThan == 1)? true: false, amount));
        }

    }

    return (
        <div className="w-600">
        <div className="flex-col justify-center align-center">
            <div className="flex-row align-center">
            <div className="mr-3">
                <label>Reports:</label>
            </div>
            <div className="mr-2">
                <select onChange={(event) => setReportType(event.target.value)} >
                    <option value='1'>This Month</option>
                    <option value='2'>Year to Date</option>
                </select>
            </div>
            </div>
            <div className="flex-row align-center">
            <div className="mr-1">
                <label>Compare:</label>
            </div>
            <div className="mr-2" >
                <select onChange={(event) => setIsGreaterThan(event.target.value)} >
                    <option value='1'>Greater than</option>
                    <option value='2'>Less than or Equal</option>
                </select>
            </div>
            </div>
            <div className="flex-row align-center">
            <div className="mr-3">
                <label>Amount:</label>
            </div>
            <div className="mr-2" >
                <input className="p-2" type='text' value={amount} onChange={(event) => setAmount(event.target.value)}></input>
            </div>
            <div className="mr-1">
                <button className="btn btn-info" type='submit' onClick={handleOnClick}>Submit</button>
            </div>
            </div>
        </div>
        <div className="mt-5">
        <table>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
          {
            reportData.map((expense) => (
            <tr key={expense._id} id={expense._id}>
              <td>{expense.category.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>{expense.date}</td>
            </tr>
            ))}       
        </table>
        </div>
        </div>
    )
}

export default Report;