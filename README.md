# stably-client

## Project setup
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

- ##### DEMO - 

- ##### API DOCS - 

- The JSON payload sent must have the structure specified below;

  ```javascript
  {
    "number": "55"
}
  ```

- You get this as a response.

```javascript
{
    "status": "success",
    "message": "The closest prime number is 53",
    "data": 53
}
```

### AVAILABLE ENDPOINTS

```markdown
GET / - Get my profile

- returns: JSON
```

```markdown
POST /get-highest-prime-number

- It receives a number and returns the highest prime number lower than the input number 

- required:

  - JSON Payload as specified above.

- returns: JSON
```

### INSTALLATION AND LOCAL SETUP

- Run the command `git clone https://github.com/Okprime/stably.git` on your terminal to clone this repo to your current directory.

# With Docker

# Note: It is preassumed here that you have docker running in background

# Run the app in docker as a foreground process

```
docker build -t stably . && docker run -p 4500:4500 -t stably

```
