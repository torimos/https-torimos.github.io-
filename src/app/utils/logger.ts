import { Config } from './config';

class Logger {
     write(config: Config){
        console.log(config.message);
    }
}

export { 
    Logger
};