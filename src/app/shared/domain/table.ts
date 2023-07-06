export interface TableData {
  headers: DataKeys[];
  dataColumns: any[]
}

// { description: 'Nombre de usuario' , field: 'name' }
export interface DataKeys {
  description: string;
  field: string
}