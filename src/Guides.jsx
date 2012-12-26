// Выделение всех направляющих.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    
    return pi.guides;            
});
