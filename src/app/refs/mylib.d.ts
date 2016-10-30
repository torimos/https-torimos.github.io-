import * as React from 'react';

declare module 'mylib' {
    interface TableProps extends React.Props<Table> {
        id: string,
        initialSortColumn?: number
    }
    class Table extends React.Component<TableProps, {}> {
    }

    export { Table };
}