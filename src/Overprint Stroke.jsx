// Выделение всех объектов c оверпринтом в обводке.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    return pi.strokeOverprint;        
});
