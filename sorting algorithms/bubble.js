function bubbleSort(arr) {
    for(i = 0; i < arr.length - 1; i++){
        let swaped = 0;
        for(j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaped = 1;
            }
        }
        if(!swaped) break;
    }

    return arr;
}


console.log(bubbleSort([1, 2, 5, 4, 3, 6]));