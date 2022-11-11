import config from '../config.json'
import styled from 'styled-components'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/TimeLine'
import React from 'react'

function HomePage() {
    const [valorDaBusca, setValorDaBusca] = React.useState("")

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca}/>
                <Header/>
                <TimeLine playlists={config.playlists} searchValueState={valorDaBusca}/>
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1 };
     img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
     }
     .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
     }
`;

const StyledBanner = styled.div`
     background-color: blue;
     background-image: url(${({bg}) => {
        return bg
     }});
     height: 230px;
`;

const StyledHorizontalBorder = styled.footer`
     width: 95%;
     height: 1px;
     background-color: black;
     margin: auto;
`;

function Header() {
    return (
        <StyledHeader>
            <section>
                <StyledBanner bg={config.bg}/>
            </section>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
            <StyledHorizontalBorder/>
        </StyledHeader>
    )
}

function TimeLine({playlists, searchValueState}) {
    const playlistsNames = Object.keys(playlists)
    
    return (
        <StyledTimeline>
            {
                playlistsNames.map(
                    (playlistName) => {
                        const playlist = playlists[playlistName]
                        return (
                            <section key={playlistName}>
                                <h2>
                                    {playlistName}
                                </h2>
                                <div>
                                    {
                                        playlist.filter((video) => {
                                            const titleNormalized = video.title.toLowerCase()
                                            const searchValueStateNormalized = searchValueState.toLowerCase()
                                            return titleNormalized.includes(searchValueStateNormalized)
                                        }).map(
                                            (video) => {
                                                return (
                                                    <a key={video.url} href={video.url}>
                                                        <img src={video.thumb}/>
                                                        <span>
                                                            {video.title}
                                                        </span>
                                                    </a>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </section>
                        )
                    }
                )
            }
        </StyledTimeline>
    )
}
