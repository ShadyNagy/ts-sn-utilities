<p align="center">
  <a href="https://www.npmjs.com/package/ts-sn-utilities">
    <img width="230" src="icon.png">
  </a>
</p>

<h1 align="center">
ts-sn-utilities
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/ts-sn-utilities" alt="npm" target="_blank">
        <img src="https://img.shields.io/npm/v/ts-sn-utilities" />
    </a>
    <a href="https://www.npmjs.com/package/ts-sn-utilities" alt="npm" target="_blank">
        <img src="https://img.shields.io/npm/dt/ts-sn-utilities" />
    </a>
    <a href="https://www.npmjs.com/package/ts-sn-utilities" alt="npm" target="_blank">
        <img src="https://badgen.net/bundlephobia/min/ts-sn-utilities" />
    </a>  
    <a href="https://github.com/ShadyNagy/ts-sn-utilities/actions?query=workflow%3Anpm-publish" alt="Workflows">
        <img src="https://github.com/shadynagy/ts-sn-utilities/workflows/npm-publish/badge.svg" />
    </a>
    <a href="https://github.com/ShadyNagy/ts-sn-utilities/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/ShadyNagy/ts-sn-utilities" />
    </a>
    <a href="https://github.com/ShadyNagy/ts-sn-utilities/blob/master/LICENSE" alt="license">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
    </a>
    <a href="https://shadynagy.github.io/ts-sn-utilities/" alt="Documentation">
        <img src="https://img.shields.io/badge/Documentation-TS--SN--Utilities-green" />
    </a>
    <a href="https://github.com/sponsors/ShadyNagy" alt="sponsors">
        <img src="https://img.shields.io/badge/Sponsor-ShadyNagy-brightgreen?logo=github-sponsors" />
    </a>    
</p>
# ts-sn-utilities


## :star: Give a Star!
If you like or are using this project please give it a star [here](https://github.com/ShadyNagy/ts-sn-utilities). Thanks!

## ✨ Features

- Debouncer: Using the Debounce Operators, we wait until the user pauses typing before sending an HTTP Request. This will eliminates unnecessary HTTP requests.  

## ☀️ License

<a href="https://github.com/ShadyNagy/ts-sn-utilities/blob/master/LICENSE" alt="license">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
</a>

## 🖥 Environment Support

* Angular `^12.0.0` [![npm package](https://img.shields.io/npm/v/ts-sn-utilities?style=flat-square)](https://www.npmjs.com/package/ts-sn-utilities)

## 📦 Installation

#### NPM

```bash
npm install ts-sn-utilities --save
```

## 🔨 Usage

In your service write this code.
```javascript
  getFilteredByCode(code: string): Observable<ApiResponse> {
    this.debouncerHelper.resetData();
    return this.debouncerHelper.debouncerOnly<string, ApiResponse>(1000, code, (request) => this.filterBy(request));
  }
```

## 🔗 Links

* [NPM](https://www.npmjs.com/package/ts-sn-utilities)
* [Website](http://www.shadynagy.com)
* [LinkedIn](https://www.linkedin.com/in/shadynagy)
* [Twitter](https://twitter.com/ShadyNagy_)

## ⌨️ Development

```bash
$ git clone git@github.com:ShadyNagy/ts-sn-utilities.git
$ cd ts-sn-utilities
$ npm install
$ cd ./projects/ts-sn-utilities
$ npm install
$ npm run build
$ npm run start
```

## 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/shadynagy/ts-sn-utilities/pulls)

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/shadynagy/ts-sn-utilities/blob/master/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/shadynagy/ts-sn-utilities/pulls) or as [GitHub issues](https://github.com/shadynagy/ts-sn-utilities/issues).

## 🎉 Users

- [ShadyNagy](http://www.shadynagy.com/)

> We list some users here, if your company or product uses ts-sn-utilities, let us know [here](https://github.com/shadynagy/ts-sn-utilities/issues/1)!

