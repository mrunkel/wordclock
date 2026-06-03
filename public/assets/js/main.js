let swap = false;

function toWords(value, language = 'en') {
  let digits = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
  ];
  let teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen',
  ];
  let tens = ['twenty', 'thirty', 'forty', 'fifty'];

  if (language === 'de') {
    digits = [
      'null', 'ein', 'zwei', 'drei', 'vier',
      'fünf', 'sechs', 'sieben', 'acht', 'neun',
    ];
    teens = [
      'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechszehn',
      'siebzehn', 'achtzehn', 'neunzehn',
    ];
    tens = ['zwanzig', 'dreißig', 'vierzig', 'fünfzig'];
  }

  if (value <= 9) {
    return digits[value];
  }
  if (value < 20) {
    return teens[value - 10];
  }

  const tensIndex = Math.floor(value / 10) - 2;
  const units = value % 10;

  if (units === 0) {
    return tens[tensIndex];
  }

  if (language === 'de') {
    return digits[units] + 'und' + tens[tensIndex];
  }

  return tens[tensIndex] + ' ' + digits[units];
}

function formatTimeInEnglish(hour, minute) {
  let displayHour = hour;
  let pm = ' a.m.';

  if (hour === 0) {
    displayHour = 12;
  } else if (hour === 12) {
    pm = ' p.m.';
  } else if (hour > 12) {
    displayHour = hour - 12;
    pm = ' p.m.';
  }

  let toHour = displayHour + 1;
  let toPm = pm;
  if (toHour === 13) {
    toHour = 1;
    toPm = ' p.m.';
  } else if (toHour === 12 && pm === ' a.m.') {
    toPm = ' p.m.';
  }

  if (minute === 0) {
    return 'It is ' + toWords(displayHour) + pm;
  }

  if (minute === 15) {
    return 'It is quarter after ' + toWords(displayHour) + pm;
  }

  if (minute === 45) {
    return 'It is quarter to ' + toWords(toHour) + toPm;
  }

  if (minute < 10) {
    const minuteWord = minute === 1 ? 'one minute' : toWords(minute) + ' minutes';
    return 'It is ' + minuteWord + ' after ' + toWords(displayHour) + pm;
  }

  if (minute > 50) {
    const remaining = 60 - minute;
    const minuteWord = remaining === 1 ? 'one minute' : toWords(remaining) + ' minutes';
    return 'It is ' + minuteWord + ' before ' + toWords(toHour) + toPm;
  }

  return 'It is ' + toWords(displayHour) + ' ' + toWords(minute) + pm;
}

function formatTimeInGerman(hour, minute) {
  let toHour = hour + 1;
  if (toHour > 23) {
    toHour = 0;
  }

  if (minute === 0) {
    return 'Es ist ' + toWords(hour, 'de') + ' Uhr';
  }

  if (minute === 15) {
    return 'Es ist viertel nach ' + toWords(hour, 'de') + ' Uhr';
  }

  if (minute === 45) {
    return 'Es ist viertel vor ' + toWords(toHour, 'de') + ' Uhr';
  }

  if (minute < 10) {
    const minuteWord = minute === 1 ? 'eine Minute' : toWords(minute, 'de') + ' Minuten';
    return 'Es ist ' + minuteWord + ' nach ' + toWords(hour, 'de') + ' Uhr';
  }

  if (minute > 50) {
    const remaining = 60 - minute;
    const minuteWord = remaining === 1 ? 'eine Minute' : toWords(remaining, 'de') + ' Minuten';
    return 'Es ist ' + minuteWord + ' vor ' + toWords(toHour, 'de') + ' Uhr';
  }

  return 'Es ist ' + toWords(hour, 'de') + ' Uhr ' + toWords(minute, 'de');
}

function getZonedTime(timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date());

  return {
    hour: Number(parts.find((part) => part.type === 'hour').value),
    minute: Number(parts.find((part) => part.type === 'minute').value),
  };
}

function updateClock() {
  const usClock = document.getElementById('clock-us');
  const germanClock = document.getElementById('clock-german');
  const usLabel = document.getElementById('clock-us-label');
  const deLabel = document.getElementById('clock-de-label');

  const berlin = getZonedTime('Europe/Berlin');
  const california = getZonedTime('America/Los_Angeles');

  if (swap) {
    usLabel.textContent = 'Kalifornien';
    deLabel.textContent = 'Germany';
    usClock.textContent = formatTimeInGerman(california.hour, california.minute);
    germanClock.textContent = formatTimeInEnglish(berlin.hour, berlin.minute);
  } else {
    usLabel.textContent = 'California';
    deLabel.textContent = 'Deutschland';
    usClock.textContent = formatTimeInEnglish(california.hour, california.minute);
    germanClock.textContent = formatTimeInGerman(berlin.hour, berlin.minute);
  }
}

function swapText() {
  swap = !swap;
  updateClock();
}

function initClock() {
  document.getElementById('swap').addEventListener('click', swapText);
  updateClock();
  setInterval(updateClock, 60000);
  initFlipClock();
}

const US_TIME_ZONE =
  /^(?:US\/|Pacific\/(?:Honolulu|Guam|Saipan|Pago_Pago|Midway)|America\/(?:New_York|Detroit|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Boise|Adak|Juneau|Sitka|Metlakatla|Yakutat|Nome|Menominee|Indiana\/|Kentucky\/|North_Dakota\/|Puerto_Rico|St_Thomas|Virgin))/;

const FLIP_DURATION_MS = 1100;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function isUsTimeZone(timeZone) {
  return US_TIME_ZONE.test(timeZone);
}

function getLocalFlipTime() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const use12Hour = isUsTimeZone(timeZone);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: use12Hour,
  }).formatToParts(new Date());

  const hour = Number(parts.find((part) => part.type === 'hour').value);
  const minute = Number(parts.find((part) => part.type === 'minute').value);
  const dayPeriod = parts.find((part) => part.type === 'dayPeriod')?.value.toUpperCase() ?? '';

  const hourText = String(hour).padStart(2, '0');
  const minuteText = String(minute).padStart(2, '0');

  return {
    digits: hourText + minuteText,
    display: use12Hour
      ? hour + ':' + minuteText + ' ' + dayPeriod
      : hourText + ':' + minuteText,
    dayPeriod: use12Hour ? dayPeriod : '',
    timeZone,
    use12Hour,
  };
}

function formatTimeZoneLabel(timeZone) {
  return timeZone.replace(/_/g, ' ').replace(/\//g, ' · ');
}

function createFlipDigitElement() {
  const digit = document.createElement('div');
  digit.className = 'flip-digit';
  digit.innerHTML =
    '<div class="flip-digit-top"><span></span></div>' +
    '<div class="flip-digit-bottom"><span></span></div>' +
    '<div class="flip-digit-flip flip-digit-flip-top" aria-hidden="true"><span></span></div>' +
    '<div class="flip-digit-flip flip-digit-flip-bottom" aria-hidden="true"><span></span></div>';
  return digit;
}

function setDigitSpans(digit, value) {
  digit.querySelector('.flip-digit-top span').textContent = value;
  digit.querySelector('.flip-digit-bottom span').textContent = value;
}

function FlipDigit(element) {
  this.element = element;
  this.current = '';
  this.top = element.querySelector('.flip-digit-top');
  this.bottom = element.querySelector('.flip-digit-bottom');
  this.flipTop = element.querySelector('.flip-digit-flip-top');
  this.flipBottom = element.querySelector('.flip-digit-flip-bottom');
}

FlipDigit.prototype.set = function (next, animate) {
  if (next === this.current) {
    return Promise.resolve();
  }

  const previous = this.current || next;

  if (!animate || prefersReducedMotion) {
    this.current = next;
    setDigitSpans(this.element, next);
    this.element.classList.remove('is-flipping');
    return Promise.resolve();
  }

  this.flipTop.querySelector('span').textContent = previous;
  this.flipBottom.querySelector('span').textContent = next;
  this.element.classList.remove('is-flipping');
  void this.element.offsetWidth;
  this.element.classList.add('is-flipping');

  return new Promise((resolve) => {
    window.setTimeout(() => {
      this.current = next;
      setDigitSpans(this.element, next);
      this.element.classList.remove('is-flipping');
      resolve();
    }, FLIP_DURATION_MS);
  });
};

function buildFlipClock(container) {
  container.replaceChildren();

  const flipDigits = [];
  const positions = ['h0', 'h1', 'm0', 'm1'];

  positions.forEach((position, index) => {
    const digitElement = createFlipDigitElement();
    digitElement.dataset.position = position;
    container.appendChild(digitElement);
    flipDigits.push(new FlipDigit(digitElement));

    if (index === 1) {
      const colon = document.createElement('span');
      colon.className = 'flip-colon';
      colon.setAttribute('aria-hidden', 'true');
      colon.textContent = ':';
      container.appendChild(colon);
    }
  });

  const period = document.createElement('span');
  period.id = 'flip-period';
  period.className = 'flip-period hidden';
  period.setAttribute('aria-hidden', 'true');
  container.appendChild(period);

  return { digits: flipDigits, period };
}

let flipClockState = null;
let flipMinuteTimer = null;

function renderFlipClock(animate) {
  const { digits: digitString, display, dayPeriod, timeZone, use12Hour } = getLocalFlipTime();
  const label = document.getElementById('flip-clock-label');
  const live = document.getElementById('flip-clock-live');
  const period = flipClockState.period;

  label.textContent = 'Local time · ' + formatTimeZoneLabel(timeZone);
  live.textContent = display;

  if (use12Hour) {
    period.textContent = dayPeriod;
    period.classList.remove('hidden');
  } else {
    period.textContent = '';
    period.classList.add('hidden');
  }

  return Promise.all(
    flipClockState.digits.map((digit, index) => digit.set(digitString[index], animate)),
  );
}

function scheduleFlipMinuteTick() {
  if (flipMinuteTimer) {
    window.clearTimeout(flipMinuteTimer);
  }

  const now = new Date();
  const msUntilNextMinute =
    (60 - now.getSeconds()) * 1000 - now.getMilliseconds() + 50;

  flipMinuteTimer = window.setTimeout(async () => {
    await renderFlipClock(true);
    scheduleFlipMinuteTick();
  }, msUntilNextMinute);
}

function initFlipClock() {
  const container = document.getElementById('flip-clock');
  if (!container) {
    return;
  }

  flipClockState = buildFlipClock(container);
  renderFlipClock(false);
  scheduleFlipMinuteTick();

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      renderFlipClock(false);
      scheduleFlipMinuteTick();
    }
  });
}
