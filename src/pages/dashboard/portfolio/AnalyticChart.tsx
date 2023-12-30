
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
//   Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
//   Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
//   height: 100, // Adjust the height as needed
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const data = {
  labels,
  datasets: [
    {
      //label: 'Dataset 1',
      data: [200, 500, 350, 440, 480, 450, 590, 330, 280, 210, 409, 30],
      backgroundColor: labels.map(month => (month === 'JUN' ? '#FFB800' : '#F1F1F2')),
      barThickness: 12,
    },
    // {
    //     data: [], // Add null values for the empty space
    //     backgroundColor: 'transparent', // Set the background color to transparent
    //     barThickness: 0.1,
    // },
    {
      //label: 'Dataset 2',
      data: [100, 200, 380, 490, 750, 750, 690, 809, 476, 209, 880, 120],
      backgroundColor: labels.map(month => (month === 'JUN' ? '#FF8600' : '#E6E6E7')),
      barThickness: 12,
    },
  ],
};

export function AnalyticChart() {
  return <Bar options={options} data={data} />;
}
