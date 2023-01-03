// Code Keypad Component Here

function Keypad (){
    function onChange() {
        console.log('Entering password...')
    }

    return (
        <div>
            <label>Password</label>
            <input onChange={onChange} type="password"></input>
        </div>
    )
}

export default Keypad;