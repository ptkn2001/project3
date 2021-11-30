import React , { useState }  from 'react'

export const Report = () => {
    const [amount, setAmount] = useState('');

    return (
        <div className="flex-row justify-center align-center">
            <div className="mr-1">
                <label>Report type:</label>
            </div>
            <div className="mr-2">
                <select>
                    <option value='1'>This Month</option>
                    <option value='2'>Year to Date</option>
                    <option value='3'>Date Range</option>
                </select>
            </div>
            <div className="mr-1">
                <label>Amount:</label>
            </div>
            <div className="mr-2" >
                <select>
                    <option value='1'>Greater than</option>
                    <option value='2'>Less than</option>
                </select>
            </div>
            <div className="mr-1" >
                <input className="p-2" type='text' placeholder="amount in whole" value={amount} onChange={(event) => setAmount(event.target.value)}></input>
            </div>
            <div className="mr-1">
                <button className="btn btn-info" type='submit'>Submit</button>
            </div>
        </div>
    )
}

export default Report;