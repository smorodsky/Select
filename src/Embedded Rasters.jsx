// Выделение всех внедренных растров.

#target "illustrator"
#include "ProgressBar.incjsx"
#include "Select.incjsx"
        
Select('rasterItems', function(ri){
    return ri.embedded;        
});
