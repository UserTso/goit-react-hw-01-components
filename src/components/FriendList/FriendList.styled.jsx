import styled from '@emotion/styled';

export const List = styled.ul`
width: 400px;
background-color: beige;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
padding-top: 10px;
padding-bottom: 10px;
padding-left: 0;
margin-bottom: 40px;
`;

export const Item = styled.li`
display: flex;
list-style: none;
padding-top: 5px;
padding-bottom: 5px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
margin-bottom: 10px;
background-color: white;
&:last-child {margin-bottom: 0;}
`;



export const Status = styled.span`
width: 20px;
height: 20px;
margin: auto 15px;

border-radius: 50%;


background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
}

}
`;

export const Avatar = styled.img`
margin-right: 30px;
`;

export const Name = styled.p`
font-size: 24px;
color: rgba(0, 0, 0, 0.7);
margin-bottom: auto;
margin-top: auto;
`;