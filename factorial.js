function factorial(number) {
    var product = 1;
    while(number){
        product *= number;
        number--;
    }
    return product;
}