// https://www.omnicalculator.com/finance/economic-value-added

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const economicvalueaddedRadio = document.getElementById('economicvalueaddedRadio');
const NOPATRadio = document.getElementById('NOPATRadio');
const investedcapitalRadio = document.getElementById('investedcapitalRadio');
const WACCRadio = document.getElementById('WACCRadio');

let economicvalueadded;
let NOPAT = v1;
let investedcapital = v2;
let WACC = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

economicvalueaddedRadio.addEventListener('click', function() {
  variable1.textContent = 'NOPAT';
  variable2.textContent = 'Invested capital';
  variable3.textContent = 'WACC';
  NOPAT = v1;
  investedcapital = v2;
  WACC = v3;
  result.textContent = '';
});

NOPATRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic value added';
  variable2.textContent = 'Invested capital';
  variable3.textContent = 'WACC';
  economicvalueadded = v1;
  investedcapital = v2;
  WACC = v3;
  result.textContent = '';
});

investedcapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic value added';
  variable2.textContent = 'NOPAT';
  variable3.textContent = 'WACC';
  economicvalueadded = v1;
  NOPAT = v2;
  WACC = v3;
  result.textContent = '';
});

WACCRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic value added';
  variable2.textContent = 'NOPAT';
  variable3.textContent = 'Invested capital';
  economicvalueadded = v1;
  NOPAT = v2;
  investedcapital = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(economicvalueaddedRadio.checked)
    result.textContent = `Economic value added = ${computeeconomicvalueadded().toFixed(2)}`;

  else if(NOPATRadio.checked)
    result.textContent = `NOPAT = ${computeNOPAT().toFixed(2)}`;

  else if(investedcapitalRadio.checked)
    result.textContent = `Invested capital = ${computeinvestedcapital().toFixed(2)}`;

  else if(WACCRadio.checked)
    result.textContent = `WACC = ${computeWACC().toFixed(2)}`;
})

// calculation

function computeeconomicvalueadded() {
  return Number(NOPAT.value) - (Number(investedcapital.value) * (Number(WACC.value) / 100));
}

function computeNOPAT() {
  return Number(economicvalueadded.value) + (Number(investedcapital.value) * (Number(WACC.value) / 100));
}

function computeinvestedcapital() {
  return (Number(NOPAT.value) - Number(economicvalueadded.value)) / (Number(WACC.value) / 100);
}

function computeWACC() {
  return ((Number(NOPAT.value) - Number(economicvalueadded.value)) / Number(investedcapital.value)) * 100;
}