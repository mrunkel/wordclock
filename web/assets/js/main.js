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

function formatTimeUS(UTC) {
  const us = UTC.clone().tz('America/Los_Angeles');
  let hour = us.hours();
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
    return 'It is ' + toWords(minute) + ' minutes after ' + toWords(hour) + pm;
  }

  if (minute > 50) {
    return 'It is ' + toWords(60 - minute) + 'minutes before ' + toWords(toHour) + toPM;
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
    return 'Es ist ' + zuText(60 - minute) + ' Minuten vor ' + zuText(toHour) + ' Uhr';
  }

  return 'Es ist ' + zuText(hour) + ' Uhr ' + zuText(minute);

}

function updateClock() {
  const usClock = document.getElementById('clock-us');
  const germanClock = document.getElementById('clock-german');
  const UTC = new moment();

  usClock.innerText = formatTimeUS(UTC) + ' in California';
  germanClock.innerText = formatTimeGermany(UTC) + ' in Deutschland';
}

function initClock() {
  updateClock();
  setInterval(updateClock, 60000);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdG9Xb3Jkcyh2YWx1ZSkge1xuICAvLyBnaXZlbiBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5LCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHdvcmQuXG5cbiAgdmFyIGRpZ2l0cyA9IFtcbiAgICAnemVybycsICdvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLFxuICAgICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJ107XG4gIHZhciB0ZW5zID1cbiAgICAgIFtcbiAgICAgICAgJ3RlbicsICdlbGV2ZW4nLCAndHdlbHZlJywgJ3RoaXJ0ZWVuJywgJ2ZvdXJ0ZWVuJywgJ2ZpZnRlZW4nLCAnc2l4dGVlbicsXG4gICAgICAgICdzZXZlbnRlZW4nLCAnZWlnaHRlZW4nLCAnbmluZXRlZW4nLFxuICAgICAgXTtcbiAgdmFyIGxhcmdlciA9IFsndHdlbnR5JywgJ3RoaXJ0eScsICdmb3J0eScsICdmaWZ0eSddO1xuXG4gIGlmICh2YWx1ZSA8PSA5KSB7XG4gICAgcmV0dXJuIGRpZ2l0c1t2YWx1ZV07XG4gIH1cbiAgaWYgKHZhbHVlID4gOSAmJiB2YWx1ZSA8IDIwKSB7XG4gICAgcmV0dXJuIHRlbnNbdmFsdWUgLSAxMF07XG4gIH1cbiAgdGVuc1ZhbHVlID0gKCh2YWx1ZSAtIHZhbHVlICUgMTApIC8gMTApIC0gMjtcbiAgdW5pdHNWYWx1ZSA9ICh2YWx1ZSAlIDEwKTtcbiAgcmV0dXJuICh1bml0c1ZhbHVlID09PSAwKSA/IGxhcmdlclt0ZW5zVmFsdWVdIDogbGFyZ2VyW3RlbnNWYWx1ZV0gKyAnICcgK1xuICAgICAgZGlnaXRzW3VuaXRzVmFsdWVdO1xufVxuXG5mdW5jdGlvbiB6dVRleHQodmFsdWUpIHtcbiAgLy8gZ2l2ZW4gYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OSwgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB3b3JkLlxuXG4gIHZhciBkaWdpdHMgPSBbXG4gICAgJ251bGwnLCAnZWluJywgJ3p3ZWknLCAnZHJlaScsICd2aWVyJyxcbiAgICAnZsO8bmYnLCAnc2VjaHMnLCAnc2llYmVuJywgJ2FjaHQnLCAnbmV1biddO1xuICB2YXIgdGVucyA9XG4gICAgICBbXG4gICAgICAgICd6ZWhuJywgJ2VsZicsICd6d8O2bGYnLCAnZHJlaXplaG4nLCAndmllcnplaG4nLCAnZsO8bmZ6ZWhuJywgJ3NlY2hzemVobicsXG4gICAgICAgICdzaWVic3plaG4nLCAnYWNodHplaG4nLCAnbmV1bnplaG4nLFxuICAgICAgXTtcbiAgdmFyIGxhcmdlciA9IFsnendhbnppZycsICdkcmVpemlnJywgJ3ZpZXJ6aWcnLCAnZsO8bmZ6ZWhuJ107XG5cbiAgaWYgKHZhbHVlIDw9IDkpIHtcbiAgICByZXR1cm4gZGlnaXRzW3ZhbHVlXTtcbiAgfVxuICBpZiAodmFsdWUgPiA5ICYmIHZhbHVlIDwgMjApIHtcbiAgICByZXR1cm4gdGVuc1t2YWx1ZSAtIDEwXTtcbiAgfVxuICB0ZW5zVmFsdWUgPSAoKHZhbHVlIC0gdmFsdWUgJSAxMCkgLyAxMCkgLSAyO1xuICB1bml0c1ZhbHVlID0gKHZhbHVlICUgMTApO1xuICByZXR1cm4gKHVuaXRzVmFsdWUgPT09IDApID8gbGFyZ2VyW3RlbnNWYWx1ZV0gOiBkaWdpdHNbdW5pdHNWYWx1ZV0gKyAndW5kJyArXG4gICAgICBsYXJnZXJbdGVuc1ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZVVTKFVUQykge1xuICBjb25zdCB1cyA9IFVUQy5jbG9uZSgpLnR6KCdBbWVyaWNhL0xvc19BbmdlbGVzJyk7XG4gIGxldCBob3VyID0gdXMuaG91cnMoKTtcbiAgbGV0IHBtID0gJyBhLm0uJztcbiAgaWYgKGhvdXIgPiAxMikge1xuICAgIGhvdXIgLT0gMTI7XG4gICAgcG0gPSAnIHAubS4nO1xuICB9XG4gIGxldCB0b0hvdXIgPSBob3VyICsgMTtcbiAgbGV0IHRvUE0gPSAnJztcbiAgaWYgKHRvSG91ciA+IDEyKSB7XG4gICAgdG9Ib3VyIC09IDEyO1xuICAgIHRvUE0gPSAnIHAubS4nO1xuICB9XG5cbiAgbGV0IG1pbnV0ZSA9IHVzLm1pbnV0ZXMoKTtcblxuICBpZiAobWludXRlID09PSAwKSB7XG4gICAgcmV0dXJuICdJdCBpcyAnICsgdG9Xb3Jkcyhob3VyKSArIHBtO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA9PT0gMTUpIHtcbiAgICByZXR1cm4gJ0l0IGlzIHF1YXJ0ZXIgYWZ0ZXIgJyArIHRvV29yZHMoaG91cikgKyBwbTtcbiAgfVxuXG4gIGlmIChtaW51dGUgPT09IDQ1KSB7XG4gICAgcmV0dXJuICdJdCBpcyBxdWFydGVyIHRvICcgKyB0b1dvcmRzKHRvSG91cikgKyB0b1BNO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA8IDEwKSB7XG4gICAgcmV0dXJuICdJdCBpcyAnICsgdG9Xb3JkcyhtaW51dGUpICsgJyBtaW51dGVzIGFmdGVyICcgKyB0b1dvcmRzKGhvdXIpICsgcG07XG4gIH1cblxuICBpZiAobWludXRlID4gNTApIHtcbiAgICByZXR1cm4gJ0l0IGlzICcgKyB0b1dvcmRzKDYwIC0gbWludXRlKSArICdtaW51dGVzIGJlZm9yZSAnICsgdG9Xb3Jkcyh0b0hvdXIpICsgdG9QTTtcbiAgfVxuXG4gIHJldHVybiAnSXQgaXMgJyArIHRvV29yZHMoaG91cikgKyAnICcgKyB0b1dvcmRzKG1pbnV0ZSkgKyBwbTtcblxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lR2VybWFueShVVEMpIHtcbiAgY29uc3QgZ2VybWFueSA9IFVUQy5jbG9uZSgpLnR6KCdFdXJvcGUvQmVybGluJyk7XG4gIGNvbnN0IGhvdXIgPSBnZXJtYW55LmhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZSA9IGdlcm1hbnkubWludXRlcygpO1xuICBsZXQgdG9Ib3VyID0gaG91ciArIDE7XG4gIGlmICh0b0hvdXIgPiAyMykge1xuICAgIHRvSG91ciA9IDA7XG4gIH1cbiAgaWYgKG1pbnV0ZSA9PT0gMCkge1xuICAgIHJldHVybiAnRXMgaXN0ICcgKyB6dVRleHQoaG91cikgKyAnIFVocic7XG4gIH1cblxuICBpZiAobWludXRlID09PSAxNSkge1xuICAgIHJldHVybiAnRXMgaXN0IHZpcnRlbCBuYWNoICcgKyB6dVRleHQoaG91cikgKyAnIFVocic7XG4gIH1cblxuICBpZiAobWludXRlID09PSA0NSkge1xuICAgIHJldHVybiAnRXMgaXN0IHZpcnRlbCB2b3IgJyArIHp1VGV4dCh0b0hvdXIpICsgJyBVaHInO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA8IDEwKSB7XG4gICAgbGV0IG1pbnV0ZVdvcmQgPSB6dVRleHQobWludXRlKTtcbiAgICBpZiAobWludXRlID09PSAxKSB7XG4gICAgICBtaW51dGVXb3JkID0gJ2VpbmUnXG4gICAgfVxuICAgIHJldHVybiAnRXMgaXN0ICcgKyBtaW51dGVXb3JkICsgJyBNaW51dGVuIG5hY2ggJyArIHp1VGV4dChob3VyKSArICcgVWhyJztcbiAgfVxuXG4gIGlmIChtaW51dGUgPiA1MCkge1xuICAgIGxldCBtaW51dGVXb3JkID0genVUZXh0KDYwIC0gbWludXRlKTtcbiAgICBpZiAobWludXRlID09PSA1OSkge1xuICAgICAgbWludXRlV29yZCA9ICdlaW5lJ1xuICAgIH1cbiAgICByZXR1cm4gJ0VzIGlzdCAnICsgenVUZXh0KDYwIC0gbWludXRlKSArICcgTWludXRlbiB2b3IgJyArIHp1VGV4dCh0b0hvdXIpICsgJyBVaHInO1xuICB9XG5cbiAgcmV0dXJuICdFcyBpc3QgJyArIHp1VGV4dChob3VyKSArICcgVWhyICcgKyB6dVRleHQobWludXRlKTtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVDbG9jaygpIHtcbiAgY29uc3QgdXNDbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9jay11cycpO1xuICBjb25zdCBnZXJtYW5DbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9jay1nZXJtYW4nKTtcbiAgY29uc3QgVVRDID0gbmV3IG1vbWVudCgpO1xuXG4gIHVzQ2xvY2suaW5uZXJUZXh0ID0gZm9ybWF0VGltZVVTKFVUQykgKyAnIGluIENhbGlmb3JuaWEnO1xuICBnZXJtYW5DbG9jay5pbm5lclRleHQgPSBmb3JtYXRUaW1lR2VybWFueShVVEMpICsgJyBpbiBEZXV0c2NobGFuZCc7XG59XG5cbmZ1bmN0aW9uIGluaXRDbG9jaygpIHtcbiAgdXBkYXRlQ2xvY2soKTtcbiAgc2V0SW50ZXJ2YWwodXBkYXRlQ2xvY2ssIDYwMDAwKTtcbn1cbiJdfQ==
