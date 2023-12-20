import reflex as rx
from web_reflex.components.link_button import link_button
from web_reflex.components.title import title
from web_reflex.constants import *

def links()-> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button("GitHub",
        "Repositorios",
        GITHUB
        ),
        link_button("youtube",
        "Videos explicativos",
        YOUTUBE
        ),
        link_button("linked in",
        "Todos sabemos que es linkedin"
        ,LINKEDIN
        ),
        link_button("facebook",
        "Caralibro",
        "#"
        ),
        width="100%"
    )