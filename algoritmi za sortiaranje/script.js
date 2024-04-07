console.log("hello");

function bubbleSort(niz) {
    for (var j = 0; j < niz.length; j++) {
        for (var i = 0; i < niz.length - 1; i++) {
            if (niz[i] > niz[i + 1]) {
                var p = niz[i];
                niz[i] = niz[i + 1];
                niz[i + 1] = p;
            }
        }
    }
}

function selctionSort(niz){
    for(var i=0;i<niz.length;i++){
        for(var j=i;j<niz.length;j++){
            if(niz[i]>niz[j]){
                var p=niz[i];
                niz[i]=niz[j];
                niz[j]=p;
            }
        }
    }
}

var niz = [2, 3, 7, 1, 4, 6, 2, 8];

console.log(niz);
selctionSort(niz);
console.log(niz);