// IMPORTA COMPONENTES PERSONALIZADOS
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

// IMPORTA CORES E FIGS PERSONALIZADAS
import appConfig from "../config.json";

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
        </>
    );
}

function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}

export default function Main() {
    const username = "SamuelMTeixeira";

    return (
        <>
            <GlobalStyle />

            {/* BACKGROUND */}
            <Box styleSheet={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url(https://images2.alphacoders.com/816/81652.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "multiply",
            }}>

                {/* FUNDO CONTEÚDO */}
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals["700"],
                    }}>

                    {/* TITULO E ENTRADAS */}
                    <Box as="form"
                        styleSheet={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Titulo tag="h1">Bem vindo de volta!</Titulo>
                        <Text variant="body3"
                            styleSheet={{
                                marginBottom: "35px",
                                color: appConfig.theme.colors.neutrals["300"],
                            }}>Aluracord - by Samuel</Text>

                        <TextField
                            fullWidth
                            placeholder="Seu username GitHub..."
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                            variant="basicBordered"
                        />

                        <Button type="submit"
                            label="Entrar"
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary["500"],
                                mainColorLight: appConfig.theme.colors.primary["400"],
                                mainColorStrong: appConfig.theme.colors.primary["600"]
                            }}
                        >

                        </Button>
                    </Box>

                    {/* AREA DA FOTO */}
                    <Box
                        styleSheet={{
                            backgroundColor: appConfig.theme.colors.neutrals["800"],
                            borderColor: appConfig.theme.colors.neutrals["999"],
                            minHeight: "240px",
                            maxWidth: "200px",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            borderRadius: "10px",
                            padding: "16px",
                            marginLeft: "16px"
                        }}>
                        <Image styleSheet={{
                            borderRadius: "50%",
                            marginBottom: "16px"
                        }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text variant="body3"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: "3px 10px",
                                borderRadius: "300px"
                            }}
                        >{username}</Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

