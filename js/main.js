require.config({
    baseurl: 'js',
    paths: {
        'jquery': 'jquery.min',
        'a': 'moudle_a'
    },
    shim: {
        'b': {
            info: {
                fun: 'fun',
                fun1: 'fun1'
            }
        }
    }
})
require(['a', 'b'], function(a, b) {
    a.a();
    fun();
    fun1();
})