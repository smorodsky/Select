// Выделение всех незамкнутых контуров.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    
    return !pi.closed;            
});
