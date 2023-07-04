import styled from "styled-components"

function ContainerWave() {
    return (
        <>
            <Container_wave rel="preload"></Container_wave>
        </>
    )
}

const Container_wave = styled.div`
position: relative;
background-image: url("/Home/Wave.png");
background-size: cover;
height: 15rem;
width: 100%;

`

export default ContainerWave