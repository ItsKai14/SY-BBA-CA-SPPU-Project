
// AngularJS

const logIn = angular.module('loginApp', [])
logIn.controller('loginCtrl', function ($scope) {

    $scope.username = '';
    $scope.password = '';

    $scope.logInData = [
        { username: 'hemant21', password: 'hemant14' },
        { username: 'white_x_devil', password: 'whitedevil' },
        { username: 'parth_r', password: 'parth12' },
        { username: 'wild_wizard', password: 'wildwizards' },
    ];

    $scope.login = function () {
        for (var i = 0; i < $scope.logInData.length; i++) {
            if ($scope.username === $scope.logInData[i].username && $scope.password === $scope.logInData[i].password) {
                localStorage.setItem('currentUser', $scope.username);
                localStorage.setItem('isLoggedIn', true);
                $scope.error = 'Success!';
                window.alert("Logged in as: "+$scope.logInData[i].username+".");
                window.setTimeout(() => {
                    window.close();
                }, 1414);
                return;
            } else {
                localStorage.setItem('isLoggedIn', false);
                $scope.error = 'Username or Password does not match with the records';
            }  
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
