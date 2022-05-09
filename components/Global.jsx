import { Global, css } from "@emotion/react";
import React from 'react'

function GlobalStyles() {
    return (
      <React.Fragment>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
              border: 0;
              -webkit-box-sizing: border-box;
                      box-sizing: border-box;
              vertical-align: baseline;
            }
            /* Evitamos problemas con las imagenes */
            img, picture, video, iframe, figure {
              max-width: 100%;
              width: 100%;
              display: block;
              /* opcional */
              -o-object-fit: cover;
                object-fit: cover;
              /* opcional */
              -o-object-position: center center;
                object-position: center center;
            }
            a {
              display: block;
              text-decoration: none;
              color: inherit;
              font-size: inherit;
            }
            p a {
              display: inline;
            }
            /* Quitamos los puntos de los <li> */
            li {
              list-style-type: none;
            }

            /* Configuramos anclas suaves */
            html {
              scroll-behavior: smooth;
            }

            /* Desactivamos estilos por defecto de las principales etiquetas de texto */
            h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {              
              font-weight: inherit;
              font-style: inherit;
              text-decoration: none;
              color: inherit;
            }

            /* Evitamos problemas con los pseudoelementos de quotes */
            blockquote:before, blockquote:after, q:before, q:after {
              content: "";
              content: none;
            }

            /* Configuramos el texto que seleccionamos */
            /* ::-moz-selection {
              background-color: var(--negro);
              color: var(--blanco);
            }
            ::selection {
              background-color: var(--negro);
              color: var(--blanco);
            } */

            /* Nivelamos problemas de tipografías y colocación de formularios */
            form, input, textarea, select, button, label {
              font-family: inherit;
              font-size: inherit;
              -webkit-hyphens: auto;
                  -ms-hyphens: auto;
                      hyphens: auto;
              background-color: transparent;
              color: inherit;
              display: block;
              /* opcional */
              -webkit-appearance: none;
                -moz-appearance: none;
                      appearance: none;
            }

            /* Reseteamos las tablas */
            table, tr, td {
              border-collapse: collapse;
              border-spacing: 0;
            }

            /* Evitamos problemas con los SVG */
            svg {
              width: 100%;
              display: block;
              fill: currentColor;
            }

            /* (Probándolo, no usar en producción) En el caso de añadir una  */
            /* p svg{
              display: inline;
              width: initial;
            } */
            /* Configuramos la tipografía para toda la web */
            body {
              min-height: 100vh;
              /* opcional */
              line-height: 1.4em;
              /* opcional */
              -webkit-hyphens: auto;
                  -ms-hyphens: auto;
                      hyphens: auto;
              /* opcional */
              font-smooth: always;
              /* opcional */
              -webkit-font-smoothing: antialiased;
              /* opcional */
              -moz-osx-font-smoothing: grayscale;
            }
          `}
        />
        </React.Fragment>
    );
}

export default GlobalStyles;