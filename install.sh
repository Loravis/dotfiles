#!/bin/bash

# AGSv2
cp -r $PWD/ags ~/.config/

# Hyprland
cp -r $PWD/hypr ~/.config/

# Wallpaper
mkdir -p ~/.config/hypr/wallpapers
cp $PWD/wallpapers/* ~/.config/hypr/wallpapers
cp $PWD/scripts/wp ~/.config/hypr/
echo "export PATH=\"\$PATH:~/.config/hypr/\"" >> ~/.bashrc

# Foot terminal
mkdir -p ~/.config/foot
cp $PWD/foot/foot.ini ~/.config/foot

# Qutebrowser
cp $PWD/qutebrowser/config.py ~/.config/qutebrowser/
