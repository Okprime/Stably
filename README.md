A brief wiki for the application can be found here https://github.com/Okprime/Stably.wiki.git

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

- ##### UI - https://stably.herokuapp.com/

- ##### API DOCS - https://documenter.getpostman.com/view/6090065/TzJx6vHA

TECHNOLOGY USED
```
- Front-end: React

- Back-end: Typescript

- CI/CD: Travis/Docker

- Deployment: Heroku

```

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
