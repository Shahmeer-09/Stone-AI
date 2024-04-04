import styled from "styled-components";

const Wrapper = styled.main`
position: relative;
height: 100vh;
position: relative;
 .logout{
    position: absolute;
    bottom:100px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 10px;
    padding:.7rem .8rem;
    background-color: var(--primary-700);
    color: white;
    border-radius: 0 50px 50px 0;
    transition: all .3s ease-in-out;
    left: ${({menuactive})=> (menuactive ? "0px": "-65px")};
    & .menu{
        font-size: 1.3rem;
        cursor: pointer;
    }
    &  h5{
        font-size: .8rem;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }

 }
   .logo-cont{
    width: 100%;
    height: 7rem;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

   }
  .logo{
    height:90%;
    width: 300px;
   
  }
  @media (min-width: 640px) {
   .logo{
    height: 110%;
   }
  }

`

export default Wrapper