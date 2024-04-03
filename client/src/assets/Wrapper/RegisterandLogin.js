import styled from "styled-components";


const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ba);
 .form-input{
    outline: none;

 }
 .logo{
    display: block;
    margin:0  auto;
    height: 60px;
    width: 300px;
    margin-bottom: 40px;
  }
 .form{
    border-top: 4px solid var(--primary-500);
    max-width: 400px;
    margin-top: 100px;
 }
 p{
    margin-top: 1rem;
    font-size: .8rem;
    & a{
        font-weight: 600;
    }
 }

`
export default Wrapper;