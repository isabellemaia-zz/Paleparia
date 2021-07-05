import styled from 'styled-components'

interface ImageProps {
    readonly backgroundImage: string;
  };

export const Spotlight = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-wrap: wrap;

`

export const SquareSpotlight = styled.div<ImageProps>`
    width: 421px;
    height: 421px;

    margin: 40px auto;

    border-radius: 24px;

    background: url(${props => props.backgroundImage});
    background-position: center;
    background-size: cover;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`

export const RectangleSpotlight = styled.div<ImageProps>`
    width: 629px;
    height: 250px;

    margin: 0 auto;

    border-radius: 24px;

    
    background: url(${props => props.backgroundImage});
    background-position: center;
    background-size: cover;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`

