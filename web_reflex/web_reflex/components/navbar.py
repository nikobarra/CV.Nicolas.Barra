import reflex as rx


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text("Nicolas Barra", height="40px"),
        position="sticky", bg="green", padding="16px", z_index="999"
    )