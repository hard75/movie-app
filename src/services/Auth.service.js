class Auth {
    constructor () {
        this.authenticated = false;
    }

    login (cb) {
        this.authenticated = true;
        cb();
    }

    logout (cb) {
        this.authenticated = false;
        localStorage.removeItem('access_token');
        cb();
    }

    isAuthenticated () {
        this.authenticated = localStorage.getItem('access_token') ? true : false;

        return this.authenticated;
    }
}

export default new Auth();