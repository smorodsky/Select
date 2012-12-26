// Выделение всех контуров с вложением.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    return pi.clipping;
});
