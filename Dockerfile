# ngambil image node versi terbaru
FROM node:latest

#set working directory
WORKDIR /usr/src/app

#Ngopi package.json dan package-lock.json
COPY package*.json ./

#install dependencies
RUN npm install

#copy printilan file environment
COPY . .

#build app into production mode
RUN npm run build

#expose port 8881 to the isekai
EXPOSE 8881

#start app
CMD ["npm", "start"]