import React from 'react'

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("Do you need set up me first!") },
    toggleMode: () => { alert("Do you nedd set up me first") }
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode)

    function toggleMode() {
        if (mode === "dark") {
            setMode("light");
        }
        if (mode === "light") {
            setMode("dark");
        }
    }

    return (
        <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}  
