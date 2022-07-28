import * as React from 'react';
import { DataProvider, repeatedElement, useSelector } from '@plasmicapp/host';
import Table from 'antd/lib/table/Table';
import { ReactNode, useEffect, useState } from 'react';
import '@plasmicpkgs/antd/dist/antd.css';

interface ColumnProps {
  columnIndex: number;
  // The title text to show in the column headers
  title?: string;

  // The path for the data field to get the value from
  // Display field of the data record, support nest path by string array
  dataIndex: string | string[];

  // Plasmic - Custom column template
  columnTemplate: React.ReactNode;
}

// This is an empty virtual component used to allow users to define column
// properties in plasmic.
export function TableColumn() {
  return null;
}

export function TableValue(props: { className: string }) {
  const column = useSelector('currentColumn');
  return <div className={props.className}>{column?.toString() ?? ''}</div>;
}

type TableProps = {
  className?: string;
  items: Array<any>;
  columns: React.ReactNode;
};

export function DataTable(props: TableProps) {
  const { className, columns, items } = props;

  // Plasmic Studio Canvas currently renders items in a slightly different way than the generated code:
  // - In the studio:
  //     - The `columns` prop value is an array of nested react <Column  /> nodes.
  // - In the generated code (preview mode):
  //     - The `columns` prop value is a React Node with a `children` property that contains
  //       an array of the nested react <Column /> components.
  const tableColumns = (columns as any)?.props?.children ?? (columns as any);

  // Convert the props.columns slot children to an array of column definitions
  const columnDefinitions = React.useMemo(() => {
    return React.Children.map(
      tableColumns,
      (column: { props: ColumnProps }, columnIndex) => {
        const { columnTemplate, title, dataIndex } = column.props;

        const columnDefinition = {
          columnIndex,
          title,
          dataIndex,
          key: columnIndex,
          render: (value: any, record: any, rowIndex: any) => {
            return (
              <DataProvider name="currentRow" data={record}>
                <DataProvider name="currentRowIndex" data={rowIndex}>
                  <DataProvider name="currentColumn" data={value}>
                    {repeatedElement(rowIndex, columnTemplate)}
                  </DataProvider>
                </DataProvider>
              </DataProvider>
            );
          },
        };

        return columnDefinition;
      },
    );
  }, [tableColumns]);

  return (
    // <DataProvider name="tableColumns" data={items[0] ?? {}} hidden={true}>
    <Table
      className={className || ''}
      columns={columnDefinitions}
      dataSource={items}
    />
    // </DataProvider>
  );
}

export type HttpMethod = 'GET' | 'POST';

export interface RestQueryProps {
  className?: string;
  children?: ReactNode;
  url?: string;
  method?: HttpMethod;
  body?: string;
}

export function RestQuery({
  className,
  children,
  url,
  body,
  method = 'GET',
}: RestQueryProps) {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      if (url) {
        const response = await fetch(url, {
          method,
          body,
        });
        const data = await response.json();
        setData(data);
      }
    })();
  }, [url, method]);
  return (
    <div className={className}>
      <DataProvider name={'fetchedData'} data={data} label={'Fetched data'}>
        {children}
      </DataProvider>
    </div>
  );
}
