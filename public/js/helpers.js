//This is from the 6.170 p3demo shown in recitation 
//https://github.com/kongming92/6170-p3demo.git
var helpers = (function() {
  var self = {};
  self.getFormData = function(form) {
    var inputs = {};
    $(form).serializeArray().forEach(function(item) {
      inputs[item.name] = item.value;
    });
    return inputs;
  };