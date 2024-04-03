import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: var(--background-color);
  .landingpage {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    text-align: center;
    width: var(--fluid-width);
    max-width: var(--fixed-width);
  }
 
  h3 {
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 12px;
    margin-bottom: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .buttons {
    display: flex;
    justify-content: center;
  }
  .btn {
    padding: 0.75rem 2.5rem;
  }
  .btn:first-child {
    margin-right: 10px;
    padding: 0.75rem 4rem;
  }
  .animation {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    max-width: 500px;
    margin: 0 auto;
  }
  @media (max-width: 640px) {
    .btn {
      padding: 0.5rem 2rem;
    }
    .btn:first-child {
      margin-right: 10px;
      padding: 0.5rem 3rem;
    }
  }
`;

export default Wrapper;
