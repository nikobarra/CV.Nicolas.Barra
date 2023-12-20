import reflex as rx
from web_reflex.components.link_icon import link_icon
from web_reflex.components.info_text import info_text
from web_reflex.styles.styles import Size as Size

def header()-> rx.Component():
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Nicolas Barra", size="xl"),
            rx.vstack(
                rx.heading("Nicolás Barra", size="lg"),
                rx.text("@nicolasbarrapelecano@gmail.com", margin_top="0px !important"),
                rx.hstack(
                link_icon("https://github.com/nikobarra"),
                link_icon("https://github.com/nikobarra"),
                link_icon("https://github.com/nikobarra"),
                ),
                align_items="start",
                
            ),
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
        rx.text("Hola soy niko bla bla bla bla hola hola hola hol hols hols hols hols fkmfdfdkfdkfdfkdkfdfdf fjdmkdjfoiusor dsfosfhsdsd sdfjdjflsdjfsjv fljlgksjfdljfs  bla bla bls bla"),
        spacing=Size.BIG.value,
        align_items="start",
    )

