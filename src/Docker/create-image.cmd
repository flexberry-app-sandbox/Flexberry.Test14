docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test14/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test14/app ../..
