function handleClick (){
    alert("Current time:" + new Date().toLocaleTimeString())
  }

function AlertClock () {
    return (
        <>
            <button onClick={handleClick}>Cick me!</button>
        </>
    )
}

export default AlertClock