app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/error");
  $stateProvider
      .state('home', {
          url: '',
          views: {
            "" :{
              templateUrl: 'source/app/containers/homeView.html'
            }
          }
      })
      .state('login', {
          url:'/', 
          controller: 'loginCtrl',
          templateUrl: 'source/app/containers/login/loginView.html'
      })

      .state('signin', {
          url: "/signin",
          // controller: 'signinCtrl',
          templateUrl: 'source/app/containers/signin/signinView.html'
      })
      .state('home.dashboard', {
          url: '/dashboard',
          // controller:'dashboardCtrl',
          views: {
            "":{
              templateUrl: 'source/app/containers/dashboard/dashboardView.html'
            }
          }
      })
      .state('error', {
          url: "/error",
          templateUrl: 'source/app/assests/html/err.html'
      })

      // use the HTML5 History API
      $locationProvider.html5Mode(true).hashPrefix('');

})