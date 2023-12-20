import reflex as rx
from web_reflex.components.title import title
from web_reflex.styles.colors import *
import web_reflex.styles.styles as styles
from web_reflex.components.link_button import link_button
from web_reflex.constants import *


def education () -> rx.Component:
    return rx.vstack(
        title("Educación"),
        rx.hstack(
            rx.icon(tag="star",
            color=TextColor.BODY.value,
            ),
            rx.text("Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (Unicen Tandil)", style=styles.button_title_style)),
            rx.text("Iniciada en agosto 2023, Aprobé el examen de ingreso en la primera instancia y promocioné las materias", style=styles.button_body_style,
            ),
        rx.hstack(
            rx.icon(tag="star",
            color=TextColor.BODY.value,
            ),
            rx.text("Diplomatura Python Nivel 1 (UTN FRBA Centro de E-Learning)", style=styles.button_title_style)),
            rx.text("Aprobado con Sobresaliente, Desarrollé una aplicación de escritorio con tkinter y Python, realizando un CRUD con una base de datos.", style=styles.button_body_style,
            ),
        rx.hstack(
            rx.icon(tag="star",
            color=TextColor.BODY.value,
            ),
            rx.text("Desarrollador Web FullStack Python-Django (Coderhouse)", style=styles.button_title_style)),
            rx.text("Aprobado con la máxima calificación, Adquirí conocimientos en desarrollo web tanto en el front-end como en el back-end.", style=styles.button_body_style,
            ),
        rx.hstack(
            rx.icon(tag="star",
            color=TextColor.BODY.value,
            ),
            rx.text("Técnico en Programación con Orientación Contable (E.T Nro. 35 Eduardo Latzina, Caba)", style=styles.button_title_style)),
            rx.text("1994 - 2000, Egresado con un promedio de 7, adquiriendo habilidades para aplicaciones informáticas.", style=styles.button_body_style,
            ),
            
            rx.divider(border_color=TextColor.BODY.value),
                title("Redes y Repositorio"),
                link_button("GitHub",
                "Repositorios con proyectos personales",
                GITHUB
                    ),
                link_button("Linkedin",
                "Red social laboral donde incluyo todos los cursos realizados",
                LINKEDIN
                    ),

        align_items="start",
        width="100%",
)