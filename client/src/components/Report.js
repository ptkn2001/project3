import React from 'react'

export const Report = () => {
    return (
        <div className="flex-row justify-center align-center">
            <div className="mr-1">
                <label>Report type:</label>
            </div>
            <div className="mr-2">
                <select>
                    <option value='1'>Weekly</option>
                    <option value='2'>Date Range</option>
                    <option value='3'>Monthly</option>
                    <option value='4'>Yearly</option>
                </select>
            </div>
            <div className="mr-1">
                <label>Amount:</label>
            </div>
            <div className="mr-2" >
                <select>
                    <option value='1'>Greater than</option>
                    <option value='2'>Less than</option>
                    <option value='3'>Equal to</option>
                </select>
            </div>
            <div className="mr-1" >
                <input type='text' value='amount'></input>
            </div>
            <div className="mr-1">
                <button className="btn btn-info" type='submit'>Submit</button>
            </div>
        </div>
    )
}

export default Report;