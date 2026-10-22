# Isaac Pohl — Portfolio & Engineering Showcase

Personal portfolio of **Isaac Pohl**, junior at Murray State University dual-majoring in Computer Science and Agriculture–Agriscience Technology (expected May 2028). Featuring agronomy fieldwork, software development, AI-assisted metadata discovery, and collegiate leadership.

---

## 🚀 Quick Start (Local Development)

### Prerequisites: Install Node.js 22
Ensure Node.js 22 (LTS) is installed on your computer:
- Download and install Node.js 22 from [nodejs.org](https://nodejs.org/).
- Verify your installation in your terminal:
  ```bash
  node --version  # should output v22.x.x
  npm --version
  ```

### 1. Install Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 2. Run the Site Locally
Start the development server:
```bash
npm run dev
```
Open your browser to `http://localhost:3000` to view the live site with instant updates.

### 3. Run the Type Check & Linting
Validate TypeScript syntax and project types:
```bash
npm run lint
```

### 4. Create the Production Build
Generate an optimized, static production build in the `dist/` directory:
```bash
npm run build
```

### 5. Preview the Production Build Locally
Test the production output locally before deploying:
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages (Step-by-Step)

> **Important**: Do **not** upload the ZIP file itself as your website. You must extract the ZIP contents to your computer first, then commit the extracted project files to your GitHub repository.

### Step 1: Extract the Exported ZIP
1. Extract the downloaded ZIP file to a folder on your local computer.
2. Verify that `package.json`, `index.html`, `vite.config.ts`, and the `src/` directory are at the root of your extracted folder (do not commit `node_modules` or `dist`).

### Step 2: Push to GitHub
1. Create a new repository on GitHub (e.g. `isaac-pohl-portfolio` or `isaacpohl.github.io`).
2. Initialize git and push your files to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages with GitHub Actions
1. On GitHub, navigate to your repository.
2. Click on **Settings** → **Pages** (under the "Code and automation" section in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions** (instead of "Deploy from a branch").
4. The included workflow `.github/workflows/deploy.yml` will automatically trigger, build the static site using Node.js 22, and publish your portfolio to GitHub Pages!
5. Within 1–2 minutes, your live site URL will be displayed in the GitHub Pages settings (e.g. `https://<your-username>.github.io/<your-repo-name>/`).

---

## 🔒 Security & Portability Guarantee

- **100% Static**: No backend server, Express process, or database required.
- **Zero API Keys**: No Gemini keys, Firebase credentials, or secret environment variables are used or needed.
- **Subpath Safe**: Built with `base: './'` in `vite.config.ts` so the portfolio works flawlessly either on a custom domain or on a GitHub repository subpath (e.g. `https://username.github.io/my-portfolio/`).
- **Recruiter Quick-Fill**: Copies verified candidate information directly to the clipboard using browser APIs without any external network calls.
