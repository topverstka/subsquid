import '../Table/Table.scss'

export enum TypeIndicatorTable {
    red = '#F42F2F',
    green = '#53B71B',
    yellow = '#FFC700',
}

interface IndicatorTableParams {
    type: TypeIndicatorTable
}

export default function IndicatorTable({type}: IndicatorTableParams) {
    return (
        <div className="IndicatorTable" style={{backgroundColor: type}}></div>
    );
}