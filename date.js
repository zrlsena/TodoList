//jshint esversion:6

module.exports.getDate = function() {

    let today = new Date();

    let options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
    };
    
    return today.toLocaleDateString("en-US", options);
  
};

module.exports.getDay = function () { //become shorter
    
    let today = new Date();

    let options = { 
        weekday: 'long',
        
    };
    
    return today.toLocaleDateString("en-US", options);

    
}