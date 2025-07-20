export const numberValidity = (input, maxNumber) => {
    if(Boolean(Number(input)) && Number(input) > 0 ){
        if(Number(input) <= maxNumber) {
            return {
                status: true
            };
        }
        else {
            return {
                status: false,
                text: `There are only ${maxNumber} items available.`
            };
        }
    }
    else {
        return {
            status: false,
            text: "Please Enter a Correct Number"
        };
    }
}