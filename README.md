# GHLF Impact & Development Dashboard

Complete editable source of the supplied static dashboard, separated into files. No npm installation or build step is required.

## Files

- `index.html`: page shell, branding and source links.
- `styles.css`: layout, responsive styles and brand colors.
- `data.js`: sample data (`DATA`). Edit the values and arrays here to change the dashboard.
- `app.js`: navigation, rendering, reporting-period selection, CSV export, printing and preset AI demo responses.
- `assets/ghlf-logo.png`: supplied logo.
- `GITHUB_SETUP.md`: upload and hosting instructions.

## Run in VS Code

Extract this ZIP, then select File > Open Folder and choose the extracted `ghlf-dashboard` folder.
Open `index.html` in a browser, or use the VS Code Live Server extension.
If Python is installed, use the VS Code terminal:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000. Stop the server with Ctrl+C.

## Scope

This is a static prototype with illustrative figures. The AI panel uses preset rules; it is not connected to a live model. There is no backend, authentication, database, CSV import or persistent editing. The CSV button exports a summary; it does not import data. Period selection applies demonstration scaling rather than querying actual quarterly records. Connect approved data sources and a secure server-side AI service for operational use.

Organizational context links retained from the supplied dashboard:
https://ghlfoundation.org/
https://ghlfoundation.org/initiatives

## Validation

The CSS and JavaScript were extracted without changing their contents. Local asset references and JavaScript syntax were checked. Browser interaction was not tested in this environment.
