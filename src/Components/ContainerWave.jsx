import styled from "styled-components"

function ContainerWave() {
    return (
        <>
            <Container_wave ></Container_wave>
        </>
    )
}

const Container_wave = styled.div`
overflow-x:hidden;
background-image: url("/Home/Wave.png");
background-size: cover;
height: 13rem;
width: 100%;

`

export default ContainerWave