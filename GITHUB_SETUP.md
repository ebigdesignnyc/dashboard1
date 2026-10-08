# Upload to GitHub

## VS Code terminal method

1. Install Git from https://git-scm.com/downloads if needed, then reopen VS Code.
2. Extract the ZIP and open the `ghlf-dashboard` folder in VS Code.
3. Sign in to GitHub and create a repository named `ghlf-dashboard` at https://github.com/new. Choose visibility. Leave README, license and .gitignore initialization unchecked because this folder already includes files.
4. Select Terminal > New Terminal in VS Code. Run these commands from the folder containing index.html. Replace YOUR_USERNAME with your GitHub username:

```sh
git init -b main
git add .
git commit -m "Add GHLF dashboard"
git remote add origin https://github.com/YOUR_USERNAME/ghlf-dashboard.git
git push -u origin main
```

Complete the GitHub sign-in prompt if shown. If Git asks for your identity, run the following with your own details, then retry the commit and push:

```sh
git config user.name "Your Name"
git config user.email "Your GitHub email"
```

## Future updates

Save your edited files in VS Code, then run:

```sh
git add .
git commit -m "Update dashboard"
git push
```

## Browser upload alternative

Create a repository with a README. Select Add file > Upload files (or the upload-existing-file link), drag the extracted project contents into the upload area and commit the changes. Upload the actual files and assets folder, rather than the ZIP. The index.html file should appear at the repository root. The terminal method also includes the dotfiles automatically.

## Optional: publish a live dashboard

For a public repository on GitHub Free, open Settings > Pages. Under Build and deployment choose Deploy from a branch, select main and /(root), then Save. Use the site URL shown in Pages after deployment completes. Uploading code alone does not publish a website.

## Official documentation

- Local code upload: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
- Browser upload: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
