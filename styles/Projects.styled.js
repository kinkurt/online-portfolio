import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    margin: 0 auto;
    //background: #f8f8ff;
    background: #ffffff;
    padding: 10px;
    border-radius: 40px;
    max-width: 2000px;
    margin-bottom: 30vh;
`;

export const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    margin: 0 auto;

    a{
        border-radius: 40px;
        border: 1px solid white;
        text-decoration: none;
        color: black;
        margin: 10px;
        background: #E0FFFF;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const Box = styled.div`
    background-color: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    

    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-left: 30px;

    div{
        padding: 10px;
    } 
    
    @media (max-width: 800px) {
        flex-direction: column;
  }

  .image {
    border: 1px solid #ddd;
    border-radius: 40px;
    padding: 5px;
  }

  .centered {
      p{
          color: grey;
      }
    /* position: absolute;
    height: 281px;
    left:0;
    top: auto;
    background: rgba(0,0,0,0.6);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    opacity: 10%;
     */
/* 
      &:hover{
          opacity: 100%; 
      } */
    }
`;

