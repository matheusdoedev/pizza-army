# Pizza Army

Your app to buy your favorite pizza in your home confort.

## Project Docs

- [API](./api/README.md)
- [WEB](./web/README.md)

## Running project in production with Docker & Docker Compose

### Installation

#### 1. Clone the project

```sh
git clone git@github.com:matheusdoedev/pizza-army.git
```

#### 2. Set env variables in both applications on web and api folders

<!-- Api. Obs: Feel free to change DB credentials according to your mysql credentials. You should change to in docker-compose on db service. -->

.env.production

```env
NODE_ENV='production'

DB_HOST=localhost
DB_PORT=3306
DB_USER=docker
DB_PASSWORD=docker
DB_DATABASE=mysql
```

<!-- Web -->

.env.production

```env
VITE_REST_API_URL=http://localhost:3333/api/v1
```

#### 3. Run with docker-compose

```sh
docker-compose up

# or in detach mode

docker-compose up -d
```

## Contributing

1. Fork it (<git@github.com:matheusdoedev/pizza-army.git>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes following conventional commits pattern (`git commit -am 'feat: add some feature'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
