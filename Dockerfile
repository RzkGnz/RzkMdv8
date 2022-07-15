FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install

COPY . .

CMD ["node", ".", "--db", "mongodb+srv://RzkBotz:rzk234@botmongo.if8qw.mongodb.net/bot?retryWrites=true&w=majority"]