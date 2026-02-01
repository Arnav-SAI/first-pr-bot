# first-pr-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that bot that welcomes first-time contributors.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t first-pr-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> first-pr-bot
```

## Contributing

If you have suggestions for how first-pr-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2026 Arnav Saini
