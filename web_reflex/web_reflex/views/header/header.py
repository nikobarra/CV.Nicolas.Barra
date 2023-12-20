import reflex as rx
from web_reflex.components.link_icon import link_icon
from web_reflex.components.info_text import info_text
from web_reflex.styles.styles import Size as Size
from web_reflex.constants import *
from web_reflex.styles.colors import *
from datetime import date


def header()-> rx.Component():
    today = date.today()
    age = today.year - BIRTHDATE.year - ((today.month, today.day) < (BIRTHDATE.month, BIRTHDATE.day))


    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Nicolas Barra",
            size="xl",
            color=TextColor.HEADER.value,
            bg=Color.SECONDARY.value,
            ),
            
            rx.vstack(
                rx.heading("Nicolás Barra",
                size="lg",
                color=TextColor.HEADER.value,
                font_family="Oswald",
                ),
                rx.hstack(
                    rx.icon(tag="phone"),
                    rx.text("+54 (2266) 440616",
                    margin_top="0px !important",
                    color=TextColor.BODY.value)
                    ),
                rx.hstack(
                    rx.icon(tag="email"),   
                    rx.text("nicolasbarrapelecano@gmail.com", margin_top="0px !important",
                    color=TextColor.BODY.value)),
                    align_items="start",
            ),
            spacing=Size.BIG.value,
        ),
        rx.flex(
            info_text("Edad: ", f"{age} años"),
            rx.spacer(),
            info_text("Resido en: ", "Balcarce Bs. As."),
            rx.spacer(),
            info_text("Estudiante: ", "Tec. en App Informaticas, Unicen"),
            width="100%",
        ),
        rx.divider(border_color=TextColor.BODY.value),
        rx.heading("Perfil profesional"),
        rx.text("Estudiante Universitario y Desarrollador Backend Python con experiencia en liderar clases de apoyo en JavaScript, Python y Django. Mi objetivo es integrarme como desarrollador de software, aplicando habilidades técnicas adquiridas durante mi carrera."),
        color=TextColor.BODY.value,
        align_items="start",

    )
