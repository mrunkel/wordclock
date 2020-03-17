let swap = false;

function toWords(value) {
  // given a number between 0 and 59, return the appropriate word.

  var digits = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'];
  var tens =
      [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen',
      ];
  var larger = ['twenty', 'thirty', 'forty', 'fifty'];

  if (value <= 9) {
    return digits[value];
  }
  if (value > 9 && value < 20) {
    return tens[value - 10];
  }
  tensValue = ((value - value % 10) / 10) - 2;
  unitsValue = (value % 10);
  return (unitsValue === 0) ? larger[tensValue] : larger[tensValue] + ' ' +
      digits[unitsValue];
}

function zuText(value) {
  // given a number between 0 and 59, return the appropriate word.

  var digits = [
    'null', 'ein', 'zwei', 'drei', 'vier',
    'fünf', 'sechs', 'sieben', 'acht', 'neun'];
  var tens =
      [
        'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechszehn',
        'siebszehn', 'achtzehn', 'neunzehn',
      ];
  var larger = ['zwanzig', 'dreizig', 'vierzig', 'fünfzehn'];

  if (value <= 9) {
    return digits[value];
  }
  if (value > 9 && value < 20) {
    return tens[value - 10];
  }
  tensValue = ((value - value % 10) / 10) - 2;
  unitsValue = (value % 10);
  return (unitsValue === 0) ? larger[tensValue] : digits[unitsValue] + 'und' +
      larger[tensValue];
}

function formatTimeInEnglish(time) {

  let hour = time.hours();
  let pm = ' a.m.';
  if (hour > 12) {
    hour -= 12;
    pm = ' p.m.';
  }
  let toHour = hour + 1;
  let toPM = '';
  if (toHour > 12) {
    toHour -= 12;
    toPM = ' p.m.';
  }

  let minute = time.minutes();

  if (minute === 0) {
    return 'It is ' + toWords(hour) + pm;
  }

  if (minute === 15) {
    return 'It is quarter after ' + toWords(hour) + pm;
  }

  if (minute === 45) {
    return 'It is quarter to ' + toWords(toHour) + toPM;
  }

  if (minute < 10) {
    return 'It is ' + toWords(minute) + ' minutes after ' + toWords(hour) + pm;
  }

  if (minute > 50) {
    return 'It is ' + toWords(60 - minute) + 'minutes before ' + toWords(toHour) + toPM;
  }

  return 'It is ' + toWords(hour) + ' ' + toWords(minute) + pm;

}

function formatTimeInGerman(time) {

  const hour = time.hours();
  const minute = time.minutes();
  let toHour = hour + 1;
  if (toHour > 23) {
    toHour = 0;
  }
  if (minute === 0) {
    return 'Es ist ' + zuText(hour) + ' Uhr';
  }

  if (minute === 15) {
    return 'Es ist virtel nach ' + zuText(hour) + ' Uhr';
  }

  if (minute === 45) {
    return 'Es ist virtel vor ' + zuText(toHour) + ' Uhr';
  }

  if (minute < 10) {
    let minuteWord = zuText(minute);
    if (minute === 1) {
      minuteWord = 'eine'
    }
    return 'Es ist ' + minuteWord + ' Minuten nach ' + zuText(hour) + ' Uhr';
  }

  if (minute > 50) {
    let minuteWord = zuText(60 - minute);
    if (minute === 59) {
      minuteWord = 'eine'
    }
    return 'Es ist ' + minuteWord + ' Minuten vor ' + zuText(toHour) + ' Uhr';
  }

  return 'Es ist ' + zuText(hour) + ' Uhr ' + zuText(minute);

}

function updateClock() {
  const usClock = document.getElementById('clock-us');
  const germanClock = document.getElementById('clock-german');
  const UTC = new moment();

  const timeInGermany = UTC.clone().tz('Europe/Berlin');
  const timeInUSA = UTC.clone().tz('America/Los_Angeles');
  let germanyTime = formatTimeInGerman(timeInGermany) + ' in Deutschland';
  let californiaTime = formatTimeInEnglish(timeInUSA) + ' in California';
  if (swap) {
    californiaTime = formatTimeInGerman(timeInUSA) + ' in Kalifornien';
    germanyTime = formatTimeInEnglish(timeInGermany) + ' in Germany';
  }
  usClock.innerText = californiaTime;
  germanClock.innerText = germanyTime;
}

function swapText() {
  swap = ! swap;
  updateClock();
}

function initClock() {
  document.getElementById('swap').addEventListener("click", swapText);
  updateClock();
  setInterval(updateClock, 60000);
}
