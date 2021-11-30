import React from 'react';
import { JSC, JSCharting } from 'jscharting-react';

const config: JSC.JSCChartConfig = {
    type: 'area',
    series: [
        {
            name: '2020 Sales',
            points: [
                { name: 'Jan', y: 196 },
                { name: 'Feb', y: 178 },
                { name: 'Mar', y: 169 },
            ]
        }
    ]
}

const Chart = () => {
   
  return (
    <div><JSCharting options={config} /></div>
  );
};

export default Chart;