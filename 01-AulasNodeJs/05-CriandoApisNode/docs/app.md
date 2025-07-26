# Nome do app - Aula Concluída - Mapeando Um Problema
Podcast Menager;

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episodio Podcast
separados por categorias;

### Domínio
Podcast feitos em video;

### Features
- Listar os episodios Podcast em sessões de categorias;
 - {saúde, bodybuilder, mentalidade, humor}
- Filtrar episodios por nome de podcast;

## Como


### Features:
Listar os episodios Podcast em sessões de categorias;

### Como vou implementar:
Vou retornar em uma api rest (json) o
nome do podcast, nome o episodio, imagem de capa, link, category.

```js
[
{
  podcastName: "flow",
  episodio: "ALOK - Flow #319",
  videoId: "XhQuJI8S55c",
  cover: "https://i.ytimg.com/vi/XhQuJI8S55c/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDSDaw428aLerjMRrz3iU1Z4mI4xg",
  link: "https://www.youtube.com/watch?v=XhQuJI8S55c",
  category: ["música", "show"]

},
{
  podcastName: "flow",
  episodio: "SERGIO - Flow #320",
  videoId: "1ZLqvRvrg",
  cover: "https://i.ytimg.com/vi/g-1ZLqvRvrg/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCoHQOY0UNaJRAC5t7kbJse3LTiig",
  link: "https://www.youtube.com/watch?v=g-1ZLqvRvrg",
  category: ["ciência", "IA"]

},
]

```
