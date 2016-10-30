import * as React from 'react';

declare interface TableProps extends React.Props<Table> {
    id: string,
    initialSortColumn?: number
}
declare class Table extends React.Component<TableProps, {}> {
}
export {
    Table
}; 