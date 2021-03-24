const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (total, element) => total += element;

const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total;
})