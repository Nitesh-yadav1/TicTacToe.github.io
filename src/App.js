import React,{useState}  from 'react';
import logo from './logo.svg';

import Icon from './Components/icon';

import { ToastContainer, toast } from 'react-toastify'; // this is my toastify code
  import 'react-toastify/dist/ReactToastify.css';

 import {Card,CardBody,Container,Button,Col,Row} from "reactstrap";
  import 'bootstrap/dist/css/bootstrap.css';
  import './App.css';


  const itemArray= new Array(9).fill("empty")

const App=()=> {

const[isCross,setIsCross]=useState(false);
const [winMessage,setwinMessage]=useState("");

const reloadGame=()=>{
setIsCross(false);
setwinMessage("");
itemArray.fill("empty",0,9);
}

const checkIsWinner=()=>{
if (itemArray[0]=== itemArray[1] &&
  itemArray[0]=== itemArray[2]&&
  itemArray[0]!== "empty") {
    setwinMessage( ` ${itemArray[0]} won `)
}else if(
  itemArray[3] !=="empty"&&
  itemArray[3]=== itemArray[4]&&
  itemArray[4]===itemArray[5]
){
  setwinMessage( ` ${itemArray[3]} won `)
}else if(
  itemArray[6]!== "empty" &&
  itemArray[6]=== itemArray[7] &&
  itemArray[7]=== itemArray[8]
){
  setwinMessage( ` ${itemArray[6]} won `)
}else if(
  itemArray[0]!== "empty" &&
  itemArray[0]=== itemArray[3]&&
  itemArray[3]=== itemArray[6]
){
  setwinMessage( ` ${itemArray[0]} won `)
}else if(
  itemArray[1]!=="empty" &&
  itemArray[1]===itemArray[4] &&
  itemArray[4]===itemArray[7]
){
  setwinMessage( ` ${itemArray[1]} won `)
}else if(
  itemArray[2]!== "empty" &&
  itemArray[2]=== itemArray[5] &&
  itemArray[5]=== itemArray[8]
){
  setwinMessage( ` ${itemArray[2]} won `)
}else if(
  itemArray[0]!=="empty" &&
  itemArray[0]===itemArray[4]&&
  itemArray[4]===itemArray[8]
){
  setwinMessage( ` ${itemArray[0]} won `)
}else if(
  itemArray[2]!== "empty" &&
  itemArray[2]===itemArray[4] &&
  itemArray[4]===itemArray[6]
){
  setwinMessage( ` ${itemArray[2]} won `)
}
}

const changeItem=itemNumber=>{
if (winMessage) {
  return toast(winMessage, {type: "success"});
  
}

if (itemArray[itemNumber] === "empty") {
  itemArray[itemNumber]= isCross ? "Cross": "Circle"
  setIsCross(!isCross);
  
}else{
  return toast("already filled", {type:"error"})
}
checkIsWinner();

}

  return (
    // Containers are used to contain, pad, and (sometimes) center the content within them
    <Container className="p-5"> 
      <ToastContainer position="bottom-center" />
    <Row>
      <Col md ={6} className="offset-md-3">
        {winMessage ? (
          <div className="mb-2 mt-2">
            <h1 className="text-success text-uppercase text-center">
              {winMessage}
            </h1>
            <Button color="success" block
            onClick={reloadGame}
            >
              Reload The Game
            </Button>

          </div>
        ): (
          <h1 className=" text-center text-warning">
            {isCross ? "Cross": "Circle"} turns
          </h1>
        )}
        <div className="grid">
          {itemArray.map((item, index)=>(
              <Card onClick={()=>changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />

                </CardBody>
              </Card>
            )
          )}
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default App;
