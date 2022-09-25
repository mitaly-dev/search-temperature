const displayTem=async(cityName)=>{
    try{
        let key="bdf020cfbedc583d2dc63f32e2e8cc80"
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
    let data=await res.json()
    let {main,name,weather}=data
    if(data.message=="city not found"){
        alert('Please enter a valid city')
        return
    }
    setInnerText("temp",main.temp)
    setInnerText('city',name)
    setInnerText('lead',weather[0].main)
    }
    catch(err){
        console.log(err.message)
    }
}
displayTem('faridpur')

document.getElementById('search-btn').addEventListener('click',()=>{
    let inputField=document.getElementById('search-field')
    let value=inputField.value
    inputField.value=''
    displayTem(value)
})


const setInnerText=(id,value)=>{
    let elements=document.getElementById(id)
   elements.innerText=value
}