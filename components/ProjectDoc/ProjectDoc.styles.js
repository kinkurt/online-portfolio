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
    

    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-left: 30px;

    .container {
    position: relative;
    width: 100%;
}

    
    @media (max-width: 800px) {
        flex-direction: column;
  }

  .image {
    padding: 5px;
    border-radius: 40px;
  }

  
  .projectInfo{ 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        opacity: 0;
        border-radius: 40px;
        background-color: #E0FFFF;
        transition: .5s ease;
        
        p{
          color: grey;
      }
  }

  .container:hover .projectInfo{
        opacity: 1;
  }

  .links{
    
    border-radius: 0;
    border: 0;
    text-decoration: none;
    color: black;
    margin: 0;
    box-shadow:none;
    font-size: 30px;
    
    
  }

  .hover{
    &:hover{
        fill: #0CD3C6;
    }
  }

`;


