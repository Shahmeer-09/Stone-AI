import styled from "styled-components";

const Wrapper = styled.div`
.cover{
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    width: var(--fluid-width);
    max-width: 300px;
    margin-top: 3rem;
}
.icon{
    font-size: 1.7rem;
    margin-bottom: 10px;
}
   a{
    text-decoration: none;
     display: flex;
     flex-direction: column;
     text-align: center;
     justify-content: center;
     align-items:center;
     background-color: var(--primary-300);
     border-radius: 10%;
     padding: 1rem;
     gap: 10pxrem;
     color: white;
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    flex: 1;
     flex-basis: 140px;
   }
   .active{
    background-color: var(--primary-500);
   }
   @media (min-width: 640px) {
    .cover{
        max-width: 600px;
    }
    a{
        flex-basis: 0;
    }
   }
   
    `

export default Wrapper;