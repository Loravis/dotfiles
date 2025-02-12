import dracula.draw
config.bind('<Ctrl-shift-p>', 'spawn --userscript qute-pass')
config.load_autoconfig()

dracula.draw.blood(c, {
    'spacing': {
        'vertical': 6,
        'horizontal': 8
    }
})
