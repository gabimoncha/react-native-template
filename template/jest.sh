#!/bin/bash

# Get number of processing units
let WORKERS;
if [[ $MAX_WORKERS ]]; then
  WORKERS=$MAX_WORKERS;
elif [ "$(uname)" == "Darwin" ]; then
  WORKERS=`sysctl -n hw.ncpu`;
else
  WORKERS=`nproc --all`;
fi

echo "Executing jest tests... with $WORKERS workers"
npx jest --maxWorkers=$WORKERS;
exit