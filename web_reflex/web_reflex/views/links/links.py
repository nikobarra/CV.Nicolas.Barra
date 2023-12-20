import reflex as rx
from web_reflex.components.link_button import link_button
from web_reflex.components.title import title
from web_reflex.constants import *
from web_reflex.styles.colors import *

def links()-> rx.Component:
    return rx.vstack(
        rx.divider(border_color=TextColor.BODY.value),
        title("Experiencia laboral"),
        link_button("Coderhouse, enero 2022 a febrero 2023",
        "Tutor python y Javascript",
        CODERHOUSE
        ),
        link_button("Junior Achievement Argentina, mayo 2022 a Julio 2022",
        "Profesor, guiando y capacitando a docentes escolares en desarrollo web",
        JUNIOR
        ),
        link_button("Independiente, 2000 al 2017",
        "Técnico reparador, reparaciones, mantenimiento e intalaciones de equipos informáticos y consolas de juegos"
        ,VACIO
        ),
        link_button("Audiotel S.A Noviembre 2004 a Julio 2005",
        "Back Office, supervise ventas de telemarketers, reduje errores en los lotes del 23 al 1%",
        VACIO
        ),
        rx.divider(border_color=TextColor.BODY.value),
        

        width="100%"
    )