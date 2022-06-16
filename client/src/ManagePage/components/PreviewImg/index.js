import { useEffect, useState } from "react"



const PreviewImg = (props) => {
    const [defaultImg, setDefaultImg] = useState("https://cdn0.iconfinder.com/data/icons/communication-166/512/12-512.png")
    
    useEffect(() => {
        const reader = new FileReader()
        if(props.avatar !== ""){
            setDefaultImg(props.avatar)
        }else{
            if (props.file) {
                reader.readAsDataURL(props.file)
                reader.onload = () => {
                    setDefaultImg(reader.result)
                }
            }
        }

        
    },[props.file, props.avatar])
    return (
        <>
            <img src={defaultImg} alt="error" />
        </>
    )
}
export default PreviewImg