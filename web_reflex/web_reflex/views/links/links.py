import reflex as rx
from web_reflex.components.link_button import link_button

def links()-> rx.Component:
    return rx.vstack(
        link_button("GitHub", "https://github.com/nikobarra"),
        link_button("youtube", "https://www.youtube.com"),
        link_button("linked in","https://www.linkedin.com/in/nicolaspelecano/" ),
        link_button("facebook bla bla bla bla", "#"),
        width="100%"
    )