import styled from "styled-components"

function ContainerWave({}) {
    return (
        <>
            <Container_wave></Container_wave>

        </>
    )
}

const Container_wave = styled.div`
position: fixed;
bottom: 0rem;

background-image: url("/Home/wave.svg");
background-size: cover;
height: 18rem;

width: 100%;
@media screen and (max-width:768px) {
    margin-top: 16rem;
    height: 5rem;
}
`

export default ContainerWave