const utils = {
    reverse: function(source) {
        if (typeof source === 'string'){
            let newString = "";
            for (i = 0; i < source.length; i++){
               newString += source[(source.length - 1) - i];
            }
            return newString;
        } else{
            let newArray = [];
            for (i = 0; i < source.length; i++){
               newArray[i] = source[(source.length - 1) - i]
            }
            return newArray;
        }
     },
     verifyNumber: function(source){
        let newArray = [];
        let count = 0;
        for (i = 0; i < source.length; i++){
            if (typeof source[i] === 'number'){
                newArray[count] = source [i]
                count++;
            }
        }
        return newArray;
    },
    getMin: function(source){
        let minNum = source[0];
        for (i = 0; i < source.length; i++){
            if (source[i] < minNum){
                minNum = source[i];
            }
        }
        return minNum;
    },
    getAvarage: function(source){
        let avarage = 0;
        for (i = 0; i < source.length; i++){
            if (typeof source[i] === 'number'){
                avarage += source[i];
            }
        }
        return avarage /= source.length;
    },
    getMaxString: function (source){
        let maxString = source[0];
        for (i = 0; i < source.length; i++){
            if (maxString.length < source[i].length){
                maxString = source[i];
            }
        }
        return maxString;
    }
};