import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async ( 
  req : IncomingMessage, 
  res: ServerResponse
) => {
  res.writeHead(200, {'Content-Type' : "application/json"});
  res.end(
    JSON.stringify([
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
        category: ["ciência", "IA"],

      }, 
    ])
  );
};