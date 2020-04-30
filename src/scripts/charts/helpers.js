
const TICKINTERVAL = 1;

export const getDayWiseTimeSeries = (data, baseval, count, yrange) => {
  let i = 0;

  while (i < count) {
    let x = baseval;
    let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data.push({ x, y });

    lastDate = baseval
    baseval += TICKINTERVAL;
    i++;
  }

  return data;
}
