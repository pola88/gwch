# guidewheel

## Install dependencies

$ npx lerna bootstrap

## Create DB

$ npx lerna run create-db

## Start

$ npx lerna run start

## DB

I choice to use sqlite3 only because it's a challenge, in the real scenario I would choice another db to store the metrics as MongoDb, InfluxDb, Prometheus, etc

## Notes

* The datepicker allows the user to select dates without validating whether from is lower than to or to is greater than from, something to change.
* It would be nice to hide the table to see the charts