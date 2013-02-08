// Замена всех объектов Gray на CMYK. Выделение измененных.

#target "illustrator"
#include "Select/ProgressBar.incjsx"
#include "Select/Select.incjsx"

function Gray2CMYK(pi, prop) {
    
    if (pi[prop].typename == 'GrayColor') {
        
        var cmyk = new CMYKColor();
        cmyk.black = pi[prop].gray;
    
        pi[prop] = cmyk;
        
        return true;
    }
    return false;
}

Select('pathItems', function(pi){
    var f = pi.filled  && Gray2CMYK(pi, 'fillColor');
    var s = pi.stroked && Gray2CMYK(pi, 'strokeColor');
    
    return f || s;     
});
