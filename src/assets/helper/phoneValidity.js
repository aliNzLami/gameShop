export const phoneValidity = (input) => {
    if(Boolean(Number(input)) && Number(input) > 0 ){
        if(input.length < 14) {
            return {
                status: false,
                text: "Phone Number Must Be at Least 14 Characters"
            }; 
        }
    }
    else {
        return {
            status: false,
            text: "Please Enter a Correct Phone Number"
        };
    }
    return {
        status: true
    }
}