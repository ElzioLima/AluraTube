import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/TimeLine'
import React from 'react'

function HomePage() {
    const [valorDaBusca, setValorDaBusca] = React.useState("")

    return (
        <>
            <CSSReset/>
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
