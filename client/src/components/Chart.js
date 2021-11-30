import React from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';



const Chart2 = (props) => {
  let topValues = props.expenses;

  if(topValues.count > 5) {
    topValues = [...topValues].sort((a, b) => parseInt(b.amount) - parseInt(a.amount)).slice(0, 5);
  }

  return (
    <div>
      <Doughnut
        data={{
          labels: topValues.map((item) => item.category.name),
          datasets: [
            {
              label: 'Top 5 Expenses',
              data: topValues.map((item) => parseInt(item.amount)),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  )
}

export default Chart2