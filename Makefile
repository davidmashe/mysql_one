db:
	# docker network create mysql-net
	docker run -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=mysql -p 3306:3306 -d mysql
mysql:
	#mysql --user root --host 127.0.0.1 --port 3306 -p
	docker run --network host -it --rm mysql mysql --user root --host 127.0.0.1 --port 3306 -p