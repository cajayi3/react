import '../../index.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';


const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'car',
    headerName: 'Car',
    width: 110,
    editable: true,
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 90,
    editable: true,
  },
  {
    field: 'body_type',
    headerName: 'Body Type',
    width: 110,
    editable: true,
  },
  {
    field: 'gasoline',
    headerName: 'Gasoline',
    width: 70,
    editable: true,
  },
  {
    field: 'engine',
    headerName: 'Engine',
    width: 110,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: true,
  }
];

const rows = [
  { id: 1, car: 'Bentley', model: 'Bentayga', body_type: 'SUV', gasoline:'23 gal', engine:'4L 8 Cylinder', price:'118,773' },
  { id: 2, car: 'Mercedes Benz', model: 'S-class', body_type: 'Sedan', gasoline:'22 gal', engine:'429hp 3L I6', price:'115,188' },
  { id: 3, car: 'Rolls-Royce', model: 'Phantom', body_type: 'Sedan', gasoline:'20 gal', engine:'6.7L 12 Cylinder', price:'395,995' },
  { id: 4, car: 'Ashton Martin', model: 'Vantage', body_type: 'Coupe', gasoline:'19 gal', engine:'528hp 4L V8', price:'200,000' },
  { id: 5, car: 'Mercedes Maybach', model: 'GLS-600', body_type: 'SUV', gasoline:'23 gal', engine:'550hp 4L V8', price:'218,000' },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
