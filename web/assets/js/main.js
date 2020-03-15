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
    return 'It is ' + toWords(minute) + ' after ' + toWords(hour) + pm;
  }

  if (minute > 50) {
    return 'It is ' + toWords(60 - minute) + ' before ' + toWords(toHour) + toPM;
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
    return 'Es ist ' + zuText(minute) + ' nach ' + zuText(hour) + ' Uhr';
  }

  if (minute > 50) {
    return 'Es ist ' + zuText(60 - minute) + ' vor ' + zuText(toHour) + ' Uhr';
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0b1dvcmRzKHZhbHVlKSB7XG4gIC8vIGdpdmVuIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTksIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgd29yZC5cblxuICB2YXIgZGlnaXRzID0gW1xuICAgICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsXG4gICAgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnXTtcbiAgdmFyIHRlbnMgPVxuICAgICAgW1xuICAgICAgICAndGVuJywgJ2VsZXZlbicsICd0d2VsdmUnLCAndGhpcnRlZW4nLCAnZm91cnRlZW4nLCAnZmlmdGVlbicsICdzaXh0ZWVuJyxcbiAgICAgICAgJ3NldmVudGVlbicsICdlaWdodGVlbicsICduaW5ldGVlbicsXG4gICAgICBdO1xuICB2YXIgbGFyZ2VyID0gWyd0d2VudHknLCAndGhpcnR5JywgJ2ZvcnR5JywgJ2ZpZnR5J107XG5cbiAgaWYgKHZhbHVlIDw9IDkpIHtcbiAgICByZXR1cm4gZGlnaXRzW3ZhbHVlXTtcbiAgfVxuICBpZiAodmFsdWUgPiA5ICYmIHZhbHVlIDwgMjApIHtcbiAgICByZXR1cm4gdGVuc1t2YWx1ZSAtIDEwXTtcbiAgfVxuICB0ZW5zVmFsdWUgPSAoKHZhbHVlIC0gdmFsdWUgJSAxMCkgLyAxMCkgLSAyO1xuICB1bml0c1ZhbHVlID0gKHZhbHVlICUgMTApO1xuICByZXR1cm4gKHVuaXRzVmFsdWUgPT09IDApID8gbGFyZ2VyW3RlbnNWYWx1ZV0gOiBsYXJnZXJbdGVuc1ZhbHVlXSArICcgJyArXG4gICAgICBkaWdpdHNbdW5pdHNWYWx1ZV07XG59XG5cbmZ1bmN0aW9uIHp1VGV4dCh2YWx1ZSkge1xuICAvLyBnaXZlbiBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5LCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHdvcmQuXG5cbiAgdmFyIGRpZ2l0cyA9IFtcbiAgICAnbnVsbCcsICdlaW5zJywgJ3p3ZWknLCAnZHJlaScsICd2aWVyJyxcbiAgICAnZsO8bmYnLCAnc2VjaHMnLCAnc2llYmVuJywgJ2FjaHQnLCAnbmV1biddO1xuICB2YXIgdGVucyA9XG4gICAgICBbXG4gICAgICAgICd6ZWhuJywgJ2VsZicsICd6d8O2bGYnLCAnZHJlaXplaG4nLCAndmllcnplaG4nLCAnZsO8bmZ6ZWhuJywgJ3NlY2hzemVobicsXG4gICAgICAgICdzaWVic3plaG4nLCAnYWNodHplaG4nLCAnbmV1bnplaG4nLFxuICAgICAgXTtcbiAgdmFyIGxhcmdlciA9IFsnendhbnppZycsICdkcmVpemlnJywgJ3ZpZXJ6aWcnLCAnZsO8bmZ6ZWhuJ107XG5cbiAgaWYgKHZhbHVlIDw9IDkpIHtcbiAgICByZXR1cm4gZGlnaXRzW3ZhbHVlXTtcbiAgfVxuICBpZiAodmFsdWUgPiA5ICYmIHZhbHVlIDwgMjApIHtcbiAgICByZXR1cm4gdGVuc1t2YWx1ZSAtIDEwXTtcbiAgfVxuICB0ZW5zVmFsdWUgPSAoKHZhbHVlIC0gdmFsdWUgJSAxMCkgLyAxMCkgLSAyO1xuICB1bml0c1ZhbHVlID0gKHZhbHVlICUgMTApO1xuICByZXR1cm4gKHVuaXRzVmFsdWUgPT09IDApID8gbGFyZ2VyW3RlbnNWYWx1ZV0gOiBkaWdpdHNbdW5pdHNWYWx1ZV0gKyAnIHVuZCAnICtcbiAgICAgIGxhcmdlclt0ZW5zVmFsdWVdO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lVVMoVVRDKSB7XG4gIGNvbnN0IHVzID0gVVRDLmNsb25lKCkudHooJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnKTtcbiAgbGV0IGhvdXIgPSB1cy5ob3VycygpO1xuICBsZXQgcG0gPSAnIGEubS4nO1xuICBpZiAoaG91ciA+IDEyKSB7XG4gICAgaG91ciAtPSAxMjtcbiAgICBwbSA9ICcgcC5tLic7XG4gIH1cbiAgbGV0IHRvSG91ciA9IGhvdXIgKyAxO1xuICBsZXQgdG9QTSA9ICcnO1xuICBpZiAodG9Ib3VyID4gMTIpIHtcbiAgICB0b0hvdXIgLT0gMTI7XG4gICAgdG9QTSA9ICcgcC5tLic7XG4gIH1cblxuICBsZXQgbWludXRlID0gdXMubWludXRlcygpO1xuXG4gIGlmIChtaW51dGUgPT09IDApIHtcbiAgICByZXR1cm4gJ0l0IGlzICcgKyB0b1dvcmRzKGhvdXIpICsgcG07XG4gIH1cblxuICBpZiAobWludXRlID09PSAxNSkge1xuICAgIHJldHVybiAnSXQgaXMgcXVhcnRlciBhZnRlciAnICsgdG9Xb3Jkcyhob3VyKSArIHBtO1xuICB9XG5cbiAgaWYgKG1pbnV0ZSA9PT0gNDUpIHtcbiAgICByZXR1cm4gJ0l0IGlzIHF1YXJ0ZXIgdG8gJyArIHRvV29yZHModG9Ib3VyKSArIHRvUE07XG4gIH1cblxuICBpZiAobWludXRlIDwgMTApIHtcbiAgICByZXR1cm4gJ0l0IGlzICcgKyB0b1dvcmRzKG1pbnV0ZSkgKyAnIGFmdGVyICcgKyB0b1dvcmRzKGhvdXIpICsgcG07XG4gIH1cblxuICBpZiAobWludXRlID4gNTApIHtcbiAgICByZXR1cm4gJ0l0IGlzICcgKyB0b1dvcmRzKDYwIC0gbWludXRlKSArICcgYmVmb3JlICcgKyB0b1dvcmRzKHRvSG91cikgKyB0b1BNO1xuICB9XG5cbiAgcmV0dXJuICdJdCBpcyAnICsgdG9Xb3Jkcyhob3VyKSArICcgJyArIHRvV29yZHMobWludXRlKSArIHBtO1xuXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWVHZXJtYW55KFVUQykge1xuICBjb25zdCBnZXJtYW55ID0gVVRDLmNsb25lKCkudHooJ0V1cm9wZS9CZXJsaW4nKTtcbiAgY29uc3QgaG91ciA9IGdlcm1hbnkuaG91cnMoKTtcbiAgY29uc3QgbWludXRlID0gZ2VybWFueS5taW51dGVzKCk7XG4gIGxldCB0b0hvdXIgPSBob3VyICsgMTtcbiAgaWYgKHRvSG91ciA+IDIzKSB7XG4gICAgdG9Ib3VyID0gMDtcbiAgfVxuICBpZiAobWludXRlID09PSAwKSB7XG4gICAgcmV0dXJuICdFcyBpc3QgJyArIHp1VGV4dChob3VyKSArICcgVWhyJztcbiAgfVxuXG4gIGlmIChtaW51dGUgPT09IDE1KSB7XG4gICAgcmV0dXJuICdFcyBpc3QgdmlydGVsIG5hY2ggJyArIHp1VGV4dChob3VyKSArICcgVWhyJztcbiAgfVxuXG4gIGlmIChtaW51dGUgPT09IDQ1KSB7XG4gICAgcmV0dXJuICdFcyBpc3QgdmlydGVsIHZvciAnICsgenVUZXh0KHRvSG91cikgKyAnIFVocic7XG4gIH1cblxuICBpZiAobWludXRlIDwgMTApIHtcbiAgICByZXR1cm4gJ0VzIGlzdCAnICsgenVUZXh0KG1pbnV0ZSkgKyAnIG5hY2ggJyArIHp1VGV4dChob3VyKSArICcgVWhyJztcbiAgfVxuXG4gIGlmIChtaW51dGUgPiA1MCkge1xuICAgIHJldHVybiAnRXMgaXN0ICcgKyB6dVRleHQoNjAgLSBtaW51dGUpICsgJyB2b3IgJyArIHp1VGV4dCh0b0hvdXIpICsgJyBVaHInO1xuICB9XG5cbiAgcmV0dXJuICdFcyBpc3QgJyArIHp1VGV4dChob3VyKSArICcgVWhyICcgKyB6dVRleHQobWludXRlKTtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVDbG9jaygpIHtcbiAgY29uc3QgdXNDbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9jay11cycpO1xuICBjb25zdCBnZXJtYW5DbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9jay1nZXJtYW4nKTtcbiAgY29uc3QgVVRDID0gbmV3IG1vbWVudCgpO1xuXG4gIHVzQ2xvY2suaW5uZXJUZXh0ID0gZm9ybWF0VGltZVVTKFVUQykgKyAnIGluIENhbGlmb3JuaWEnO1xuICBnZXJtYW5DbG9jay5pbm5lclRleHQgPSBmb3JtYXRUaW1lR2VybWFueShVVEMpICsgJyBpbiBEZXV0c2NobGFuZCc7XG59XG5cbmZ1bmN0aW9uIGluaXRDbG9jaygpIHtcbiAgdXBkYXRlQ2xvY2soKTtcbiAgc2V0SW50ZXJ2YWwodXBkYXRlQ2xvY2ssIDYwMDAwKTtcbn1cbiJdfQ==
