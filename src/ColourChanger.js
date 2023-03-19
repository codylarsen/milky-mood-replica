export function ColourChanger() {

    let showing = false

    const setTextColour = (colour) => {
        document.querySelector(':root').style.setProperty('--text-colour', colour)
    }

    const setBackgroundColour = (colour) => {
        document.querySelector(':root').style.setProperty('--background-colour', colour)
    }

    const toggleShow = () => {
        if (showing) {
            document.getElementById("colour-changer-container").style.right = "-225px"
            document.getElementById("collapser").style.transform = "rotate(0deg)"
        } else {
            document.getElementById("colour-changer-container").style.right = "0"
            document.getElementById("collapser").style.transform = "rotate(180deg)"
        }
        showing = !showing
    }

    return <div className={"colour-changer-container"} id={"colour-changer-container"}>
        <div className={"collapser"} id={"collapser"} onClick={() => toggleShow()}>
            <svg className={"tab-arrow"} width="31" height="16" viewBox="0 0 31 16" xmlns="http://www.w3.org/2000/svg">
                <path className={"tab-arrow"} fill-rule="evenodd" clip-rule="evenodd" d="M6.65685 15.0711L0.292891 8.7071C-0.0976334 8.31657 -0.0976334 7.68341 0.292891 7.29288L6.65685 0.928924C7.04738 0.538399 7.68054 0.538399 8.07107 0.928924C8.46159 1.31945 8.46159 1.95261 8.07107 2.34314L3.41421 6.99999L31 6.99999V8.99999L3.41421 8.99999L8.07107 13.6568C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711Z"/>
            </svg>
        </div>
        <div className={"colour-pickers"}>
            <div className={"change-background"}>
                <div className={"picker-text"}><p>Background:</p></div>
                <div className={"picker-colour"}>
                    <input className={"colour-input"} defaultValue={"#EBAFAB"} type={"color"} onChange={(e) => setBackgroundColour(e.target.value)}/>
                </div>
            </div>
            <div className={"change-text"}>
                <div className={"picker-text"}><p>Text:</p></div>
                <div className={"picker-colour"}>
                    <input className={"colour-input"} type={"color"} onChange={(e) => setTextColour(e.target.value)}/>
                </div>
            </div>
        </div>
    </div>;
}