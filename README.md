# Node.js Hello World with DevContainer

This is a simple Node.js "Hello World" application built with Express.js, designed to work seamlessly with [Coder.com](https://coder.com) and DevContainer environments.

## Application Features

- Simple Express.js server running on port 3000
- Displays a Hello World page with Coder workspace information
- Health check endpoint for monitoring
- Pre-configured DevContainer for consistent development environment

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Returns a Hello World page with Coder workspace information |
| `/health` | GET | Returns JSON health status |

## Running with DevContainer/Coder.com

This application is optimized for use with DevContainer and Coder.com:

1. Open the project in VS Code with the Dev Containers extension installed
2. When prompted, choose "Reopen in Container"
3. The DevContainer will automatically:
   - Build the container with Node.js 18
   - Install project dependencies
   - Forward port 3000
   - Start the application

The application will be automatically available at the forwarded port URL.

## Running Locally

If you prefer to run the application locally:

1. Ensure you have Node.js 18+ installed
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Access the application at http://localhost:3000

For development with auto-reload:
```bash
npm run dev
```

## Running with Docker Compose

You can also run this application using Docker Compose:

1. Ensure you have Docker and Docker Compose installed
2. From the project root directory, run:
   ```bash
   docker-compose -f deployment/docker/docker-compose.yml up
   ```
3. Access the application at http://localhost:3000

To stop the application:
```bash
docker-compose -f deployment/docker/docker-compose.yml down
```

## DevContainer Configuration

The DevContainer is configured with:

- Node.js 18 on Debian Bullseye
- Nodemon for development
- TypeScript VS Code extension
- Automatic port forwarding for port 3000
- Automatic dependency installation
- Automatic application start on container attach

## Project Structure

```
├── index.js          # Main application file
├── package.json      # Project dependencies and scripts
├── .devcontainer/    # DevContainer configuration
│   ├── devcontainer.json  # DevContainer settings
│   └── Dockerfile         # Container build instructions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
