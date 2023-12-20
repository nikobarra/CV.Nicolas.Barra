import reflex as rx
import datetime
from web_reflex.styles.styles import Size as Size
from web_reflex.styles.colors import *

def footer()-> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link(f"soy el footer del año {datetime.date.today().year}", 
        href="http://www.linkedin.com",
        is_external=True,

        font_size=Size.MEDIUM.value,
        ),
        rx.text("From Argentina to the world.",
            font_size=Size.MEDIUM.value
        ),
        margin_bottom=Size.MEDIUM.value,
        padding_bottom=Size.MEDIUM.value,
        color=TextColor.FOOTER.value
    )