// Выделение всех прилинкованных EPS.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('placedItems', function(pi){
    
    var fname = pi.file.name;
            
    n = fname.lastIndexOf('.');
            
    return n >= 0 & '.EPS' == fname.substr(n).toUpperCase();
});
