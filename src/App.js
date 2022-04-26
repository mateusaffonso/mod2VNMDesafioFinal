import React from "react"
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";



import Home from "./pages/Home"
import Adicionados from "./pages/Adicionados"
import Favoritos from "./pages/Favoritos"
import JaVistos from "./pages/JaVistos"
import Todos from "./pages/Todos"


import logoTodo from "./image/logo.png"
import userOptions from "./image/useroptions.png"
import lupa from "./image/lupaimg.png"
import userImg from "./image/userimg.png"
import arrowDropDown from "./image/userOpition2.svg"





const GlobalStyled = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-color:#000000;
  color:#FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
}`

const Header = styled.div`
/* background-color: #c2c2c2; */
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
width: 100%;
padding:2.5px;
border: white 1px solid;

`
const LeftContent = styled.div`
width: 21%;
display:flex;
justify-content: space-between;
align-items: center;
color:#FFFFFF;
margin-left:3rem;
padding:3px;
border: white 1px solid;

:hover {

}

nav ul {
  /* border:1px white solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:155px;

  li {
    list-style: none;
    display:flex;
    align-items: center;
  }

  .dropDownMenu {
    position:relative;

    :hover{
      display: flex;
    }
  }
}
`
const MenuDropDown = styled.ul`
position:absolute;
`

const RightContent = styled.div`
width: 45%;
display:flex;
justify-content: space-evenly;
align-items: center;
margin-right:15px;
padding:3px;
/* border: white 1px solid; */

button {
  background-color: #E71B27;
  color:#FFFFFF;
  border-radius: 5px;
  height:2.4rem;
  width: 8rem;
}

#HandleInput{
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C2C2C;
  width: 57%;
  height: 32.5px;
  border-radius: 4px;
  
  
  img {
  background-color: #2C2C2C;
  margin-left: 5px;
  }
}


#HandleInput input {
  width: 92%;
  display:flex;
  align-items: center;
  background-color:#2C2C2C;
  color: #FFFFFF;
  border-radius: 4px;
  height: 30px;
  font-size: 15px;
  padding-left: 5px;

  ::placeholder {
    color:#FFFFFF;
  }

  :focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  

  
}

#HandleOption {
  display:flex;
  align-items: center;

}
`

const Main = styled.div`
width: 100%;
border: solid white;
display:flex;
align-items: center;
`

const ContainerRecentlySeen = styled.div`
width: 77%;
margin-top: 6rem;
margin-left:3rem;
padding: 2.5px;
display: flex;
align-items:center;
justify-content: start;
border: solid white 1px;

container {
  border: white 1px solid;
  width: 50%;
  margin-left: 2rem;
  height: 14rem;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;

  img{
    width: 21px;
  }
}
`


export default class App extends React.Component {
  state = {
    stateDropDown: false,
    movies: [
      {title: "Shrek", image: "link" , description: "", score:"", favorite: false },
      {title: "Hoje Eu Quero Voltar Sozinho", image: "link" , description: "", score:"", favorite: false },
      {title: "Spider-man", image: "link" , description: "", score:"", favorite: false },
      {title: "Um sonho de Liberdade", image: "link" , description: "", score:"", favorite: false },
      {title: "Que Horas Ela Volta?", image: "link" , description: "", score:"", favorite: false },
      {title: "A Fuga das Galinhas", image: "link" , description: "", score:"", favorite: false },
      {title: "AmarElo", image: "link" , description: "", score:"", favorite: false },
      {title: "Rocketman", image: "link" , description: "", score:"", favorite: false },
    ]
  }

  handleDropDown = () => {
    this.setState({stateDropDown: !this.state.stateDropDown})
  }


  render() {
    return (
      <Router>
        <GlobalStyled/>
        {/* <HeaderComponent/> */}
        <Header>
          <LeftContent>
            <figure><img src={logoTodo} alt="Logo TodoFlix"/></figure>
            <nav>
              {/* onClick={this.handleDropDown} */}
              <ul>
                <li><Link to="/">Início</Link></li>
                {/* <li>Início</li> */}
                <li className="dropDownMenu" >Categorias <img src={arrowDropDown} alt="image menu DropDown"/>
                {this.state.stateDropDown &&  <MenuDropDown>
                  <li><Link to="/Todos">Todos</Link></li>
                  <li><Link to="/Favoritos">Favoritos</Link></li>
                  <li><Link to="/JaVistos">Já vistos</Link></li>
                  <li><Link to="/Adicionados">Adicionados</Link></li>
                </MenuDropDown>  }
                </li>
                {/* {this.state.stateDropDown &&  <ul>
                  <li>Todos</li>
                  <li>Favoritos</li>
                  <li>Já vistos</li>
                  <li>Adicionados</li>
                </ul>  } */}
              </ul>
              

            </nav>
            
            
          </LeftContent>
          <RightContent>
            <button background-color="white">Adicionar filme</button>
            <div id="HandleInput">
              <img src={lupa} alt="imagem de uma lupa"/>
              <input type="text" placeholder="Pesquisar"/>
            </div>
            <div id="HandleOption">
              <img src={userImg} alt=""/>
              <img src={userOptions} alt=""/>
            </div>
          </RightContent>
        
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/javistos" element={<JaVistos />} />
          <Route path="/adicionados" element={<Adicionados />} />
        </Routes>
      

      </Router>
    
    )
  }
}