@echo off
setlocal enabledelayedexpansion

rem LifeNumbers - Easy Dev Server Starter
rem Usage: start-dev.cmd [--port 5173] [--host]

pushd "%~dp0"

echo [LifeNumbers] Preparing to start the dev server...

rem Check Node.js installation
where node >nul 2>&1
if errorlevel 1 (
  echo Error: Node.js not found. Please install from https://nodejs.org/
  goto end
)

rem Check npm installation
where npm >nul 2>&1
if errorlevel 1 (
  echo Error: npm not found. Ensure Node.js installation includes npm.
  goto end
)

rem Install dependencies if missing
if not exist "node_modules" (
  echo Installing dependencies (npm install)...
  npm install
  if errorlevel 1 (
    echo Error: npm install failed. Please check your network or package.json.
    goto end
  )
)

rem Forward any extra args to Vite (e.g., --port 5173 --host)
set "EXTRA_ARGS=%*"

echo Starting Vite dev server...
echo Command: npm run dev -- !EXTRA_ARGS!
npm run dev -- !EXTRA_ARGS!

:end
popd
endlocal
