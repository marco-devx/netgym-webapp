FROM node:22.14.0-slim

RUN apt-get update && apt-get install -y curl ca-certificates unzip \
  && rm -rf /var/lib/apt/lists/* \
  && curl -fsSL https://bun.sh/install | bash \
  && mv /root/.bun/bin/bun /usr/local/bin/bun \
  && bun --version

WORKDIR /app
COPY package.json .
COPY .npmrc .

RUN bun install --frozen-lockfile
RUN npm install -g http-server

COPY . .

EXPOSE 3000
CMD ["http-server", "-p"]
 