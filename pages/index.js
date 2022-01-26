// IMPORTA COMPONENTES PERSONALIZADOS
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

// IMPORTA CORES E FIGS PERSONALIZADAS
import appConfig from "../config.json";

// IMPORTA A BIBLIOTECA REACT
import React from "react";

// 
import { useRouter } from "next/router";

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

export default function Main() {
    const [username, setuserName] = React.useState("Usuario");
    const roteamento = useRouter();
    const [url, setUrl] = React.useState("https://cdn-icons-png.flaticon.com/512/64/64572.png")
    return (
        <>
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                        width: "100%", maxWidth: "750px",
                        borderRadius: "5px", padding: "32px", margin: "16px",
                        boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                        backgroundColor: appConfig.theme.colors.neutrals["700"],
                    }}>

                    {/* TITULO E ENTRADAS */}
                    <Box as="form"
                        onSubmit={function entrar(Event) {
                            Event.preventDefault();

                            // VALIDA SE O USERNAME É VALIDO
                            if (!(username === "user" || username === undefined || username === "" || username.length < 2)) {
                                roteamento.push("/chat");
                            }
                        }}
                        styleSheet={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "50%",
                        }}
                    >
                        <Titulo tag="h1"
                        >Bem vindo de volta!</Titulo>
                        <Text variant="body3"
                            styleSheet={{
                                marginBottom: "35px",
                                color: appConfig.theme.colors.neutrals["300"],
                            }}
                        >Aluracord - by Samuel</Text>

                        <TextField
                            fullWidth
                            placeholder="Seu username GitHub..."
                            id="campo-user"
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                            variant="basicBordered"
                            onChange={function (Event) {
                                // TROCA A FOTO E O USUARIO, DE ACORDO COM O USERNAME DIGITADO 
                                setuserName(Event.target.value);

                                // RECEBE O NOVO LINK DA FOTO DE PERFIL
                                setUrl(`https://github.com/${username}.png`)

                            }}
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

                        <Text variant="body2"
                            styleSheet={{
                                marginTop: "15px",
                                color: appConfig.theme.colors.neutrals["100"],
                                fontSize: "0.8em",
                                display: "center",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            Ainda não tem uma conta?
                            <a
                                href="https://github.com/signup?source=login"
                                className="index-links"
                            >cadastre-se</a>
                        </Text>
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
                            margin: "16px"
                        }}>
                        <Image styleSheet={{
                            borderRadius: "50%",
                            marginBottom: "16px"
                        }}
                            src={`${url}`}
                            alt="Foto de perfil do GitHub"
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

