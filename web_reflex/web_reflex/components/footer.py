import reflex as rx
import datetime

def footer()-> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link(f"soy el footer del año {datetime.date.today().year}", 
        href="http://www.linkedin.com",
        is_external=True
        ),
        rx.text("de la pagina"),
    )