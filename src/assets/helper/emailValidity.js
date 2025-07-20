export const emailValidity = (input) => {
    if(!input) {
        return {
            status: false,
            text: "Email is empty"
        };
    }
    if( !(input.includes("@") && (input.includes(".com") || input.includes(".org") || input.includes(".net"))) ) {
        return {
            status: false,
            text: "Enter a Correct Email"
        };
    }
    return {
        status: true,
    };;
}