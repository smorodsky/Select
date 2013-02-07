// Выделение всех объектов с обводкой Gray.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    return pi.stroked && pi.strokeColor.typename == 'GrayColor';        
});
