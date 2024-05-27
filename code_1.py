import subprocess
from pynput import keyboard

def open_application():
    application_path = "/Applications/TextEdit.app"
    subprocess.Popen(["open", application_path])

def on_activate():
    print("Hotkey geactiveerd! Toepassing wordt geopend.")
    open_application()

def for_canonical(f):
    return lambda k: f(l.canonical(k))

hotkey = keyboard.HotKey(
    keyboard.HotKey.parse('<cmd>+<alt>+n'),
    on_activate
)

with keyboard.Listener(
        on_press=for_canonical(hotkey.press),
        on_release=for_canonical(hotkey.release)) as l:
    print("Druk op Cmd+Alt+N om TextEdit te openen.")
    l.join()
