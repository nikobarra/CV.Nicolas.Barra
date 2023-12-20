import reflex as rx
import datetime
from web_reflex.styles.styles import Size as Size
from web_reflex.styles.colors import *

def footer()-> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link("Sitio realizado con Reflex python.", 
        href="http://www.reflex.dev",
        is_external=True,

        font_size=Size.MEDIUM.value,
        ),
        rx.text("por Nicolás Barra",
            font_size=Size.MEDIUM.value
        ),
        rx.text(f"Actualizado hasta {datetime.date.today().year}",
            font_size=Size.MEDIUM.value
        ),
        margin_bottom=Size.MEDIUM.value,
        padding_bottom=Size.MEDIUM.value,
        color=TextColor.FOOTER.value
    )