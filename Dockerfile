FROM Node:18

WORKDIR /src/usr/app

COPY package*.json .

RUN npm i

COPY . .

CMD ["npm" "run" "dev"]
