#!/bin/bash

echo "Building the $1 project..."
npx detox build --configuration $1;

# Get number of processing units
let WORKERS;
if [[ $MAX_WORKERS ]]; then
  WORKERS=$MAX_WORKERS;
elif [ "$(uname)" == "Darwin" ]; then
  WORKERS=`sysctl -n hw.ncpu`;
else
  WORKERS=`nproc --all`;
fi

echo "Executing Detox tests... with $WORKERS workers"
npx detox test --configuration $1 --workers $WORKERS;
exit
