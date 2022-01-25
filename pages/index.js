// IMPORTA COMPONENTES PERSONALIZADOS
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

// IMPORTA CORES E FIGS PERSONALIZADAS
import appConfig from "../config.json";

import "./_app.js"

function Titulo(propriedade) {
    const Tag = propriedade.tag;
    return (
        <>
            <Tag>{propriedade.children}</Tag>
            <style jsx>{`
                h1{
                    color: ${appConfig.theme.colors.neutrals["300"]};
                }`
            }</style>
        </>
    );
}

export default function Main() {
    const username = "SamuelMTeixeira";

    return (
        <>
            <Box className="index-bg"
            // styleSheet={{backgroundColor: appConfig.theme.colors.primary[500],}}
            >
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
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                </Box>
                

            </Box>
        </>
    );
}

