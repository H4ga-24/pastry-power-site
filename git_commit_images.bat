@echo off
cd /d "%~dp0"
del .git\index.lock 2>nul
git config user.email "pastrypower@dev.local"
git config user.name "PastryPower Bot"
git add public\images\recipes\ src\data\recipes\
git commit -m "feat: images recettes 1 a 10"
echo.
echo Commit effectue ! Appuyez sur une touche pour fermer.
pause
