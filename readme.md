### Setting up MySQL and Adminer in docker-compose
[link](https://betterprogramming.pub/setting-up-mysql-database-in-a-docker-d6c69a3e9afe)

##### This creates a mysql instance:

```
MYSQL_ROOT_PASSWORD: helloworld
MYSQL_DATABASE: testapp
```

##### Run Adminer program (admin for mysql like phpmyadmin)
[http://localhost:8080/](http://localhost:8080/)

| Parameter | Value |
| --- | ----------- |
| server | mysql-development |
| username | root |
| password | helloworld |
| database | testapp |
"# testNodeJsMysql2" 

##### About the this repo
This repo is just a test to use a lean approach for backend using docker / nodejs / mysql2 \

The sql tutorials are hosted over w3schools which is an excellent site for beginners. \ 

[LINK](https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp)

##### Prerequisite 
Make sure docker is installed

##### Usage

```
$ npm i

# start docker (mysql db)
$ npm run docker-compose-up

# stop docker (mysql db)
$ npm run docker-compose-down

# run examples
$ npm run start_1
$ npm run start_2
$ npm run start_3
$ npm run start_4
$ npm run start_5
$ npm run start_6
$ npm run start_7
$ npm run start_8
$ npm run start_9
$ npm run start_10
$ npm run start_11
```
