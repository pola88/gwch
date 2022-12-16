# Guidewheel

## Install dependencies

$ npx lerna bootstrap

## Create DB

Be sure to have the `demoPumpDayData.csv` in `packages/api` to create the database and load the data

$ npx lerna run create-db

## Start

$ npx lerna run start

And then go to `http://localhost:3001/`

## DB

I choice to use sqlite3 only because it's a challenge, in the real scenario I would choice another db to store the metrics as MongoDb, InfluxDb, Prometheus, etc

## Notes

* The datepicker allows the user to select dates without validating whether from is lower than to or to is greater than from, something to change.
* It would be nice to hide the table to see the charts
* We have to add retries on fetch data, in case the server is down