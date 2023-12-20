import reflex as rx
from web_reflex.components.link_button import link_button
from web_reflex.components.title import title

def links()-> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button("GitHub",
        "Repositorios",
        "https://github.com/nikobarra"
        ),
        link_button("youtube",
        "Videos explicativos",
        "https://www.youtube.com"
        ),
        link_button("linked in",
        "Todos sabemos que es linkedin"
        ,"https://www.linkedin.com/in/nicolaspelecano/"
        ),
        link_button("facebook",
        "Caralibro",
        "#"
        ),
        width="100%"
    )