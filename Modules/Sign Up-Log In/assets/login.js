
// AngularJS

const logIn = angular.module('loginApp', [])
logIn.controller('loginCtrl', function ($scope) {
    $scope.creds = [
        { username: 'Hemant21', password: 'hemant414' },
        { username: 'whitexdevil', password: 'whitedevil' },
    ];

    $scope.login = function () {
        for (var i = 0; i < $scope.creds.length; i++) {
            if ($scope.creds[i].username === $scope.username && $scope.creds[i].password === $scope.password) {
                localStorage.setItem('currentUser', $scope.username);
                localStorage.setItem('isLoggedIn', true);
                $scope.error = 'Success!';
                window.alert("Logged in as: "+$scope.username+".");
                window.setTimeout(() => {
                    window.close();
                }, 2000);
            } else {
                localStorage.setItem('isLoggedIn', false);
                $scope.error = 'Username or Password does not match with the records';
            }
            return;
        };
    };
});


// JavaScript



// Show password button
    
var passwordInput = document.getElementById("password");
var showPassword = document.getElementById("showPasswordButton");

    showPassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPassword.textContent = "Hide Password";
        } else {
            passwordInput.type = "password";
            showPassword.textContent = "Show Password";
        }
    });



// Custom Validity for Log-In element

var loginElement = document.getElementById("login-id");

    // Custom message for the invalid state
    loginElement.setCustomValidity("Please enter your Username here.");

    loginElement.addEventListener("input", function () {
        if (this.value) {
            this.setCustomValidity("");
        }
    });



// Custom Validity for Log-In element

var passwordElement = document.getElementById("password");

    // Set a custom message for the invalid state
    passwordElement.setCustomValidity("Please enter your Password first.");

    passwordElement.addEventListener("input", function () {
        if (this.value) {
            this.setCustomValidity("");
        }
    });
