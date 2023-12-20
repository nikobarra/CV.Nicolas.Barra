import reflex as rx
from web_reflex.components.link_icon import link_icon
from web_reflex.components.info_text import info_text
from web_reflex.styles.styles import Size as Size
from web_reflex.constants import *
from web_reflex.styles.colors import *


def header()-> rx.Component():
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Nicolas Barra", size="xl"),
            rx.vstack(
                rx.heading("Nicolás Barra",
                size="lg",
                color=TextColor.HEADER.value,
                font_family="Oswald",
                ),
                rx.text("@nicolasbarrapelecano@gmail.com", margin_top="0px !important",
                color=TextColor.BODY.value),
                rx.hstack(
                link_icon(GITHUB),
                link_icon(GITHUB),
                link_icon(GITHUB),
                ),
                align_items="start",
            ),
            spacing=Size.BIG.value,
        ),
        rx.flex(
            info_text("+1 ", "años de experiencia"),
            rx.spacer(),
            info_text("+1 ", "años de experiencia"),
            rx.spacer(),
            info_text("+1 ", "años de experiencia"),
            rx.spacer(),
            width="100%",
            
         ),
        rx.text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident temporibus officiis nulla consequatur ab, ipsa assumenda perferendis odio molestias sapiente saepe. Numquam quisquam eaque repellat molestias doloremque earum ducimus sit."),
        spacing=Size.BIG.value,
        color=TextColor.BODY.value,
        align_items="start",

    )

