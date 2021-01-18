FROM cypress/base:10

COPY package.json package.json
RUN npm i

COPY ./config ./config
COPY ./cypress.io ./cypress.io
COPY ./cypress.json ./cypress.json

CMD ["npm", "run", "recod:ecs"]
