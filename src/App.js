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
  text-decoration:none;
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
width: 25.5%;
display:flex;
justify-content: space-between;
align-items: center;
color:#FFFFFF;
margin-left:3rem;
padding:3px;
border: white 1px solid;

h1 {
  width: 103px;
  height: 40px;
  color: #E71B27;
  font-family: 'Bebas Neue', cursive;
  font-family: 'Righteous', cursive;
  font-family: 'Sarala', sans-serif;
  
}

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

  .dropDownMenu{
    border: white solid;
    width: 6.5rem;
    position: relative;

    :hover .ContainerMenu{
      display: flex;
    }
  }

  .ContainerMenu{
    position: absolute;
    width: 6.8rem;
    border: white solid;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.75rem;
    padding-bottom: 0;
    margin-top: 8rem;
    left: -0.2rem;
    
    li {
      width: 100%;
      margin-bottom: 0.4rem;
      font-size: 14px;
      list-style: none;

      :hover {
        
      }
    }

    :hover {
      display: flex;
      
    }

  }
}


`
// const MenuDropDown = styled.div`
// position:absolute;

// :hover{
//   display: flex;
// }
// `

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


#HandleInput .searchInput {
  width: 100%;
  display:flex;
  align-items: center;
  background-color:#2C2C2C;
  color: #FFFFFF;
  border-radius: 4px;
  height: 30px;
  font-size: 15px;
  padding-left: 5px;
  
  
  input{
    width: 100%;
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
            {/* <figure><img src={logoTodo} alt="Logo TodoFlix"/></figure> */}
            <h1>TODOFLIX</h1>
            <nav>
              {/* onClick={this.handleDropDown} */}
              <ul>
                <li><Link to="/mod2VNMDesafioFinal">Início</Link></li>
                {/* <li>Início</li> */}
                <li className="dropDownMenu" ><a>Categorias</a> <img src={arrowDropDown} alt="image menu DropDown"/>

                    <ul className="ContainerMenu">
                      <Link to="/Todos"><li>Todos</li></Link>
                      <li><Link to="/Favoritos">Favoritos</Link></li>
                      <li><Link to="/JaVistos">Já vistos</Link></li>
                      <li><Link to="/Adicionados">Adicionados</Link></li>
                    </ul>
                
                
                </li>
                

                {/* <div className="ContentDropDown">
                  <li className="dropDownMenu" >Categorias <img src={arrowDropDown} alt="image menu DropDown"/>
                  <MenuDropDown className="dropDownChildren">
                  <ul>
                    <li><Link to="/Todos">Todos</Link></li>
                  <li><Link to="/Favoritos">Favoritos</Link></li>
                  <li><Link to="/JaVistos">Já vistos</Link></li>
                  <li><Link to="/Adicionados">Adicionados</Link></li>
                  </ul>
                  
                </MenuDropDown>
                
                </li>
                </div> */}

                {/* {this.state.stateDropDown &&  <MenuDropDown className="dropDownChildren">
                  <ul>
                    <li><Link to="/Todos">Todos</Link></li>
                  <li><Link to="/Favoritos">Favoritos</Link></li>
                  <li><Link to="/JaVistos">Já vistos</Link></li>
                  <li><Link to="/Adicionados">Adicionados</Link></li>
                  </ul>
                  
                </MenuDropDown>  } */}
                
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
              <Link className="searchInput" to="/Todos"><input  type="text" placeholder="Pesquisar"/></Link>
              
              {/* fazer um link no input para a rota todos */}
            </div>
            <div id="HandleOption">
              <img src={userImg} alt=""/>
              <img src={userOptions} alt=""/>
            </div>
          </RightContent>
        
        </Header>

        <Routes>
          <Route path="/mod2VNMDesafioFinal" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/javistos" element={<JaVistos />} />
          <Route path="/adicionados" element={<Adicionados />} />
        </Routes>
      

      </Router>
    
    )
  }
}