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
    return 'It is ' + toWords(60 - minute) + ' minutes before ' + toWords(toHour) + toPM;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3dhcCA9IGZhbHNlO1xuXG5mdW5jdGlvbiB0b1dvcmRzKHZhbHVlKSB7XG4gIC8vIGdpdmVuIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTksIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgd29yZC5cblxuICB2YXIgZGlnaXRzID0gW1xuICAgICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsXG4gICAgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnXTtcbiAgdmFyIHRlbnMgPVxuICAgICAgW1xuICAgICAgICAndGVuJywgJ2VsZXZlbicsICd0d2VsdmUnLCAndGhpcnRlZW4nLCAnZm91cnRlZW4nLCAnZmlmdGVlbicsICdzaXh0ZWVuJyxcbiAgICAgICAgJ3NldmVudGVlbicsICdlaWdodGVlbicsICduaW5ldGVlbicsXG4gICAgICBdO1xuICB2YXIgbGFyZ2VyID0gWyd0d2VudHknLCAndGhpcnR5JywgJ2ZvcnR5JywgJ2ZpZnR5J107XG5cbiAgaWYgKHZhbHVlIDw9IDkpIHtcbiAgICByZXR1cm4gZGlnaXRzW3ZhbHVlXTtcbiAgfVxuICBpZiAodmFsdWUgPiA5ICYmIHZhbHVlIDwgMjApIHtcbiAgICByZXR1cm4gdGVuc1t2YWx1ZSAtIDEwXTtcbiAgfVxuICB0ZW5zVmFsdWUgPSAoKHZhbHVlIC0gdmFsdWUgJSAxMCkgLyAxMCkgLSAyO1xuICB1bml0c1ZhbHVlID0gKHZhbHVlICUgMTApO1xuICByZXR1cm4gKHVuaXRzVmFsdWUgPT09IDApID8gbGFyZ2VyW3RlbnNWYWx1ZV0gOiBsYXJnZXJbdGVuc1ZhbHVlXSArICcgJyArXG4gICAgICBkaWdpdHNbdW5pdHNWYWx1ZV07XG59XG5cbmZ1bmN0aW9uIHp1VGV4dCh2YWx1ZSkge1xuICAvLyBnaXZlbiBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5LCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHdvcmQuXG5cbiAgdmFyIGRpZ2l0cyA9IFtcbiAgICAnbnVsbCcsICdlaW4nLCAnendlaScsICdkcmVpJywgJ3ZpZXInLFxuICAgICdmw7xuZicsICdzZWNocycsICdzaWViZW4nLCAnYWNodCcsICduZXVuJ107XG4gIHZhciB0ZW5zID1cbiAgICAgIFtcbiAgICAgICAgJ3plaG4nLCAnZWxmJywgJ3p3w7ZsZicsICdkcmVpemVobicsICd2aWVyemVobicsICdmw7xuZnplaG4nLCAnc2VjaHN6ZWhuJyxcbiAgICAgICAgJ3NpZWJzemVobicsICdhY2h0emVobicsICduZXVuemVobicsXG4gICAgICBdO1xuICB2YXIgbGFyZ2VyID0gWyd6d2FuemlnJywgJ2RyZWl6aWcnLCAndmllcnppZycsICdmw7xuZnplaG4nXTtcblxuICBpZiAodmFsdWUgPD0gOSkge1xuICAgIHJldHVybiBkaWdpdHNbdmFsdWVdO1xuICB9XG4gIGlmICh2YWx1ZSA+IDkgJiYgdmFsdWUgPCAyMCkge1xuICAgIHJldHVybiB0ZW5zW3ZhbHVlIC0gMTBdO1xuICB9XG4gIHRlbnNWYWx1ZSA9ICgodmFsdWUgLSB2YWx1ZSAlIDEwKSAvIDEwKSAtIDI7XG4gIHVuaXRzVmFsdWUgPSAodmFsdWUgJSAxMCk7XG4gIHJldHVybiAodW5pdHNWYWx1ZSA9PT0gMCkgPyBsYXJnZXJbdGVuc1ZhbHVlXSA6IGRpZ2l0c1t1bml0c1ZhbHVlXSArICd1bmQnICtcbiAgICAgIGxhcmdlclt0ZW5zVmFsdWVdO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lSW5FbmdsaXNoKHRpbWUpIHtcblxuICBsZXQgaG91ciA9IHRpbWUuaG91cnMoKTtcbiAgbGV0IHBtID0gJyBhLm0uJztcbiAgaWYgKGhvdXIgPiAxMikge1xuICAgIGhvdXIgLT0gMTI7XG4gICAgcG0gPSAnIHAubS4nO1xuICB9XG4gIGxldCB0b0hvdXIgPSBob3VyICsgMTtcbiAgbGV0IHRvUE0gPSAnJztcbiAgaWYgKHRvSG91ciA+IDEyKSB7XG4gICAgdG9Ib3VyIC09IDEyO1xuICAgIHRvUE0gPSAnIHAubS4nO1xuICB9XG5cbiAgbGV0IG1pbnV0ZSA9IHRpbWUubWludXRlcygpO1xuXG4gIGlmIChtaW51dGUgPT09IDApIHtcbiAgICByZXR1cm4gJ0l0IGlzICcgKyB0b1dvcmRzKGhvdXIpICsgcG07XG4gIH1cblxuICBpZiAobWludXRlID09PSAxNSkge1xuICAgIHJldHVybiAnSXQgaXMgcXVhcnRlciBhZnRlciAnICsgdG9Xb3Jkcyhob3VyKSArIHBtO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA9PT0gNDUpIHtcbiAgICByZXR1cm4gJ0l0IGlzIHF1YXJ0ZXIgdG8gJyArIHRvV29yZHModG9Ib3VyKSArIHRvUE07XG4gIH1cblxuICBpZiAobWludXRlIDwgMTApIHtcbiAgICByZXR1cm4gJ0l0IGlzICcgKyB0b1dvcmRzKG1pbnV0ZSkgKyAnIG1pbnV0ZXMgYWZ0ZXIgJyArIHRvV29yZHMoaG91cikgKyBwbTtcbiAgfVxuXG4gIGlmIChtaW51dGUgPiA1MCkge1xuICAgIHJldHVybiAnSXQgaXMgJyArIHRvV29yZHMoNjAgLSBtaW51dGUpICsgJyBtaW51dGVzIGJlZm9yZSAnICsgdG9Xb3Jkcyh0b0hvdXIpICsgdG9QTTtcbiAgfVxuXG4gIHJldHVybiAnSXQgaXMgJyArIHRvV29yZHMoaG91cikgKyAnICcgKyB0b1dvcmRzKG1pbnV0ZSkgKyBwbTtcblxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lSW5HZXJtYW4odGltZSkge1xuXG4gIGNvbnN0IGhvdXIgPSB0aW1lLmhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZSA9IHRpbWUubWludXRlcygpO1xuICBsZXQgdG9Ib3VyID0gaG91ciArIDE7XG4gIGlmICh0b0hvdXIgPiAyMykge1xuICAgIHRvSG91ciA9IDA7XG4gIH1cbiAgaWYgKG1pbnV0ZSA9PT0gMCkge1xuICAgIHJldHVybiAnRXMgaXN0ICcgKyB6dVRleHQoaG91cikgKyAnIFVocic7XG4gIH1cblxuICBpZiAobWludXRlID09PSAxNSkge1xuICAgIHJldHVybiAnRXMgaXN0IHZpcnRlbCBuYWNoICcgKyB6dVRleHQoaG91cikgKyAnIFVocic7XG4gIH1cblxuICBpZiAobWludXRlID09PSA0NSkge1xuICAgIHJldHVybiAnRXMgaXN0IHZpcnRlbCB2b3IgJyArIHp1VGV4dCh0b0hvdXIpICsgJyBVaHInO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA8IDEwKSB7XG4gICAgbGV0IG1pbnV0ZVdvcmQgPSB6dVRleHQobWludXRlKTtcbiAgICBpZiAobWludXRlID09PSAxKSB7XG4gICAgICBtaW51dGVXb3JkID0gJ2VpbmUnXG4gICAgfVxuICAgIHJldHVybiAnRXMgaXN0ICcgKyBtaW51dGVXb3JkICsgJyBNaW51dGVuIG5hY2ggJyArIHp1VGV4dChob3VyKSArICcgVWhyJztcbiAgfVxuXG4gIGlmIChtaW51dGUgPiA1MCkge1xuICAgIGxldCBtaW51dGVXb3JkID0genVUZXh0KDYwIC0gbWludXRlKTtcbiAgICBpZiAobWludXRlID09PSA1OSkge1xuICAgICAgbWludXRlV29yZCA9ICdlaW5lJ1xuICAgIH1cbiAgICByZXR1cm4gJ0VzIGlzdCAnICsgbWludXRlV29yZCArICcgTWludXRlbiB2b3IgJyArIHp1VGV4dCh0b0hvdXIpICsgJyBVaHInO1xuICB9XG5cbiAgcmV0dXJuICdFcyBpc3QgJyArIHp1VGV4dChob3VyKSArICcgVWhyICcgKyB6dVRleHQobWludXRlKTtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVDbG9jaygpIHtcbiAgY29uc3QgdXNDbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9jay11cycpO1xuICBjb25zdCBnZXJtYW5DbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9jay1nZXJtYW4nKTtcbiAgY29uc3QgVVRDID0gbmV3IG1vbWVudCgpO1xuXG4gIGNvbnN0IHRpbWVJbkdlcm1hbnkgPSBVVEMuY2xvbmUoKS50eignRXVyb3BlL0JlcmxpbicpO1xuICBjb25zdCB0aW1lSW5VU0EgPSBVVEMuY2xvbmUoKS50eignQW1lcmljYS9Mb3NfQW5nZWxlcycpO1xuICBsZXQgZ2VybWFueVRpbWUgPSBmb3JtYXRUaW1lSW5HZXJtYW4odGltZUluR2VybWFueSkgKyAnIGluIERldXRzY2hsYW5kJztcbiAgbGV0IGNhbGlmb3JuaWFUaW1lID0gZm9ybWF0VGltZUluRW5nbGlzaCh0aW1lSW5VU0EpICsgJyBpbiBDYWxpZm9ybmlhJztcbiAgaWYgKHN3YXApIHtcbiAgICBjYWxpZm9ybmlhVGltZSA9IGZvcm1hdFRpbWVJbkdlcm1hbih0aW1lSW5VU0EpICsgJyBpbiBLYWxpZm9ybmllbic7XG4gICAgZ2VybWFueVRpbWUgPSBmb3JtYXRUaW1lSW5FbmdsaXNoKHRpbWVJbkdlcm1hbnkpICsgJyBpbiBHZXJtYW55JztcbiAgfVxuICB1c0Nsb2NrLmlubmVyVGV4dCA9IGNhbGlmb3JuaWFUaW1lO1xuICBnZXJtYW5DbG9jay5pbm5lclRleHQgPSBnZXJtYW55VGltZTtcbn1cblxuZnVuY3Rpb24gc3dhcFRleHQoKSB7XG4gIHN3YXAgPSAhIHN3YXA7XG4gIHVwZGF0ZUNsb2NrKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDbG9jaygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3YXAnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dhcFRleHQpO1xuICB1cGRhdGVDbG9jaygpO1xuICBzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgNjAwMDApO1xufVxuIl19
