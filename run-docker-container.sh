docker network create app-network
docker run --name example-mysql --network=app-network -e MYSQL_ROOT_PASSWORD=mysql-pw -e MYSQL_DATABASE=node_example -p 3306:3306 -d mysql:latest
