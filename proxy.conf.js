const PROXY_CONFIG = {
    "/users/*": {
        "target": "https://cvbackend.onrender.com/",
        "secure": false,
        "changeOrigin": true
    }
}
  
module.exports = PROXY_CONFIG;