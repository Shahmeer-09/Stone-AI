import styled from "styled-components";


const Wrapper = styled.div`
padding-bottom: 2rem;
  h4{
      font-weight: 700;
      color: var(--primary-500);
    }
    .form{
       text-align: center;
       box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
   }
 .form-textarea{
    resize: none;
    font-family: Arial, Helvetica, sans-serif;
 }
 .card{
    min-height: 300px;
    border: 1px solid var(--primary-500);
    border-radius: 5px;
    overflow-x: scroll;
  padding  : 1.5rem;
 }
 p{
   font-family: Arial, Helvetica, sans-serif;
   font-size: 14px;
    text-overflow: ellipsis;
    width: max-content;
    text-align: left;
 }

`
export default Wrapper;