import React from "react"
import styled from "styled-components"

import favoriteHeart from "../image/icon/iconfavorite.svg"
import likeGreen from "../image/icon/iconLike.svg"
import lupa from "../image/lupaimg.png"

import capitaoFantasticoImg from "../image/capitaoFantastico.png"
import shrekImg from "../image/BannerFilmes/shrekimg.jpg"
import sonhoDeLiberdadeimg from "../image/BannerFilmes/sonhoDeLiberdadeimg.png"
import spiderManimg from "../image/BannerFilmes/spiderManimg.png"
import queHorasElaVoltaimg from "../image/BannerFilmes/queHorasElaVoltaimg.png"
import hojeQueroVoltarSozinhoimg from "../image/BannerFilmes/hojeQueroVoltarSozinhoimg.png"
import amaEloImg from "../image/BannerFilmes/amarEloImg.png"
import fugaImg from "../image/BannerFilmes/fugaImg.png"
import rocketmanImg from "../image/BannerFilmes/rocketmanImg.png"

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
            if(item.title.toUpperCase().includes(e.targt.value.toUpperCase())) {
                return !0;
            }
        });

        this.setState({
            moviesFiltred: filtreds
        })
    }

    render() {
        return(
            <div>
                <div id="HandleInput">
                <img src={lupa} alt="imagem de uma lupa"/>
                <input onChange={this.filtred} type="text" placeholder="Pesquisar"/>
                
                {/* fazer um link no input para a rota todos */}
                </div>
                <h2>Todos</h2>
                {/* <ContainerDestaques>
                        <Carousel>
                            {this.state.movies.map((item) => (
                                <ItemCarousel>
                                    
                                    <div>
                                        <img className="bannerFilm" src={item.image} alt={`Banner do filme ${item.title}`}/>
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
                    </ContainerDestaques> */}
                {/* {this.state.moviesFiltred.map((item) => (
                <ContainerFilm>
                    <figure>
                    <img
                        src={item.poster_path}
                        alt={`Banner do filme: ${item.title}`}
                    />
                    </figure>
                    <ul key={item.id}>
                    <li>
                        <b>{item.title}</b>
                    </li>
                    <li>{item.overview}</li>
                    </ul>
                </ContainerFilm>
                ))} */}
            </div>
        )
    }
}