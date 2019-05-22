{
  type: 'horizontalBar',
  data: {
    datasets: [{
      label: '1 Star',
      fill: false,
      backgroundColor: '#000000',
      data: [1, 0, 2, 1, 1, 1, 1],
    }, {
      label: '2 Star',
      fill: false,
      backgroundColor: '#555555',
      data: [1, 2, 1, 1, 1, 2, 1],
    }, {
      label: '3 Star',
      backgroundColor: '#E4E4E4',
      data: [3, 4, 5, 5, 2, 1 ],
      fill: true,
    },{
      label: '4 Star',
      fill: false,
      backgroundColor: '#8C20F8',
      data: [15, 10, 10, 25, 17, 8, 10],
    },{
      label: '5 Star',
      fill: false,
      backgroundColor: '#FEBD17',
      data: [10, 10, 20, 28, 15, 7, 20],
    }]
  },
  options: {
    width:500,
    height:300,
    devicePixelRatio: 2,
    legend: {
			display: true,
				labels: {
					boxWidth: 20
				}
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of Reviews'
				},
				gridLines: {
					display: false
				}
      }],
      yAxes: [{
				gridLines: {
					drawOnChartArea: false
				},
        ticks: {
          suggestedMin: 0,
          suggestedMax: 3
        },
        scaleLabel: {
          display: true,
        }
      }]
    }
  }
};
