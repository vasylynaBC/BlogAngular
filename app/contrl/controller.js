app.controller("myCtrl", function () {
    var vm = this;
    vm.checker = true;
    vm.showblock = false;
    vm.date = Date();
    vm.guest = 'guest';
    vm.sort = "name";
    vm.log;
    vm.pass;
    vm.error;
    vm.users = [
        {
            login: 'Vasa'
            , pass: 'qwe'
        }
    ];
    vm.theem = [
        {
            mess: 'hellow, how are you?'
            , topic: 'Important'
        }
    ];
    vm.addUser = function () {
        var x = {
            login: vm.login
            , pass: vm.pass
        };
        vm.users.push(x);
        
    }
    vm.addTopic = function () {
        var y = {
            mess: vm.mess
            , topic: vm.topic
        }
        vm.theem.push(y);
        vm.mess = '';
        vm.topic = '';
    }
    vm.hideBox = function () {
        vm.checker = !vm.checker;
        console.log(vm.users);
    };
    vm.remove = function (text) {
        vm.theem.splice(text, 1);
    };
    vm.changeUsers = function () {
        vm.showblock = false;
    };
    vm.changeFriends = function () {
        for (var i in vm.theem) {
            vm.changeFriend = vm.theem[i];
            vm.showblock = true;
        }
    };
       
    vm.Click = function(){
        if(vm.users.pass != vm.pass){
            vm.error='**undefined user';
            }else{
                vm.error='';
            }
    };
    vm.Forgot = function (){
        vm.log = ' ';
        vm.pass = '';
        vm.error= ' ';
    }
})