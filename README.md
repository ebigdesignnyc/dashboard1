# GHLF Impact & Development Dashboard

Dashboard1 is a static, editable dashboard demo for the Global Healthcare Leaders Foundation. No npm installation or build step is required.

## Files

- `index.html`: page shell, branding and source links.
- `styles.css`: layout, responsive styles and brand colors.
- `data.js`: sample data (`DATA`). Edit the values and arrays here to change the dashboard.
- `app.js`: navigation, rendering, reporting-period selection, CSV export, printing and preset AI demo responses.
- `assets/ghlf-logo.png`: dashboard logo.
- `GITHUB_SETUP.md`: upload and hosting instructions.

## Run locally

Open `index.html` in a browser, or run a local server from this folder:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000. Stop the server with Ctrl+C.

## Scope

This is a static prototype with illustrative figures. The AI panel uses preset rules; it is not connected to a live model. There is no backend, authentication, database, CSV import or persistent editing. The CSV button exports a summary; it does not import data. Period selection applies demonstration scaling rather than querying actual quarterly records. Connect approved data sources and a secure server-side AI service for operational use.

Organizational context links retained from the supplied dashboard:

- https://ghlfoundation.org/
- https://ghlfoundation.org/initiatives
