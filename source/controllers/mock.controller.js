import * as tools from '../utility/function.utils'
import * as fsPromise from "node:fs/promises";


  /**
   * lecture d'un fichier 
   */
export const readMockFile=(req, res) => {
    const responseHandlerFile = (content)=> res.json(content)
        // package promise pour librairie ex: bluebird
        // librairie node 
        fsPromise.readFile('./source/mock/userMock.json')
        .then(tools.logContentFile)
        .then(JSON.parse)
        .then(tools.logContentFile)
        .done(responseHandlerFile);
      }