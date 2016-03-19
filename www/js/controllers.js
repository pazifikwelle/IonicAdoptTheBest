angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,PeopleService) {

        console.log(': this is a promisable service call');
        console.log(PeopleService.all());

        $scope.items = PeopleService.all();

        $scope.aoMyIdeas = [
            {
                id:1,
                claim: '111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:2,
                claim: '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:3,
                claim: '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:4,
                claim: '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:0,
                claim: '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:0,
                claim: '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:0,
                claim: '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:0,
                claim: '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            }
        ];
        $scope.aoMyCreatedIdeas = [
            {
                id:1,
                claim: '333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:2,
                claim: '444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            },
            {
                id:3,
                claim: '555 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ]
            }
        ];


    })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

    .controller('IdeaCtrl', function($scope, $stateParams) {
        console.log('idea');
        console.log($stateParams);
    })
    .controller('UserDetailCtrl', function($scope, $stateParams) {
        console.log('char');
        console.log($stateParams);
        console.log('::this is user detail view');

    })

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        console.log('char');
        console.log($stateParams);
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
    .controller('PeopleCtrl', function($scope,$stateParams) {

        /* below the swipe-mode */

        var oDate = new Date();
        var sDate = oDate.toLocaleDateString();

        $scope.aOUsers = [
            {
                imageSrc:'#',
                txt:'1 a funny speaking text about the person',
                since:sDate,
                aDomains :[{txt:'sDom1'}],
                aSkills: [{txt:'sKill1'}]
            },
            {
                imageSrc:'#',
                txt:'2 a funny speaking text about the person',
                since:sDate,
                aDomains :[{txt:'sDom1'}],
                aSkills: [{txt:'sKill132'}]
            },
            {
                imageSrc:'#',
                txt:'3 a funny speaking text about the person',
                since:sDate,
                aDomains :[{txt:'sDom1'}],
                aSkills: [{txt:'sKill123'}]
            },
            {
                imageSrc:'#',
                txt:'4 a funny speaking text about the person',
                since:sDate,
                aDomains :[{txt:'sDom1'}],
                aSkills: [{txt:'sKill143'}]
            },
            {
                imageSrc:'#',
                txt:'5 a funny speaking text about the person',
                since:sDate,
                aDomains :[{txt:'sDom1'}],
                aSkills: [{txt:'sKill34'}]
            }
        ];

        $scope.iUserPointer = 0;
        $scope.oUser = $scope.aOUsers[$scope.iUserPointer];
        $scope.iUserMaxSize = $scope.aOUsers.length-1;

        $scope.setNextUserToScope = function() {

            if($scope.iUserPointer < $scope.iUserMaxSize){
                $scope.iUserPointer++;
                $scope.oUser = $scope.aOUsers[$scope.iUserPointer];
            } else {
                /**
                 * @todo handle no more Users.
                 */
                alert(':: sorry, no more Users left:::');
            }

        };

        $scope.resetUserList = function() {
            $scope.iUserPointer = 0;
            $scope.oUser = $scope.aOUsers[$scope.iUserPointer];
        }


        $scope.onSwipeLeft = function() {


            //dislike the idea and take the next one.
            console.log(':going left');
            $scope.setNextUserToScope();


        };

        $scope.onSwipeRight = function() {
            console.log(':going right');
            //like the idea and take the next one.
            $scope.setNextUserToScope();

        };

        $scope.$on("$ionicView.beforeEnter", function(event) {
            $scope.resetUserList();
        });

    })


    .controller('ProfileCtrl', function($scope,$stateParams) {




        console.log(':profile controller');
    })

        .controller('IdeasCtrl', function($scope) {


        $scope.aOIdeas = [

            {
                id:0,
                claim: '0000 the claim of idea 1',
                aDomains: [{txt:'domain 1888'},{txt:'domain 2556'}],
                aSkills: [{txt:'skill 11'},{txt:'skill 22'}],
                bCanJoin:true
            },

            {
                id:1,
                claim: '1111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1v2'},{txt:'domain 22'}],
                aSkills: [{txt:'skill 12'},{txt:'skill 21'}],
                bCanJoin:true
            },
            {
                id:2,
                claim: '222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 3'},{txt:'domain 24'}],
                aSkills: [{txt:'skill 112'},{txt:'skill 24343'}],
                bCanJoin:true
            },
            {
                id:3,
                claim: '333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',

                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                bCanJoin:true
            },
            {
                id:0,
                claim: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
                aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
                aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
                aMembers: [
                    {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                    {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                    {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
                ],
                bCanJoin:true
            }

        ];

        $scope.oIdea = {
            id:0,
            claim: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat nibh, efficitur fringilla massa. Proin porttitor eros vel bibendum hendrerit. Pellentesque turpis duis.',
            aDomains: [{txt:'domain 1'},{txt:'domain 2'}],
            aSkills: [{txt:'skill 1'},{txt:'skill 2'}],
            aMembers: [
                {id:1,src:'#',firstname:'Stefan1',name:'Hanke'},
                {id:2,src:'#',firstname:'Stefan2',name:'Hanke'},
                {id:3,src:'#',firstname:'Stefan3',name:'Hanke'}
            ]
        };


        $scope.iIdeaPointer = 0; //take the first of the array//

        $scope.$on("$ionicView.beforeEnter", function(event) {
            $scope.resetIdeaList();
        });


        $scope.iIdeaMaxSize = $scope.aOIdeas.length-1;

      $scope.onSwipeLeft = function() {


          //dislike the idea and take the next one.
            console.log(':going left');
          $scope.setNextIdeaToScope();


      };

      $scope.onSwipeRight = function() {
          console.log(':going right');
          //like the idea and take the next one.
          $scope.setNextIdeaToScope();

      };

        $scope.setNextIdeaToScope = function() {

            if($scope.iIdeaPointer < $scope.iIdeaMaxSize){
                $scope.iIdeaPointer++;
                $scope.oIdea = $scope.aOIdeas[$scope.iIdeaPointer];
            } else {
                /**
                 * @todo handle no more ideas.
                 */
                alert(':: sorry, no more ideas left:::');
            }

        };

        $scope.resetIdeaList = function() {
            $scope.iIdeaPointer = 0;
            $scope.oIdea = $scope.aOIdeas[$scope.iIdeaPointer];
        }


        /* single idea actions */
        $scope.heartStyle = '';
        $scope.onIdeaHeart = function() {

            if($scope.heartStyle=="") {
                $scope.heartStyle = 'fxRed';
            } else {
                $scope.heartStyle = '';
            }
        };

        $scope.onIdeaJoin = function() {


            console.log( $scope.oIdea.bCanJoin );
            $scope.oIdea.bCanJoin = !$scope.oIdea.bCanJoin;
            console.log( $scope.oIdea.bCanJoin );
        };


    })
;
