@echo off
setlocal

rem LifeNumbers - Easy Dev Server Starter
rem Usage: start-dev.cmd [--port 5173] [--host]

pushd "%~dp0"

echo [LifeNumbers] Preparing to start the dev server...

rem Check Node.js installation
where.exe node >nul 2>&1
if %errorlevel% neq 0 echo Error: Node.js not found. Please install from https://nodejs.org/ & goto end

rem Check npm installation
where.exe npm >nul 2>&1
if %errorlevel% neq 0 echo Error: npm not found. Ensure Node.js installation includes npm. & goto end

rem Install dependencies if missing
if not exist "node_modules" goto install

rem Forward any extra args to Vite (e.g., --port 5173 --host)
rem Note: pass arguments directly using %* to avoid delayed expansion issues

goto start

:install
echo Installing dependencies (npm install)...
npm install
if %errorlevel% neq 0 echo Error: npm install failed. Please check your network or package.json. & goto end

:start
echo Starting Vite dev server...
echo Command: npm run dev -- %*
npm run dev -- %*

:end
popd
endlocal
