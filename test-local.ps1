param(
    [int]$Port = 4000,
    [string]$HostName = '127.0.0.1'
)

Set-StrictMode -Version Latest
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if ($scriptDir) { Set-Location $scriptDir }

if (Test-Path .\Gemfile) {
    Write-Host 'Running: bundle install'
    & bundle install
    if ($LASTEXITCODE -ne 0) { Write-Error 'bundle install failed'; exit $LASTEXITCODE }
}

Write-Host "Running: bundle exec jekyll serve --host $HostName --port $Port"
& bundle exec jekyll serve --host $HostName --port $Port
exit $LASTEXITCODE