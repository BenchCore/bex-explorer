# BenchCore Explorer

You can access it at [https://explorer.bex.life/](http://explorer.bex.life).

## Build Setup

### 1. Clone the repository

```bash
git clone https://github.com/benchcore/bex-explorer
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Build for Production

#### 3.1 BenchCore Live Network

```bash
yarn build:bexnet
```

#### 3.2 BenchCore Test Network

```bash
yarn build:dexnet
```

#### 3.3 Custom

```bash
yarn build --network my-custom-network
```

#### 3.4 GitHub Pages

If you are going to host your explorer instance on GitHub Pages you will need to specify your base url in most cases as GitHub Pages serves repositories from sub-directories instead of sub-domains.

```bash
yarn build --base https://username.github.io/repository/
```

A running instance of the explorer on GitHub Pages can be found at [https://benchcore.github.io/bex-explorer](https://benchcore.github.io/bex-explorer).

> This step is not required if you are hosting the explorer on your "root" repository which is usually your username https://username.github.io/.

#### 3.5 Run Express Server

You can run the explorer as an express server. This makes it a little more light-weight but not needing to have services such as apache or nginx.

```bash
EXPLORER_HOST="127.0.0.1" EXPLORER_PORT="4200" node express-server.js
```

## 4. History Mode

If you wish to remove the `/#/` from your URLs you can follow those steps https://router.vuejs.org/en/essentials/history-mode.html.

### 4.1 Build

```bash
yarn build:bexnet --history
```

### 4.2 Development

```bash
yarn dev --env.routerMode=history
```

> Keep in mind that this requires you to run your own server and a running instance of nginx.

## 5. Development

#### Bexnet

```bash
yarn dev # or yarn dev:bexnet
```

#### Dexnet

```bash
yarn dev:dexnet
```

#### Custom

```bash
yarn dev --env.network=custom
```

#### Change Router Mode

```bash
yarn dev --env.routerMode=history
```

## 6. Testing

``` bash
$ yarn test
```

## Credits

- [Jared Rice Sr.](https://github.com/jaredricesr)
- [Brian Faust](https://github.com/faustbrian)
- [Lúcio Rubens](https://github.com/luciorubeens)
- [Alex Barnsley](https://github.com/alexbarnsley)
- [All Contributors](../../contributors)

## License

[MIT](LICENSE) © [BenchPay Foundation, LLC](https://benchpay.io)
