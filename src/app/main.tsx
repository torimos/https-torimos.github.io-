import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as jQuery from 'jquery';
import Logger = require('./utils/logger');

export class App {
    public main(placeholder: Element){
        ReactDOM.render((<div>Hello</div>), jQuery(placeholder)[0]);
        var log = new Logger.Logger();
        log.write({message: "Test1"});
    }
}