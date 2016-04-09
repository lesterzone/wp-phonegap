'use strict';

window.API = 'http://utnwsphonegap.herokuapp.com/';
var user = window.localStorage.getItem('currentUser');

window.addEventListener('push', function(event) {

    var action = window.location.href;
    if (action.split('www/')[1]) {
        action = action.split('www/')[1].split('.html').join('');
    } else {
        action = location.pathname.replace('/', '').replace('.html', '');
    }

    app[action] && app[action]();
});

var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {},

    login: function() {
        var loginSelector = document.getElementById('login');
        loginSelector && loginSelector.addEventListener('click', function(event) {
            event.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // TODO validate instead of return
            if (!email && !password) {
                return;
            }

            jQuery.ajax({
                url: window.API + 'sessions',
                type: 'post',
                data: {
                    email: email,
                    password: password
                },
                success: function(data) {
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    window.location.href = 'index.html';
                },
                error: function(error) {
                    console.log(error.responseJSON.error);
                }
            });
        });
    },

    settings: function() {
        var logoutSelector = document.getElementById('logout');

        logoutSelector && logoutSelector.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.clear();
            jQuery.ajax({
                url: window.API + 'sessions',
                type: 'delete',
                success: function(data) {
                    alert('Logout properly');
                    window.location.href = 'login.html';
                },
                error: function() {
                    alert('Error on remove session');
                }
            });
        });
    },

    signup: function() {
        var signupSelector = document.getElementById('signup');

        signupSelector && signupSelector.addEventListener('click', function(event) {
            event.preventDefault();

            var name = document.getElementById('name').value;
            var firstName = document.getElementById('firstName').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // TODO validate instead of return
            if (!email && !password) {
                return;
            }

            jQuery.ajax({
                url: window.API + 'users',
                type: 'post',
                data: {
                    name: name,
                    firstName: firstName,
                    email: email,
                    password: password
                },
                success: function(data) {
                    window.location.href = 'login.html';
                },
                error: function(error) {
                    var error = error.responseJSON;
                    error = error.error || {};
                    alert(error.message);
                }
            });
        });
    }
};

if (!user && !location.href.match('login.html') && !location.href.match('signup.html')) {
    window.location.href = 'login.html';
}

var credentials = JSON.parse(user);

if (credentials && credentials.token) {
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', credentials.token);
        }
    });
}