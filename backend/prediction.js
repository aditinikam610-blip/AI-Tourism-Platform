// prediction.js
function predictCrowd(avgVisitors, capacity, eventType) {
  let multiplier = 1;

  if (eventType === "weekend") multiplier = 1.2;
  if (eventType === "festival") multiplier = 1.5;

  const predictedVisitors = avgVisitors * multiplier;

  let crowdLevel = "Low";

  if (predictedVisitors > 0.8 * capacity) {
    crowdLevel = "Overcrowded";
  } else if (predictedVisitors > 0.5 * capacity) {
    crowdLevel = "Moderate";
  }

  return { predictedVisitors, crowdLevel };
}

module.exports = { predictCrowd };