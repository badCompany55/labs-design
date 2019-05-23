{
	type: "line",
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [
					{
					data: [15, 22,25,27,20,30],
					label: "2019",
					backgroundColor: "#FEBD17",
					borderColor: "#FEBD17",
					fill: false,
					},
					{
						data: [10,5,7,11,12,13,11,11,15,17,18,16],
						label: "2018",
						backgroundColor: "#555555",
						borderColor: "#555555",
						fill: false,
					}
				]
		},
	options: {
		legend: {
			display: true,
				labels: {
					boxWidth: 60
				}
		},
			scales: {
				xAxes: [{
					gridLines: {
						display: false
					},
					scaleLabel: {
						display: true,
						labelString: "Number of Appointments"
					}
				}],
				yAxes: [{
					gridLines: {
						display: false
					}
				}],
				
			}
	}
};
