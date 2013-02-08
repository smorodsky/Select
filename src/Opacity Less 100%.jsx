// Выделение всех прозрачных объектов.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pageItems', function(pi){
    return pi.opacity < 100;        
});
