import React from 'react';
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

export const options = {
  responsive: true,
//   maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      //label: 'Dataset 1',
      data: [200, 500, 350, 440, 480, 450, 590],
      backgroundColor: labels.map(month => (month === 'May' ? '#FFB800' : '#F1F1F2')),
      barThickness: 12,
    },
    {
        data: [], // Add null values for the empty space
        backgroundColor: 'transparent', // Set the background color to transparent
        barThickness: 1,
    },
    {
      //label: 'Dataset 2',
      data: [100, 200, 380, 490, 750, 750, 690],
      backgroundColor: labels.map(month => (month === 'May' ? '#FF8600' : '#E6E6E7')),
      barThickness: 12,
    },
  ],
};

export function AnalyticChart() {
  return <Bar options={options} data={data} />;
}
