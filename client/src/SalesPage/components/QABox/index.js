import { Grid } from "@material-ui/core"
import { useEffect, useRef, useState } from "react"
import { CheckCreateTimeOfComment, CreateAvatarComment } from "../../../untils/HandleComment"
import InputComment from "../InputComment"
import { QABoxListComment, QABoxStyle } from "./QABox.styled"



const QABox = (props) => {
    const { socket, productId, productName } = props
    console.log(socket)
    const [errMessage, setErrMessage] = useState({
        err: false,
        id: ""
    })

    const [ comments, setComments] = useState([])

    const userName = useRef()
    const userEmail = useRef()


    const [boxCommentSelected, setBoxCommentSelected] = useState([])


    useEffect(() => {

        if(socket){
            socket.on("commentMobile", data => {
                console.log(data)
                setComments(data)
            })
        }
    },[socket])

    const handleClickRep = (id) => {
        setBoxCommentSelected(state => {
            const newState = [
                ...state
            ]

            let flag = -1
            for (let i = 0; i < newState.length; i++) {
                if (newState[i] === id) {
                    flag = i
                }
            }
            if (flag === -1) {
                newState.push(id)
            } else {
                newState.splice(flag, 1)
            }
            return newState
        })
    }

    const handleClickSendComment = (data) => {
        if (userName.current.value === "" || userEmail.current.value === "" || data.content.length <= 3) {

            setErrMessage({
                err: true,
                id: data.id ? data.id : ""
            })

            setTimeout(() => {
                setErrMessage({
                    err: false,
                    id: ""
                })
            }, 7000)

        } else {
            const dataSend = {
                ...data,
                name: userName.current.value,
                email: userEmail.current.value,
                productId
            }
            socket.emit("send_comment", dataSend)
        }
    }
    return (
        <QABoxStyle>
            <div className="QABox-title">
                <span>Hỏi đáp về {productName}</span>
                <div className="QABox-title__inputInforUser">
                    <input placeholder="Nhập tên người dùng" ref={userName}></input>
                    <input placeholder="Nhập email người dùng" ref={userEmail}></input>
                </div>

            </div>
            <InputComment
                onBtnSend={handleClickSendComment}
                err={errMessage}
            />
            <QABoxListComment>
                {comments.map((comment) => {
                    return <div className="comment" key={comment.id}>
                        <Grid container className="comment-parents">
                            <Grid item lg={1} className="comment-parents__left">
                                <div className="comment__avatar">
                                    {CreateAvatarComment(comment.name)}
                                </div>

                            </Grid>
                            <Grid item lg={11} className="comment-parents__right">
                                <div className="comment__userName">{comment.name}<div className="comment__createTime">{CheckCreateTimeOfComment(comment.createTime)}</div></div>
                                <div className="comment__infor">{comment.content}</div>
                                <button className="comment__rep" onClick={() => handleClickRep(comment.id)}>Trả lời</button>
                            </Grid>

                        </Grid>
                        {comment.childrenComment?.map((child) => {
                            return <div className="comment-children">
                                <div className="comment__userName">{child.name}<div className="comment__createTime">{CheckCreateTimeOfComment(child.createTime)}</div></div>
                                <div className="comment__infor">{child.content}</div>
                            </div>
                        })}
                        {boxCommentSelected.includes(comment.id) ?
                            <div className="comment-children comment">
                                <InputComment
                                    onBtnSend={handleClickSendComment}
                                    id={comment.id}
                                    err={errMessage}
                                />
                            </div> : ""}

                    </div>
                })}


            </QABoxListComment>
        </QABoxStyle>
    )
}

export default QABox