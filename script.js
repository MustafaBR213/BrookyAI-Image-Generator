// chatgpt APIKEY
// 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

const API_KEY="YOURAPIKEY"
const submitIcon =  document.querySelector("#submit-icon")

const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".image-section")

const getImages = async () =>{
    const options={
        method:"POST",
        headers:{
            "Authorization":`Bearer ${API_KEY}`,
            "Content-Type":"application/json"
        },
        body: JSON.stringify( {
            "prompt": "A cute baby sea otter",
            "n": 4,
            "size": "1024x1024",
        })
    }
    try{
        const response = await fetch("https://api.openai.com/v1/images/generations",options)
        const data = await response.json()
        console.log(data)

        data?.data.forEach(imageObject => {
            const imageContainer = document.createElement("div")
            imageContainer.classList.add("image-container")
            const imageElement = document.createElement("img")
            imageElement.setAttribute("src", imageObject.url)
            imageContainer.append(imageElement)
            imageSection.append(imageContainer)
        })

    }catch(e){
        console.error(e)
    }
}
submitIcon.addEventListener("click",getImages)