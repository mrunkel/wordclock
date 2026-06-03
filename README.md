# Word Clock

A simple page that tells the time in words for California and Germany, with a button to swap languages between the two time zones.

## Stack

- **Tailwind CSS 4** — styling via `@tailwindcss/cli`
- **Vanilla JavaScript** — no frameworks or runtime libraries; time zones via the native `Intl` API

## Development

```bash
npm install
npm run dev        # watch CSS + copy JS
# or
npm run build      # production CSS (minified) + copy JS
```

### Local (Laravel Herd)

Point Herd at the `public/` directory as the document root (e.g. `wordclock.test`). Run `npm run dev` or `npm run build` so assets exist under `public/assets/`.

### Production (nginx)

Set `root` to the `public/` directory. Run `npm run build` as part of your deploy so CSS/JS are compiled.

## Project layout

```
src/css/input.css   Tailwind source
src/js/app.js       Clock logic
public/             Document root (Herd / nginx)
```
