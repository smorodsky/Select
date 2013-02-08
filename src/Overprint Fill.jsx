// Выделение всех объектов c оверпринтом.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    return pi.fillOverprint;        
});
