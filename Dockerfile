FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY nest-cli.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
RUN npm install
COPY ./src ./src
RUN npm run build
EXPOSE 3000
CMD npm run start:prod
