import catppuccin

config.bind('<Ctrl-shift-p>', 'spawn --userscript qute-pass')
config.load_autoconfig()

catppuccin.setup(c, 'mocha', True)
