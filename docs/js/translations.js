moduleApp.config(['$translateProvider', function ($translateProvider) {
  
  $translateProvider.translations('en', {
    'MENU_BTN1': 'Services',
    'MENU_BTN2': 'About',
    'MENU_BTN3': 'Contact',
    'MISSION_BTN': 'Meet our services!',
    'SERVICES_BTN': 'Questions',

    'MISSION_TITLE': 'MISSION',
    'CONTACT_TITLE': 'CONTACT',
    'PLANS_TITLE': 'PLANS',
    'ABOUT_TITLE': 'ABOUT',

    'MISSION_TEXT1': 'We have taken on the mission of developing,',
    'MISSION_TEXT2': 'Quality and personality websites',
    'MISSION_TEXT3': 'to better serve our customers!',

    'COPY': 'Copyright'
  });
 
  $translateProvider.translations('br', {
    'MENU_BTN1': 'Serviços',
    'MENU_BTN2': 'Sobre',
    'MENU_BTN3': 'Contato',
    'MISSION_BTN': 'Conheça nossos serviços!',
    'SERVICES_BTN': 'Perguntas',

    'MISSION_TITLE': 'MISSÃO',
    'CONTACT_TITLE': 'CONTATO',
    'PLANS_TITLE': 'PLANOS',
    'ABOUT_TITLE': 'SOBRE',

    'MISSION_TEXT1': 'Nós assumimos a missão de desenvolver,',
    'MISSION_TEXT2': 'Sites de qualidade e personalidade',
    'MISSION_TEXT3': 'para melhor servir nossos clientes!',

    'COPY': 'Direitos reservados'    
  });
 
  $translateProvider.preferredLanguage('br');
}]);