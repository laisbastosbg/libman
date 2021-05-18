# Pré-requisitos

* [nodejs](https://nodejs.org/en/download/)
* [docker](https://docs.docker.com/engine/install/)
* [docker-compose](https://docs.docker.com/compose/install/)
* [postgres](https://www.postgresql.org/download/)

# Softwares recomendados

* [dbeaver](https://dbeaver.io/download/)
* [visual studio code](https://code.visualstudio.com/download)

# Configurando o ambiente

1. Instalar as dependências

```bash
npm i
```

2. Criar o banco de dados na sua máquina

```bash
docker-compose up
```

# Executando a aplicação

1. No dbeaver, uma conexão postgres com as seguintes configurações:

* Host: 127.0.0.1
* Porta: 5432
* Nome do banco: postgres
* Usuario: postgres
* Senha: example

2. Iniciar o servidor

```bash
npm run dev
```

# Rotas

### Criat Autor (POST)

/authors

**Corpo da requisição**
```json
{
	"name": "Lewis Carroll"
}
```

**Formato da resposta:**
```json
{
  "id": 3,
  "name": "Lewis Carroll",
  "updatedAt": "2021-05-15T20:39:25.030Z",
  "createdAt": "2021-05-15T20:39:25.030Z"
}
```

### Listar autores (GET)

/authors

```json
[
  {
    "id": 1,
    "name": "J. R. R. Tolkien",
    "createdAt": "2021-05-11T04:00:32.850Z",
    "updatedAt": "2021-05-11T04:00:32.850Z"
  },
]
```

### Deletar autor (DELETE)
/authors/:author_id

### Criar livro (POST)

/authors/:author_id/books

**Corpo da requisição:**
```json
{
	"title": "Príncipe Caspian",
	"synopsis": "Tempos difíceis abateram-se sobre a terra encantada de Nárnia. Os dias de paz e liberdade, em que os animais, anões, árvores e flores viviam em absoluta paz e harmonia, estavam terminados."
}
```

**Formato da resposta:**
```json
{
  "id": 13,
  "title": "Príncipe Caspian",
  "synopsis": "Tempos difíceis abateram-se sobre a terra encantada de Nárnia. Os dias de paz e liberdade, em que os animais, anões, árvores e flores viviam em absoluta paz e harmonia, estavam terminados.",
  "author_id": 2,
  "updatedAt": "2021-05-18T18:00:41.932Z",
  "createdAt": "2021-05-18T18:00:41.932Z"
}
```

### Listar todos os livros (GET)

/books

**Formato da resposta:**
```json
  [
  {
    "id": 1,
    "title": "O Hobbit",
    "synopsis": "Em uma toca no chão vivia um hobbit.",
    "createdAt": "2021-05-11T04:09:50.595Z",
    "updatedAt": "2021-05-11T04:09:50.595Z",
    "author_id": 1
  },
]
```

### Listar todos os livros de um autor específico (GET)

/authors/:author_id/books

**Formato da resposta:**
```json
  [
  {
    "id": 3,
    "title": "O Sobrinho do Mago",
    "synopsis": "A aventura começa quando Digory e Polly vão parar no gabinete secreto do excêntrico tio André.",
    "createdAt": "2021-05-15T21:24:04.670Z",
    "updatedAt": "2021-05-15T21:24:04.670Z",
    "author_id": 2
  },
]
```

### Deletar livro (DELETE)
/books/:book_id