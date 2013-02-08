// Выделение всех объектов с нелинейным режимом наложения.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pageItems', function(pi){
    return pi.blendingMode != BlendModes.NORMAL;        
});
