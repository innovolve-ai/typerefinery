@echo off

SET "APP_NAME=TypeRefinery"
SET "SERVICES_HOME=services"
SET "SERVICE_NAME=fastapi"
SET "PYTHON_HOME=%cd%\_python"
SET "SERVER_HOME=%cd%\%SERVICE_NAME%"
SET "PATH=%cd%;%PYTHON_HOME%"
SET "PYTHONPACKAGES=%SERVER_HOME%\__packages__"
SET "PYTHONPATH=%cd%;%PYTHONPACKAGES%"

echo %SERVICE_NAME% - PYTHON_HOME=%PYTHON_HOME%
echo %SERVICE_NAME% - SERVER_HOME=%SERVER_HOME%
echo %SERVICE_NAME% - PATH=%PATH%
echo %SERVICE_NAME% - PYTHONPACKAGES=%PYTHONPACKAGES%
echo %SERVICE_NAME% - PYTHONPATH=%PYTHONPATH%

python --version

if "%1" == "" goto missingargument

if "%1" == "server" (
  SET "SERVICE_DATA_PATH=%SERVER_HOME%"
  SET "SERVICE_LOG_PATH=%SERVER_HOME%/logs"
  SET "SERVICE_PATH=%SERVER_HOME%"
  goto startserver
)
if "%1" == "scriptbasic" (
  SET "SERVICE_DATA_PATH=%SERVER_HOME%"
  SET "SERVICE_LOG_PATH=%SERVER_HOME%/logs"
  SET "SERVICE_PATH=%SERVER_HOME%"
  goto startscriptbasic
)
if "%1" == "scriptgroup" (
  SET "SERVICE_DATA_PATH=%SERVER_HOME%"
  SET "SERVICE_LOG_PATH=%SERVER_HOME%/logs"
  SET "SERVICE_PATH=%SERVER_HOME%"
  goto startscriptgroup
)
if "%1" == "serverprod" (
  SET "SERVICE_DATA_PATH=%APPDATA%\%APP_NAME%\%SERVICES_HOME%\%SERVICE_NAME%"
  SET "SERVICE_LOG_PATH=%APPDATA%\%APP_NAME%\%SERVICES_HOME%\%SERVICE_NAME%\logs"
  SET "SERVICE_PATH=%SERVER_HOME%"
  goto startserverprod
)
if "%1" == "setup"  goto startsetup
if "%1" == "package"  goto startpackage
if "%1" == "sample"  goto startsample

echo   Invalid argument: %1. Possible commands are:
echo   Server:          server [--help]
echo   Script Basic:    scriptbasic [--help]
echo   Script Group:    scriptbasic [--help]
echo   Server PROD:     serverprod [--help]
echo   Setup:           setup [--help]
echo   Sample:          sample [--help]
goto exiterror

:missingargument

echo   Missing argument. Possible commands are:
echo   Server:         server [--help]
echo   Script Basic:   scriptbasic [--help]
echo   Script Group:   scriptbasic [--help]
echo   Server PROD:    serverprod [--help]
echo   Setup:          setup [--help]
echo   Sample:          sample [--help]
goto exiterror


:startsetup

if exist %SERVER_HOME% (
  cd %PYTHON_HOME%
  python get-pip.py
  python -m pip install uvicorn[standard]
  python -m pip install --target=%PYTHONPACKAGES% -r %SERVER_HOME%\requirements.txt
  goto exit
) else (
  echo Can't find server^.
  goto exiterror
)

@REM scripts/G_to_WebCola.py "localhost" 1729 "typerefinery" "match $a isa log, has logName 'L1';\n$b isa event, has eventName $c;\n$d (owner: $a, item: $b) isa trace,\nhas traceId $e, has index $f;\n offset 0;"

:startscriptbasic

if exist %SERVER_HOME% (
  echo %SERVICE_NAME% - SERVICE_DATA_PATH=%SERVICE_DATA_PATH%
  echo %SERVICE_NAME% - SERVICE_LOG_PATH=%SERVICE_LOG_PATH%
  echo %SERVICE_NAME% - SERVICE_PATH=%SERVICE_PATH%
  python %SERVICE_PATH%/scripts/G_to_WebCola.py "localhost" 1729 "typerefinery" "match $a isa log, has logName 'L1'; $b isa event, has eventName $c; $d (owner: $a, item: $b) isa trace, has traceId $e, has index $f; offset 0;"
  goto exit
) else (
  echo Can't find server^.
  goto exiterror
)


:startscriptgroup

if exist %SERVER_HOME% (
  echo %SERVICE_NAME% - SERVICE_DATA_PATH=%SERVICE_DATA_PATH%
  echo %SERVICE_NAME% - SERVICE_LOG_PATH=%SERVICE_LOG_PATH%
  echo %SERVICE_NAME% - SERVICE_PATH=%SERVICE_PATH%
  python %SERVICE_PATH%/scripts/WebCola_Groups3.py "localhost" 1729 "typerefinery" "match $a isa log, has logName 'L1'; $b isa event, has eventName $c; $d (owner: $a, item: $b) isa trace, has traceId $e, has index $f; offset 0;"
  python %SERVICE_PATH%/scripts/Collapse_Group.py %SERVICE_PATH%/scripts/WebCola_Groups3.py.output %SERVICE_PATH%/scripts/WebCola_Groups3.py.output.collapsed
  goto exit
) else (
  echo Can't find server^.
  goto exiterror
)



:startserver

if exist %SERVER_HOME% (
  echo %SERVICE_NAME% - SERVICE_DATA_PATH=%SERVICE_DATA_PATH%
  echo %SERVICE_NAME% - SERVICE_LOG_PATH=%SERVICE_LOG_PATH%
  echo %SERVICE_NAME% - SERVICE_PATH=%SERVICE_PATH%
  python -I -m uvicorn --reload --reload-exclude "req-*.py" --host localhost --app-dir %SERVER_HOME% main:app
  goto exit
) else (
  echo Can't find server^.
  goto exiterror
)

:startserverprod

if exist %SERVER_HOME% (
  echo %SERVICE_NAME% - SERVICE_DATA_PATH=%SERVICE_DATA_PATH%
  echo %SERVICE_NAME% - SERVICE_LOG_PATH=%SERVICE_LOG_PATH%
  echo %SERVICE_NAME% - SERVICE_PATH=%SERVICE_PATH%
  python -I -m uvicorn --reload --reload-exclude "req-*.py" --host localhost --app-dir %SERVER_HOME% main:app
  goto exit
) else (
  echo Can't find server^.
  goto exiterror
)

:startsample

if exist %SERVER_HOME% (
  python -m http.server 8081 --directory %SERVER_HOME%/scripts
  goto exit
) else (
  echo Can't find server^.
  goto exiterror
)

:exit
exit /b 0

:exiterror
exit /b 1
