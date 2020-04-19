exports.handler = async () => {
  // TODO implement
  const chartData = [];
  const firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 200);
  let visits = 1200;
  for (let i = 0; i < 200; i++) {
    // we create date objects here. In your data, you can have date strings
    // and then set format of your dates using lineChart.dataDateFormat property,
    // however when possible, use date objects, as this will speed up chart rendering.
    const newDate = new Date(firstDate);
    newDate.setDate(newDate.getDate() + i);

    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

    chartData.push({
      date: newDate,
      visits,
    });
  }
  return chartData;
};
