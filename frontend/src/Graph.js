import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugin: {
    legend: {
      position: 'top',
    }
  }
};

const labels = ['Blue Margarita', 'Mojito', 'Kir', 'Pina Colada', 'Chocolate Milk', 'Bora Bora', 'Blue Lagoon'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
  ]
};


export class Graph extends React.Component {

  render() {
      return (
          <div className="Graph">
            <h1>Tendances Utilisateurs</h1>
            <div>
              <Chart type="bar" data={data} options={options} width={600} height={400}/>
            </div>
          </div>
      )
  }
}

export default Graph;