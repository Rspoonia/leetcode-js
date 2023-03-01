var canCompleteCircuit = function (gas, cost) {
  let tank = 0,
    start = 0,
    total = 0;
  for (let i = 0; i < gas.length; i++) {
    const usage = gas[i] - cost[i];
    tank += usage;
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
    total += usage;
  }
  return total < 0 ? -1 : start;
};
