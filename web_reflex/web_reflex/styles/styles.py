import reflex as rx

from enum import Enum


# contantes
MAX_WIDTH="600px"
MARGIN="30px"

# medidas

class Size(Enum):
    SMALL="0.5em"
    DEFAULT="1em"
    BIG="2em"

# styles

BASE_STYLE = {
    rx.Button:{
        "width":"100%",
        "height":"100%",
        "display":"block",
        "padding":Size.SMALL.value,
        "border_radius":Size.DEFAULT.value,
        },
    rx.Link:{
        "text_decoration":"none",
        "_hover":{},
    }
}