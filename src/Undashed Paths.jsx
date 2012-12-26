// Выделение всех контуров с НЕ пунктирной обводкой.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    return pi.stroked && pi.strokeDashes.length == 0;
});
