import React from "react"
import styled from "styled-components"
import Carousel from "nuka-carousel"

import favoriteHeart from "../image/icon/iconfavorite.svg"
import likeGreen from "../image/icon/iconLike.svg"
import capitaoFantasticoImg from "../image/capitaoFantastico.png"
import shrekImg from "../image/BannerFilmes/shrekimg.jpg"
import sonhoDeLiberdadeimg from "../image/BannerFilmes/sonhoDeLiberdadeimg.png"
import spiderManimg from "../image/BannerFilmes/spiderManimg.png"
import queHorasElaVoltaimg from "../image/BannerFilmes/queHorasElaVoltaimg.png"
import hojeQueroVoltarSozinhoimg from "../image/BannerFilmes/hojeQueroVoltarSozinhoimg.png"
import amaEloImg from "../image/BannerFilmes/amarEloImg.png"
import fugaImg from "../image/BannerFilmes/fugaImg.png"
import rocketmanImg from "../image/BannerFilmes/rocketmanImg.png"




const Main = styled.div`
width: 100%;
border: solid white;
display:flex;
flex-direction: column;


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

const ContainerDestaques = styled.div`
margin-top: 1.5rem;
margin-left: 3rem;

.middleContainer {
    width: 259px;
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

h2 {
    font-size: 18px;
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

const ItemCarousel = styled.div`
width: 259px;
height: 242px;
margin: 6px;
/* border:white solid 1px; */
display: flex;
flex-direction: column;
justify-content: space-evenly;



div {
    width: 259px;
    height: 60%;
    position: static;
    
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
        
        

        img {
            opacity: 1;
            position: absolute;
            
            

        }

    }
    


    
}
`


export default class App extends React.Component {
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
        ]
    }

    render() {
        return (
            <div>
                <Main>
                    <ContainerRecentlySeen>
                        <figure>
                        <img src={capitaoFantasticoImg} alt="Banner do filme Capitão Fantástico"/>
                        </figure>
                        <container>
                        <img src={favoriteHeart} alt="Heart icon"/>
                        <p><b>Visto recentemente</b></p>
                        <h2>Capitão Fantástico</h2>
                        <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rigida rotina de aventuras.Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
                        <div>
                            4/5 <img src={likeGreen} alt="like icon"/>
                        </div>
                        
                        </container>
                    </ContainerRecentlySeen>
                    <ContainerDestaques>
                        <h2>Destaques</h2>
                        <Carousel
                            wrapAround={true}
                            slidesToShow={5}
                            autoplay={true}
                            autoplayInterval={1800}
                            nextButtonClassName={`
                            color:red;
                            `}
                            nextButtonStyle={`
                            color:red;
                            `}
                            prevButtonClassName={""}
                            prevButtonStyle={""}
                            prevButtonText={""}

                            
                              renderCenterLeftControls={({ previousSlide }) => (
                                <button onClick={previousSlide}>{String("<")}</button>
                              )}
                              renderCenterRightControls={({ nextSlide }) => (
                                <button onClick={nextSlide}>{String(">")}</button>
                              )}

                
                        >
                            {this.state.movies.map((item) => (
                                <ItemCarousel>
                                    {/* <section class="bg-solid-light slideContainer strut-slide-0" style=`background-image: url(); background-repeat: no-repeat;width: 100%;height: 100%;`></section> */}
                                    
                                    <div>
                                        {/* <div className="" ></div> */}
                                        <img className="bannerFilm" src={item.image} alt={`Banner do filme ${item.title}`}/>
                                        {/* Criar um div no favorite e verificar a largura e altura da divs antes de dar o position */}
                                        <div className="favoriteHeart">
                                            <img  src={favoriteHeart} alt="icone de like"/>
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
                                </ItemCarousel>
                            ))}
                        </Carousel>
                    </ContainerDestaques>
          
                </Main>

            </div>
        )
    }
}   