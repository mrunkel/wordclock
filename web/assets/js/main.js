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
    'null', 'eins', 'zwei', 'drei', 'vier',
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
  return (unitsValue === 0) ? larger[tensValue] : digits[unitsValue] + ' und ' +
      larger[tensValue];
}

function formatTimeUS(UTC) {
  const us = UTC.clone().tz('America/Los_Angeles');
  let hour = us.hours();
  let pm = '';
  if (hour > 12) {
    hour -= 12;
    pm = ' p.m.';
  }
  toHour = hour + 1;
  if (toHour > 12) {
    toHour -= 12;
    toPM = ' p.m.';
  }

  let minute = us.minutes();

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
    return 'It is ' + toWords(minute) + ' after ' + toWords(hour) + pm;
  }

  if (minute > 50) {
    return 'It is ' + toWords(60 - minute) + ' to ' + toWords(toHour) + toPM;
  }

  return 'It is ' + toWords(hour) + ' ' + toWords(minute) + pm;

}

function formatTimeGermany(UTC) {
  const germany = UTC.clone().tz('Europe/Berlin');
  const hour = germany.hours();
  const minute = germany.minutes();
  let toHour = hour + 1;
  if (toHour > 23) {
    toHour = 0;
  }
  if (minute === 0) {
    return 'Es ist ' + zuText(hour);
  }

  if (minute === 15) {
    return 'Es ist virtel nach ' + zuText(hour);
  }

  if (minute === 45) {
    return 'Es ist virtel vor ' + zuText(toHour);
  }

  if (minute < 10) {
    return 'Es ist ' + zuText(minute) + ' nach ' + zuText(hour);
  }

  if (minute > 50) {
    return 'Es ist ' + zuText(60 - minute) + ' vor ' + zuText(toHour);
  }

  return 'Es ist ' + zuText(hour) + ' Uhr ' + zuText(minute);

}

function updateClock() {
  const usClock = document.getElementById('clock-us');
  const germanClock = document.getElementById('clock-german');
  const UTC = new moment();

  usClock.innerText = formatTimeUS(UTC);
  germanClock.innerText = formatTimeGermany(UTC);
}

function initClock() {
  updateClock();
  setInterval(updateClock, 60000);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdG9Xb3Jkcyh2YWx1ZSkge1xuICAvLyBnaXZlbiBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5LCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHdvcmQuXG5cbiAgdmFyIGRpZ2l0cyA9IFtcbiAgICAnemVybycsICdvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLFxuICAgICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJ107XG4gIHZhciB0ZW5zID1cbiAgICAgIFtcbiAgICAgICAgJ3RlbicsICdlbGV2ZW4nLCAndHdlbHZlJywgJ3RoaXJ0ZWVuJywgJ2ZvdXJ0ZWVuJywgJ2ZpZnRlZW4nLCAnc2l4dGVlbicsXG4gICAgICAgICdzZXZlbnRlZW4nLCAnZWlnaHRlZW4nLCAnbmluZXRlZW4nLFxuICAgICAgXTtcbiAgdmFyIGxhcmdlciA9IFsndHdlbnR5JywgJ3RoaXJ0eScsICdmb3J0eScsICdmaWZ0eSddO1xuXG4gIGlmICh2YWx1ZSA8PSA5KSB7XG4gICAgcmV0dXJuIGRpZ2l0c1t2YWx1ZV07XG4gIH1cbiAgaWYgKHZhbHVlID4gOSAmJiB2YWx1ZSA8IDIwKSB7XG4gICAgcmV0dXJuIHRlbnNbdmFsdWUgLSAxMF07XG4gIH1cbiAgdGVuc1ZhbHVlID0gKCh2YWx1ZSAtIHZhbHVlICUgMTApIC8gMTApIC0gMjtcbiAgdW5pdHNWYWx1ZSA9ICh2YWx1ZSAlIDEwKTtcbiAgcmV0dXJuICh1bml0c1ZhbHVlID09PSAwKSA/IGxhcmdlclt0ZW5zVmFsdWVdIDogbGFyZ2VyW3RlbnNWYWx1ZV0gKyAnICcgK1xuICAgICAgZGlnaXRzW3VuaXRzVmFsdWVdO1xufVxuXG5mdW5jdGlvbiB6dVRleHQodmFsdWUpIHtcbiAgLy8gZ2l2ZW4gYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OSwgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB3b3JkLlxuXG4gIHZhciBkaWdpdHMgPSBbXG4gICAgJ251bGwnLCAnZWlucycsICd6d2VpJywgJ2RyZWknLCAndmllcicsXG4gICAgJ2bDvG5mJywgJ3NlY2hzJywgJ3NpZWJlbicsICdhY2h0JywgJ25ldW4nXTtcbiAgdmFyIHRlbnMgPVxuICAgICAgW1xuICAgICAgICAnemVobicsICdlbGYnLCAnenfDtmxmJywgJ2RyZWl6ZWhuJywgJ3ZpZXJ6ZWhuJywgJ2bDvG5memVobicsICdzZWNoc3plaG4nLFxuICAgICAgICAnc2llYnN6ZWhuJywgJ2FjaHR6ZWhuJywgJ25ldW56ZWhuJyxcbiAgICAgIF07XG4gIHZhciBsYXJnZXIgPSBbJ3p3YW56aWcnLCAnZHJlaXppZycsICd2aWVyemlnJywgJ2bDvG5memVobiddO1xuXG4gIGlmICh2YWx1ZSA8PSA5KSB7XG4gICAgcmV0dXJuIGRpZ2l0c1t2YWx1ZV07XG4gIH1cbiAgaWYgKHZhbHVlID4gOSAmJiB2YWx1ZSA8IDIwKSB7XG4gICAgcmV0dXJuIHRlbnNbdmFsdWUgLSAxMF07XG4gIH1cbiAgdGVuc1ZhbHVlID0gKCh2YWx1ZSAtIHZhbHVlICUgMTApIC8gMTApIC0gMjtcbiAgdW5pdHNWYWx1ZSA9ICh2YWx1ZSAlIDEwKTtcbiAgcmV0dXJuICh1bml0c1ZhbHVlID09PSAwKSA/IGxhcmdlclt0ZW5zVmFsdWVdIDogZGlnaXRzW3VuaXRzVmFsdWVdICsgJyB1bmQgJyArXG4gICAgICBsYXJnZXJbdGVuc1ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZVVTKFVUQykge1xuICBjb25zdCB1cyA9IFVUQy5jbG9uZSgpLnR6KCdBbWVyaWNhL0xvc19BbmdlbGVzJyk7XG4gIGxldCBob3VyID0gdXMuaG91cnMoKTtcbiAgbGV0IHBtID0gJyc7XG4gIGlmIChob3VyID4gMTIpIHtcbiAgICBob3VyIC09IDEyO1xuICAgIHBtID0gJyBwLm0uJztcbiAgfVxuICB0b0hvdXIgPSBob3VyICsgMTtcbiAgaWYgKHRvSG91ciA+IDEyKSB7XG4gICAgdG9Ib3VyIC09IDEyO1xuICAgIHRvUE0gPSAnIHAubS4nO1xuICB9XG5cbiAgbGV0IG1pbnV0ZSA9IHVzLm1pbnV0ZXMoKTtcblxuICBpZiAobWludXRlID09PSAwKSB7XG4gICAgcmV0dXJuICdJdCBpcyAnICsgdG9Xb3Jkcyhob3VyKSArIHBtO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA9PT0gMTUpIHtcbiAgICByZXR1cm4gJ0l0IGlzIHF1YXJ0ZXIgYWZ0ZXIgJyArIHRvV29yZHMoaG91cikgKyBwbTtcbiAgfVxuXG4gIGlmIChtaW51dGUgPT09IDQ1KSB7XG4gICAgcmV0dXJuICdJdCBpcyBxdWFydGVyIHRvICcgKyB0b1dvcmRzKHRvSG91cikgKyB0b1BNO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA8IDEwKSB7XG4gICAgcmV0dXJuICdJdCBpcyAnICsgdG9Xb3JkcyhtaW51dGUpICsgJyBhZnRlciAnICsgdG9Xb3Jkcyhob3VyKSArIHBtO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA+IDUwKSB7XG4gICAgcmV0dXJuICdJdCBpcyAnICsgdG9Xb3Jkcyg2MCAtIG1pbnV0ZSkgKyAnIHRvICcgKyB0b1dvcmRzKHRvSG91cikgKyB0b1BNO1xuICB9XG5cbiAgcmV0dXJuICdJdCBpcyAnICsgdG9Xb3Jkcyhob3VyKSArICcgJyArIHRvV29yZHMobWludXRlKSArIHBtO1xuXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWVHZXJtYW55KFVUQykge1xuICBjb25zdCBnZXJtYW55ID0gVVRDLmNsb25lKCkudHooJ0V1cm9wZS9CZXJsaW4nKTtcbiAgY29uc3QgaG91ciA9IGdlcm1hbnkuaG91cnMoKTtcbiAgY29uc3QgbWludXRlID0gZ2VybWFueS5taW51dGVzKCk7XG4gIGxldCB0b0hvdXIgPSBob3VyICsgMTtcbiAgaWYgKHRvSG91ciA+IDIzKSB7XG4gICAgdG9Ib3VyID0gMDtcbiAgfVxuICBpZiAobWludXRlID09PSAwKSB7XG4gICAgcmV0dXJuICdFcyBpc3QgJyArIHp1VGV4dChob3VyKTtcbiAgfVxuXG4gIGlmIChtaW51dGUgPT09IDE1KSB7XG4gICAgcmV0dXJuICdFcyBpc3QgdmlydGVsIG5hY2ggJyArIHp1VGV4dChob3VyKTtcbiAgfVxuXG4gIGlmIChtaW51dGUgPT09IDQ1KSB7XG4gICAgcmV0dXJuICdFcyBpc3QgdmlydGVsIHZvciAnICsgenVUZXh0KHRvSG91cik7XG4gIH1cblxuICBpZiAobWludXRlIDwgMTApIHtcbiAgICByZXR1cm4gJ0VzIGlzdCAnICsgenVUZXh0KG1pbnV0ZSkgKyAnIG5hY2ggJyArIHp1VGV4dChob3VyKTtcbiAgfVxuXG4gIGlmIChtaW51dGUgPiA1MCkge1xuICAgIHJldHVybiAnRXMgaXN0ICcgKyB6dVRleHQoNjAgLSBtaW51dGUpICsgJyB2b3IgJyArIHp1VGV4dCh0b0hvdXIpO1xuICB9XG5cbiAgcmV0dXJuICdFcyBpc3QgJyArIHp1VGV4dChob3VyKSArICcgVWhyICcgKyB6dVRleHQobWludXRlKTtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVDbG9jaygpIHtcbiAgY29uc3QgdXNDbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9jay11cycpO1xuICBjb25zdCBnZXJtYW5DbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9jay1nZXJtYW4nKTtcbiAgY29uc3QgVVRDID0gbmV3IG1vbWVudCgpO1xuXG4gIHVzQ2xvY2suaW5uZXJUZXh0ID0gZm9ybWF0VGltZVVTKFVUQyk7XG4gIGdlcm1hbkNsb2NrLmlubmVyVGV4dCA9IGZvcm1hdFRpbWVHZXJtYW55KFVUQyk7XG59XG5cbmZ1bmN0aW9uIGluaXRDbG9jaygpIHtcbiAgdXBkYXRlQ2xvY2soKTtcbiAgc2V0SW50ZXJ2YWwodXBkYXRlQ2xvY2ssIDYwMDAwKTtcbn1cbiJdfQ==
