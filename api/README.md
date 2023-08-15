# Pizza Army REST API

- It is a REST API made to serve Pizza Army web project.

## Getting Started

### Installation

#### 1. Clone the project

```sh
git clone git@github.com:matheusdoedev/pizza-army.git
```

#### 2. Install dependencies

```sh
yarn

# or

npm install
```

### Development

#### 1. Set your env variables

.env.production

```env
NODE_ENV='development'

DB_HOST=localhost
DB_PORT=3306
DB_USER=username
DB_PASSWORD=password
DB_DATABASE=mysql
```

#### 2. Run project

```sh
yarn start:dev

# or

yarn run start:dev
```

### Development

#### 1. Set your env variables

.env.production

```env
NODE_ENV='production'

DB_HOST=localhost
DB_PORT=3306
DB_USER=username
DB_PASSWORD=password
DB_DATABASE=mysql
```

#### 2. Build project

```sh
yarn build

# or

yarn run build
```

#### 3. Run project

```sh
yarn start:prod

# or

yarn run start:prod
```

## Contributing

1. Fork it (<git@github.com:matheusdoedev/pizza-army.git>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes following conventional commits pattern (`git commit -am 'feat: add some feature'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
