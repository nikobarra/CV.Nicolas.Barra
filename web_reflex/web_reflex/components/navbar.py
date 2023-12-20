import reflex as rx
from web_reflex.styles.styles import Size as Size
from web_reflex.styles.colors import Color as Color

def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.span("Curriculum ", color=Color.PRIMARY.value),
            rx.span("Vitae", color=Color.SECONDARY.value),
            font_family="Oswald",
            ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0",
    )