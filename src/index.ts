class testj {
    constructor() {
        console.log("Test")
        console.log("Test:constructor")
        if (true) {
            let i;
            console.log("if:constructor:Test")
            console.log("Test:constructor")
            console.log("Test:constructor:if")
        }
    }
}

if (require.main === module) {
    console.log('In the Main')
}
