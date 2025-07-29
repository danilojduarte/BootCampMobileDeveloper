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
        category: ["música", "show"]
},
{
        podcastName: "flow",
        episodio: "SERGIO - Flow #320",
        videoId: "1ZLqvRvrg",
        category: ["ciência", "IA"],

      }, 
    ])
  );
};