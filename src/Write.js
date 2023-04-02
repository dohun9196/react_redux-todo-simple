import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create } from "./store/store";
import styled from "styled-components";


const Section = styled.section`
padding:100px 0;
`

const Inner = styled.div`
width:1200px;
margin:0 auto;
`

const H2 = styled.h2`
text-align: center;
font-size: 30px;
font-weight: 500;
margin:0 0 10px;
`

const P = styled.p`
text-align: center;
font-size: 15px;
font-weight: 300;
margin:0 0 50px;
`

const Text_box = styled.div`
text-align:center;
margin: 0 auto;
`

const Input = styled.input`
display: inline-block;
margin: 0 30px 0 0;
width: 600px;
height: 50px;
border:none;
outline:none;
border-bottom:2px solid #333;
`

const Button = styled.button`
display: inline-block;

height: 50px;

padding:0 20px;
border: none;
outline:none;

background: #919191;
color:#fff;
cursor: pointer;
transition:0.3s;

&:hover{
    background: #1d1d20;
}
`





const Write = ({ inputRef }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        content: '',
    });

    const onChange = useCallback(e => {
        const { value, name } = e.target;
        setInput({
            ...input,
            id: inputRef.current,
            [name]: value,
            done: false
        })
    }, [input, inputRef]);

    const onCreate = useCallback(() => {
        if (input.content.length < 5) {
            alert('더 입력해주세요...')
            return
        }
        dispatch(create(input));
        inputRef.current++;
        navigate('/board')
    }, [dispatch, navigate, input, inputRef]);




    return (
        <Section>
            <Inner>
                <H2>WRITE_PAGE</H2>
                <P>내용을 작성해주세요.</P>
                <Text_box>
                    <Input type="text" name="content" value={input.content} onChange={onChange} />
                    <Button onClick={onCreate}>작성하하기</Button>
                </Text_box>
            </Inner>
        </Section>
    )
}

export default Write