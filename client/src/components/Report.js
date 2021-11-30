import React from 'react'

export const Report = () => {
    return (
        <div>
            <div>
                <label>Report type</label>
                <select>
                    <option value='1'>Weekly</option>
                    <option value='2'>Date Range</option>
                    <option value='3'>Monthly</option>
                    <option value='4'>Yearly</option>
                </select>
            </div>
            <div>
                <label>Amount</label>
                <select>
                    <option value='1'>Greater than</option>
                    <option value='2'>Less than</option>
                    <option value='3'>Equal to</option>
                </select>
                <input type='text' value='amount'></input>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </div>
    )
}

export default Report;