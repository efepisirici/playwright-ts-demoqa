# Use an official Playwright image as a parent image
FROM mcr.microsoft.com/playwright:v1.23.0-focal

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Your application's default port
EXPOSE 8080
EXPOSE 9323

# Run your test script when the container launches
# If you want to run headless tests, make sure to remove the `--headed` flag
CMD ["npm", "run", "test --headed"]
