import reflex as rx

def header()-> rx.Component():
    return rx.vstack(
        rx.avatar(name="Nicolas Barra", size="xl"),
        rx.text("Soy el header"),
        rx.text("Hola soy niko"),
        rx.text("@nicolasbarrapelecano@gmail.com")
    )

