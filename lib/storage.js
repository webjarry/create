let storage = {
    set: function (key, value) {
        localStorage.setItem(key, value)
    },
    get: function (key) {
        return localStorage.getItem(key)
    },
    del: function () {

    }
};

export default storage
