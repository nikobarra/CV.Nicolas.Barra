import reflex as rx
from web_reflex.styles.styles import Size as Size
from web_reflex.styles.colors import *


def info_text(title: str, body:str) -> rx.Component:
    return rx.box(
        rx.span(
            title, 
            font_weight="bold", 
            color=Color.PRIMARY.value,
            ),
        f"{body}", 
        font_dize=Size.MEDIUM.value,
        color=TextColor.BODY.value,
    ) 