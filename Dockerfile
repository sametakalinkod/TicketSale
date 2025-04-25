# STAGE 1: Build
FROM node:16.14-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --base-href=/delphinaquaserenity

# STAGE 2: Run
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/veboniticketsale/browser /usr/share/nginx/html
