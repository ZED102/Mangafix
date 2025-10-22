# MangaFix — Deluxe (Package)

This repo contains the MangoFix frontend (React + Capacitor-ready), a mock AI server stub,
a GitHub Actions workflow to build a debug Android APK, and helper scripts.

**Important:** I could not include actual font TTF files in this zip due to environment limitations.
Instead, the frontend build step includes a small script (`scripts/fetch-fonts.sh`) that downloads
the free Arabic fonts into `frontend/public/fonts` at build time (GitHub Actions will run it).

## Quick start (local)

### Frontend (dev)
```bash
cd frontend
npm install
npm start
```

### Server (mock AI stub)
```bash
cd server
pip install -r requirements.txt
python mock_ai.py
```

### Build for Android (local)
1. Build the frontend:
```bash
cd frontend
npm run build
```
2. Initialize Capacitor and add Android (once):
```bash
npm i -g @capacitor/cli
npx cap init "MangaFix" com.yourdomain.mangafix
npx cap add android
npx cap copy android
npx cap open android
```
3. Build the APK in Android Studio (Build > Build Bundle(s) / APK(s) > Build APK(s)).

## GitHub Actions
The included workflow `.github/workflows/android-build.yml` will:
- install Node.js,
- build the web app,
- run a small script to download fonts into `frontend/public/fonts`,
- install Capacitor and Android SDK command-line tools,
- build a debug APK and upload it as an artifact.

## Fonts
Fonts are fetched during CI/build using `scripts/fetch-fonts.sh`. If you prefer, you can manually
place TTF/OTF files into `frontend/public/fonts/` before building.

## Notes
- This package uses a mock AI inpainting function (server/mock_ai.py) which simply returns the same image.
- For production inpainting, you'll need to replace `mock_ai.inpaint` with your model (LaMa or Stable Diffusion).

Enjoy! If you want, I can walk you through pushing this to GitHub and triggering the build (I gave you the exact workflow earlier).
