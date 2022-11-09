import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/TimeLine'

function HomePage() {
    const style = {
        //backgroundColor: "red"
    }

    return (
        <>
            <CSSReset/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu/>
                <Header/>
                <TimeLine playlists={config.playlists}/>
            </div>
        </>
    )
}

export default HomePage

//function Menu() {
//    return (
//        <div>
//            Menu
//        </div>
//    )
//}

const StyledHeader = styled.div`
     img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
     }
     .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
     }
`;

function Header() {
    return (
        <StyledHeader>
            <section>
                Banner
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

function TimeLine(props) {
    const playlistsNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {
                playlistsNames.map(
                    (playlistName) => {
                        const playlist = props.playlists[playlistName]
                        console.log(playlist)
                        return (
                            <section>
                                <h2>
                                    {playlistName}
                                </h2>
                                <div>
                                    {
                                        playlist.map(
                                            (video) => {
                                                return (
                                                    <a href={video.url}>
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
