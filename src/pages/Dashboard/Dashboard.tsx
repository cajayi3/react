import * as React from 'react';
import Child from './Child';
import './Dashboard.css';
import { useState } from 'react';
import  Modal  from '../../assets/components/modal';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { server_calls } from '../../api/server'
import { useGetData } from '../../custom-hook/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90 },
    { field: 'Name', headerName: "Name", flex: 1},
    { field: 'Gas', headerName: "Gas", flex: 1},
    { field: 'Price', headerName: "Price", flex: 1},
    { field: 'Model', headerName: "Model", flex: 1},
    { field: 'MPH', headerName: "MPH", flex: 1},
    { field: 'Type', headerName: "Type", flex: 1},
    { field: 'Engine', headerName: "Engine", flex: 1}
]



function Dashboard () {
  let [ open, setOpen ] = useState(false);
  const { CarData, getData} = useGetData();
  const [ selectionModel, setSelectionModel] = useState<string[]>([])

  const handleOpen = () => {
      setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  const deleteData = () => {
    server_calls.delete(selectionModel[0])
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => {window.location.reload()}, 500)
  }

    return(
      <>
      <Modal
          id={selectionModel}
          open={open}
          onClose={handleClose}
      />
      <form>
        <div><h2 className='data'>Dealership Data</h2>
      <div className='Dash'>
        <button className='Button' onClick={() => handleOpen()}>Create</button>
        <button onClick={handleOpen} className='Button'>Update</button>
        <button onClick={deleteData} className='Button'>Delete</button>  
      </div>
      <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: '50%'}}
      >
        <h2 className='p-3 bg-slate-300 my-2 rounded'>Cars</h2>
        <DataGrid rows={CarData} columns={columns} pageSizeOptions={[2]}
        checkboxSelection={true}
        onRowSelectionModelChange={ (item:any) => {
            setSelectionModel(item)
        }}
        />
      </div>
    
      <Child /></div>
      </form>
      </>
      
    )
}

export default Dashboard