## Orientações para iniciar aplicação em TypeScript

1. npm init -y
1. npm install typescript ts-node-dev @types/node tsconfig-paths -D
1. npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
1. mkdir src
1. touch src/server.ts
1. npm install prompt-sync
1. Colar no arquivo server.ts o código abaixo:
```
	const prompt = require("prompt-sync")();

	let x = prompt("Informe um número: ");
	let y = prompt("Informe um número: ");
	let num1 = Number(x);
	let num2 = Number(y);

	let soma = num1+num2;
	console.log("Soma: s ${soma}");
```
1. Adicionar o trecho abaixo no package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
  }

1. npm run dev