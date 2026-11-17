
function calcGas() {
  const cf = parseFloat(document.getElementById('tankSize').value) || 80;
  const cfh = parseFloat(document.getElementById('flowRate').value) || 20;
  const duty = parseFloat(document.getElementById('dutyCycle').value) || 30;
  const cost = parseFloat(document.getElementById('refillCost').value) || 65;

  // Arc hours = Tank CF / Flow Rate CFH
  const arcHours = cf / Math.max(1, cfh);
  const totalShopHours = arcHours / (Math.max(5, duty) / 100);
  const hourlyCost = cost / arcHours;
  const workDays = totalShopHours / 6.0; // assuming 6 effective shop hours/day

  const arcH = Math.floor(arcHours);
  const arcM = Math.round((arcHours - arcH) * 60);

  document.getElementById('resArcHours').textContent = arcH + ' hrs ' + (arcM < 10 ? '0' : '') + arcM + ' min';
  document.getElementById('resShopTime').textContent = totalShopHours.toFixed(1) + ' Total Shop Hours';
  document.getElementById('resHourlyCost').textContent = '$' + hourlyCost.toFixed(2) + ' / arc hour';
  document.getElementById('resWorkDays').textContent = '~' + workDays.toFixed(1) + ' Shop Days';
}

document.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', calcGas);
  el.addEventListener('change', calcGas);
});
window.addEventListener('DOMContentLoaded', calcGas);
        