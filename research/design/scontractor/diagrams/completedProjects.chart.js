{  type: 'pie',
  data: {
    datasets: [{
      fill: false,
      backgroundColor: ['#000000', "#E4E4E4", "#8C20F8", '#FEBD17'],
      data: [15,30,55,10],
		}],
			labels: ["Framing", "Sheetrock", "Painting", "Fence Repair"]
  },
  options: {
    width:500,
    height:500,
    devicePixelRatio: 2,
    legend: {
			display: true,
				labels: {
					boxWidth: 20,
					fontSize: 15
				}
    },
  }
};
