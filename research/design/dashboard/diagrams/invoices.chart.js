{
	type: "doughnut",
	data: {
		datasets: [
			{
				fill: false,
				backgroundColor: ["#8c20f8", "#E4E4E4" ],
				data:[4, 1],
			}
		],
			labels: ["Paid", "Unpaid"]
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
}
