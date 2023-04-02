import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { remove, update } from "./store/store";




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
margin:0 0 10px 0;
`

const P = styled.p`
text-align: center;
font-size: 15px;
font-weight: 300;
margin:0 0 50px 0;
`

const UL = styled.ul`
&:after{
    content:"";
    display: block;
    clear:both;
}
`


const LI = styled.li`
width: 100%;
height: 50px;
line-height:50px;
font-size:18px;
&.on {
    color: tomato;
    text-decoration: line-through;
}
`
const Button = styled.button`
float:right;
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
};
&:first-child{
    margin: 0 0 0 30px;
}
`;






const List = () => {
    const { todoList } = useSelector(store => store);
    const dispatch = useDispatch();
    return (
        <Section>
            <Inner>
                <H2>List</H2>
                <P>write에서 내용을 작성하세요.</P>
                {console.log(todoList)}
                <UL>
                    {
                        todoList.map(it => {
                            return (
                                <LI key={it.id} className={it.done ? 'on' : ''}>{it.content} &nbsp;&nbsp;&nbsp;
                                    <Button onClick={() => dispatch(update(it))}>{it.done ? 'GOOD' : 'DOIT'}</Button>
                                    <Button onClick={() => dispatch(remove(it))}>DELETE</Button>
                                </LI>
                            )
                        })
                    }
                </UL>
            </Inner>
        </Section>
    )
}

export default List;