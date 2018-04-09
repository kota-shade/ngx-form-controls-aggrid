import { Component, OnInit, Input } from '@angular/core';
import {FormControlAggrid} from '../../controls/form-control-aggrid';
import {GridOptions} from "ag-grid/main";

@Component({
  selector: 'ngx-form-control-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css']
})
export class AggridComponent implements OnInit {
  @Input() mode: string|null = null;
  @Input() formElement = new FormControlAggrid({}, {});
  @Input() elementClass = 'ag-fresh';
  @Input() id = '';

  gridOptions: GridOptions = {};
  @Input() columnDefs: any[];
  @Input() rowData: any[];
  @Input() modelType = 'inMemory';

  constructor() {
    this.gridOptions = <GridOptions>{
      singleClickEdit: true,
      rowModelType: this.modelType,
      context: {
        componentParent: this,
      },
       //  pagination: true,
       // paginationPageSize: 3,
       // cacheBlockSize: 3,
      getRowNodeId: function(item) {
        console.log('KOTA item', item);
          // the id can be any string, as long as it's unique within your dataset
          return item.id.toString();
      },
    };
  }

  ngOnInit() {
    this.gridOptions.rowModelType = this.modelType;
  }

  changeFormData(data) {
    console.log(' SELF ', self);
    console.log('DATA', data);
    console.log('KOTA id = ', data.node.id);
    console.log('KOTA rowIndex = ', data.node.rowIndex);
    console.log('KOTA colName = ', data.colDef.field);
    console.log('KOTA newValue = ', data.newValue);
    console.log('KOTA oldValue = ', data.oldValue);

    const formElement = data.context.componentParent.formElement;
    const elementValueData = formElement.value;
    const id = data.node.id;
    elementValueData['' + id] = data.data; // сохраняем новое состояние записи
    formElement.setValue(elementValueData);
  }


  realMode() {
    if (this.mode === null) {
      return this.formElement.elementData.mode;
    }
    return this.mode;
  }

  onGridReady(params) {
    const self = this;
    params.api.setColumnDefs([
          {
            field: 'id',
            editable: false,
            hide: true,
          },
            {headerName: "Make", field: "make",
              editable: true,
              onCellValueChanged: this.changeFormData,
            },
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
      ]);

    params.api.setRowData([
            {id: 1, make: "Toyota", model: "Celica", price: 35000},
            {id: 2, make: "Ford", model: "Mondeo", price: 32000},
            {id: 3, make: "Porsche", model: "Boxter", price: 72000}
        ]);

    // const self = this;
    // const dataSource = {
    //   rowCount: null,
    //   getRows: function (params) {
    //     const gridParams = {
    //       startRow: params.startRow,
    //       endRow: params.endRow,
    //       filterModel: params.filterModel,
    //       sortModel: params.sortModel
    //     };
    //
    //     console.log('KOTA this.rowData', self.rowData);
    //     params.successCallback(self.rowData, -1);
    //
    //   }
    // };
    // params.api.setDatasource(dataSource);
    params.api.sizeColumnsToFit();
  }
}
