FROM node:20-alpine
RUN mkdir /portfolio/
WORKDIR /portfolio/
COPY /src/ /portfolio/src/
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run","dev"]
