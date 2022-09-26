class BMI {
    // this is where data is initialised in the class
    constructor(height, weight){
        this.height= height;
        this.weight = weight;
    }

    calculateBMI(){
        let bmi = this.weight / (this.height**2);
        return bmi;
    }

}

let myBMI = new BMI(2,100);
let result = myBMI.calculateBMI();
console.log(result);
