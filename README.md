# CleMVC Express Framework
## Version 1.0.0
Author: Clement Narciso
**************************

## Requirements 


### Pre-Requisites:

- Nodemon(optional)
- Ubuntu(WSL)

### Dependencies:

``` json
 "dependencies": {
    "body-parser": "^1.20.0",
    "connect-flash": "^0.1.1",
    "connect-redis": "^6.1.3",
    "csurf": "^1.11.0",
    "ejs": "^3.1.6",
    "express": "^4.17.3",
    "express-session": "^1.17.2",
    "ioredis": "^5.0.4",
    "js-yaml": "^4.1.0",
    "mysql": "^2.18.1",
    "pg": "^8.7.3",
    "redis": "^4.0.6",
    "xss-filters": "^1.2.7"
  }
```

## How to run:
1. Setup package.json:
``` json
{
  "name": "CleMVC",
  "version": "1.0.0",
  "description": "Express Framework",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "develop": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "connect-flash": "^0.1.1",
    "connect-redis": "^6.1.3",
    "csurf": "^1.11.0",
    "ejs": "^3.1.6",
    "express": "^4.17.3",
    "express-session": "^1.17.2",
    "ioredis": "^5.0.4",
    "js-yaml": "^4.1.0",
    "mysql": "^2.18.1",
    "pg": "^8.7.3",
    "redis": "^4.0.6",
    "xss-filters": "^1.2.7"
  }
}
``` 

2. Type and run this command in the command line to install dependencies.
``` 
npm install
```

3. Open up Ubuntu(WSL) CLI and type this in terminal to run redis server: 
``` 
redis-server
```

4. Type this command in terminal to run the server: 
``` 
npm run develop
```

There you go, it should be up and running by now.
