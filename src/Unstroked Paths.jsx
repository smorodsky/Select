// Выделение всех контуров без обводки.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(pi){
    return !pi.stroked;
});
