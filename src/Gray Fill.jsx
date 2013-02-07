// Выделение всех объектов с заливкой Gray.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    return pi.filled && pi.fillColor.typename == 'GrayColor';        
});
