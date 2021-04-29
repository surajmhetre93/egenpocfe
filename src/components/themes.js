import {createGlobalStyle} from 'styled-components';
import DarkBackground from '../static/back-image-dark.jpeg';
import LightBackground from '../static/back-image-light.jpeg';

export const darkTheme = {
    fontColor: "azure",
    background_image: "url(" + DarkBackground + ")",
    a_color: "#61dafb",
    footer_color: "azure",
    footer_background_color: "#282c34",
    select_back_color: "black",
    select_border_color: "white",
    cstm_btn_background_color: "orange",
    cstm_btn_border_color: "white",
    cstm_btn_color: "white",
    cstm_btn_hvr_color: "darkorange"

};

export const lightTheme = {
    fontColor: "black",
    background_image: "url(" + LightBackground + ")",
    a_color: "#551A8B",
    footer_color: "black",
    footer_background_color: "lightgrey",
    select_back_color: "azure",
    select_border_color: "black",
    cstm_btn_background_color: "#24a0ed",
    cstm_btn_border_color: "white",
    cstm_btn_color: "white", 
    cstm_btn_hvr_color: "#1183ca"
    
};

export const GlobalStyles = createGlobalStyle`
    body {
        color: ${props => props.theme.fontColor};
        background-image: ${props => props.theme.background_image};
    }

    a {
        color: ${props => props.theme.a_color};
      }
    
    select {
        background-color: ${props => props.theme.select_back_color};
    }

    select:hover {
        border-color: ${props => props.theme.select_border_color};
    }

    footer {
        color: ${props => props.theme.footer_color};
        background-color: ${props => props.theme.footer_background_color};
      }

    .custom-btn {
        background-color: ${props => props.theme.cstm_btn_background_color};
        color: ${props => props.theme.cstm_btn_color};
    }

    .custom-btn:hover {
        color: ${props => props.theme.cstm_btn_color};
        background-color: ${props => props.theme.cstm_btn_hvr_color};
    }
`