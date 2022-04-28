import React from "react"
import styled from "styled-components"

import favoriteHeart from "../image/icon/iconfavorite.svg"
import likeGreen from "../image/icon/iconLike.svg"
import lupa from "../image/lupaimg.png"


import shrekImg from "../image/BannerFilmes/shrekimg.jpg"
import sonhoDeLiberdadeimg from "../image/BannerFilmes/sonhoDeLiberdadeimg.png"
import spiderManimg from "../image/BannerFilmes/spiderManimg.png"
import queHorasElaVoltaimg from "../image/BannerFilmes/queHorasElaVoltaimg.png"
import hojeQueroVoltarSozinhoimg from "../image/BannerFilmes/hojeQueroVoltarSozinhoimg.png"
import amaEloImg from "../image/BannerFilmes/amarEloImg.png"
import fugaImg from "../image/BannerFilmes/fugaImg.png"
import rocketmanImg from "../image/BannerFilmes/rocketmanImg.png"


const ConteinarAllRoute = styled.div`
h2 {
    font-size: 29px;
    margin-left: 3rem;
    margin-top: 2rem;
    
}

#HandleInput{

    position: absolute;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2C2C2C;
    width: 25.1%;
    height: 32.5px;
    border-radius: 4px;
    left:56rem;
    bottom: 37.5rem;
  
  
    img {
    background-color: #2C2C2C;
    margin-left: 2px;
    margin-right: 6px;
    }
}

#HandleInput input {
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
`

const ContainerAllFilmes = styled.div`
border: #fff solid;
width: 69rem;
/* height: 40rem; */
display: flex;
flex-wrap: wrap;
margin-top: 0.5rem;
margin-left: 3rem;

.middleContainer {
    width: 259px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;
    border: #fff 2px solid;

    .scoreContainer{
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}



h3 {
    font-size: 16px;
    max-width: 20.5ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

p {
    font-size:12px;
}
`

const ContainerItemFilme = styled.div`
width: 259px;
height: 242px;
margin: 6px;
margin-bottom: 2.5rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;




div {
    width: 259px;
    height: 60%;

    
    .bannerFilm {
        width:100%;
        
        
    }

    .favoriteHeart {
        /* border: white solid; */
        width: fit-content;
        height: fit-content;
        position: relative;
        background-color: none;
        left: 87%;
        bottom:100%;
        border-radius: inherit;

        button {
            position: relative;
            width: fit-content;
            height: fit-content;

            img {
            opacity: 1;
            position: relative;
            
            

        }
        }
        
        

        

    }
    


    
}
`

export default class Todos extends React.Component {
    state = {
        movies: [
            {
            title: "Shrek",
            image: shrekImg,
            description: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            score:"4/5",
            favorite: false
            },
            {title: "Hoje Eu Quero Voltar Sozinho",
            image: hojeQueroVoltarSozinhoimg,
            description: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
            score:"-",
            favorite: false
            },
            {
            title: "Spider-man",
            image: spiderManimg,
            description: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
            score:"3/5",
            favorite: false
            },
            {
            title: "Um sonho de Liberdade",
            image: sonhoDeLiberdadeimg,
            description: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
            score:"4,5/5",
            favorite: false
            },
            {
            title: "Que Horas Ela Volta?",
            image: queHorasElaVoltaimg,
            description: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
            score:"-",
            favorite: false
            },
            {
            title: "A Fuga das Galinhas",
            image: fugaImg,
            description: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",
            score:"2/5",
            favorite: false
            },
            {
            title: "AmarElo",
            image: amaEloImg,
            description: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.",
            score:"5/5",
            favorite: false
            },
            {
            title: "Rocketman",
            image: rocketmanImg,
            description: "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.",
            score:"-",
            favorite: false
            }
        ],
        moviesFiltred: []
    }

    componentDidMount() {
        this.setState({
            moviesFiltred: this.state.movies
        })
    }

    filtred = (e) => {
        let { movies} = this.state;

        const filtreds = movies.filter((item) => {
            if(item.title.toUpperCase().includes(e.target.value.toUpperCase())) {
                return !0;
            }
        });

        this.setState({
            moviesFiltred: filtreds
        })
    }

    render() {
        return(
            <ConteinarAllRoute>
                
                <div id="HandleInput">
                    <img src={lupa} alt="imagem de uma lupa"/>
                    <input onChange={this.filtred} type="text" placeholder="Pesquisar"/>
                </div>
                    <h2>Todos</h2>
                    <ContainerAllFilmes>
                        
                        
                            {this.state.moviesFiltred.map((item) => (
                                <ContainerItemFilme>
                                    
                                    <div>
                                        <img className="bannerFilm" src={item.image} alt={`Banner do filme ${item.title}`}/>
                                        {/* Criar um div no favorite e verificar a largura e altura da divs antes de dar o position */}
                                        <div className="favoriteHeart">
                                            <button>
                                                <img  src={favoriteHeart} alt="icone de like"/>
                                            </button>
                                            
                                        </div>
                                        
                                    </div>
                                    <div className="middleContainer">
                                        <h3>{item.title}</h3>
                                        <div className="scoreContainer">
                                            <p>{item.score}</p>
                                            <img src={likeGreen} alt="like icon"/>
                                            
                                        </div>
                                        
                                    </div>
                                    <p>{item.description}</p>
                                </ContainerItemFilme>
                            ))}
                        
                    </ContainerAllFilmes>
            </ConteinarAllRoute>
                
                

        
        )
    }
}