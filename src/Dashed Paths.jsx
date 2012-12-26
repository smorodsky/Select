// Выделение всех контуров с пунктирной обводкой.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    
    return pi.strokeDashes.length > 0;            
});
