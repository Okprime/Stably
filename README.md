Welcome!

- ##### UI - https://stably.herokuapp.com/

- ##### API DOCS - https://documenter.getpostman.com/view/6090065/TzJx6vHA

Design Decision

This application takes the Single tier (monolith) approach and some of the reasons for that are;

* Developing is at maximum ease. 

* It is simple to test.

* It is simple to deploy.

* No network latency. 

* Data is quickly and easily available


Trade-off

I decided to use Typescript basically because of the following;

* It is easier to refactor code without breaking it significantly.

* Clear Library API Definition

* ES6 Feature Support

* Build-in Support for JavaScript Packaging

TECHNOLOGY USED
```
- Front-end: React

- Back-end: Typescript

- CI/CD: Travis/Docker

- Deployment: Heroku

```

PROJECT STRUCTURE
```
.
├── stably-client
│   ├── public
│   └── src
│   └── .gitignore
│   └── package-lock.json
│   └── package.json
├── stably-server
│   ├── src
│   ├── .gitignore
│   └── package-lock.jsom
│   └── package.jsom
│   └── tsconfig.json
│   └── yarn-error.log
│   └── tsconfig.json
├── .gitignore
├── .travis.yml
├── Dockerfile
├── heroku.yml
└── README.md
```

# stably-client

## APP setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# stably-server

- The JSON payload sent must have the structure specified below;

  ```
  {
    "number": "55"
  }
  ```

- You get this as a response.

```
{
    "status": "success",
    "message": "The closest prime number is 53",
    "data": 53
}
```

### AVAILABLE ENDPOINTS

```markdown
GET / 

- returns: This serves the static file from the React app.
```

```markdown
POST /get-highest-prime-number

- It receives a number and returns the highest prime number lower than the input number 

- required:

  - JSON Payload as specified above.

- returns: JSON
```

```markdown
 INSTALLATION AND LOCAL SETUP

- Run the command `git clone https://github.com/Okprime/Stably.git` on your terminal to clone this repo to your current directory.

# Note: It is preassumed here that you have docker running in background. 
# If you do not visit Docker hub https://hub.docker.com/ intall.
# Once it i installed, make sure to have it running.

```
Run the app with this command
```
docker build -t stably . && docker run -p 4500:4500 -t stably

```
