# 🤖 First PR Bot

> **Mentorship on Autopilot.** > Instantly welcome new contributors to your repository with automated, helpful guidance.

[![GitHub Developer Program](https://img.shields.io/badge/GitHub-Developer%20Program-green?style=flat-square&logo=github)](https://developer.github.com/program/)
[![Built with Probot](https://img.shields.io/badge/Built%20with-Probot-black?style=flat-square&logo=probot)](https://probot.github.io/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](LICENSE)

---

## 🚀 About

**First PR Bot** is a GitHub App designed to improve the developer experience for open-source projects. It listens for new Pull Requests and automatically detects if the user is a **first-time contributor**.

If they are new, it posts a friendly, customizable welcome message with a checklist to help them get their code merged faster.


## ✨ Features

* **Automated Detection:** Instantly identifies `FIRST_TIMER` or `NONE` association contributors.
* **Instant Feedback:** Posts a welcome comment within seconds of a PR opening.
* **Onboarding Checklist:** Reminds new devs to check linting, tests, and descriptions.
* **Zero-Config:** Works out of the box for most JavaScript/TypeScript projects.

## 🛠 Installation

### Option 1: Run Locally (For Development)

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Arnav-SAI/first-pr-bot.git](https://github.com/Arnav-SAI/first-pr-bot.git)
    cd first-pr-bot
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the server**
    ```bash
    npm start
    ```

4.  **Configure GitHub App**
    * Follow the on-screen instructions at `http://localhost:3000` to register the app with your GitHub account.
    * **Permissions Required:** * `Repository` → `Pull Requests` (Read & Write)
        * `Subscribe to events` → `Pull Request`

## 📸 How it Works

When a new user opens a Pull Request, the bot replies:

> 👋 **Hi @user! Welcome to the project!**
>
> Since this is your first contribution here, I wanted to share a few quick tips to get your PR merged faster:
> - [ ] **Check your formatting:** Ensure you've run the linter.
> - [ ] **Descriptive Title:** Does your title explain *why* this change is needed?
> - [ ] **Tests:** Did you add a test case for this fix?

## 🤝 Contributing

We love contributions! If you have ideas for how to make the bot smarter (e.g., AI code analysis), feel free to open an issue or a PR.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

---

