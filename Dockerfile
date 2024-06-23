
# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy project files
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma

# Install dependencies
RUN npm install
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
