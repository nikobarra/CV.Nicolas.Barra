import reflex as rx

from enum import Enum
from .colors import Color, TextColor

# contantes
MAX_WIDTH="600px"
MARGIN="30px"

# medidas

class Size(Enum):
    SMALL="0.5em"
    MEDIUM="0.8em"
    DEFAULT="1em"
    BIG="2em"

# styles

BASE_STYLE = {
    "background_color":Color.BACKGROUND.value,
    rx.Button:{
        "width":"100%",
        "height":"100%",
        "display":"block",
        "padding":Size.SMALL.value,
        "border_radius":Size.DEFAULT.value,
        "background_color":Color.CONTENT.value,
        "color":TextColor.HEADER.value,
        "_hover":{
            "background_color":Color.SECONDARY.value,
        }


        },
    rx.Link:{
        "text_decoration":"none",
        "_hover":{},
    }
}

button_title_style  = dict(
    font_size=Size.DEFAULT.value,
    color=TextColor.HEADER.value
)

button_body_style  = dict(
    font_size=Size.MEDIUM.value,
    color=TextColor.BODY.value
)

title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    color=TextColor.HEADER.value,
)