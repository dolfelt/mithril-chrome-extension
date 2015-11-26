
var Return = {
    getCookie: function(obj) {
        return new Promise(function(resolve, reject) {
            chrome.cookies.get(obj, function(cookie) {
                resolve(cookie);
            });
        });
    },
    setCookie: function(obj) {
        return new Promise(function(resolve, reject) {
            chrome.cookies.set(obj, function(cookie) {
                resolve(cookie);
            });
        });
    },
    setStorage: function(data) {
        return new Promise(function(resolve, reject) {
            chrome.storage.sync.set(data, function(obj) {
                chrome.runtime.sendMessage({updateSettings: data}, function(response) {
                    // do nothing
                });
                resolve(obj);
            });
        });
    },
    getStorage: function(keys) {
        return new Promise(function(resolve, reject) {
            chrome.storage.sync.get(keys, function(obj) {
                resolve(obj);
            });
        });
    }
};

export default Return;
