import { DataGrid } from '@material-ui/data-grid';

  const columns = [
    { field: 'name', headerName: 'Token', flex: 303, sortable: false},
    { field: 'symbol', headerName: 'Symbol', flex: 303, sortable: false},
    { field: 'price', headerName: 'Price',  flex: 303},
    { field: 'totalLiquidity', headerName: 'Liquidity',  flex: 303},
  ];

  interface props {
    coindata: any | any[]
    selecRows: any | any[]
  }
  
  export default function Tokentable({coindata}:{coindata:any | any[]}) {


    return (
      <div style={{ height: 1200, width: '100%' }}>
        <DataGrid rows={coindata} columns={columns} pageSize={20} checkboxSelection={false}/>
      </div>
    );
  }