import Logger = require('./utils/logger');


class App {
    public main(){
        var log = new Logger.Logger();
        log.write({message: "Test1"});
    }
}