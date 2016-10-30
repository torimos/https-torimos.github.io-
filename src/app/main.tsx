import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import {Table} from './refs/mylib';
import {Table} from './lib/lib_js';

export class App {
    static render(placeholder: Element){
        ReactDOM.render(<Table id="tbl1">Hello</Table>, placeholder);
    }
}