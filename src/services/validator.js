export class ValidatorService {
    
    static min(inputValue, min){
        if (inputValue.length < min) {
        return `Enter at least ${min} characters`;
    }
    }

    static max(inputValue, max){
        if (inputValue.length > max) {
        return ` You have exceeded the maximum note length of ${max} characters`;
    }
}
}