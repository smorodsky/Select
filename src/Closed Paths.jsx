// Выделение всех замкнутых контуров.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('pathItems', function(s){
    return s.closed;
});
