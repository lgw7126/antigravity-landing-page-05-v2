@echo off
title Celestia Dev Server
echo ===================================================
echo   Celestia Dev Server
echo ===================================================
echo.
echo 1. Opening browser at http://localhost:5173/ ...
start http://localhost:5173/
echo.
echo 2. Running Vite development server...
npm.cmd run dev
pause
