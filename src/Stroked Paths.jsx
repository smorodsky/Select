// Выделение всех контуров с обводкой.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    return pi.stroked;
});
