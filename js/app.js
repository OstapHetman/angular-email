angular.module("emailApp",[])
function EmailController($scope) {
  $scope.emails = [
    { from: 'John', subject: 'I love angular', date: 'Jan 1' },
    { from: 'Jack', subject: 'Angular and I are just friends', date: 'Feb 15' },
    { from: 'Ember', subject: 'I hate you Angular!', date: 'Dec 8' }
  ];
}