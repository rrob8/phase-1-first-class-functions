function receivesAFunction (func) {
    func();
}

function returnsANamedFunction () {
    return function NamedFunction (){

    };
}

function returnsAnAnonymousFunction () {
    return x => x +1
}