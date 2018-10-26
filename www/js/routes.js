angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.gimnasiaArtStica', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gimnasiaArtStica.html',
        controller: 'gimnasiaArtSticaCtrl'
      }
    }
  })

  .state('menu.reglamento', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reglamento.html',
        controller: 'reglamentoCtrl'
      }
    }
  })

  .state('menu.planillaDeInscripciN', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planillaDeInscripciN.html',
        controller: 'planillaDeInscripciNCtrl'
      }
    }
  })

  .state('menu', {
    url: '/',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.loginJuezas', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/loginJuezas.html',
        controller: 'loginJuezasCtrl'
      }
    }
  })

  .state('menu.examenes', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/examenes.html',
        controller: 'examenesCtrl'
      }
    }
  })

  .state('menu.eventos', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventos.html',
        controller: 'eventosCtrl'
      }
    }
  })

  .state('menu.calendarioCuota', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioCuota.html',
        controller: 'calendarioCuotaCtrl'
      }
    }
  })

  .state('menu.fechaExamen1', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fechaExamen1.html',
        controller: 'fechaExamen1Ctrl'
      }
    }
  })

  .state('menu.fechaExamen2', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fechaExamen2.html',
        controller: 'fechaExamen2Ctrl'
      }
    }
  })

  .state('menu.fechaExamen3', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fechaExamen3.html',
        controller: 'fechaExamen3Ctrl'
      }
    }
  })

  .state('menu.resultadoTorneos', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/resultadoTorneos.html',
        controller: 'resultadoTorneosCtrl'
      }
    }
  })

  .state('menu.torneoFecha1', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torneoFecha1.html',
        controller: 'torneoFecha1Ctrl'
      }
    }
  })

  .state('menu.torneoFecha2', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torneoFecha2.html',
        controller: 'torneoFecha2Ctrl'
      }
    }
  })

  .state('menu.torneoFecha3', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torneoFecha3.html',
        controller: 'torneoFecha3Ctrl'
      }
    }
  })

  .state('menu.bievenido', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bievenido.html',
        controller: 'bievenidoCtrl'
      }
    }
  })

  .state('menu.informes', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informes.html',
        controller: 'informesCtrl'
      }
    }
  })

  .state('menu.examen', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/examen.html',
        controller: 'examenCtrl'
      }
    }
  })

  .state('menu.contacto', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contacto.html',
        controller: 'contactoCtrl'
      }
    }
  })

  .state('menu.torneoOnLine', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torneoOnLine.html',
        controller: 'torneoOnLineCtrl'
      }
    }
  })

  .state('menu.notasJuezas', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notasJuezas.html',
        controller: 'notasJuezasCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('//page1')


});