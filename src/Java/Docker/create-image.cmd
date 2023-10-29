docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test14-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test14-java/app ../../..
