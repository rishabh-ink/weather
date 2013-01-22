require.config({
  shim: {
  },

  paths: {
    // libs
    "hm":            "vendor/hm",
    "esprima":       "vendor/esprima",
    "jquery":        "../components/jquery/jquery",
    "knockoutjs":    "../components/knockout-2.2.1/index",
    "jquery-mobile": "../components/jquery.mobile-1.2.0/jquery.mobile-1.2.0",
    "debug":         "../components/javascript-debug/ba-debug"
    // /libs
  }
});
 
require(['app'], function(app) {
  // use app here
  console.log(app);
});