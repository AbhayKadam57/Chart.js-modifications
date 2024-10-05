const ctx = document.getElementById("piechart");

Chart.register(ChartDataLabels);
const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

new Chart(ctx, {
  type: "pie",
  data: data,
  options: {
    animation: {
      duration: 500,
      easing: "easein",
      delay: 0,
      loop: false,
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: "#fff", // Label color
        formatter: (value, ctx) => {
          //   let percentage =
          //     (value / ctx.chart.data.datasets[0].data.reduce((a, b) => a + b)) *
          //     100;

          let Value = `${value.toFixed(2)}      \n${
            ctx.chart.data.labels[ctx.dataIndex]
          }\n`;
          return Value;
        },
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
  },
});
