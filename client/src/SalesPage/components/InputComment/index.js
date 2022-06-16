import { Button } from "@material-ui/core"
import { useRef, useState } from "react"
import { InputCommentStyle } from "./InputComment.styled"


const InputComment = ({ onBtnSend, id, err }) => {
    const [content, setContent] = useState("")
    const inputCom = useRef()
    return (
        <InputCommentStyle>
            <textarea className="QABoxInputComment-input" placeholder="Viết bình luận của bạn tại đây" onChange={(e) => setContent(e.target.value)} ref={inputCom}/>
            <Button className="QABoxInputComment-button" onClick={() => {
                onBtnSend({
                    content,
                    id: id ? id : ""
                })
                inputCom.current.value=""
            }

            }>Gửi bình luận</Button>
            {err.err && err.id === id ?
                <p>Vui lòng nhập đủ họ tên, email và phần bình luận tối thiểu có 5 ký tự</p>
                :
                ""}
            {err.err && !id && err.id === "" ?
                <p>Vui lòng nhập đủ họ tên, email và phần bình luận tối thiểu có 5 ký tự</p>
                : ""}
        </InputCommentStyle>
    )
}

export default InputComment