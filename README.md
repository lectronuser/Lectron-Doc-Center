# Lectron-Doc-Center

```bash
mkdocs serve

mkdocs gh-deploy
```

Technical documentation source for Lectron products (Jetson Autopilot, Pi5 Autopilot, FPV, FPV Pro). Built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/); includes dimensions, block diagrams, pinouts, assembly guides, setup instructions, and hardware integration tutorials.

## Project Structure

```
Lectron-Doc-Center/
├── docs/
│   ├── index.md              # Home page (product overview)
│   ├── md/
│   │   ├── jetson/            # Jetson Autopilot documentation
│   │   └── raspberry/         # Pi5 Autopilot documentation
│   ├── images/                 # Images used across the docs
│   ├── assets/                 # Logo, icon, and theme assets
│   ├── stylesheets/extra.css   # Custom theme styles
│   ├── javascripts/extra.js    # Custom theme scripts
│   └── partials/copyright.html # Site footer
├── src/
│   └── autopilot-software/     # ArduPilot / PX4 firmware binaries
├── Readme/
│   └── Jetson.md               # Additional notes for Jetson commands
└── mkdocs.yml                  # Site configuration and navigation
```

## Requirements

- Python 3.9+
- [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme
- [mkdocs-drawio](https://pypi.org/project/mkdocs-drawio/) plugin (for block diagrams)

Install:

```bash
pip install mkdocs-material mkdocs-drawio
```

## Usage

Start the local development server from the project root:

```bash
mkdocs serve
```

The site is served by default at [http://127.0.0.1:8000](http://127.0.0.1:8000) and automatically reflects changes under `docs/`.

To deploy to GitHub Pages:

```bash
mkdocs gh-deploy
```

## Adding New Documentation

1. Add the new `.md` file to the relevant product folder (`docs/md/jetson/` or `docs/md/raspberry/`).
2. Place images under `docs/images/<product>/`.
3. Register the page in the `nav` section of [mkdocs.yml](mkdocs.yml) so it appears in the site menu.

## Firmware Files

`src/autopilot-software/` contains autopilot firmware binaries (`.bin`, `.elf`) and IO firmware files for ArduPilot and PX4, organized by version and platform (Pi5 / v6x).

## Contact

Questions or feedback? Contact us at [contact@lectrontech.com](mailto:contact@lectrontech.com)
